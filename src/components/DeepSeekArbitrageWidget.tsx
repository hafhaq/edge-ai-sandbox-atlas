"use client";

import React, { useState, useMemo } from "react";
import { DEEPSEEK_TIERS, SANDBOX_PROVIDERS } from "@/data/sandboxData";
import { Clock, Coins, Server, ShieldCheck, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const VPS_HOSTS = SANDBOX_PROVIDERS.filter((p) => p.category === "non-major-vps");

export default function DeepSeekArbitrageWidget() {
  const [selectedVpsId, setSelectedVpsId] = useState<string>("hetzner-cax21");
  const [selectedUtcHour, setSelectedUtcHour] = useState<number>(14); // 14:00 UTC is off-peak
  const [flashSharePercent, setFlashSharePercent] = useState<number>(90);
  const [heartbeatsPerHour, setHeartbeatsPerHour] = useState<number>(4);
  const [tokensPerHeartbeatK, setTokensPerHeartbeatK] = useState<number>(25);

  const selectedVps = VPS_HOSTS.find((v) => v.id === selectedVpsId) || VPS_HOSTS[0];

  // DeepSeek Peak UTC hours: 01:00-04:00 UTC and 06:00-10:00 UTC (Mon-Fri)
  const isPeakUtc = (hour: number) => (hour >= 1 && hour < 4) || (hour >= 6 && hour < 10);

  const calc = useMemo(() => {
    const monthlyHeartbeats = heartbeatsPerHour * 24 * 30;
    const totalInputTokensM = (monthlyHeartbeats * tokensPerHeartbeatK) / 1000;
    const totalOutputTokensM = (monthlyHeartbeats * 0.45) / 1000; // ~450 tokens output per heartbeat

    const flashShare = flashSharePercent / 100;
    const proShare = 1 - flashShare;

    // With 88% disk prefix cache hit on heartbeats
    const cacheHit = 0.88;
    const cacheMiss = 0.12;

    // Off-peak cost (1x)
    const flashInputCost =
      totalInputTokensM * flashShare * (cacheHit * 0.003 + cacheMiss * 0.15);
    const flashOutputCost = totalOutputTokensM * flashShare * 0.60;

    const proInputCost =
      totalInputTokensM * proShare * (cacheHit * 0.022 + cacheMiss * 0.66);
    const proOutputCost = totalOutputTokensM * proShare * 1.98;

    const offPeakApiTotal = flashInputCost + flashOutputCost + proInputCost + proOutputCost;
    const peakApiTotal = offPeakApiTotal * 2.0; // Strictly 2x during peak UTC windows
    const uncachedFrontierTotal = totalInputTokensM * 2.50 + totalOutputTokensM * 12.0;

    return {
      monthlyHeartbeats,
      totalInputTokensM: Number(totalInputTokensM.toFixed(1)),
      totalOutputTokensM: Number(totalOutputTokensM.toFixed(2)),
      offPeakApiTotal: Number(offPeakApiTotal.toFixed(2)),
      peakApiTotal: Number(peakApiTotal.toFixed(2)),
      uncachedFrontierTotal: Number(uncachedFrontierTotal.toFixed(2)),
      offPeakCombinedTco: Number((selectedVps.monthly24x7Usd + offPeakApiTotal).toFixed(2)),
      savingsPercent: Math.round(
        ((uncachedFrontierTotal + 60 - (selectedVps.monthly24x7Usd + offPeakApiTotal)) /
          (uncachedFrontierTotal + 60)) *
          100
      )
    };
  }, [selectedVps, flashSharePercent, heartbeatsPerHour, tokensPerHeartbeatK]);

  return (
    <section
      id="widget-deepseek-arbitrage"
      className="my-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300 mb-2">
            <Coins className="h-3.5 w-3.5" />
            INTERACTIVE JAVASCRIPT WIDGET #2 • THE SOVEREIGN ARBITRAGE STACK
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            DeepSeek V4.1 + Non-Major Cloud VM Arbitrage Calculator
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Combine a European/ARM VPS (<strong className="text-slate-200">Hetzner, Netcup, Contabo, OVH, or Oracle Free Tier</strong>) with{" "}
            <strong className="text-emerald-300">DeepSeek Prefix Caching + UTC Off-Peak Windows</strong> to run a 24/7 OpenClaw agent for under $12/month.
          </p>
        </div>

        <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/40 px-5 py-3 text-right shrink-0">
          <div className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">
            Sovereign Monthly TCO
          </div>
          <div className="text-3xl font-mono font-bold text-white">
            ${calc.offPeakCombinedTco}
            <span className="text-sm font-normal text-emerald-300">/mo</span>
          </div>
          <div className="text-[11px] text-emerald-300/90">
            Saves {calc.savingsPercent}% vs AWS t3.large + Uncached Frontier
          </div>
        </div>
      </div>

      {/* Step 1: Pick Non-Major Cloud VM */}
      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Step 1: Choose Your Non-Major Cloud VM Host
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {VPS_HOSTS.map((vps) => {
            const active = vps.id === selectedVps.id;
            return (
              <button
                key={vps.id}
                type="button"
                onClick={() => setSelectedVpsId(vps.id)}
                className={`rounded-xl p-3.5 border text-left transition-all ${
                  active
                    ? "bg-emerald-500/15 border-emerald-500 text-white shadow-lg"
                    : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-emerald-300 font-mono">
                    ${vps.monthly24x7Usd.toFixed(2)}/mo
                  </span>
                  <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">
                    {vps.vcpu}C / {vps.ramGb}G
                  </span>
                </div>
                <div className="font-semibold text-sm mt-1 text-white truncate">{vps.name.split(" (")[0]}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{vps.storageGb} GB NVMe/SSD</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Interactive 24-Hour UTC Peak vs Off-Peak Schedule Visualizer */}
      <div className="mt-6 rounded-xl bg-slate-950/90 border border-slate-800 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-400" />
              Step 2: DeepSeek 24-Hour UTC Peak vs. Off-Peak Pricing Clock (Click Any Hour)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              DeepSeek charges <strong className="text-amber-300">2x during Peak UTC (01:00–04:00 & 06:00–10:00 UTC Mon–Fri)</strong> and{" "}
              <strong className="text-emerald-300">1x Off-Peak (17 hrs/day + all weekend)</strong>. Schedule heavy cron indexing in green slots!
            </p>
          </div>
          <div className="text-right font-mono text-xs shrink-0">
            <span className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200">
              Selected: <strong>{String(selectedUtcHour).padStart(2, "0")}:00 UTC</strong> (
              {isPeakUtc(selectedUtcHour) ? (
                <span className="text-amber-400 font-bold">2x PEAK</span>
              ) : (
                <span className="text-emerald-400 font-bold">1x OFF-PEAK</span>
              )}
              )
            </span>
          </div>
        </div>

        {/* 24-hour interactive timeline */}
        <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 mt-3">
          {Array.from({ length: 24 }, (_, hour) => {
            const peak = isPeakUtc(hour);
            const selected = selectedUtcHour === hour;
            return (
              <button
                key={hour}
                type="button"
                onClick={() => setSelectedUtcHour(hour)}
                title={`${String(hour).padStart(2, "0")}:00 UTC - ${peak ? "Peak (2x Rate)" : "Off-Peak (1x Base Rate)"}`}
                className={`h-12 rounded-lg flex flex-col items-center justify-center font-mono text-[11px] border transition-all ${
                  selected ? "ring-2 ring-white scale-105 z-10 " : ""
                }${
                  peak
                    ? "bg-amber-500/20 border-amber-500/50 text-amber-200 hover:bg-amber-500/30"
                    : "bg-emerald-500/20 border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/30"
                }`}
              >
                <span className="font-bold">{String(hour).padStart(2, "0")}</span>
                <span className="text-[9px] opacity-80">{peak ? "2x" : "1x"}</span>
              </button>
            );
          })}
        </div>

        {/* Rate readout for selected hour */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {DEEPSEEK_TIERS.map((tier) => {
            const peak = isPeakUtc(selectedUtcHour);
            const hitRate = peak ? tier.peakInputCacheHitPer1M : tier.offPeakInputCacheHitPer1M;
            const missRate = peak ? tier.peakInputCacheMissPer1M : tier.offPeakInputCacheMissPer1M;
            const outRate = peak ? tier.peakOutputPer1M : tier.offPeakOutputPer1M;

            return (
              <div
                key={tier.id}
                className="rounded-lg bg-slate-900/90 border border-slate-800 p-3.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-white text-sm">{tier.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {tier.concurrencyLimit} concurrent
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 my-2.5 text-center font-mono">
                  <div className="rounded bg-slate-950 p-2 border border-slate-800/80">
                    <div className="text-[10px] text-slate-400">Cache Hit Input</div>
                    <div className="text-sm font-bold text-emerald-400">${hitRate.toFixed(3)}</div>
                    <div className="text-[9px] text-slate-400">per 1M tokens</div>
                  </div>
                  <div className="rounded bg-slate-950 p-2 border border-slate-800/80">
                    <div className="text-[10px] text-slate-400">Cache Miss Input</div>
                    <div className="text-sm font-bold text-slate-200">${missRate.toFixed(2)}</div>
                    <div className="text-[9px] text-slate-400">per 1M tokens</div>
                  </div>
                  <div className="rounded bg-slate-950 p-2 border border-slate-800/80">
                    <div className="text-[10px] text-slate-400">Output Tokens</div>
                    <div className="text-sm font-bold text-indigo-300">${outRate.toFixed(2)}</div>
                    <div className="text-[9px] text-slate-400">per 1M tokens</div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400">{tier.bestFor}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 3: Heartbeat & Routing Sliders */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
        <div>
          <div className="flex justify-between text-xs font-medium mb-1">
            <span className="text-slate-300">V4.1-Flash vs V4-Pro Routing Split</span>
            <span className="font-mono text-emerald-400 font-bold">
              {flashSharePercent}% Flash / {100 - flashSharePercent}% Pro
            </span>
          </div>
          <input
            type="range"
            min={50}
            max={100}
            step={5}
            value={flashSharePercent}
            onChange={(e) => setFlashSharePercent(parseInt(e.target.value, 10))}
            aria-label="DeepSeek Flash versus Pro routing percentage"
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="text-[11px] text-slate-400 mt-1">
            Route background heartbeats to Flash; escalate multi-file code to Pro.
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium mb-1">
            <span className="text-slate-300">OpenClaw Heartbeat Frequency</span>
            <span className="font-mono text-emerald-400 font-bold">
              {heartbeatsPerHour}/hr ({calc.monthlyHeartbeats.toLocaleString()}/mo)
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={heartbeatsPerHour}
            onChange={(e) => setHeartbeatsPerHour(parseInt(e.target.value, 10))}
            aria-label="OpenClaw heartbeat wakes per hour"
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="text-[11px] text-slate-400 mt-1">
            4/hr = wakes every 15 mins to check inbox, GitHub, and cron triggers.
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium mb-1">
            <span className="text-slate-300">Workspace Context per Heartbeat</span>
            <span className="font-mono text-emerald-400 font-bold">
              {tokensPerHeartbeatK}k tokens ({calc.totalInputTokensM}M/mo)
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={tokensPerHeartbeatK}
            onChange={(e) => setTokensPerHeartbeatK(parseInt(e.target.value, 10))}
            aria-label="Workspace context tokens per heartbeat in thousands"
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="text-[11px] text-slate-400 mt-1">
            88% of this prefix hits DeepSeek&apos;s $0.003/1M disk cache automatically.
          </div>
        </div>
      </div>

      {/* Bottom Comparison Strip */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/40 p-4">
          <div className="text-emerald-300 font-semibold uppercase tracking-wider text-[10px]">
            1. Off-Peak Arbitrage Stack ({selectedVps.name.split(" (")[0]})
          </div>
          <div className="text-2xl font-mono font-bold text-white mt-1">
            ${calc.offPeakCombinedTco} <span className="text-xs font-normal text-slate-300">/ month total</span>
          </div>
          <div className="text-slate-300 mt-1">
            ${selectedVps.monthly24x7Usd.toFixed(2)} VM + ${calc.offPeakApiTotal} DeepSeek API ({calc.totalInputTokensM}M in / {calc.totalOutputTokensM}M out)
          </div>
        </div>

        <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-4">
          <div className="text-amber-300 font-semibold uppercase tracking-wider text-[10px]">
            2. Same Stack Running 100% During Peak UTC
          </div>
          <div className="text-2xl font-mono font-bold text-white mt-1">
            ${(selectedVps.monthly24x7Usd + calc.peakApiTotal).toFixed(2)}{" "}
            <span className="text-xs font-normal text-slate-300">/ month total</span>
          </div>
          <div className="text-slate-300 mt-1">
            ${selectedVps.monthly24x7Usd.toFixed(2)} VM + ${calc.peakApiTotal} DeepSeek Peak (2x token rate)
          </div>
        </div>

        <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-4">
          <div className="text-rose-300 font-semibold uppercase tracking-wider text-[10px]">
            3. Major Cloud t3.large ($61) + Uncached Frontier API
          </div>
          <div className="text-2xl font-mono font-bold text-rose-300 mt-1">
            ${(61 + calc.uncachedFrontierTotal).toFixed(2)}{" "}
            <span className="text-xs font-normal text-slate-300">/ month total</span>
          </div>
          <div className="text-slate-300 mt-1">
            $61.00 AWS EC2 + ${calc.uncachedFrontierTotal} uncached token spend (The Heartbeat Trap!)
          </div>
        </div>
      </div>
    </section>
  );
}
