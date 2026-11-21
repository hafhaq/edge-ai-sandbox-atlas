"use client";

import React, { useState, useMemo } from "react";
import { SANDBOX_PROVIDERS, SUBSIDIZED_LLM_SUBSCRIPTIONS } from "@/data/sandboxData";
import {
  Calculator,
  Cpu,
  Clock,
  Layers,
  ExternalLink,
  Sparkles,
  KeyRound,
  ShieldCheck
} from "lucide-react";

type PresetId =
  | "openclaw-24x7"
  | "fullstack-ide"
  | "async-repo-swarm"
  | "remote-browser"
  | "burst-microvm"
  | "ai-factory";

interface PresetConfig {
  id: PresetId;
  label: string;
  subtitle: string;
  hoursPerDay: number;
  concurrency: number;
  minRamGb: number;
  primarySubId: string;
  secondarySubId: string;
}

const PRESETS: PresetConfig[] = [
  {
    id: "openclaw-24x7",
    label: "24/7 OpenClaw / Claude VM",
    subtitle: "Always-on Linux VM + Dual US/CN Subscription Login",
    hoursPerDay: 24,
    concurrency: 1,
    minRamGb: 8,
    primarySubId: "claude-pro-20",
    secondarySubId: "zai-glm-coding-18"
  },
  {
    id: "fullstack-ide",
    label: "All-in-One App Builder",
    subtitle: "Replit Core/Pro vs Codespaces vs Modular VPS",
    hoursPerDay: 8,
    concurrency: 1,
    minRamGb: 4,
    primarySubId: "chatgpt-plus-20",
    secondarySubId: "none"
  },
  {
    id: "async-repo-swarm",
    label: "Async Repo PR Swarm",
    subtitle: "Google Jules / Cursor Agents / Claude Max / Devin",
    hoursPerDay: 6,
    concurrency: 10,
    minRamGb: 8,
    primarySubId: "google-ai-pro-20",
    secondarySubId: "alibaba-qwen-coder-19"
  },
  {
    id: "remote-browser",
    label: "Stealth Remote Browser",
    subtitle: "Steel.dev / Browserbase + Contabo 16GB High-RAM",
    hoursPerDay: 6,
    concurrency: 5,
    minRamGb: 4,
    primarySubId: "xai-supergrok-30",
    secondarySubId: "moonshot-kimi-code-19"
  },
  {
    id: "burst-microvm",
    label: "Burst Code MicroVMs",
    subtitle: "E2B / Modal / Daytona / Cloudflare Active-CPU",
    hoursPerDay: 1,
    concurrency: 25,
    minRamGb: 4,
    primarySubId: "claude-max-100",
    secondarySubId: "minimax-mplan-19"
  },
  {
    id: "ai-factory",
    label: "Paid GPU AI Factory",
    subtitle: "Modal Per-Sec H100 / RunPod 4090 / Vast A100 / Lambda",
    hoursPerDay: 3,
    concurrency: 2,
    minRamGb: 24,
    primarySubId: "claude-max-100",
    secondarySubId: "zai-glm-coding-18"
  }
];

