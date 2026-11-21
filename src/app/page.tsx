import React from "react";
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
  Terminal,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  BookOpen,
  ExternalLink,
  Layers,
  ArrowUpRight,
  GitBranch,
  FileCode,
  KeyRound
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Sticky Editorial Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-md">
              VM
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>Edge AI &amp; Cloud Sandbox Atlas</span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  100% Paid Tiers • US + CN Subsidized Logins
                </span>
              </div>
              <div className="text-[11px] text-slate-400 hidden md:block">
                Replit • Anthropic • Dots • Grok • Jules • Cursor • MicroVMs • Non-Major VMs • US/CN Coding Plans
              </div>
            </div>
          </div>

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
            <a href="#thesis" className="hover:text-white transition-colors">
              1. Big Players vs VMs
            </a>
            <a href="#widget-simulator" className="hover:text-indigo-300 transition-colors">
              2. Paid Simulator
            </a>
            <a href="#workload-deep-dive" className="hover:text-white transition-colors">
              3. 5 Workloads
            </a>
            <a href="#subsidized-logins" className="hover:text-emerald-300 transition-colors">
              4. US + CN Login Combo
            </a>
            <a href="#widget-provider-atlas" className="hover:text-cyan-300 transition-colors">
              5. 21-Provider Atlas
            </a>
            <a href="#pocket-control" className="hover:text-indigo-300 transition-colors">
              6. Phone VM Control
            </a>
            <a href="#five-revisions" className="hover:text-amber-300 transition-colors">
              7. 5 Revisions
            </a>
          </nav>

          <a
            href="https://github.com/hafhaq/edge-ai-sandbox-atlas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition-all shrink-0"
          >
            <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
            <span>GitHub Repo</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>
      </header>

      {/* Hero Editorial Banner */}
      <div className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-indigo-950/30 via-slate-950 to-slate-950 pt-12 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-indigo-300 mb-4">
            <span className="rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3 py-1 font-semibold">
              SYSTEMS ARCHITECTURE MONOGRAPH • ZERO FREE-TIER RELIANCE
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">28 Min Read</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">21 Paid Compute Providers + 11 US/Chinese Subsidized LLM Plans</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Stop Paying Per-Token API Taxes &amp; Stop Waiting on Free Tiers:{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              The 2026 Paid Cloud Sandbox &amp; Subsidized LLM Login Atlas
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-serif">
            How do <strong>Replit</strong>, <strong>Anthropic Claude Cloud</strong>,{" "}
            <strong>OpenAI Dots</strong>, <strong>Google Jules</strong>, <strong>xAI SuperGrok</strong>,{" "}
            <strong>Cursor</strong>, <strong>Devin/Windsurf</strong>, and <strong>GitHub Codespaces</strong>{" "}
            stack up against a paid €6–€14 European NVMe VM when you log into your compute with a{" "}
            <strong>flat-rate subsidized US + Chinese LLM subscription</strong> (Claude Pro/Max, ChatGPT Plus/Pro, Google AI Pro, Z.ai GLM-5.3, Alibaba Qwen Coder, Moonshot Kimi Code, MiniMax M2.5)?
          </p>

          {/* Key Quantitative Takeaways Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-emerald-400">US + CN Dual-Sub Sweet Spot</div>
              <div className="text-2xl font-mono font-bold text-white mt-0.5">$44.20/mo</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Netcup 8GB/256GB VM ($6.20) + Claude Pro ($20) + Z.ai GLM Plan ($18)
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-cyan-400">Async Cloud VM Bargain</div>
              <div className="text-2xl font-mono font-bold text-white mt-0.5">$19.99/mo</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Google AI Pro: 15 Concurrent Jules Cloud VMs (100/day) + 1.5k CLI calls
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-indigo-400">Heavy Marathon Stack</div>
              <div className="text-2xl font-mono font-bold text-white mt-0.5">$134.50/mo</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Netcup 16GB/512GB ($15.50) + Claude Max 5x ($100) + MiniMax M2.5 ($19)
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-amber-400">24/7 Codespaces Trap</div>
              <div className="text-2xl font-mono font-bold text-rose-400 mt-0.5">$301.80/mo</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                4-Core Codespace 24/7 ($262.80) + Copilot Pro+ ($39) = 17x VM Markup
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog Post Container */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: The Architectural Thesis */}
        <article className="prose prose-invert max-w-none">
          <section id="thesis" className="scroll-mt-20">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
              <BookOpen className="h-4 w-4" /> PART I • GOING WIDE: BIG PLAYERS, MICROVMS &amp; ZERO FREE-TIER LOTTERY
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              1. Two Rules of Production Agent Infrastructure: Never Rely on Free Tiers, and Never Pay Per-Token Retail for Daily Loops
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed text-base font-serif">
              If you read surface-level tutorials on running{" "}
              <a
                href="https://openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                OpenClaw
              </a>{" "}
              or{" "}
              <a
                href="https://claude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                Claude Code
              </a>{" "}
              in the cloud, they almost always recommend two things that fail in real engineering workflows: spinning up an Oracle Cloud (OCI) Always-Free ARM instance, and pasting in a metered OpenRouter or raw console API key.
            </p>

            <blockquote className="my-6 border-l-4 border-amber-500 bg-slate-900/80 p-5 rounded-r-xl text-slate-200 italic font-serif">
              &ldquo;When we challenged our own initial assumptions, two truths stood out immediately: First, free tiers are a mirage—OCI Always-Free throws &lsquo;Out of Host Capacity&rsquo; errors for weeks and reclaims idle VMs without warning, while sandbox hobby tiers kill your sessions after 15 to 60 minutes. Second, real developers do not attach an uncapped per-token OpenRouter meter to an autonomous 24/7 agent. They log into their compute using heavily subsidized, flat-rate monthly LLM subscriptions from major American and Chinese AI labs.&rdquo;
            </blockquote>

            <p className="text-slate-300 leading-relaxed text-base font-serif">
              Once you insist on <strong>100% paid, SLA-backed commercial compute</strong> and{" "}
              <strong>predictable flat-rate monthly LLM logins</strong>, the 2026 cloud sandbox market splits into a fascinating architectural showdown between <strong>Bundled Big-Player Agent Workspaces</strong> and <strong>Modular Non-Major Cloud VMs + Subsidized CLI Logins</strong>:
            </p>

            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl bg-slate-900/90 border border-indigo-500/30 p-5">
                <div className="text-xs font-mono font-bold uppercase text-indigo-300">
                  Camp A • Bundled Big-Player Agent Workspaces
                </div>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  <li>
                    • <strong>Replit (Core $25/mo • Pro $100/mo):</strong> 4 vCPU / 4 GB dev container + Replit Agent + built-in Postgres &amp; mobile app ($20/$100 monthly credit pool).
                  </li>
                  <li>
                    • <strong>Anthropic Claude Cloud (Pro $20 • Max $100 • Ultra $200):</strong> First-party `claude --cloud` repo containers + 1x, 5x, or 10x Claude 4.6 Sonnet/Opus coding quota.
                  </li>
                  <li>
                    • <strong>OpenAI Dots &amp; Codex (Plus $20 • Pro $100–$500/mo):</strong> Dedicated always-on Cloud Dot VM + browser on Pro ($100+), plus official OAuth CLI login.
                  </li>
                  <li>
                    • <strong>Google AI Pro ($19.99/mo) &amp; Ultra ($99.99/mo):</strong> Includes <strong>Google Jules</strong> (100 to 300 async GitHub repo VM tasks/day across <strong>15 to 60 concurrent Google Cloud VMs</strong>) + 1,500 daily Gemini CLI requests!
                  </li>
                  <li>
                    • <strong>xAI SuperGrok ($30–$200/mo), Cursor ($20/$60/$200), Devin/Windsurf ($20/$200) &amp; GitHub Codespaces ($0.18–$0.72/hr + Copilot $10/$39/$100).</strong>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-slate-900/90 border border-emerald-500/30 p-5">
                <div className="text-xs font-mono font-bold uppercase text-emerald-300">
                  Camp B • Paid Non-Major VM + Dual US/CN Subsidized Logins
                </div>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  <li>
                    • <strong>Paid Sovereign Compute ($5.28 to $15.50/mo):</strong> <strong>Netcup VPS 1000 G11</strong> ($6.20/mo for 4 vCPU, 8 GB DDR5, <strong>256 GB NVMe</strong>), <strong>Netcup RS 2000</strong> ($15.50/mo for 8 dedicated cores, 16 GB DDR5, 512 GB NVMe), <strong>Hetzner CAX21/CPX31</strong> ($7.50–$14.50/mo), or <strong>Contabo VPS 6</strong> ($10.50/mo for 16 GB RAM).
                  </li>
                  <li>
                    • <strong>Log In With Your Paid US Subscription:</strong> Run `claude auth login` (Claude Pro/Max), `openclaw models auth login --provider openai` (ChatGPT Plus/Pro OAuth), `gemini auth login` (Google AI Pro), or inject your SuperGrok token.
                  </li>
                  <li>
                    • <strong>Pair With a Flat-Rate Chinese Coding Plan ($18–$19/mo):</strong> Add <strong>Z.ai GLM-5.3 Coding Plan ($18/mo)</strong>, <strong>Alibaba Qwen Coder ($19/mo)</strong>, <strong>Moonshot Kimi Code ($19/mo)</strong>, or <strong>MiniMax M-Plan ($19/mo)</strong> inside the exact same CLI so your agent never stops when a 5-hour US quota window fills up!
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        {/* Figure 1: Bundled IDEs vs Modular VM + Subsidized Logins */}
        <DutyCycleCrossoverChart />

        {/* Widget 1: Interactive Paid Compute + Subsidized LLM Matcher */}
        <WorkloadSimulatorWidget />

        {/* Section 2: Deep Dive into the 5 Core Workloads */}
        <section id="workload-deep-dive" className="mt-16 scroll-mt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
            <Layers className="h-4 w-4" /> PART II • GOING DEEP: BIG PLAYERS vs. SPECIALISTS ACROSS 5 WORKLOADS
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            2. Where Replit, Anthropic, Grok, Google Jules, MicroVMs &amp; Non-Major Cloud VMs Actually Win
          </h2>
          <p className="mt-3 text-slate-300 font-serif text-base leading-relaxed">
            When you look past marketing landing pages and examine actual vCPU allocations, RAM ceilings, credit cannibalization, and 5-hour rolling windows, each workload has a distinct price-to-power sweet spot:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Replit & Codespaces vs Modular VM */}
            <div className="rounded-2xl border border-purple-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    WORKLOAD 1 • ALL-IN-ONE CLOUD IDEs vs. SOVEREIGN VPS
                  </span>
                  <Terminal className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Replit Core/Pro &amp; GitHub Codespaces vs. Netcup / Hetzner + Dokploy
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  <strong>Replit Core ($25/mo)</strong> and <strong>Pro ($100/mo)</strong> shine when you want zero Linux administration: you open the Replit mobile or web app, prompt Replit Agent, and get an instant preview URL with managed Postgres.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-amber-300">
                      The Replit &amp; Codespaces Credit Trap on 24/7 Workloads:
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Replit Core&apos;s $20 monthly credit pool is drawn down simultaneously by effort-based Agent checkpoints, Reserved Always-On VMs ($20–$50/mo for 1–2 vCPU), and active Postgres hours ($0.16/hr = $116/mo if active 24/7!). Similarly, running a 4-core / 16 GB <strong>GitHub Codespace</strong> ($0.36/hr) 24/7 costs <strong>$262.80/month</strong> in raw VM time alone.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-emerald-300">
                      The Modular Alternative ($6.20–$15.50/mo):
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      A <strong>Netcup RS 2000 G11 ($15.50/mo)</strong> gives you <strong>8 dedicated AMD EPYC cores, 16 GB DDR5 RAM, and 512 GB NVMe</strong> 24/7/365—17x cheaper than a 24/7 Codespace.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
                <span className="text-emerald-400 font-mono font-bold">
                  Verdict: Replit Core ($25) for instant 0-ops prototyping; Netcup/Hetzner ($6.20–$15.50) for 24/7 servers.
                </span>
              </div>
            </div>

            {/* Card 2: Async Repo Swarms (Jules, Claude Cloud, Cursor, Devin) */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    WORKLOAD 2 • ASYNC GITHUB REPO SWARMS
                  </span>
                  <FileCode className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Google Jules ($19.99) vs. Anthropic Claude Cloud ($100) vs. Cursor Ultra &amp; Devin Max ($200)
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  What if you want 10 to 60 cloud sandboxes to clone your GitHub repo in parallel, fix issues, run tests, and open PRs while you commute?
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-cyan-300">
                      1. Google AI Pro ($19.99/mo) &amp; Ultra ($99.99/mo) — The Hidden Giant
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      For $19.99/mo, Google bundles <strong>Jules</strong> with <strong>100 async coding VM tasks/day (15 concurrent Google-hosted VMs!)</strong> plus <strong>1,500 Gemini CLI requests/day</strong> on your own server and 5 TB Drive storage. Ultra ($99.99) scales to 300 tasks/day and 60 concurrent VMs.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-indigo-300">
                      2. Claude Max ($100) / Ultra ($200), Cursor Ultra ($200) &amp; Devin Max ($200)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      <strong>Anthropic Claude Max ($100)</strong> &amp; <strong>Ultra ($200)</strong> deliver the highest single-agent code reasoning quality (`claude --cloud` + local CLI). <strong>Cursor Ultra ($200)</strong> gives 50x multi-model pool + priority Background Agent VMs, while <strong>Devin/Windsurf Max ($200)</strong> gives a full graphical browser+IDE workstation per agent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
                <span className="text-emerald-400 font-mono font-bold">
                  Verdict: Google AI Pro ($19.99) for 15x async VM fan-out + Claude Max ($100) for deep architecture.
                </span>
              </div>
            </div>

            {/* Card 3: Stealth Remote Browser Fleets */}
            <div className="rounded-2xl border border-pink-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30">
                    WORKLOAD 3 • STEALTH REMOTE BROWSER FLEETS
                  </span>
                  <Globe className="h-5 w-5 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Steel.dev &amp; Browserbase vs. Self-Hosted Steel on Contabo 16GB ($10.50/mo)
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  Every modern SPA tab in headless Chromium eats 400 MB–1.2 GB of RAM, and 100% of raw VPS datacenter ASNs are blocked by Cloudflare Turnstile and DataDome.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-pink-300">
                      Managed Stealth: Browserbase ($20 / $99) &amp; Steel Cloud ($0.08–$0.10/hr)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      <strong>Browserbase</strong> ($20/mo for 100 hrs, $99/mo for 500 hrs) and <strong>Steel.dev Paid Cloud</strong> ($0.08–$0.10/hr) handle residential proxy rotation, anti-bot fingerprinting, and live DOM session replay automatically.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-emerald-300">
                      High-Volume Hybrid: Steel OSS Docker on Contabo VPS 6 (16 GB RAM, $10.50/mo)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Run Steel&apos;s open-source Docker container on a <strong>16 GB RAM Contabo VPS ($10.50/mo)</strong> and stream port `:5173` over Tailscale Serve to your phone so you can manually tap through 2FA logins!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
                <span className="text-emerald-400 font-mono font-bold">
                  Verdict: Browserbase/Steel Cloud (&lt;200 hrs/mo); Contabo 16GB + Steel OSS (&gt;250 hrs/mo).
                </span>
              </div>
            </div>

            {/* Card 4: Burst MicroVMs & Paid GPU AI Factories */}
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    WORKLOAD 4 &amp; 5 • BURST MICROVMS &amp; GPU AI FACTORIES
                  </span>
                  <Cpu className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Modal, E2B, Daytona &amp; Cloudflare Sandboxes + RunPod / Vast / Lambda GPUs
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  When your agent needs to spawn 50 isolated code sandboxes for 30 seconds or burst onto an 80 GB H100 GPU without paying 24/7 idle leases:
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-indigo-300">
                      Burst Code MicroVMs: Modal ($0.079/hr), Daytona (&lt;90ms), E2B ($0.17/hr), Fly Sprites
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      <strong>Modal</strong> offers the lowest commercial per-second rate ($0.079/hr for 2 vCPU / 4 GiB). <strong>Daytona</strong> boots in &lt;90ms, <strong>E2B Pro</strong> ($150/mo + $0.17/hr) branches Firecracker memory snapshots in 150ms, and <strong>Fly.io Sprites / Cloudflare Sandboxes</strong> bill strictly on <em>active CPU cycles</em>.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-amber-300">
                      Paid GPU Factories: Modal H100 ($3.95/hr per-sec), RunPod 4090 ($0.34/hr), Vast A100 ($0.67/hr)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Use <strong>Modal Serverless GPU</strong> for spiky sub-minute H100/B300 inference, <strong>RunPod / Vast.ai</strong> for cheap interactive RTX 4090 / A100 pods, and <strong>Lambda Labs</strong> ($4.29/hr H100) for zero-egress multi-node training.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
                <span className="text-emerald-400 font-mono font-bold">
                  Verdict: Modal ($0.079/hr CPU / $3.95/hr H100 per-sec) + Vast/RunPod ($0.34–$0.67/hr batch GPU).
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Figure 2: Price-to-Power Scatter Matrix */}
        <PriceToPowerScatterChart />

        {/* Section 3: The US + Chinese Subsidized LLM Subscription Login Strategy */}
        <section id="subsidized-logins" className="mt-16 scroll-mt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
            <KeyRound className="h-4 w-4" /> PART III • THE DUAL-FLAG SUBSIDIZED LOGIN STRATEGY (REVISION 3)
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            3. Why Smart Engineers Pair One American Subscription ($20) + One Chinese Coding Plan ($18–$19) on Their Cloud VM
          </h2>

          <div className="mt-4 space-y-4 text-slate-300 font-serif text-base leading-relaxed">
            <p>
              In <strong>Revision 3</strong>, we analyzed how developers actually authenticate{" "}
              <strong>Claude Code</strong>, <strong>OpenClaw</strong>, <strong>Codex CLI</strong>,{" "}
              <strong>Gemini CLI</strong>, and <strong>OpenCode</strong> inside a dedicated cloud VM. Nobody wants a surprise $350 OpenRouter invoice at the end of the month. Instead, you log into your VM with a <strong>flat-rate, subsidized monthly subscription</strong>.
            </p>
            <p>
              But there is a catch with relying on a single $20/month American subscription (like{" "}
              <strong>Claude Pro $20</strong> or <strong>ChatGPT Plus $20</strong>): to protect their unit economics, Western labs enforce <strong>rolling 5-hour usage windows and weekly caps</strong>. If your autonomous agent enters a deep multi-file refactor or runs 15-minute background heartbeats, a single $20 plan hits its 5-hour ceiling in roughly <strong>90 to 110 minutes</strong>—leaving your cloud VM idle for the next 3+ hours unless you pay $100–$200/month for Max/Ultra.
            </p>
            <p>
              Meanwhile, major Chinese AI labs—<strong>Z.ai (GLM-5.3)</strong>,{" "}
              <strong>Alibaba Cloud (Qwen3-Coder)</strong>, <strong>Moonshot AI (Kimi K2.5)</strong>, and{" "}
              <strong>MiniMax (M2.5-Highspeed)</strong>—have launched explicit{" "}
              <strong>flat-rate monthly &ldquo;Coding Plan&rdquo; subscriptions ($18–$19/mo Lite/Standard, $39–$80/mo Pro)</strong> designed specifically to plug straight into <strong>Claude Code, OpenClaw, Cline, and Cursor</strong>! Even better, plans like Z.ai&apos;s GLM Coding Plan apply a{" "}
              <strong>0.5x credit deduction multiplier during off-peak hours outside Beijing business peak</strong>, effectively giving US and European daytime developers <strong>double the subscription quota</strong>.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-slate-900 border border-indigo-500/30 p-5">
              <div className="text-xs font-mono font-bold text-indigo-400 uppercase">
                1. American OAuth Logins ($19.99–$100/mo)
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                Claude, ChatGPT, Google AI Pro &amp; SuperGrok
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Authenticate <code className="text-indigo-300">claude auth login</code> (Claude Pro/Max), <code className="text-indigo-300">openclaw models auth login --provider openai</code> (official ChatGPT Plus/Pro OAuth), <code className="text-indigo-300">gemini auth login</code> (1,500 req/day + 15 concurrent Google Jules VMs!), or inject your <strong>xAI SuperGrok</strong> Colossus token.
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-emerald-500/30 p-5">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                2. Chinese Flat-Rate Coding Plans ($18–$19/mo)
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                Z.ai GLM-5.3, Qwen Coder, Kimi K2.5 &amp; MiniMax M2.5
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Unlike consumer chat apps that block CLI harnesses, Chinese Coding Plans give you a dedicated flat-rate subscription token engineered for <strong>Claude Code &amp; OpenClaw</strong>—handling high-frequency tool loops, 2M-token repo ingestion (Kimi K2.5), and high-TPS test fixing (MiniMax M2.5).
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-amber-500/30 p-5">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                3. The $44.20/mo Unstoppable Combo
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                Netcup 8GB VM ($6.20) + US ($20) + CN ($18)
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Use your American login (Claude/GPT/Gemini/Grok) for top-level architectural planning and complex diffs, and auto-route background heartbeats &amp; 5-hour overflow to your Chinese Coding Plan. <strong>100% flat-rate, zero lockouts, zero per-token overages.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Widget 2: US + Chinese Subsidized Subscription Blender */}
        <DeepSeekArbitrageWidget />

        {/* Widget 3: Complete 21-Provider Filterable Commercial Atlas */}
        <ProviderAtlasWidget />

        {/* Section 4: Managing Your Cloud Sandbox VM From Your Phone */}
        <section id="pocket-control" className="mt-16 scroll-mt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
            <Smartphone className="h-4 w-4" /> PART IV • THE POCKET CONTROL PLANE (REVISION 4 ARCHITECTURE)
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            4. How to Command Your Cloud VM &amp; Complete `localhost` OAuth Logins From Your Phone
          </h2>

          <div className="mt-4 space-y-4 text-slate-300 font-serif text-base leading-relaxed">
            <p>
              In <strong>Revision 4</strong>, we solved the two biggest hurdles developers hit when trying to run a cloud VM from an iPhone or Android on cellular networks:
            </p>
            <p>
              <strong>Hurdle 1: How do you complete an OAuth login (`claude auth login` or `openclaw models auth login --provider openai`) on a remote headless VPS from your phone when the OAuth callback redirects to `http://localhost:1455`?</strong> When you tap the auth link inside mobile Termius or Blink Shell, mobile Safari opens `chatgpt.com` or `claude.ai`, authenticates via FaceID, and redirects to `http://localhost:1455/?code=...`. Simply <strong>copy that full `localhost` URL from mobile Safari&apos;s address bar and paste it back into your terminal prompt</strong> (or forward the port over Tailscale)—and your remote VM caches the OAuth session token! Even simpler, your companion Chinese Coding Plan key (`Z.ai GLM`, `Qwen Coder`, `Kimi Code`, `MiniMax M-Plan`) is a static token exported in `/root/.openclaw.env` that never expires every 10 days.
            </p>
            <p>
              <strong>Hurdle 2: Stopping cellular TCP disconnects.</strong> Instead of exposing TCP Port 22 to brute-force bots and suffering 60-second terminal freezes whenever your phone switches from Wi-Fi to 5G, lock down your firewall (<code className="text-indigo-300 text-sm font-mono">ufw default deny incoming</code>) and connect over <strong>Tailscale WireGuard + UDP Mosh + Tmux/Zellij</strong>.
            </p>
          </div>

          {/* Figure 3: Mobile Topology Diagram */}
          <MobileTopologyFigure />

          {/* Widget 4: Mobile Bootstrap Script Generator */}
          <MobileControlWidget />
        </section>

        {/* Section 5: Interactive 5-Revision Assumption Challenge Viewer */}
        <RevisionLogViewer />

        {/* Section 6: Primary Sources & Verification Bibliography */}
        <section id="sources" className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Verified Primary Sources &amp; Commercial Rate-Card Documentation (2026)
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            All paid subscription tiers, vCPU/RAM allocations, 5-hour quota structures, and microVM rates are cross-checked against official documentation:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
            {[
              { name: "Replit Core, Pro & Reserved VM Pricing", url: "https://replit.com/pricing", domain: "replit.com" },
              { name: "Anthropic Claude Pro, Max, Ultra & Claude Code", url: "https://claude.com/pricing", domain: "claude.com" },
              { name: "OpenAI Dots & ChatGPT Plus/Pro OAuth", url: "https://openai.com", domain: "openai.com" },
              { name: "Google Jules Async Cloud VMs & AI Pro/Ultra", url: "https://jules.google", domain: "jules.google" },
              { name: "xAI SuperGrok, Grok Build & Colossus API", url: "https://x.ai", domain: "x.ai" },
              { name: "Cursor Pro, Pro+, Ultra & Background Agents", url: "https://cursor.com/pricing", domain: "cursor.com" },
              { name: "Devin & Windsurf (Cognition Pro / Max)", url: "https://windsurf.com/pricing", domain: "windsurf.com" },
              { name: "GitHub Codespaces & Copilot Pro+ / Max", url: "https://github.com/features/copilot/plans", domain: "github.com" },
              { name: "Z.ai GLM-5.3 Flat-Rate Coding Plans", url: "https://z.ai", domain: "z.ai" },
              { name: "Alibaba Model Studio Qwen Coder Plans", url: "https://www.alibabacloud.com", domain: "alibabacloud.com" },
              { name: "Moonshot Kimi K2.5 Code Memberships", url: "https://kimi.moonshot.cn", domain: "kimi.moonshot.cn" },
              { name: "MiniMax M-Plan (M2.5-Highspeed) Coding Subs", url: "https://www.minimax.io", domain: "minimax.io" },
              { name: "Netcup VPS 1000 G11 & RS 2000 G11 NVMe", url: "https://www.netcup.com", domain: "netcup.com" },
              { name: "Hetzner Cloud CAX ARM & CPX AMD EPYC", url: "https://www.hetzner.com/cloud", domain: "hetzner.com" },
              { name: "Contabo High-RAM Cloud VPS 4 / 6 / 8", url: "https://contabo.com", domain: "contabo.com" },
              { name: "E2B, Modal, Daytona, Fly Sprites & Cloudflare", url: "https://modal.com/pricing", domain: "modal.com" },
              { name: "Steel.dev & Browserbase Remote Browser Fleets", url: "https://steel.dev/pricing", domain: "steel.dev" },
              { name: "Vast.ai, RunPod & Lambda Labs Paid GPU Clouds", url: "https://www.runpod.io/pricing", domain: "runpod.io" }
            ].map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg bg-slate-950/80 border border-slate-800/80 px-3 py-2 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-all"
              >
                <span className="truncate pr-2">{src.name}</span>
                <span className="text-[10px] font-mono text-indigo-400 shrink-0 flex items-center gap-1">
                  {src.domain} <ExternalLink className="h-2.5 w-2.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-xs text-slate-400">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-white">The 2026 Edge AI &amp; Cloud Sandbox Atlas</strong> • 100% Paid Commercial Tiers &amp; Subsidized US/CN Subscription Logins.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="planning/revision-1-initial-survey.md"
              target="_blank"
              className="hover:text-white underline"
            >
              Rev 1
            </a>
            <a
              href="planning/revision-2-workload-taxonomy.md"
              target="_blank"
              className="hover:text-white underline"
            >
              Rev 2
            </a>
            <a
              href="planning/revision-3-deepseek-arbitrage-and-sweet-spots.md"
              target="_blank"
              className="hover:text-white underline"
            >
              Rev 3
            </a>
            <a
              href="planning/revision-4-mobile-control-plane.md"
              target="_blank"
              className="hover:text-white underline"
            >
              Rev 4
            </a>
            <a
              href="planning/revision-5-final-synthesis.md"
              target="_blank"
              className="hover:text-white underline"
            >
              Rev 5
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
