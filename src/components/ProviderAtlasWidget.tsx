"use client";

import React, { useState, useMemo } from "react";
import { SANDBOX_PROVIDERS, WorkloadCategory } from "@/data/sandboxData";
import {
  Search,
  Filter,
  ArrowUpDown,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Database
} from "lucide-react";

type SortKey = "priceToPowerScore" | "hourlyRateUsd" | "monthly24x7Usd" | "ramGb" | "coldStartMs";

export default function ProviderAtlasWidget() {
  const [categoryFilter, setCategoryFilter] = useState<WorkloadCategory | "all">("all");
  const [useCaseFilter, setUseCaseFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey>("priceToPowerScore");
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [expandedId, setExpandedId] = useState<string | null>("hetzner-cax21");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(key === "hourlyRateUsd" || key === "monthly24x7Usd" || key === "coldStartMs");
    }
  };

  const filteredProviders = useMemo(() => {
    return SANDBOX_PROVIDERS.filter((p) => {
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      if (useCaseFilter !== "all" && p.bestUseCase !== useCaseFilter) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.isolation.toLowerCase().includes(q) ||
          p.representativeTier.toLowerCase().includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      return sortAsc ? valA - valB : valB - valA;
    });
  }, [categoryFilter, useCaseFilter, searchQuery, sortKey, sortAsc]);

  return (
    <section
      id="widget-provider-atlas"
      className="my-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-xs font-semibold text-cyan-300 mb-2">
            <Database className="h-3.5 w-3.5" />
            INTERACTIVE JAVASCRIPT WIDGET #3 • COMPLETE 19-PROVIDER BENCHMARK ATLAS
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Filterable Cloud Sandbox, Remote Browser & AI Factory Comparison Matrix
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Click any row to inspect full subscription tiers, free compute credits, architectural isolation,
            gotchas, and verified pricing citations.
          </p>
        </div>

        <div className="relative w-full md:w-72 shrink-0">
          <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Firecracker, H100, ARM..."
            aria-label="Search providers by name, isolation, or tier"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Category & Use Case Filters */}
      <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: "all", label: "All Categories (19)" },
            { id: "managed-agent", label: "Managed Agent Computers (Dots)" },
            { id: "microvm-sandbox", label: "MicroVM Code Sandboxes" },
            { id: "remote-browser", label: "Remote Browsers" },
            { id: "non-major-vps", label: "Non-Major Cloud VMs" },
            { id: "gpu-factory", label: "GPU AI Factories" }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoryFilter(cat.id as WorkloadCategory | "all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                categoryFilter === cat.id
                  ? "bg-cyan-500/20 border-cyan-500 text-cyan-200"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-slate-400" />
          <label htmlFor="use-case-select" className="text-xs text-slate-400">
            Best Use Case:
          </label>
          <select
            id="use-case-select"
            value={useCaseFilter}
            onChange={(e) => setUseCaseFilter(e.target.value)}
            className="rounded-lg bg-slate-950 border border-slate-800 px-2.5 py-1.5 text-xs text-slate-200"
          >
            <option value="all">All Workloads</option>
            <option value="OpenClaw 24/7">OpenClaw 24/7</option>
            <option value="Burst Code Sandbox">Burst Code Sandbox</option>
            <option value="Remote Browser">Remote Browser</option>
            <option value="AI Factory">AI Factory</option>
            <option value="Enterprise Teammate">Enterprise Teammate</option>
          </select>
        </div>
      </div>

      {/* Accessible Responsive Table with Sticky Headers */}
      <div
        tabIndex={0}
        role="region"
        aria-label="Cloud Sandbox Provider Comparison Table"
        className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90"
      >
        <table className="w-full text-left border-collapse text-xs">
          <thead className="bg-slate-900/95 text-slate-300 border-b border-slate-800 sticky top-0 z-10">
            <tr>
              <th className="py-3.5 px-4 font-semibold">Provider & Isolation</th>
              <th className="py-3.5 px-3 font-semibold">Representative Sandbox Tier</th>
              <th className="py-3.5 px-3 font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("ramGb")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Compute Specs <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="py-3.5 px-3 font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("hourlyRateUsd")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Effective Rate <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="py-3.5 px-3 font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("monthly24x7Usd")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  24/7 Monthly <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="py-3.5 px-3 font-semibold">Best Workload</th>
              <th className="py-3.5 px-3 font-semibold">
                <button
                  type="button"
                  onClick={() => handleSort("priceToPowerScore")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Sweet Spot Score <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="py-3.5 px-3 font-semibold text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            {filteredProviders.map((p) => {
              const isExpanded = expandedId === p.id;
              return (
                <React.Fragment key={p.id}>
                  <tr
                    onClick={() => setExpandedId(isExpanded ? null : p.id)}
                    className={`cursor-pointer transition-colors ${
                      isExpanded ? "bg-indigo-950/30" : "hover:bg-slate-900/70"
                    }`}
                  >
                    <th scope="row" className="py-3.5 px-4 font-medium text-white">
                      <div className="font-bold text-sm">{p.name}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{p.isolation}</div>
                    </th>
                    <td className="py-3.5 px-3 text-slate-300 max-w-xs">
                      <div className="font-medium text-slate-200 line-clamp-1">
                        {p.representativeTier}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {p.baseCreditsText}
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-slate-200 whitespace-nowrap">
                      <div>
                        {p.vcpu} vCPU / {p.ramGb} GB RAM
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {p.gpuModel ? (
                          <span className="text-amber-300">{p.gpuModel}</span>
                        ) : (
                          `${p.storageGb} GB Disk`
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono whitespace-nowrap">
                      <div className="text-emerald-400 font-bold">
                        {p.hourlyRateUsd === 0 ? "$0.00/hr" : `$${p.hourlyRateUsd.toFixed(4).replace(/0+$/, "").replace(/\.$/, "")}/hr`}
                      </div>
                      <div className="text-[10px] text-slate-400">{p.billingGranularity}</div>
                    </td>
                    <td className="py-3.5 px-3 font-mono whitespace-nowrap">
                      <span className="font-bold text-white">${p.monthly24x7Usd.toFixed(2)}</span>
                      <span className="text-slate-400">/mo</span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-block rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300">
                        {p.bestUseCase}
                      </span>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400"
                            style={{ width: `${p.priceToPowerScore}%` }}
                          />
                        </div>
                        <span className="font-mono font-bold text-white">
                          {p.priceToPowerScore}/100
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={`Toggle details for ${p.name}`}
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        {isExpanded ? (
                          <>
                            Hide <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Inspect <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </td>
                  </tr>

                  {isExpanded && (
                    <tr className="bg-slate-900/95 border-b border-slate-800">
                      <td colSpan={8} className="p-5">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
                              Architectural Notes & Billing Mechanics
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed mb-3">
                              {p.architectureNotes}
                            </p>
                            <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                              <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                                Cold Start: {p.coldStartMs === 0 ? "Always-On (0ms)" : `${p.coldStartMs}ms`}
                              </span>
                              <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                                Stealth Anti-Bot: {p.stealthScore}/100
                              </span>
                              <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                                Root Sovereignty: {p.sovereigntyScore}/100
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                              Where It Wins (Strengths)
                            </div>
                            <ul className="space-y-1.5">
                              {p.pros.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col justify-between">
                            <div>
                              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                                Architectural Gotchas & Limits
                              </div>
                              <ul className="space-y-1.5">
                                {p.gotchas.map((g, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                    <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                                    <span>{g}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                              <span className="text-[11px] text-slate-400">
                                Primary Pricing Source:
                              </span>
                              <a
                                href={p.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 px-3 py-1 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/25"
                              >
                                Verify at {p.sourceDomain} <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