export default function WorkloadSimulatorWidget() {
  const [activePreset, setActivePreset] = useState<PresetId>("openclaw-24x7");
  const [hoursPerDay, setHoursPerDay] = useState<number>(24);
  const [concurrency, setConcurrency] = useState<number>(1);
  const [minRamGb, setMinRamGb] = useState<number>(8);
  const [primarySubId, setPrimarySubId] = useState<string>("claude-pro-20");
  const [secondarySubId, setSecondarySubId] = useState<string>("zai-glm-coding-18");

  const applyPreset = (p: PresetConfig) => {
    setActivePreset(p.id);
    setHoursPerDay(p.hoursPerDay);
    setConcurrency(p.concurrency);
    setMinRamGb(p.minRamGb);
    setPrimarySubId(p.primarySubId);
    setSecondarySubId(p.secondarySubId);
  };

  const selectedSubs = useMemo(() => {
    const primary =
      SUBSIDIZED_LLM_SUBSCRIPTIONS.find((s) => s.id === primarySubId) ||
      SUBSIDIZED_LLM_SUBSCRIPTIONS[0];
    const secondary =
      secondarySubId === "none"
        ? null
        : SUBSIDIZED_LLM_SUBSCRIPTIONS.find((s) => s.id === secondarySubId) || null;

    const totalSubCost = primary.monthlyFeeUsd + (secondary ? secondary.monthlyFeeUsd : 0);
    const combinedBurstHours = Math.min(
      5.0,
      Number(
        (
          primary.fiveHourBurstCapacityHours +
          (secondary ? secondary.fiveHourBurstCapacityHours : 0)
        ).toFixed(1)
      )
    );

    return { primary, secondary, totalSubCost, combinedBurstHours };
  }, [primarySubId, secondarySubId]);

  const rankedProviders = useMemo(() => {
    const totalComputeHoursPerMonth = hoursPerDay * 30 * concurrency;

    return SANDBOX_PROVIDERS.filter(
      (p) => p.ramGb >= minRamGb || (p.vramGb && p.vramGb >= minRamGb)
    )
      .map((p) => {
        let monthlyInfraCost = 0;
        let llmSubCost = selectedSubs.totalSubCost;
        let fitReason = "";
        let penalty = 0;

        if (p.category === "big-player-workspace") {
          if (p.id === "github-codespaces-copilot") {
            // Paid hourly VM + bundled Copilot Pro+ ($39)
            monthlyInfraCost = p.baseSubscriptionUsd + totalComputeHoursPerMonth * p.hourlyRateUsd;
            llmSubCost = secondarySubId !== "none" && selectedSubs.secondary ? selectedSubs.secondary.monthlyFeeUsd : 0;
            fitReason = `Includes Copilot Pro+ ($39/mo) + ${totalComputeHoursPerMonth.toFixed(0)} hrs of paid Codespace VM ($0.18/hr). Warning: 24/7 Codespaces accrue $131+/mo in VM hours!`;
          } else if (p.id === "replit-core-pro") {
            // Replit Core ($25) + Reserved VM or overage credits
            const extraConcurrencyCost = concurrency > 1 ? 75 : 20;
            monthlyInfraCost = p.baseSubscriptionUsd + extraConcurrencyCost;
            llmSubCost = secondarySubId !== "none" && selectedSubs.secondary ? selectedSubs.secondary.monthlyFeeUsd : 0;
            fitReason = `Includes Replit Core/Pro workspace + Reserved VM allowance. Great zero-setup IDE, though effort-based Agent checkpoints consume credits on heavy builds.`;
          } else {
            // Bundled Big Player (Claude Max/Ultra, OpenAI Dots Pro, Google Jules AI Pro, Cursor, Devin, SuperGrok)
            monthlyInfraCost = p.monthly24x7Usd;
            llmSubCost = secondarySubId !== "none" && selectedSubs.secondary ? selectedSubs.secondary.monthlyFeeUsd : 0;
            fitReason = `All-in-one bundled subscription (${p.representativeTier}). ${
              selectedSubs.secondary
                ? `Paired with ${selectedSubs.secondary.name} ($${selectedSubs.secondary.monthlyFeeUsd}/mo) as secondary overflow.`
                : "Includes first-party LLM quota + cloud container/VM."
            }`;
          }

          if (activePreset === "ai-factory") penalty = 70;
          if (activePreset === "remote-browser") penalty = 35;
        } else if (p.category === "non-major-vps") {
          const nodesNeeded = Math.max(1, Math.ceil((concurrency * 2) / p.vcpu));
          monthlyInfraCost = p.monthly24x7Usd * nodesNeeded;
          fitReason =
            nodesNeeded === 1
              ? `1 paid commercial VM (${p.vcpu} vCPU / ${p.ramGb}GB RAM / ${p.storageGb}GB NVMe) running 24/7 + your flat-rate ${selectedSubs.primary.name}${
                  selectedSubs.secondary ? ` + ${selectedSubs.secondary.name}` : ""
                } login.`
              : `${nodesNeeded} paid VMs (${nodesNeeded * p.vcpu} vCPU / ${nodesNeeded * p.ramGb}GB total) to handle ${concurrency}x parallel tasks + flat-rate LLM subscription login.`;
          if (activePreset === "ai-factory") penalty = 80;
        } else if (p.category === "microvm-sandbox") {
          const rawUsageCost = totalComputeHoursPerMonth * p.hourlyRateUsd;
          if (p.id === "cloudflare-sandboxes") {
            monthlyInfraCost = 5 + rawUsageCost * 0.35;
            fitReason = `Paid Workers base ($5) + Active-CPU billing (~65% savings while agent waits on ${selectedSubs.primary.provider} responses).`;
          } else if (p.id === "fly-sprites") {
            monthlyInfraCost = rawUsageCost * 0.45;
            fitReason = `Paid Active-CPU Firecracker microVM ($0.0385/active CPU-hr) + persistent disk checkpointing.`;
          } else if (p.id === "e2b-microvm") {
            monthlyInfraCost = (hoursPerDay > 1 ? 150 : 0) + rawUsageCost;
            fitReason = `${p.coldStartMs}ms Firecracker snapshot branching (${totalComputeHoursPerMonth.toFixed(0)} paid sandbox-hrs @ $${p.hourlyRateUsd}/hr).`;
          } else {
            monthlyInfraCost = rawUsageCost;
            fitReason = `Paid commercial per-second rate ($${p.hourlyRateUsd}/hr × ${totalComputeHoursPerMonth.toFixed(0)} hrs) with ${p.coldStartMs}ms cold start.`;
          }
          if (activePreset === "ai-factory") penalty = 50;
        } else if (p.category === "remote-browser") {
          const rawBrowserCost = totalComputeHoursPerMonth * p.hourlyRateUsd;
          monthlyInfraCost = Math.max(p.baseSubscriptionUsd, rawBrowserCost);
          fitReason = `Paid managed stealth browser fleet ($${p.hourlyRateUsd}/hr) + residential anti-bot bypass & live DOM replay.`;
          if (activePreset !== "remote-browser") penalty = 35;
        } else if (p.category === "gpu-factory") {
          monthlyInfraCost = totalComputeHoursPerMonth * p.hourlyRateUsd;
          fitReason = `Paid commercial ${p.gpuModel} (${p.vramGb}GB VRAM) @ $${p.hourlyRateUsd}/hr (${p.billingGranularity}).`;
          if (activePreset !== "ai-factory") penalty = 45;
        }

        const totalMonthlyTco = Number((monthlyInfraCost + llmSubCost).toFixed(2));
        const costScore = Math.max(5, 100 - Math.log10(Math.max(1, totalMonthlyTco)) * 30);
        const compositeScore = Math.round(
          costScore * 0.5 + p.priceToPowerScore * 0.5 - penalty
        );

        return {
          provider: p,
          monthlyInfraCost: Number(monthlyInfraCost.toFixed(2)),
          llmSubCost: Number(llmSubCost.toFixed(2)),
          totalMonthlyTco,
          fitReason,
          compositeScore
        };
      })
      .sort((a, b) => b.compositeScore - a.compositeScore)
      .slice(0, 6);
  }, [hoursPerDay, concurrency, minRamGb, activePreset, selectedSubs, secondarySubId]);

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
            INTERACTIVE JAVASCRIPT WIDGET #1 • PAID COMPUTE + SUBSIDIZED LLM MATCHER
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Paid Cloud Sandbox &amp; Subsidized LLM Subscription Simulator (Zero Free-Tier Reliance)
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Compare all-in-one Big Players (<strong className="text-slate-200">Replit, Anthropic Claude Cloud, OpenAI Dots, Google Jules, xAI Grok, Cursor, Devin, Codespaces</strong>) against{" "}
            <strong className="text-emerald-300">Paid Non-Major Cloud VMs + Flat-Rate US/Chinese Subsidized LLM Subscriptions</strong>.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-right shrink-0">
          <div className="text-xs text-slate-400 uppercase tracking-wider">Paid Compute Volume</div>
          <div className="text-2xl font-mono font-bold text-emerald-400">
            {Number(totalHoursMonth).toLocaleString()}{" "}
            <span className="text-sm font-normal text-slate-400">hrs/mo</span>
          </div>
          <div className="text-[11px] text-slate-400">
            5-Hr Window Coverage:{" "}
            <strong className="text-indigo-300">{selectedSubs.combinedBurstHours} / 5.0 hrs</strong>
          </div>
        </div>
      </div>

      {/* Workload Presets */}
      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          1. Select Your Workload Archetype
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2.5">
          {PRESETS.map((p) => {
            const isSelected = activePreset === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => applyPreset(p)}
                className={`text-left rounded-xl p-3 border transition-all ${
                  isSelected
                    ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                    : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="font-semibold text-xs flex items-center justify-between gap-1">
                  <span>{p.label}</span>
                  {isSelected && <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{p.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sliders & Subscription Selectors */}
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
            <span>0.5h (Burst CI)</span>
            <span>8h (Workday IDE)</span>
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
            max={60}
            step={1}
            value={concurrency}
            onChange={(e) => setConcurrency(parseInt(e.target.value, 10))}
            aria-label="Parallel Sandboxes Concurrency"
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>1x (Single VM)</span>
            <span>15x (Jules Pro Cap)</span>
            <span>60x (Swarm / Ultra)</span>
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
            min={4}
            max={64}
            step={4}
            value={minRamGb}
            onChange={(e) => setMinRamGb(parseInt(e.target.value, 10))}
            aria-label="Minimum RAM or VRAM per sandbox in gigabytes"
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>4 GB (Entry)</span>
            <span>8–16 GB (Sweet Spot)</span>
            <span>64 GB+ (GPU Factory)</span>
          </div>
        </div>

        {/* Subsidized Subscription Selectors */}
        <div>
          <label
            htmlFor="primary-sub-select"
            className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5"
          >
            <KeyRound className="h-3.5 w-3.5 text-cyan-400" /> Primary Subsidized LLM Login (US/CN)
          </label>
          <select
            id="primary-sub-select"
            value={primarySubId}
            onChange={(e) => setPrimarySubId(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white"
          >
            {SUBSIDIZED_LLM_SUBSCRIPTIONS.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.origin === "US" ? "🇺🇸" : "🇨🇳"} {sub.name} (${sub.monthlyFeeUsd}/mo)
              </option>
            ))}
          </select>
          <div className="text-[11px] text-slate-400 mt-1 truncate">
            Auth: {selectedSubs.primary.vmAuthMethod}
          </div>
        </div>

        <div>
          <label
            htmlFor="secondary-sub-select"
            className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Secondary Overflow / Companion Plan
          </label>
          <select
            id="secondary-sub-select"
            value={secondarySubId}
            onChange={(e) => setSecondarySubId(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white"
          >
            <option value="none">None (Single Subscription Only)</option>
            {SUBSIDIZED_LLM_SUBSCRIPTIONS.filter((s) => s.id !== primarySubId).map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.origin === "US" ? "🇺🇸" : "🇨🇳"} + {sub.name} (+${sub.monthlyFeeUsd}/mo)
              </option>
            ))}
          </select>
          <div className="text-[11px] text-slate-400 mt-1">
            Prevents 5-hour rolling quota lockouts during 24/7 loops.
          </div>
        </div>

        <div className="rounded-lg bg-slate-900/90 border border-slate-800 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Flat-Rate LLM Subscriptions:</span>
            <span className="font-mono font-bold text-emerald-400">
              ${selectedSubs.totalSubCost.toFixed(2)}/mo flat
            </span>
          </div>
          <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden my-1.5 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400"
              style={{ width: `${(selectedSubs.combinedBurstHours / 5.0) * 100}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-300 flex justify-between">
            <span>5-Hr Continuous Loop Coverage:</span>
            <strong className="text-white">{selectedSubs.combinedBurstHours} / 5.0 hrs</strong>
          </div>
        </div>
      </div>

      {/* Results Ranking Cards */}
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Top 6 Paid Commercial Stacks Ranked by Price-to-Power Fit (Compute + Flat-Rate LLM Subscription)
          </h4>
          <span className="text-xs text-emerald-400 font-mono">
            100% Paid Commercial Tiers • $0 Per-Token Overages
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rankedProviders.map((item, idx) => {
            const { provider, monthlyInfraCost, llmSubCost, totalMonthlyTco, fitReason } = item;
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
                        {provider.bundlesLlmSubscription
                          ? `$${monthlyInfraCost} Bundled + $${llmSubCost} Add-on`
                          : `$${monthlyInfraCost} VM + $${llmSubCost} LLM Sub`}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-mono">
                    <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 text-slate-300">
                      {provider.vcpu} vCPU / {provider.ramGb}GB RAM
                    </span>
                    <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 text-slate-300">
                      {provider.storageGb}GB Disk
                    </span>
                    {provider.gpuModel && (
                      <span className="rounded bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-amber-300">
                        {provider.gpuModel}
                      </span>
                    )}
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
