"use client";

import React from "react";
import { ExternalLink, BarChart3, TrendingUp, Cpu, Smartphone } from "lucide-react";

/**
 * Figure 1: The Duty-Cycle & Concurrency Crossover Chart (Per-Second MicroVMs vs Static Non-Major Cloud VMs)
 */
export function DutyCycleCrossoverChart() {
  const dataPoints = [
    {
      label: "1x Agent • 15 min/day (Burst Eval)",
      modalCost: 0.0, // Covered by $30 free credit ($0.59 raw)
      modalRaw: 0.59,
      e2bCost: 1.28,
      hetznerCost: 7.5,
      winner: "Modal ($0 net / $0.59 raw)"
    },
    {
      label: "25x Parallel Swarm • 30 min/day",
      modalCost: 0.0, // $29.62 raw - $30 credit = $0
      modalRaw: 29.62,
      e2bCost: 63.75,
      hetznerCost: 97.5, // Needs 13x 4-vCPU VMs to avoid OOM at 25x simultaneous builds
      winner: "Modal ($0 net) / Daytona"
    },
    {
      label: "1x Personal Agent • 8 hrs/day",
      modalCost: 0.0, // $18.96 raw - $30 credit
      modalRaw: 18.96,
      e2bCost: 40.8,
      hetznerCost: 7.5,
      winner: "Hetzner CAX21 ($7.50) / Netcup ($6.20)"
    },
    {
      label: "1x OpenClaw 24/7 Daemon (730 hrs/mo)",
      modalCost: 27.67, // $57.67 - $30 credit
      modalRaw: 57.67,
      e2bCost: 124.1,
      hetznerCost: 7.5,
      winner: "Hetzner ($7.50) / Fly Sprites Active-CPU"
    }
  ];

  return (
    <figure className="my-10 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
            FIGURE 1 • THE DUTY-CYCLE & CONCURRENCY CROSSOVER
          </span>
          <h4 className="text-lg font-bold text-white mt-0.5">
            Monthly Compute Bill: Per-Second Serverless MicroVMs vs. 24/7 Non-Major Cloud VMs
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500 inline-block" /> Hetzner CAX21
          </span>
          <span className="flex items-center gap-1.5 text-indigo-400">
            <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500 inline-block" /> Modal (Raw)
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="h-2.5 w-2.5 rounded-sm bg-amber-500 inline-block" /> E2B
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {dataPoints.map((row, idx) => {
          const maxVal = 130;
          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{row.label}</span>
                <span className="text-emerald-400 font-mono text-[11px]">
                  Optimal Choice: <strong>{row.winner}</strong>
                </span>
              </div>

              {/* Bars */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-28 text-slate-400 shrink-0">Hetzner 8GB</span>
                  <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, (row.hetznerCost / maxVal) * 100)}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-emerald-300 font-bold">
                    ${row.hetznerCost.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-28 text-slate-400 shrink-0">Modal 2C/4GB</span>
                  <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, (row.modalRaw / maxVal) * 100)}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-indigo-300 font-bold">
                    ${row.modalRaw.toFixed(2)}*
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-28 text-slate-400 shrink-0">E2B 2C/4GB</span>
                  <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, (row.e2bCost / maxVal) * 100)}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-amber-300 font-bold">
                    ${row.e2bCost.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <figcaption className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          *Note: Modal Starter includes <strong>$30/mo in free compute credits</strong>, dropping net bill to $0.00/mo for the first ~380 sandbox-hours.
        </span>
        <span className="text-slate-400">
          Sources:{" "}
          <a href="https://e2b.dev/pricing" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            e2b.dev
          </a>
          ,{" "}
          <a href="https://modal.com/pricing" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            modal.com
          </a>
          ,{" "}
          <a href="https://www.hetzner.com/cloud" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            hetzner.com
          </a>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Figure 2: Price-to-Power Frontier Scatter Matrix (SVG Chart)
 */
export function PriceToPowerScatterChart() {
  const nodes = [
    { name: "Oracle OCI Free (24GB)", x: 8, y: 92, r: 13, color: "#10b981", sub: "$0/mo • 4 ARM / 24GB" },
    { name: "Hetzner CAX21", x: 18, y: 95, r: 10, color: "#10b981", sub: "$7.50/mo • 4 ARM / 8GB" },
    { name: "Netcup VPS 1000", x: 15, y: 90, r: 10, color: "#10b981", sub: "$6.20/mo • 256GB NVMe" },
    { name: "Contabo VPS 4", x: 13, y: 80, r: 11, color: "#34d399", sub: "$5.28/mo • High RAM" },
    { name: "Cloudflare Sandboxes", x: 34, y: 86, r: 9, color: "#38bdf8", sub: "$5 base • Active-CPU" },
    { name: "Fly.io Sprites", x: 39, y: 83, r: 9, color: "#38bdf8", sub: "$0.0385/CPU-hr active" },
    { name: "Modal Sandboxes", x: 46, y: 94, r: 11, color: "#818cf8", sub: "$0.079/hr ($30 free)" },
    { name: "Steel.dev Browser", x: 52, y: 89, r: 10, color: "#f472b6", sub: "$0.08-$0.10/hr + OSS" },
    { name: "Browserbase", x: 58, y: 85, r: 10, color: "#f472b6", sub: "$20-$99/mo • Stagehand" },
    { name: "Daytona", x: 63, y: 88, r: 9, color: "#818cf8", sub: "<90ms boot • $0.165/hr" },
    { name: "E2B MicroVM", x: 67, y: 86, r: 9, color: "#818cf8", sub: "150ms Firecracker" },
    { name: "OpenAI Dots (Pro)", x: 75, y: 82, r: 12, color: "#c084fc", sub: "$100/mo • GPT-6 + VM" },
    { name: "RunPod RTX 4090", x: 79, y: 91, r: 13, color: "#fbbf24", sub: "$0.34/hr • 24GB VRAM" },
    { name: "Vast.ai A100 80GB", x: 85, y: 95, r: 15, color: "#fbbf24", sub: "$0.67/hr • 80GB VRAM" },
    { name: "Modal Serverless H100", x: 92, y: 93, r: 15, color: "#f59e0b", sub: "$3.95/hr per-sec" }
  ];

  return (
    <figure className="my-10 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
          FIGURE 2 • THE 2026 PRICE-TO-POWER PARETO FRONTIER
        </span>
        <h4 className="text-lg font-bold text-white mt-0.5">
          Compute Density & Workload Performance Score vs. Normalized Cost Tier (Bubble Size = RAM/VRAM Capacity)
        </h4>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox="0 0 800 380"
          role="img"
          aria-label="Scatter plot comparing sandbox providers by cost tier on the X axis and Price-to-Power score on the Y axis"
          className="w-full min-w-[640px] h-auto bg-slate-900/60 rounded-xl border border-slate-800/80"
        >
          {/* Grid Lines */}
          {[75, 80, 85, 90, 95].map((score, i) => {
            const y = 330 - ((score - 72) / 26) * 280;
            return (
              <g key={i}>
                <line x1="60" y1={y} x2="765" y2={y} stroke="#1e293b" strokeDasharray="4 4" />
                <text x="48" y={y + 4} textAnchor="end" fill="#64748b" fontSize="11" fontFamily="monospace">
                  {score}
                </text>
              </g>
            );
          })}

          {/* Axes labels */}
          <text x="410" y="368" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">
            Normalized Spend Profile (Left: $0–$7/mo Sovereign VMs → Middle: Per-Sec MicroVMs & Browsers → Right: Dedicated GPU Factories)
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
            Price-to-Power Sweet Spot Score (75–100)
          </text>

          {/* Pareto Frontier Curve */}
          <path
            d="M 100 105 Q 240 60, 480 85 T 735 90"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.5"
          />

          {/* Nodes */}
          {nodes.map((n, i) => {
            const cx = 65 + (n.x / 100) * 680;
            const cy = 330 - ((n.y - 72) / 26) * 280;
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
          <span className="text-emerald-400">● Non-Major Cloud VPS</span>
          <span className="text-sky-400">● Active-CPU Edge Sandboxes</span>
          <span className="text-indigo-400">● Per-Second MicroVMs</span>
          <span className="text-pink-400">● Remote Browser Fleets</span>
          <span className="text-amber-400">● GPU AI Factories</span>
        </div>
        <span>
          Sources: Verified 2026 provider rate cards (Hetzner, Netcup, Modal, E2B, Daytona, Steel.dev, Vast.ai, RunPod)
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Figure 3: Mobile Pocket Control Plane Network Topology SVG Diagram
 */
export function MobileTopologyFigure() {
  return (
    <figure className="my-10 rounded-2xl border border-indigo-500/30 bg-slate-950/90 p-6 shadow-xl">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
          FIGURE 3 • ZERO-TRUST POCKET CONTROL PLANE TOPOLOGY (REVISION 4 ARCHITECTURE)
        </span>
        <h4 className="text-lg font-bold text-white mt-0.5">
          Why TCP Port 22 Freezes on Cellular — And How Tailscale WireGuard + UDP Mosh + Tmux Solves It
        </h4>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox="0 0 820 260"
          role="img"
          aria-label="Architecture diagram showing iPhone or Android connecting via Tailscale WireGuard and UDP Mosh to a Cloud Sandbox VM running Tmux, OpenClaw, Claude Code, and Steel Remote Browser"
          className="w-full min-w-[660px] h-auto bg-slate-900/60 rounded-xl border border-slate-800 p-2"
        >
          {/* Left Box: Mobile Phone */}
          <rect x="20" y="30" width="195" height="200" rx="14" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
          <text x="117" y="55" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="700" fontFamily="monospace">
            POCKET THIN CLIENT
          </text>
          <text x="117" y="74" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
            iPhone / Android (5G/Wi-Fi)
          </text>
          <rect x="35" y="90" width="165" height="28" rx="6" fill="#1e1b4b" stroke="#4f46e5" />
          <text x="117" y="108" textAnchor="middle" fill="#e0e7ff" fontSize="10.5">
            1. Blink Shell / Termius (Mosh)
          </text>
          <rect x="35" y="125" width="165" height="28" rx="6" fill="#1e1b4b" stroke="#4f46e5" />
          <text x="117" y="143" textAnchor="middle" fill="#e0e7ff" fontSize="10.5">
            2. Happy / Telegram Voice Bot
          </text>
          <rect x="35" y="160" width="165" height="28" rx="6" fill="#1e1b4b" stroke="#4f46e5" />
          <text x="117" y="178" textAnchor="middle" fill="#e0e7ff" fontSize="10.5">
            3. Safari Live Steel Browser
          </text>
          <text x="117" y="212" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">
            Tailscale IP: 100.64.0.2
          </text>

          {/* Middle Tunnel: WireGuard + Mosh UDP */}
          <rect x="255" y="55" width="245" height="150" rx="12" fill="#022c22" fillOpacity="0.45" stroke="#10b981" strokeDasharray="6 4" strokeWidth="1.8" />
          <text x="377" y="80" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700" fontFamily="monospace">
            ZERO-TRUST MESH TUNNEL
          </text>
          <line x1="215" y1="108" x2="540" y2="108" stroke="#10b981" strokeWidth="2.5" />
          <text x="377" y="101" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="600">
            UDP Mosh (Ports 60000-60100) • Predictive Echo
          </text>
          <line x1="215" y1="150" x2="540" y2="150" stroke="#38bdf8" strokeWidth="2" />
          <text x="377" y="143" textAnchor="middle" fill="#bae6fd" fontSize="10.5">
            Tailscale Serve HTTPS (*.ts.net:443)
          </text>
          <text x="377" y="185" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace">
            Public Port 22: CLOSED (ufw deny incoming)
          </text>

          {/* Right Box: Sovereign Cloud Sandbox VM */}
          <rect x="540" y="20" width="260" height="220" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
          <text x="670" y="44" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700" fontFamily="monospace">
            CLOUD SANDBOX VM ($0–$7.50/mo)
          </text>
          <text x="670" y="62" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="700">
            Hetzner ARM / Netcup / OCI 24GB
          </text>

          <rect x="556" y="76" width="228" height="44" rx="8" fill="#1e293b" stroke="#475569" />
          <text x="670" y="94" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">
            Tmux / Zellij Persistent Multiplexer
          </text>
          <text x="670" y="110" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            Claude Code CLI • OpenClaw Daemon
          </text>

          <rect x="556" y="128" width="228" height="44" rx="8" fill="#1e293b" stroke="#475569" />
          <text x="670" y="146" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="700">
            Steel.dev Browser Docker (:5173)
          </text>
          <text x="670" y="162" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            Live DOM Stream + 2FA Human Takeover
          </text>

          <rect x="556" y="180" width="228" height="44" rx="8" fill="#064e3b" stroke="#059669" />
          <text x="670" y="198" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="700">
            DeepSeek V4.1 Flash / V4 Pro Router
          </text>
          <text x="670" y="214" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontFamily="monospace">
            $0.003/1M Cache Hit • Off-Peak Cron
          </text>
        </svg>
      </div>

      <figcaption className="mt-3 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span>
          Architecture validated across iOS (Blink Shell / Termius) and Android (Termux) roaming between Wi-Fi and 5G CG-NAT networks.
        </span>
        <span>
          Sources:{" "}
          <a href="https://tailscale.com/kb/1193/tailscale-ssh" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            tailscale.com
          </a>
          ,{" "}
          <a href="https://mosh.org" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            mosh.org
          </a>
          ,{" "}
          <a href="https://docs.steel.dev" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400">
            steel.dev
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
