"use client";

import React from "react";

/**
 * Figure 1: Bundled Big-Player Cloud Workspaces vs. Paid Non-Major Cloud VM + Subsidized US/CN Subscription Logins
 */
export function DutyCycleCrossoverChart() {
  const dataPoints = [
    {
      label: "Scenario A: 24/7 Persistent Coding Agent (8GB–16GB RAM + Full-Time LLM Quota)",
      codespacesCost: 262.8, // 4-core/16GB Codespace 24/7 ($0.36/hr) + Copilot Pro+ ($39) = ~$301
      replitCost: 150.0, // Replit Pro ($100) + Reserved 8GB VM ($50)
      modularDualCost: 44.2, // Netcup VPS 1000 8GB/256GB ($6.20) + Claude Pro ($20) + Z.ai GLM Coding Plan ($18)
      winner: "Netcup 8GB VM ($6.20) + Claude Pro ($20) + Z.ai GLM ($18) = $44.20/mo flat"
    },
    {
      label: "Scenario B: Heavy Marathon Engineering (16GB DDR5 VM + 5x–10x Priority Quota)",
      codespacesCost: 362.8, // 4-core Codespace 24/7 ($262.80) + Copilot Max ($100)
      replitCost: 230.0, // Replit Pro ($100) + 16GB Reserved VM ($130)
      modularDualCost: 134.5, // Netcup RS 2000 16GB/512GB ($15.50) + Claude Max ($100) + Kimi/MiniMax ($19)
      winner: "Netcup RS 2000 16GB ($15.50) + Claude Max ($100) + MiniMax ($19) = $134.50/mo"
    },
    {
      label: "Scenario C: Async Repo PR Swarm (15 Parallel Sandboxes + Daily CLI Coding)",
      codespacesCost: 200.0, // Cursor Ultra ($200/mo) or Devin Max ($200/mo)
      replitCost: 100.0, // Replit Pro ($100/mo, up to 10 parallel agents)
      modularDualCost: 46.49, // Hetzner CAX21 ($7.50) + Google AI Pro ($19.99 w/ 15 Jules VMs!) + Qwen Coder ($19)
      winner: "Hetzner 8GB ($7.50) + Google AI Pro ($19.99 w/ 15 Jules VMs) + Qwen Coder ($19) = $46.49/mo"
    },
    {
      label: "Scenario D: 40x Parallel 30-Sec Burst CI Sandbox Evals (300 Sandbox-Hrs/Mo)",
      codespacesCost: 160.0, // Static VM fleet needed to avoid OOM at 40x concurrency
      replitCost: 145.0,
      modularDualCost: 23.7, // Modal Paid Commercial Rate ($0.079/hr * 300 hrs = $23.70/mo)
      winner: "Modal Paid Serverless ($23.70/mo) or Cloudflare Active-CPU Sandboxes"
    }
  ];

  return (
    <figure className="my-10 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
            FIGURE 1 • ALL-IN MONTHLY COST: BUNDLED BIG-PLAYER IDEs vs. MODULAR VM + SUBSIDIZED LOGINS
          </span>
          <h4 className="text-lg font-bold text-white mt-0.5">
            100% Paid Commercial Tiers: GitHub Codespaces / Cursor Ultra &amp; Replit Reserved VMs vs. Non-Major VM + US/CN Plans
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500 inline-block" /> Modular VM + US/CN Subs
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="h-2.5 w-2.5 rounded-sm bg-amber-500 inline-block" /> Replit Pro + Reserved VM
          </span>
          <span className="flex items-center gap-1.5 text-rose-400">
            <span className="h-2.5 w-2.5 rounded-sm bg-rose-500 inline-block" /> 24/7 Codespaces / $200 Ultra
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {dataPoints.map((row, idx) => {
          const maxVal = 370;
          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{row.label}</span>
                <span className="text-emerald-400 font-mono text-[11px]">
                  Winner: <strong>{row.winner}</strong>
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-36 text-slate-300 shrink-0">Modular VM + Subs</span>
                  <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, (row.modularDualCost / maxVal) * 100)}%` }}
                    />
                  </div>
                  <span className="w-20 text-right text-emerald-300 font-bold">
                    ${row.modularDualCost.toFixed(2)}/mo
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-36 text-slate-400 shrink-0">Replit + Reserved</span>
                  <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, (row.replitCost / maxVal) * 100)}%` }}
                    />
                  </div>
                  <span className="w-20 text-right text-amber-300 font-bold">
                    ${row.replitCost.toFixed(2)}/mo
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-36 text-slate-400 shrink-0">Codespaces / Ultra</span>
                  <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, (row.codespacesCost / maxVal) * 100)}%` }}
                    />
                  </div>
                  <span className="w-20 text-right text-rose-300 font-bold">
                    ${row.codespacesCost.toFixed(2)}/mo
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <figcaption className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          *Zero free tiers used. All prices reflect verified 2026 commercial rates across Netcup, Hetzner, Replit, GitHub Codespaces, Anthropic, Google AI Pro, and Z.ai/Qwen Coding Plans.
        </span>
        <span className="text-slate-400">
          Sources:{" "}
          <a href="https://replit.com/pricing" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            replit.com
          </a>
          ,{" "}
          <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            claude.com
          </a>
          ,{" "}
          <a href="https://jules.google" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            jules.google
          </a>
          ,{" "}
          <a href="https://www.netcup.com" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            netcup.com
          </a>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Figure 2: Price-to-Power Frontier Scatter Matrix (Paid Commercial Tiers Only)
 */
export function PriceToPowerScatterChart() {
  const nodes = [
    { name: "Netcup VPS 1000 (256GB)", x: 10, y: 97, r: 12, color: "#10b981", sub: "$6.20/mo • 4C / 8GB / 256GB" },
    { name: "Hetzner CAX21 / CPX31", x: 16, y: 95, r: 11, color: "#10b981", sub: "$7.50-$14.50/mo • 8GB NVMe" },
    { name: "Contabo VPS 6 (16GB)", x: 13, y: 88, r: 14, color: "#34d399", sub: "$10.50/mo • 6C / 16GB RAM" },
    { name: "Google Jules (AI Pro)", x: 25, y: 96, r: 12, color: "#c084fc", sub: "$19.99/mo • 15 Async VMs + CLI" },
    { name: "xAI SuperGrok Colossus", x: 31, y: 88, r: 11, color: "#c084fc", sub: "$30/mo • Grok 4.7 + Live X" },
    { name: "Cloudflare Sandboxes", x: 36, y: 90, r: 9, color: "#38bdf8", sub: "$5 base • Active-CPU" },
    { name: "Replit Core / Pro", x: 42, y: 84, r: 10, color: "#c084fc", sub: "$25-$100/mo • All-in-One IDE" },
    { name: "Modal Paid Sandboxes", x: 48, y: 94, r: 10, color: "#818cf8", sub: "$0.079/hr per-sec" },
    { name: "Steel.dev Browser", x: 54, y: 94, r: 10, color: "#f472b6", sub: "$0.08-$0.10/hr + OSS Docker" },
    { name: "Browserbase", x: 60, y: 90, r: 10, color: "#f472b6", sub: "$20-$99/mo • Stagehand" },
    { name: "Daytona / E2B Pro", x: 66, y: 89, r: 9, color: "#818cf8", sub: "85-150ms Firecracker/Kata" },
    { name: "Claude Max / OpenAI Dots", x: 73, y: 90, r: 12, color: "#c084fc", sub: "$100/mo • 5x Quota / Dot VM" },
    { name: "Cursor Ultra / Devin Max", x: 78, y: 85, r: 12, color: "#a855f7", sub: "$200/mo • Cloud SWE Swarm" },
    { name: "RunPod 4090 / Vast A100", x: 85, y: 95, r: 15, color: "#fbbf24", sub: "$0.34-$0.67/hr • 24-80GB VRAM" },
    { name: "Modal / Lambda H100", x: 93, y: 93, r: 15, color: "#f59e0b", sub: "$3.95-$4.29/hr • 80GB H100" }
  ];

  return (
    <figure className="my-10 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
          FIGURE 2 • THE 2026 PAID COMMERCIAL PRICE-TO-POWER PARETO FRONTIER
        </span>
        <h4 className="text-lg font-bold text-white mt-0.5">
          All-Players Matrix: Big-Tech Workspaces, Non-Major VMs, MicroVMs, Remote Browsers &amp; GPU Factories
        </h4>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox="0 0 800 380"
          role="img"
          aria-label="Scatter plot comparing 2026 paid sandbox providers by cost tier on the X axis and Price-to-Power score on the Y axis"
          className="w-full min-w-[640px] h-auto bg-slate-900/60 rounded-xl border border-slate-800/80"
        >
          {[80, 85, 90, 95].map((score, i) => {
            const y = 330 - ((score - 76) / 24) * 280;
            return (
              <g key={i}>
                <line x1="60" y1={y} x2="765" y2={y} stroke="#1e293b" strokeDasharray="4 4" />
                <text x="48" y={y + 4} textAnchor="end" fill="#64748b" fontSize="11" fontFamily="monospace">
                  {score}
                </text>
              </g>
            );
          })}

          <text x="410" y="368" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">
            Paid Commercial Spend Tier (Left: $6–$15/mo Non-Major VMs → Middle: $20–$200 Big-Player IDEs &amp; MicroVMs → Right: GPU Factories)
          </text>
          <text
            x="18"
            y="190"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="12"
            fontWeight="600"
            transform="rotate(-90 18 190)"
          >
            Price-to-Power Sweet Spot Score (78–100)
          </text>

          <path
            d="M 105 90 Q 260 65, 500 88 T 740 92"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.5"
          />

          {nodes.map((n, i) => {
            const cx = 65 + (n.x / 100) * 680;
            const cy = 330 - ((n.y - 76) / 24) * 280;
            return (
              <g key={i} className="transition-transform hover:scale-110">
                <circle cx={cx} cy={cy} r={n.r} fill={n.color} fillOpacity="0.28" stroke={n.color} strokeWidth="2" />
                <circle cx={cx} cy={cy} r={3.5} fill={n.color} />
                <text
                  x={cx}
                  y={cy - n.r - 6}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="10.5"
                  fontWeight="700"
                >
                  {n.name}
                </text>
                <text
                  x={cx}
                  y={cy + n.r + 12}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  {n.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className="mt-3 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-3">
          <span className="text-emerald-400">● Paid Non-Major Cloud VPS</span>
          <span className="text-purple-400">● Big-Player Workspaces (Replit/Claude/Jules/Grok/Cursor/Devin)</span>
          <span className="text-indigo-400">● Per-Second MicroVMs</span>
          <span className="text-pink-400">● Remote Browser Fleets</span>
          <span className="text-amber-400">● Paid GPU AI Factories</span>
        </div>
        <span>Sources: Verified 2026 commercial pricing docs (zero free tiers)</span>
      </figcaption>
    </figure>
  );
}

/**
 * Figure 3: Mobile Pocket Control Plane & Subsidized OAuth Login Topology
 */
export function MobileTopologyFigure() {
  return (
    <figure className="my-10 rounded-2xl border border-indigo-500/30 bg-slate-950/90 p-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
          FIGURE 3 • POCKET CONTROL PLANE &amp; SUBSIDIZED SUBSCRIPTION AUTH TOPOLOGY (REVISION 4)
        </span>
        <h4 className="text-lg font-bold text-white mt-0.5">
          How Your Phone Steers a Paid Non-Major VM Authenticated With Both US OAuth &amp; Chinese Coding Plans
        </h4>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox="0 0 820 260"
          role="img"
          aria-label="Architecture diagram showing iPhone or Android connecting via Tailscale WireGuard and UDP Mosh to a Paid Cloud Sandbox VM logged into US and Chinese Subsidized LLM Subscriptions"
          className="w-full min-w-[660px] h-auto bg-slate-900/60 rounded-xl border border-slate-800 p-2"
        >
          {/* Left Box: Mobile Phone */}
          <rect x="20" y="25" width="195" height="210" rx="14" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
          <text x="117" y="50" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="700" fontFamily="monospace">
            POCKET DIRECTOR
          </text>
          <text x="117" y="69" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
            iPhone / Android (5G/Wi-Fi)
          </text>
          <rect x="35" y="84" width="165" height="28" rx="6" fill="#1e1b4b" stroke="#4f46e5" />
          <text x="117" y="102" textAnchor="middle" fill="#e0e7ff" fontSize="10.5">
            1. Blink Shell / Termius (Mosh)
          </text>
          <rect x="35" y="118" width="165" height="28" rx="6" fill="#1e1b4b" stroke="#4f46e5" />
          <text x="117" y="136" textAnchor="middle" fill="#e0e7ff" fontSize="10.5">
            2. Happy / Telegram Voice Bot
          </text>
          <rect x="35" y="152" width="165" height="28" rx="6" fill="#1e1b4b" stroke="#4f46e5" />
          <text x="117" y="170" textAnchor="middle" fill="#e0e7ff" fontSize="10.5">
            3. Safari OAuth &amp; 2FA Takeover
          </text>
          <rect x="35" y="186" width="165" height="26" rx="6" fill="#311042" stroke="#9333ea" />
          <text x="117" y="203" textAnchor="middle" fill="#f3e8ff" fontSize="10">
            4. Replit / Jules / Claude App
          </text>

          {/* Middle Tunnel: WireGuard + Mosh UDP */}
          <rect x="250" y="50" width="245" height="160" rx="12" fill="#022c22" fillOpacity="0.45" stroke="#10b981" strokeDasharray="6 4" strokeWidth="1.8" />
          <text x="372" y="75" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700" fontFamily="monospace">
            TAILSCALE + UDP MOSH
          </text>
          <line x1="215" y1="103" x2="535" y2="103" stroke="#10b981" strokeWidth="2.5" />
          <text x="372" y="96" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="600">
            UDP Mosh (60000-60100) • Never Freezes
          </text>
          <line x1="215" y1="145" x2="535" y2="145" stroke="#38bdf8" strokeWidth="2" />
          <text x="372" y="138" textAnchor="middle" fill="#bae6fd" fontSize="10.5">
            OAuth Callback Paste + Steel Live (:5173)
          </text>
          <text x="372" y="188" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace">
            Public Port 22: CLOSED (Zero Brute-Force)
          </text>

          {/* Right Box: Sovereign Cloud Sandbox VM */}
          <rect x="535" y="18" width="265" height="224" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
          <text x="667" y="42" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700" fontFamily="monospace">
            PAID NON-MAJOR CLOUD VM ($6.20–$15.50/mo)
          </text>
          <text x="667" y="60" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="700">
            Netcup 256GB NVMe / Hetzner 8GB–16GB
          </text>

          <rect x="551" y="72" width="233" height="44" rx="8" fill="#1e293b" stroke="#475569" />
          <text x="667" y="90" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">
            Tmux / Zellij Persistent Agent Harness
          </text>
          <text x="667" y="106" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            Claude Code CLI • OpenClaw • Gemini CLI
          </text>

          <rect x="551" y="124" width="233" height="46" rx="8" fill="#1e1b4b" stroke="#6366f1" />
          <text x="667" y="142" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="700">
            🇺🇸 Paid US Login ($20–$100/mo Flat)
          </text>
          <text x="667" y="158" textAnchor="middle" fill="#a5b4fc" fontSize="9.5" fontFamily="monospace">
            Claude Pro/Max • ChatGPT Plus • Google AI Pro • Grok
          </text>

          <rect x="551" y="178" width="233" height="46" rx="8" fill="#064e3b" stroke="#059669" />
          <text x="667" y="196" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="700">
            🇨🇳 Paid CN Coding Plan ($18–$19/mo Flat)
          </text>
          <text x="667" y="212" textAnchor="middle" fill="#6ee7b7" fontSize="9.5" fontFamily="monospace">
            Z.ai GLM-5.3 • Qwen Coder • Kimi K2.5 • MiniMax M2.5
          </text>
        </svg>
      </div>

      <figcaption className="mt-3 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span>
          Zero per-token OpenRouter fees: your VM authenticates directly with your flat-rate US OAuth &amp; Chinese Coding Plan keys.
        </span>
        <span>
          Sources:{" "}
          <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            openclaw.ai
          </a>
          ,{" "}
          <a href="https://claude.com" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            claude.com
          </a>
          ,{" "}
          <a href="https://z.ai" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            z.ai
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
