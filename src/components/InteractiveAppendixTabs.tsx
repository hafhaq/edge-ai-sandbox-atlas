"use client";

import React, { useState } from "react";
import WorkloadSimulatorWidget from "@/components/WorkloadSimulatorWidget";
import DeepSeekArbitrageWidget from "@/components/DeepSeekArbitrageWidget";
import ProviderAtlasWidget from "@/components/ProviderAtlasWidget";
import MobileControlWidget from "@/components/MobileControlWidget";
import RevisionLogViewer from "@/components/RevisionLogViewer";
import {
  DutyCycleCrossoverChart,
  PriceToPowerScatterChart,
  MobileTopologyFigure
} from "@/components/VisualFigures";
import {
  Calculator,
  Database,
  KeyRound,
  Smartphone,
  FileText,
  BarChart3,
  BookOpen,
  ExternalLink,
  ChevronRight
} from "lucide-react";

type ToolTabId =
  | "simulator"
  | "subscriptions"
  | "atlas"
  | "charts"
  | "mobile"
  | "revisions";

export default function InteractiveAppendixTabs() {
  const [activeTab, setActiveTab] = useState<ToolTabId>("simulator");

  const tabs: { id: ToolTabId; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    {
      id: "simulator",
      label: "TCO & Workload Simulator",
      shortLabel: "TCO Simulator",
      icon: <Calculator className="h-3.5 w-3.5" />
    },
    {
      id: "subscriptions",
      label: "US + CN Subscription Blender",
      shortLabel: "US + CN Subs",
      icon: <KeyRound className="h-3.5 w-3.5" />
    },
    {
      id: "atlas",
      label: "21-Provider Paid Atlas",
      shortLabel: "Provider Atlas",
      icon: <Database className="h-3.5 w-3.5" />
    },
    {
      id: "charts",
      label: "Benchmarks & Topology Charts",
      shortLabel: "Charts",
      icon: <BarChart3 className="h-3.5 w-3.5" />
    },
    {
      id: "mobile",
      label: "Mobile Bootstrap Script",
      shortLabel: "Mobile Script",
      icon: <Smartphone className="h-3.5 w-3.5" />
    },
    {
      id: "revisions",
      label: "Research Notes & 5 Revisions",
      shortLabel: "5 Revisions",
      icon: <FileText className="h-3.5 w-3.5" />
    }
  ];

  return (
    <section
      id="interactive-lab"
      className="my-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
            <BookOpen className="h-3.5 w-3.5" /> INTERACTIVE DATA APPENDIX &amp; CALCULATORS
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Explore the Underlying Data, Calculators &amp; Research Log
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            All raw benchmarks, 21-provider tables, interactive calculators, and the 5 research revisions live here so the main essay stays focused.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div
        role="tablist"
        aria-label="Interactive calculators and research appendix"
        className="mt-5 flex flex-wrap gap-2"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold border transition-all ${
                isActive
                  ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="mt-4">
        {activeTab === "simulator" && (
          <div className="-my-6">
            <WorkloadSimulatorWidget />
          </div>
        )}
        {activeTab === "subscriptions" && (
          <div className="-my-6">
            <DeepSeekArbitrageWidget />
          </div>
        )}
        {activeTab === "atlas" && (
          <div className="-my-6">
            <ProviderAtlasWidget />
          </div>
        )}
        {activeTab === "charts" && (
          <div className="space-y-6 pt-2">
            <DutyCycleCrossoverChart />
            <PriceToPowerScatterChart />
            <MobileTopologyFigure />
          </div>
        )}
        {activeTab === "mobile" && (
          <div className="-my-6">
            <MobileControlWidget />
          </div>
        )}
        {activeTab === "revisions" && (
          <div className="space-y-6 pt-2">
            <div className="-my-6">
              <RevisionLogViewer />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5">
              <h4 className="text-sm font-bold text-white mb-2">
                Primary Rate-Card Sources (2026)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  { name: "Replit Core / Pro / Reserved VMs", url: "https://replit.com/pricing", domain: "replit.com" },
                  { name: "Anthropic Claude Pro / Max / Ultra", url: "https://claude.com/pricing", domain: "claude.com" },
                  { name: "OpenAI Dots & ChatGPT OAuth", url: "https://openai.com", domain: "openai.com" },
                  { name: "Google AI Pro & Jules Cloud VMs", url: "https://jules.google", domain: "jules.google" },
                  { name: "xAI SuperGrok & Colossus", url: "https://x.ai", domain: "x.ai" },
                  { name: "Cursor & Devin / Windsurf", url: "https://cursor.com/pricing", domain: "cursor.com" },
                  { name: "GitHub Codespaces & Copilot", url: "https://github.com/features/copilot/plans", domain: "github.com" },
                  { name: "Z.ai GLM-5.3 Coding Plans", url: "https://z.ai", domain: "z.ai" },
                  { name: "Alibaba Qwen Coder Plans", url: "https://www.alibabacloud.com", domain: "alibabacloud.com" },
                  { name: "Moonshot Kimi K2.5 Code", url: "https://kimi.moonshot.cn", domain: "kimi.moonshot.cn" },
                  { name: "MiniMax M-Plan Coding Subs", url: "https://www.minimax.io", domain: "minimax.io" },
                  { name: "Netcup & Hetzner Cloud / Dedicated", url: "https://www.hetzner.com/cloud", domain: "hetzner.com" },
                  { name: "Modal, E2B, Daytona, Fly Sprites", url: "https://modal.com/pricing", domain: "modal.com" },
                  { name: "Steel.dev & Browserbase", url: "https://steel.dev/pricing", domain: "steel.dev" },
                  { name: "RunPod, Vast.ai & Lambda Labs", url: "https://www.runpod.io/pricing", domain: "runpod.io" }
                ].map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-slate-900/90 border border-slate-800 px-3 py-2 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-colors"
                  >
                    <span className="truncate pr-2">{src.name}</span>
                    <span className="text-[10px] font-mono text-indigo-400 shrink-0 flex items-center gap-1">
                      {src.domain} <ExternalLink className="h-2.5 w-2.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Jump Note */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span>
          Looking for the essay? Scroll back up to jump straight into the setup guide.
        </span>
        <a
          href="#how-to-build"
          className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
        >
          Back to How-To Guide <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
