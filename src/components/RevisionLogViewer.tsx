"use client";

import React, { useState } from "react";
import { FIVE_REVISIONS } from "@/data/sandboxData";
import { FileText, CheckCircle2, AlertTriangle, Lightbulb, Download } from "lucide-react";

export default function RevisionLogViewer() {
  const [activeRev, setActiveRev] = useState<number>(3);
  const current = FIVE_REVISIONS.find((r) => r.revNumber === activeRev) || FIVE_REVISIONS[0];

  return (
    <section
      id="five-revisions"
      className="my-12 rounded-2xl border border-amber-500/30 bg-slate-900/90 p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-semibold text-amber-300 mb-2">
            <FileText className="h-3.5 w-3.5" />
            RESEARCH METHODOLOGY • 5 ITERATIVE REVISIONS & ASSUMPTION CHALLENGES
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            How We Challenged Our Assumptions Across 5 Planning Revisions
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Before generating this site, we wrote 5 iterative planning documents challenging our initial
            premises on per-second microVMs, datacenter IP blocking, heartbeat token burn, and mobile TCP freezes.
          </p>
        </div>
      </div>

      {/* Revision Tabs */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {FIVE_REVISIONS.map((r) => {
          const active = r.revNumber === activeRev;
          return (
            <button
              key={r.revNumber}
              type="button"
              onClick={() => setActiveRev(r.revNumber)}
              className={`rounded-xl p-3 text-left border transition-all ${
                active
                  ? "bg-amber-500/15 border-amber-500 text-white shadow-lg"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="text-[11px] font-mono font-bold text-amber-400">
                REVISION 0{r.revNumber}
              </div>
              <div className="text-xs font-semibold mt-0.5 line-clamp-2">{r.title}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Revision Detail Card */}
      <div className="mt-5 rounded-xl bg-slate-950 border border-slate-800 p-5 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase text-amber-400 font-bold">
              Planning Document #{current.revNumber} • planning/{current.fileName}
            </span>
            <h4 className="text-lg font-bold text-white mt-0.5">{current.title}</h4>
          </div>
          <a
            href={`planning/${current.fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 px-3.5 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-500/25 shrink-0"
          >
            <Download className="h-3.5 w-3.5" /> Read Full Markdown Revision
          </a>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4">
            <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1.5">
              <AlertTriangle className="h-4 w-4" /> Assumption Challenged
            </div>
            <p className="text-slate-300 leading-relaxed">{current.assumptionChallenged}</p>
            <div className="font-bold text-rose-300 mt-3 mb-1">Why Naive Math Failed:</div>
            <p className="text-slate-400 leading-relaxed">{current.whatFailed}</p>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1.5">
                <Lightbulb className="h-4 w-4" /> Breakthrough Architectural Insight
              </div>
              <p className="text-slate-300 leading-relaxed">{current.breakthroughInsight}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Quantified Outcome
              </div>
              <p className="text-slate-300 font-medium">{current.quantifiedImpact}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
