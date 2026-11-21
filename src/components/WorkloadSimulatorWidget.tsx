"use client";

import React, { useState, useMemo } from "react";
import { SANDBOX_PROVIDERS, SandboxProvider } from "@/data/sandboxData";
import {
  Calculator,
  Cpu,
  Clock,
  Layers,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
  Globe,
  Terminal,
  Server
} from "lucide-react";

type PresetId = "openclaw" | "remote-browser" | "burst-code" | "ai-factory" | "enterprise-dot";

interface PresetConfig {
  id: PresetId;
  label: string;
  subtitle: string;
  hoursPerDay: number;
  concurrency: number;
  minRamGb: number;
  monthlyInputTokensM: number;
  cacheHitPercent: number;
  offPeakBatching: boolean;
}

const PRESETS: PresetConfig[] = [
  {
    id: "openclaw",
    label: "OpenClaw 24/7 Agent",
    subtitle: "Always-on personal daemon + heartbeats",
    hoursPerDay: 24,
    concurrency: 1,
    minRamGb: 4,
    monthlyInputTokensM: 75,
    cacheHitPercent: 85,
    offPeakBatching: true
  },
  {
    id: "remote-browser",
    label: "Remote Browser Fleet",
    subtitle: "Stealth web scraping & multi-tab DOM agents",
    hoursPerDay: 4,
    concurrency: 10,
    minRamGb: 4,
    monthlyInputTokensM: 40,
    cacheHitPercent: 75,
    offPeakBatching: false
  },
  {
    id: "burst-code",
    label: "Burst Code Sandbox",
    subtitle: "Parallel SWE-bench evals & untrusted code runs",
    hoursPerDay: 0.5,
    concurrency: 35,
    minRamGb: 4,
    monthlyInputTokensM: 50,
    cacheHitPercent: 80,
    offPeakBatching: true
  },
  {
    id: "ai-factory",
    label: "GPU AI Factory",
    subtitle: "Batch vLLM inference, LoRA & video pipelines",
    hoursPerDay: 3,
    concurrency: 4,
    minRamGb: 24,
    monthlyInputTokensM: 120,
    cacheHitPercent: 90,
    offPeakBatching: true
  },
  {
    id: "enterprise-dot",
    label: "Enterprise Teammate",
    subtitle: "Zero-ops SaaS OAuth + managed computer",
    hoursPerDay: 24,
    concurrency: 1,
    minRamGb: 8,
    monthlyInputTokensM: 90,
    cacheHitPercent: 80,
    offPeakBatching: false
  }
];

