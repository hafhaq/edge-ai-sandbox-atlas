"use client";

import React, { useState, useMemo } from "react";
import { SUBSIDIZED_LLM_SUBSCRIPTIONS, SANDBOX_PROVIDERS } from "@/data/sandboxData";
import {
  KeyRound,
  ShieldCheck,
  Terminal,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  Globe
} from "lucide-react";

const PAID_VPS_HOSTS = SANDBOX_PROVIDERS.filter((p) => p.category === "non-major-vps");
const US_SUBS = SUBSIDIZED_LLM_SUBSCRIPTIONS.filter((s) => s.origin === "US");
const CN_SUBS = SUBSIDIZED_LLM_SUBSCRIPTIONS.filter((s) => s.origin === "CN");

export default function DeepSeekArbitrageWidget() {
  const [selectedVpsId, setSelectedVpsId] = useState<string>("netcup-vps-1000");
  const [selectedUsSubId, setSelectedUsSubId] = useState<string>("claude-pro-20");
  const [selectedCnSubId, setSelectedCnSubId] = useState<string>("zai-glm-coding-18");
  const [offPeakTimezoneBonus, setOffPeakTimezoneBonus] = useState<boolean>(true);

  const selectedVps = PAID_VPS_HOSTS.find((v) => v.id === selectedVpsId) || PAID_VPS_HOSTS[0];
  const usSub = US_SUBS.find((s) => s.id === selectedUsSubId) || US_SUBS[0];
  const cnSub = CN_SUBS.find((s) => s.id === selectedCnSubId) || CN_SUBS[0];

  const metrics = useMemo(() => {
    const vpsCost = selectedVps.monthly24x7Usd;
    const totalMonthlyFlatCost = Number(
      (vpsCost + usSub.monthlyFeeUsd + cnSub.monthlyFeeUsd).toFixed(2)
    );

    const cnEffectiveBurst = offPeakTimezoneBonus
      ? Math.min(5.0, Number((cnSub.fiveHourBurstCapacityHours * 1.35).toFixed(1)))
      : cnSub.fiveHourBurstCapacityHours;

    const totalWindowCoverage = Math.min(
      5.0,
      Number((usSub.fiveHourBurstCapacityHours + cnEffectiveBurst).toFixed(1))
    );

    return {
      vpsCost,
      totalMonthlyFlatCost,
      cnEffectiveBurst,
      totalWindowCoverage,
      vsUltraAndCodespaceSavings: Number((370.4 - totalMonthlyFlatCost).toFixed(2)) // $200 Ultra + $170.40 24/7 Codespace
    };
  }, [selectedVps, usSub, cnSub, offPeakTimezoneBonus]);

  return (
    <section
      id="widget-deepseek-arbitrage"
      className="my-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300 mb-2">
            <KeyRound className="h-3.5 w-3.5" />
            INTERACTIVE JAVASCRIPT WIDGET #2 • US + CHINESE SUBSIDIZED SUBSCRIPTION BLENDER
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            The Dual-Flag Subsidized Login Matrix (Zero Per-Token API Tax • Zero 5-Hour Lockouts)
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Instead of paying per-token OpenRouter fees or getting locked out after 90 minutes on a single $20 plan, pair{" "}
            <strong className="text-indigo-300">1 Paid American Subscription</strong> +{" "}
            <strong className="text-emerald-300">1 Paid Chinese Coding Plan</strong> inside a{" "}
            <strong className="text-white">Paid Non-Major Cloud VM</strong>.
          </p>
        </div>

        <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/40 px-5 py-3 text-right shrink-0">
          <div className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">
            All-In Flat Monthly Bill
          </div>
          <div className="text-3xl font-mono font-bold text-white">
            ${metrics.totalMonthlyFlatCost}
            <span className="text-sm font-normal text-emerald-300">/mo</span>
          </div>
          <div className="text-[11px] text-emerald-300/90">
            ${metrics.vpsCost.toFixed(2)} VM + ${usSub.monthlyFeeUsd} US + ${cnSub.monthlyFeeUsd} CN Plan
          </div>
        </div>
      </div>

      {/* Step 1: Select Paid Non-Major Cloud VM */}
      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Step 1: Pick Your Paid 24/7 Non-Major Cloud VM Host (100% Commercial SLA — No Free Tiers)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PAID_VPS_HOSTS.map((vps) => {
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
                  <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">
                    {vps.vcpu} vCPU / {vps.ramGb}GB
                  </span>
                </div>
                <div className="font-semibold text-sm mt-1 text-white truncate">
                  {vps.name.split(" (")[0]}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {vps.storageGb} GB NVMe/SSD • {vps.sourceDomain}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2 & 3: Pick American + Chinese Subsidized Subscriptions */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column A: American Frontier Subscription */}
        <div className="rounded-xl bg-slate-950/90 border border-indigo-500/30 p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3 flex items-center justify-between">
            <span>Step 2: Primary 🇺🇸 American Frontier Login (Architect &amp; Complex Diffs)</span>
            <span className="font-mono text-white">${usSub.monthlyFeeUsd}/mo</span>
          </div>
          <div className="space-y-2">
            {US_SUBS.map((sub) => {
              const active = sub.id === usSub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedUsSubId(sub.id)}
                  className={`w-full rounded-xl p-3 border text-left transition-all ${
                    active
                      ? "bg-indigo-600/20 border-indigo-500 text-white"
                      : "bg-slate-900/70 border-slate-800/80 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs text-white">{sub.name}</span>
                    <span className="font-mono text-xs font-bold text-indigo-300">
                      ${sub.monthlyFeeUsd}/mo
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Models: <strong className="text-indigo-200">{sub.flagshipModels}</strong>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 font-mono">{sub.vmAuthMethod}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Column B: Chinese Subsidized Coding Plan */}
        <div className="rounded-xl bg-slate-950/90 border border-emerald-500/30 p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3 flex items-center justify-between">
            <span>Step 3: Companion 🇨🇳 Chinese Coding Plan (24/7 Loops &amp; Overflow)</span>
            <span className="font-mono text-white">${cnSub.monthlyFeeUsd}/mo</span>
          </div>
          <div className="space-y-2">
            {CN_SUBS.map((sub) => {
              const active = sub.id === cnSub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedCnSubId(sub.id)}
                  className={`w-full rounded-xl p-3 border text-left transition-all ${
                    active
                      ? "bg-emerald-600/20 border-emerald-500 text-white"
                      : "bg-slate-900/70 border-slate-800/80 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs text-white">{sub.name}</span>
                    <span className="font-mono text-xs font-bold text-emerald-300">
                      ${sub.monthlyFeeUsd}/mo
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Models: <strong className="text-emerald-200">{sub.flagshipModels}</strong>
                  </div>
                  <div className="text-[10px] text-emerald-400/90 mt-1">{sub.offPeakBonusText}</div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-300">
              US/EU Daytime Off-Peak Multiplier (0.5x Credit Burn on Z.ai/CN Plans):
            </span>
            <button
              type="button"
              onClick={() => setOffPeakTimezoneBonus(!offPeakTimezoneBonus)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                offPeakTimezoneBonus
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                  : "bg-slate-900 border-slate-700 text-slate-400"
              }`}
            >
              {offPeakTimezoneBonus ? "ACTIVE (2x Quota)" : "OFF"}
            </button>
          </div>
        </div>
      </div>

      {/* Step 4: Visual 5-Hour Rolling Window & Quota Relay Timeline */}
      <div className="mt-6 rounded-xl bg-slate-950 border border-slate-800 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-400" />
              5-Hour Rolling Window Relay Visualizer: How Dual Logins Eliminate Agent Lockouts
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              A single $20 US subscription locks out after ~1.6 to 2.0 hours of continuous autonomous loops. Blending{" "}
              <strong className="text-indigo-300">{usSub.name}</strong> +{" "}
              <strong className="text-emerald-300">{cnSub.name}</strong> covers{" "}
              <strong className="text-white">{metrics.totalWindowCoverage} / 5.0 continuous hours</strong> every window!
            </p>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shrink-0">
            {metrics.totalWindowCoverage >= 5.0
              ? "✓ 100% Continuous 24/7 Coverage"
              : `${Math.round((metrics.totalWindowCoverage / 5.0) * 100)}% Window Coverage`}
          </span>
        </div>

        {/* Stacked Progress Bar */}
        <div className="h-7 w-full rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex text-[11px] font-mono font-bold">
          <div
            className="bg-indigo-600/80 text-white flex items-center justify-center px-2 truncate transition-all"
            style={{ width: `${Math.min(100, (usSub.fiveHourBurstCapacityHours / 5.0) * 100)}%` }}
          >
            🇺🇸 {usSub.name} ({usSub.fiveHourBurstCapacityHours}h)
          </div>
          <div
            className="bg-emerald-600/80 text-white flex items-center justify-center px-2 truncate transition-all"
            style={{
              width: `${Math.min(
                100 - (usSub.fiveHourBurstCapacityHours / 5.0) * 100,
                (metrics.cnEffectiveBurst / 5.0) * 100
              )}%`
            }}
          >
            🇨🇳 {cnSub.name} (+{metrics.cnEffectiveBurst}h)
          </div>
        </div>

        {/* Exact CLI Setup Preview for the Selected Pair */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="rounded-lg bg-slate-900/90 border border-slate-800 p-3.5">
            <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
              1. Paid Compute Host ({selectedVps.name.split(" (")[0]})
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {selectedVps.vcpu} vCPU / {selectedVps.ramGb} GB RAM / {selectedVps.storageGb} GB NVMe
            </div>
            <div className="text-slate-400 text-[11px] mt-1">
              Commercial rate: <strong>${selectedVps.monthly24x7Usd.toFixed(2)}/mo</strong>. Includes root SSH, Docker, Tailscale &amp; local Steel browser support.
            </div>
          </div>

          <div className="rounded-lg bg-slate-900/90 border border-slate-800 p-3.5">
            <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold">
              2. Primary US Login + Bonus Compute
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {usSub.name} (${usSub.monthlyFeeUsd}/mo)
            </div>
            <div className="text-slate-400 text-[11px] mt-1">
              {usSub.includesCloudSandboxText}. Compatible with:{" "}
              <strong className="text-slate-200">{usSub.compatibleHarnesses.join(", ")}</strong>.
            </div>
          </div>

          <div className="rounded-lg bg-slate-900/90 border border-slate-800 p-3.5">
            <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">
              3. Companion CN Coding Plan
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {cnSub.name} (${cnSub.monthlyFeeUsd}/mo)
            </div>
            <div className="text-slate-400 text-[11px] mt-1">
              Plugs directly into <strong className="text-slate-200">Claude Code &amp; OpenClaw</strong>. Saves{" "}
              <strong className="text-emerald-400">${metrics.vsUltraAndCodespaceSavings}/mo</strong> vs a $200 Ultra plan + 24/7 GitHub Codespace!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