export default function WorkloadSimulatorWidget() {
  const [activePreset, setActivePreset] = useState<PresetId>("openclaw");
  const [hoursPerDay, setHoursPerDay] = useState<number>(24);
  const [concurrency, setConcurrency] = useState<number>(1);
  const [minRamGb, setMinRamGb] = useState<number>(4);
  const [monthlyInputTokensM, setMonthlyInputTokensM] = useState<number>(75);
  const [cacheHitPercent, setCacheHitPercent] = useState<number>(85);
  const [offPeakBatching, setOffPeakBatching] = useState<boolean>(true);

  const applyPreset = (p: PresetConfig) => {
    setActivePreset(p.id);
    setHoursPerDay(p.hoursPerDay);
    setConcurrency(p.concurrency);
    setMinRamGb(p.minRamGb);
    setMonthlyInputTokensM(p.monthlyInputTokensM);
    setCacheHitPercent(p.cacheHitPercent);
    setOffPeakBatching(p.offPeakBatching);
  };

  // Calculate DeepSeek hybrid token cost (90% V4.1 Flash, 10% V4 Pro) vs Uncached Frontier
  const tokenCosts = useMemo(() => {
    const hitRatio = cacheHitPercent / 100;
    const missRatio = 1 - hitRatio;
    const peakMultiplier = offPeakBatching ? 1.0 : 1.45; // Blended daytime vs off-peak schedule
    const outputTokensM = Math.max(1, Math.round(monthlyInputTokensM * 0.04));

    // 90% Flash ($0.15 miss / $0.003 hit / $0.60 out), 10% Pro ($0.66 miss / $0.022 hit / $1.98 out)
    const blendedMissRate = (0.9 * 0.15 + 0.1 * 0.66) * peakMultiplier;
    const blendedHitRate = (0.9 * 0.003 + 0.1 * 0.022) * peakMultiplier;
    const blendedOutRate = (0.9 * 0.60 + 0.1 * 1.98) * peakMultiplier;

    const deepseekCost =
      monthlyInputTokensM * hitRatio * blendedHitRate +
      monthlyInputTokensM * missRatio * blendedMissRate +
      outputTokensM * blendedOutRate;

    // Frontier comparison ($2.50/1M input uncached average, $12/1M output)
    const frontierCost = monthlyInputTokensM * 1.85 + outputTokensM * 12.0;

    return {
      deepseekCost: Number(deepseekCost.toFixed(2)),
      frontierCost: Number(frontierCost.toFixed(2)),
      outputTokensM
    };
  }, [monthlyInputTokensM, cacheHitPercent, offPeakBatching]);

  // Rank providers dynamically for current slider profile
  const rankedProviders = useMemo(() => {
    const totalComputeHoursPerMonth = hoursPerDay * 30 * concurrency;

    return SANDBOX_PROVIDERS.filter((p) => p.ramGb >= minRamGb || (p.vramGb && p.vramGb >= minRamGb))
      .map((p) => {
        let monthlyInfraCost = 0;
        let fitReason = "";
        let architectureFitPenalty = 0;

        if (p.category === "managed-agent") {
          // Flat monthly per seat/Dot
          monthlyInfraCost = p.monthly24x7Usd * concurrency;
          fitReason = "Bundled compute + frontier model tokens in one flat subscription.";
          if (activePreset === "burst-code" || activePreset === "ai-factory") {
            architectureFitPenalty = 60;
          }
        } else if (p.category === "non-major-vps") {
          // Static VPS needs enough nodes to handle peak concurrency
          // Each VPS can comfortably run ~2 concurrent heavy tasks or 1 per 2 vCPUs
          const nodesNeeded = Math.max(1, Math.ceil((concurrency * 2) / p.vcpu));
          monthlyInfraCost = p.monthly24x7Usd * nodesNeeded;
          fitReason =
            nodesNeeded === 1
              ? `1 always-on sovereign VM (${p.vcpu} vCPU / ${p.ramGb}GB RAM) covers 24/7 duty with zero per-second meter anxiety.`
              : `Requires ${nodesNeeded} static VMs to handle ${concurrency}x peak parallel concurrency without OOM/CPU thrashing.`;
          if (activePreset === "ai-factory") {
            architectureFitPenalty = 85; // No GPU
          }
          if (activePreset === "remote-browser") {
            fitReason += " Pair with self-hosted Steel.dev Docker + residential proxy.";
          }
        } else if (p.category === "microvm-sandbox") {
          // Per-second or active-CPU billing
          const rawUsageCost = totalComputeHoursPerMonth * p.hourlyRateUsd;
          if (p.id === "modal-sandboxes") {
            monthlyInfraCost = Math.max(0, rawUsageCost - 30); // $30/mo free starter credit
            fitReason = `Includes $30/mo free credit (${totalComputeHoursPerMonth.toFixed(0)} sandbox-hrs raw = $${rawUsageCost.toFixed(2)} before credit). Instant parallel scale.`;
          } else if (p.id === "cloudflare-sandboxes") {
            monthlyInfraCost = 5 + rawUsageCost * 0.35; // Active-CPU discount on waiting agents
            fitReason = `Active-CPU billing cuts cost by ~65% during LLM network wait times ($5 base plan).`;
          } else if (p.id === "fly-sprites") {
            monthlyInfraCost = rawUsageCost * 0.45;
            fitReason = `Active-CPU billing + hot/cold checkpointing keeps persistent microVMs cheap when idle.`;
          } else {
            monthlyInfraCost = rawUsageCost;
            fitReason = `${p.coldStartMs}ms boot time handles ${concurrency}x parallel bursts effortlessly.`;
          }
          if (activePreset === "ai-factory") {
            architectureFitPenalty = 50;
          }
        } else if (p.category === "remote-browser") {
          const rawBrowserCost = totalComputeHoursPerMonth * p.hourlyRateUsd;
          monthlyInfraCost = Math.max(p.baseSubscriptionUsd, rawBrowserCost);
          fitReason = `Managed stealth fingerprinting, residential IP routing & live DOM session replay.`;
          if (activePreset !== "remote-browser") {
            architectureFitPenalty = 35;
          }
        } else if (p.category === "gpu-factory") {
          const rawGpuCost = totalComputeHoursPerMonth * p.hourlyRateUsd;
          monthlyInfraCost =
            p.id === "modal-gpu-factory" ? Math.max(0, rawGpuCost - 30) : rawGpuCost;
          fitReason = `Dedicated ${p.gpuModel || "GPU"} (${p.vramGb}GB VRAM) billed per second/minute.`;
          if (activePreset !== "ai-factory") {
            architectureFitPenalty = 45;
          }
        }

        const effectiveTokenCost =
          p.category === "managed-agent" ? 0 : tokenCosts.deepseekCost;
        const totalMonthlyTco = monthlyInfraCost + effectiveTokenCost;

        // Calculate composite recommendation score
        const costScore = Math.max(5, 100 - Math.log10(Math.max(1, totalMonthlyTco)) * 32);
        const compositeScore = Math.round(
          costScore * 0.55 + p.priceToPowerScore * 0.45 - architectureFitPenalty
        );

        return {
          provider: p,
          monthlyInfraCost: Number(monthlyInfraCost.toFixed(2)),
          effectiveTokenCost: Number(effectiveTokenCost.toFixed(2)),
          totalMonthlyTco: Number(totalMonthlyTco.toFixed(2)),
          fitReason,
          compositeScore
        };
      })
      .sort((a, b) => b.compositeScore - a.compositeScore)
      .slice(0, 6);
  }, [hoursPerDay, concurrency, minRamGb, activePreset, tokenCosts]);

  const totalHoursMonth = (hoursPerDay * 30 * concurrency).toFixed(0);

  return (
    <section
      id="widget-simulator"
      className="my-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-300 mb-2">
            <Calculator className="h-3.5 w-3.5" />
            INTERACTIVE JAVASCRIPT WIDGET #1 • LIVE TCO & CROSSOVER ENGINE
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Sandbox & Agent Workload Price-to-Power Simulator
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Test Revision 2 & 3&apos;s core equation: discover the exact crossover point where per-second
            MicroVMs beat 24/7 Non-Major Cloud VMs, or where DeepSeek prefix caching collapses token burn.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-right shrink-0">
          <div className="text-xs text-slate-400 uppercase tracking-wider">Total Sandbox Volume</div>
          <div className="text-2xl font-mono font-bold text-emerald-400">
            {Number(totalHoursMonth).toLocaleString()} <span className="text-sm font-normal text-slate-400">hrs/mo</span>
          </div>
          <div className="text-[11px] text-slate-400">
            {hoursPerDay}h/day × {concurrency}x concurrency
          </div>
        </div>
      </div>

      {/* Workload Presets */}
      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          1. Select an Architectural Workload Archetype (or customize sliders below)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {PRESETS.map((p) => {
            const isSelected = activePreset === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => applyPreset(p)}
                className={`text-left rounded-xl p-3.5 border transition-all ${
                  isSelected
                    ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                    : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="font-semibold text-sm flex items-center justify-between">
                  <span>{p.label}</span>
                  {isSelected && <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />}
                </div>
                <div className="text-xs text-slate-400 mt-1 line-clamp-2">{p.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 bg-slate-950/60 rounded-xl p-5 border border-slate-800/80">
        <div>
          <div className="flex justify-between text-xs font-medium mb-1.5">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-indigo-400" /> Active Runtime / Day
            </span>
            <span className="font-mono text-indigo-300 font-bold">{hoursPerDay} hrs/day</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={24}
            step={0.5}
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
            aria-label="Active runtime hours per day"
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>0.5h (Spiky Eval)</span>
            <span>12h</span>
            <span>24h (Always-On Daemon)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium mb-1.5">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-emerald-400" /> Parallel Sandboxes (Concurrency)
            </span>
            <span className="font-mono text-emerald-300 font-bold">{concurrency}x parallel</span>
          </div>
          <input
            type="range"
            min={1}
            max={80}
            step={1}
            value={concurrency}
            onChange={(e) => setConcurrency(parseInt(e.target.value, 10))}
            aria-label="Parallel Sandboxes Concurrency"
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>1x (Personal Agent)</span>
            <span>25x</span>
            <span>80x (Swarm Fan-out)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium mb-1.5">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-amber-400" /> Min RAM / VRAM per Sandbox
            </span>
            <span className="font-mono text-amber-300 font-bold">{minRamGb} GB</span>
          </div>
          <input
            type="range"
            min={2}
            max={64}
            step={2}
            value={minRamGb}
            onChange={(e) => setMinRamGb(parseInt(e.target.value, 10))}
            aria-label="Minimum RAM or VRAM per sandbox in gigabytes"
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>2–4 GB (MicroVM)</span>
            <span>8 GB (OpenClaw Sweet Spot)</span>
            <span>64 GB+ (GPU Factory)</span>
          </div>
        </div>

        {/* Token Arbitrage Controls */}
        <div>
          <div className="flex justify-between text-xs font-medium mb-1.5">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-cyan-400" /> Monthly Agent Input Tokens
            </span>
            <span className="font-mono text-cyan-300 font-bold">{monthlyInputTokensM}M tokens/mo</span>
          </div>
          <input
            type="range"
            min={5}
            max={250}
            step={5}
            value={monthlyInputTokensM}
            onChange={(e) => setMonthlyInputTokensM(parseInt(e.target.value, 10))}
            aria-label="Monthly agent input tokens in millions"
            className="w-full accent-cyan-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>5M (Light CLI)</span>
            <span>75M (24/7 Heartbeats)</span>
            <span>250M (Heavy Swarm)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium mb-1.5">
            <span className="text-slate-300">DeepSeek Disk Prefix Cache Hit %</span>
            <span className="font-mono text-cyan-300 font-bold">{cacheHitPercent}% cached</span>
          </div>
          <input
            type="range"
            min={0}
            max={95}
            step={5}
            value={cacheHitPercent}
            onChange={(e) => setCacheHitPercent(parseInt(e.target.value, 10))}
            aria-label="DeepSeek disk prefix cache hit percentage"
            className="w-full accent-cyan-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>0% ($0.15/1M)</span>
            <span>85% Default ($0.003/1M hit)</span>
            <span>95% Static Prompt</span>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="text-xs font-medium text-slate-300 mb-1">
            DeepSeek UTC Off-Peak Scheduling
          </div>
          <button
            type="button"
            onClick={() => setOffPeakBatching(!offPeakBatching)}
            className={`w-full rounded-lg px-3 py-2 text-xs font-semibold border flex items-center justify-between transition-all ${
              offPeakBatching
                ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300"
                : "bg-slate-900 border-slate-700 text-slate-400"
            }`}
          >
            <span>
              {offPeakBatching
                ? "✓ Off-Peak Batching Active (1x Base Rate)"
                : "Peak UTC Blended (1.45x Effective Rate)"}
            </span>
            <span className="font-mono text-[11px] underline">Toggle</span>
          </button>
          <div className="text-[11px] text-slate-400 mt-1">
            DeepSeek API cost: <strong className="text-emerald-400">${tokenCosts.deepseekCost}/mo</strong> vs Frontier uncached:{" "}
            <span className="line-through text-rose-400">${tokenCosts.frontierCost}/mo</span>
          </div>
        </div>
      </div>

      {/* Results Ranking Cards */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Top Recommended Provider Stacks for Your Exact Parameters (Ranked by Price-to-Power Fit)
          </h4>
          <span className="text-xs text-slate-400">
            Includes Compute Infra + {monthlyInputTokensM}M Input / {tokenCosts.outputTokensM}M Output Tokens
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rankedProviders.map((item, idx) => {
            const { provider, monthlyInfraCost, effectiveTokenCost, totalMonthlyTco, fitReason } = item;
            const isTopWinner = idx === 0;
            return (
              <div
                key={provider.id}
                className={`rounded-xl p-5 border flex flex-col justify-between transition-all ${
                  isTopWinner
                    ? "bg-gradient-to-b from-indigo-950/70 to-slate-950 border-indigo-500/70 shadow-lg shadow-indigo-500/10"
                    : "bg-slate-950/80 border-slate-800/90"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                          isTopWinner
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        #{idx + 1} {isTopWinner ? "Sweet Spot Winner" : provider.categoryLabel}
                      </span>
                      <h5 className="font-bold text-white text-base leading-snug">
                        {provider.name}
                      </h5>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xl font-mono font-bold text-emerald-400">
                        ${totalMonthlyTco.toFixed(2)}
                        <span className="text-xs font-normal text-slate-400">/mo</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        ${monthlyInfraCost} VM + ${effectiveTokenCost} LLM
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-mono">
                    <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 text-slate-300">
                      {provider.vcpu} vCPU / {provider.ramGb}GB RAM
                    </span>
                    {provider.gpuModel && (
                      <span className="rounded bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-amber-300">
                        {provider.gpuModel}
                      </span>
                    )}
                    <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 text-indigo-300">
                      {provider.billingGranularity}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">{fitReason}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Best Use: <strong className="text-slate-200">{provider.bestUseCase}</strong>
                  </span>
                  <a
                    href={provider.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    {provider.sourceDomain} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
