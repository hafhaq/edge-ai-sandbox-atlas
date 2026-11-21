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
  CheckCircle2,
  ArrowUpRight,
  GitBranch,
  FileCode
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
                <span>Edge AI & Cloud Sandbox Atlas</span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Rev 5.0 Verified • Nov 2026
                </span>
              </div>
              <div className="text-[11px] text-slate-400 hidden md:block">
                Dots • OpenClaw • MicroVMs • Remote Browsers • DeepSeek Arbitrage • Mobile Control
              </div>
            </div>
          </div>

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
            <a href="#thesis" className="hover:text-white transition-colors">
              1. The Sandbox Thesis
            </a>
            <a href="#widget-simulator" className="hover:text-indigo-300 transition-colors">
              2. TCO Simulator
            </a>
            <a href="#workload-deep-dive" className="hover:text-white transition-colors">
              3. 4 Workloads
            </a>
            <a href="#deepseek-arbitrage" className="hover:text-emerald-300 transition-colors">
              4. DeepSeek + VPS Combo
            </a>
            <a href="#widget-provider-atlas" className="hover:text-cyan-300 transition-colors">
              5. 19-Provider Atlas
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
              SYSTEMS ARCHITECTURE MONOGRAPH
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">24 Min Read</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">4 Interactive JS Widgets + 5 Challenged Revisions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            An LLM Without a Computer Is Just a Text Generator:{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              The 2026 Cloud Sandbox, DeepSeek Arbitrage &amp; Pocket VM Atlas
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-serif">
            From OpenAI&apos;s always-on <strong>Dots</strong> ($100–$500/mo) and 90-millisecond{" "}
            <strong>Firecracker MicroVMs</strong> (E2B, Modal, Daytona, Fly Sprites) to self-hosted{" "}
            <strong>OpenClaw</strong> agents running on €5 European ARM servers paired with{" "}
            <strong>DeepSeek V4.1 prefix caching</strong>—here is the definitive engineering breakdown of how much compute you actually get per dollar, which stack wins each workload, and how to command your cloud VM from your phone on a train.
          </p>

          {/* Key Quantitative Takeaways Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-slate-400">Sovereign 24/7 Agent</div>
              <div className="text-2xl font-mono font-bold text-emerald-400 mt-0.5">$11.62/mo</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Hetzner 8GB ARM ($7.50) + 75M Cached DeepSeek V4.1 Tokens ($4.12)
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-slate-400">Zero-Infra Arbitrage</div>
              <div className="text-2xl font-mono font-bold text-cyan-400 mt-0.5">$4.12/mo</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Oracle OCI Always-Free (4 ARM / 24GB RAM) + DeepSeek Off-Peak
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-slate-400">Burst MicroVM Winner</div>
              <div className="text-2xl font-mono font-bold text-indigo-400 mt-0.5">$0.079/hr</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Modal Sandboxes (first ~380 hrs/mo free via $30/mo credit)
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="text-[11px] font-mono uppercase text-slate-400">GPU AI Factory Floor</div>
              <div className="text-2xl font-mono font-bold text-amber-400 mt-0.5">$0.34/hr</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                RTX 4090 24GB (RunPod/Vast) or $3.95/hr Per-Sec Serverless H100
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
              <BookOpen className="h-4 w-4" /> PART I • GOING WIDE: THE GREAT SANDBOX BIFURCATION
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              1. Why Every AI Agent Needs Its Own Sandboxed Computer
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed text-base font-serif">
              Between 2023 and 2025, the prevailing pattern for building AI applications was stateless request-response: your backend sent a prompt to an LLM API, parsed a JSON tool call, and ran a lightweight webhook. In 2026, that paradigm collapsed. Whether you are deploying{" "}
              <a
                href="https://openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                OpenAI Dots
              </a>{" "}
              (persistent AI teammates equipped with their own cloud computer and browser), self-hosting{" "}
              <a
                href="https://openclaw-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                OpenClaw
              </a>
              , or running parallel coding swarms with{" "}
              <a
                href="https://claude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                Claude Code
              </a>
              , modern agency requires <strong>a real operating system</strong>: a bash shell, a persistent filesystem, git state, headless Chromium, and network isolation.
            </p>

            <blockquote className="my-6 border-l-4 border-indigo-500 bg-slate-900/80 p-5 rounded-r-xl text-slate-200 italic font-serif">
              &ldquo;Our first mistake in Revision 1 was assuming all cloud sandboxes compete on the same 24/7 vCPU-hour price line. When you convert E2B ($0.17/hr) or Daytona ($0.165/hr) into a 730-hour monthly figure (~$122/month) and compare it to a $6.20/month Netcup or $7.50/month Hetzner VM, serverless sandboxes look 18x overpriced. That comparison is mathematically correct for a single continuous daemon—and catastrophically wrong for burst parallel execution.&rdquo;
            </blockquote>

            <p className="text-slate-300 leading-relaxed text-base font-serif">
              When we challenged that assumption in <strong>Revision 2</strong>, we uncovered the{" "}
              <strong>Duty-Cycle &amp; Concurrency Crossover Law</strong>. Suppose your evaluation harness or multi-agent coding workflow forks a repository into <strong>35 parallel branches</strong>, builds the project, runs Playwright tests for 45 seconds per branch, and tears down. On{" "}
              <a
                href="https://modal.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline"
              >
                Modal Sandboxes
              </a>{" "}
              (~$0.079/hr per 2 vCPU / 4 GiB container, billed strictly per second with $30/mo free starter credits) or{" "}
              <a
                href="https://daytona.io/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline"
              >
                Daytona
              </a>{" "}
              (&lt;90ms cold start), 35 concurrent sandboxes running for 45 seconds costs{" "}
              <strong>$0.034 per run</strong> (or $0.00 net on Modal&apos;s free tier). Attempting to run 35 simultaneous Rust or Next.js builds inside a single $6 VPS with 4 GB RAM triggers immediate Linux OOM-killer crashes.
            </p>
          </section>
        </article>

        {/* Figure 1: Duty Cycle Crossover Chart */}
        <DutyCycleCrossoverChart />

        {/* Widget 1: Interactive Workload & TCO Simulator */}
        <WorkloadSimulatorWidget />

        {/* Section 2: Deep Dive into the 4 Core Workloads */}
        <section id="workload-deep-dive" className="mt-16 scroll-mt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
            <Layers className="h-4 w-4" /> PART II • GOING DEEP: THE 4 WORKLOAD ARCHETYPES
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            2. Remote Browser vs. OpenClaw vs. Burst Code Sandbox vs. AI Factory
          </h2>
          <p className="mt-3 text-slate-300 font-serif text-base leading-relaxed">
            No single cloud provider wins across all four dimensions of modern AI infrastructure. Below is our engineering teardown of the hardware bottlenecks, hidden billing traps, and price-to-power champions for each workload.
          </p>

          {/* 4 Workload Deep-Dive Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Workload A: Remote Browsers */}
            <div className="rounded-2xl border border-pink-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30">
                    WORKLOAD A • REMOTE BROWSER FLEETS
                  </span>
                  <Globe className="h-5 w-5 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Why Headless Chrome on a $5 VPS Fails — And When to Use Steel.dev vs. Browserbase
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  In Revision 2, we tested running raw Playwright inside a cheap VPS. Two walls hit immediately:
                  <strong> (1) ASN Reputation Blocking</strong>—100% of Hetzner, Contabo, and AWS IP blocks are flagged by Cloudflare and DataDome; and <strong>(2) Chromium RAM Spikes</strong>—each modern SPA tab consumes 400 MB to 1.2 GB of RAM.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-pink-300">
                      1. Steel.dev ($0.08–$0.10/hr + $30 Free Credit or Self-Hosted OSS)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Open-source MIT/Apache stack. Prototype on Steel Cloud at $0.10/hr (Scale tier drops to $0.08/hr with 100 concurrent browsers), or self-host the official <code className="text-slate-200">steel-browser</code> Docker image on an 8 GB Contabo VPS ($5.28/mo) paired with a residential proxy ($6/GB). Features an embeddable live view for mobile human takeover.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-pink-300">
                      2. Browserbase ($20/mo Dev for 100 hrs • $99/mo Startup for 500 hrs)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Purpose-built for Stagehand and MCP web agents. Best-in-class DOM session replay timeline, automatic stealth fingerprint rotation, and ~$0.10–$0.12/hr effective rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs flex items-center justify-between">
                <span className="text-emerald-400 font-mono font-bold">
                  Sweet Spot: Steel Cloud (&lt;150 hrs) / Steel OSS on Contabo 8GB (&gt;300 hrs)
                </span>
              </div>
            </div>

            {/* Workload B: OpenClaw & Persistent Agent Computers */}
            <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    WORKLOAD B • 24/7 PERSONAL AGENTS (OPENCLAW vs. DOTS)
                  </span>
                  <Terminal className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Sovereign OpenClaw ($4–$12/mo) vs. Managed OpenAI Dots ($100–$500/mo)
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  <strong>OpenAI Dots</strong> give enterprise workers a zero-ops persistent cloud VM + browser powered by GPT-6 Astra/Terra with 4,000+ pre-wired SaaS OAuth integrations (ChatGPT Pro $100/$200/$500/mo; Enterprise Standard Dot $50/mo). By contrast, <strong>OpenClaw</strong> gives developers full root SSH sovereignty, local Docker daemons, and custom BYOK model routing.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-emerald-300">
                      1. Hetzner CAX21 ARM ($7.50/mo) &amp; Netcup VPS 1000 G11 ($6.20/mo)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Both deliver <strong>4 vCPUs and 8 GB RAM</strong> with &lt;0.5% CPU steal. Netcup includes a massive <strong>256 GB NVMe</strong> disk (3.2x Hetzner&apos;s 80 GB), while Hetzner offers hourly billing and instant ARM64 provisioning.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-emerald-300">
                      2. Oracle OCI Free Tier ($0/mo for 4 ARM Cores + 24 GB RAM) &amp; Fly Sprites
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      OCI&apos;s `VM.Standard.A1.Flex` gives 24 GB RAM for $0 forever. Prefer managed microVMs without sysadmin maintenance? <strong>Fly.io Sprites</strong> bill only on <em>active CPU</em> ($0.0385/CPU-hr) plus hot/cold checkpointing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs flex items-center justify-between">
                <span className="text-emerald-400 font-mono font-bold">
                  Sweet Spot: 4 vCPU / 8 GB RAM NVMe VPS ($6.20–$7.50/mo) + DeepSeek V4.1
                </span>
              </div>
            </div>

            {/* Workload C: Burst Code Execution Sandboxes */}
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    WORKLOAD C • BURST CODE &amp; EVAL SANDBOXES
                  </span>
                  <FileCode className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Sub-150ms Cold Starts &amp; Memory Snapshots: Modal vs. E2B vs. Daytona vs. Cloudflare
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  When an AI coding agent or multi-tenant SaaS executes untrusted LLM code, you need hardware-isolated teardown, sub-second spin-up, and massive concurrency fan-out.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-indigo-300">
                      1. Modal Sandboxes (~$0.079/hr • $0 Base + $30/mo Free Credits)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      gVisor-isolated containers scaling to 5,000+ concurrent nodes. Because Starter includes $30/mo in free credits every month, up to ~380 hours of 2-vCPU / 4-GiB sandbox execution costs literally <strong>$0.00/month</strong>.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-indigo-300">
                      2. Daytona (&lt;90ms Boot, $0 Base) &amp; E2B (~150ms Firecracker Snapshots)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Daytona charges $0.165/hr with no monthly subscription gate ($200 trial credit). E2B ($0.17/hr) pioneers Firecracker memory snapshotting so agents can branch a running VM state in 150ms. <strong>Cloudflare Sandboxes</strong> ($5 base) bill strictly on active CPU cycles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs flex items-center justify-between">
                <span className="text-emerald-400 font-mono font-bold">
                  Sweet Spot: Modal Starter ($0 net up to 380 hrs) + Daytona/E2B for Snapshots
                </span>
              </div>
            </div>

            {/* Workload D: GPU AI Factories */}
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    WORKLOAD D • ELASTIC GPU AI FACTORIES
                  </span>
                  <Cpu className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Serverless Per-Second H100s vs. P2P Spot Marketplaces (Modal, RunPod, Vast, Lambda)
                </h3>
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  An &ldquo;AI Factory&rdquo; turns raw tokens, audio, or video checkpoints into high-throughput artifacts. Renting a dedicated GPU 24/7 when your pipeline is event-driven burns 80% of your budget on idle silicon.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-amber-300">
                      1. Spiky Inference &amp; Agent Media: Modal Serverless GPU ($3.95/hr H100)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Spins up an H100 (or $1.95/hr L40S, $7.10/hr B300) in &lt;2 seconds, runs a 30-second batch job for <strong>$0.033</strong>, and scales to zero.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                    <div className="font-bold text-amber-300">
                      2. Sustained Batch &amp; Training: Vast.ai ($0.67/hr A100) &amp; RunPod ($0.34/hr 4090)
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      For multi-hour LoRA or batch vLLM runs, RunPod Community RTX 4090 ($0.34/hr) and Vast.ai A100 80GB (~$0.67/hr) crush hyperscaler pricing by 75%. For multi-node training with multi-TB weight transfers, <strong>Lambda Labs</strong> ($4.29/hr H100) charges <strong>zero egress fees</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs flex items-center justify-between">
                <span className="text-emerald-400 font-mono font-bold">
                  Sweet Spot: Modal Per-Sec H100 (Burst) / RunPod 4090 &amp; Vast A100 (Batch)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Figure 2: Price-to-Power Scatter Matrix */}
        <PriceToPowerScatterChart />

        {/* Section 3: The DeepSeek + Non-Major Cloud VM Arbitrage */}
        <section id="deepseek-arbitrage" className="mt-16 scroll-mt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
            <Sparkles className="h-4 w-4" /> PART III • THE ARBITRAGE STACK (REVISION 3 BREAKTHROUGH)
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            3. The &ldquo;Heartbeat Token Trap&rdquo; — And Why DeepSeek V4.1 + a €6 European VPS Changes Everything
          </h2>

          <div className="mt-4 space-y-4 text-slate-300 font-serif text-base leading-relaxed">
            <p>
              In <strong>Revision 3</strong>, we challenged a widespread community blind spot: developers spend hours debating whether to buy a $5.28 Contabo VPS, a $6.20 Netcup VPS, or a $7.50 Hetzner ARM VM for their <strong>OpenClaw</strong> agent—while completely ignoring the <strong>Heartbeat Token Drain</strong>.
            </p>
            <p>
              Here is the math that catches 90% of self-hosters off guard: an autonomous OpenClaw agent wakes up every 15 minutes (4 times an hour, 2,880 times a month) to inspect your inbox, GitHub PR status, calendar, and system monitors. Each heartbeat loads a ~25,000-token context window (system prompt, MCP tool definitions, and workspace memory). That equals{" "}
              <strong>72 Million Input Tokens per month just for your agent to stay conscious</strong>. On an uncached frontier API at $2.50–$3.00/1M input tokens, your idle heartbeat bill exceeds{" "}
              <strong className="text-rose-400">$215/month</strong>!
            </p>
            <p>
              When you pair a <strong>Non-Major Cloud VM</strong> (Hetzner CAX21 ARM, Netcup VPS 1000 G11, or Oracle OCI Free Tier) with{" "}
              <a
                href="https://api-docs.deepseek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline"
              >
                DeepSeek&apos;s V4.1-Flash &amp; V4-Pro API
              </a>
              , three compounding levers collapse that $215 token bill down to <strong>$4.12/month</strong>:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Lever 1 • 50x Prefix Cache Drop
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                $0.003 / 1M Tokens on Cache Hit
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Because OpenClaw&apos;s system instructions, MCP tool schemas, and memory prefix stay static across heartbeats, 85%–90% of input tokens hit DeepSeek&apos;s automatic disk cache—dropping <code className="text-emerald-300">deepseek-flash</code> off-peak input from $0.15/1M down to <strong>$0.003/1M</strong>.
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                Lever 2 • 90/10 Dual-Model Tiering
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                V4.1-Flash Triage → V4-Pro Code
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Route 90% of background heartbeats, log monitoring, and multimodal screenshot triage to <code className="text-cyan-300">deepseek-flash</code> (2,500 concurrency limit), and escalate only complex multi-file coding to <code className="text-indigo-300">deepseek-v4-pro</code> ($0.022/1M cached hit).
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                Lever 3 • UTC Off-Peak Cron Arbitrage
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                50% Off Outside 7 Peak UTC Hours
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                DeepSeek charges 2x during Peak UTC (<strong>01:00–04:00 &amp; 06:00–10:00 UTC Mon–Fri</strong>) and 1x during the other 17 hours/day + all weekend. Shifting nightly repo indexing and scraping cron jobs to 11:00–00:59 UTC halves token spend immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Widget 2: DeepSeek + Non-Major Cloud VM Arbitrage Calculator */}
        <DeepSeekArbitrageWidget />

        {/* Widget 3: Complete 19-Provider Filterable Atlas */}
        <ProviderAtlasWidget />

        {/* Section 4: Managing Your Cloud Sandbox VM From Your Phone */}
        <section id="pocket-control" className="mt-16 scroll-mt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
            <Smartphone className="h-4 w-4" /> PART IV • THE POCKET CONTROL PLANE (REVISION 4 ARCHITECTURE)
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            4. How to Command Your Cloud Sandbox VM From Your Phone (Without Dropping Sessions in Tunnels)
          </h2>

          <div className="mt-4 space-y-4 text-slate-300 font-serif text-base leading-relaxed">
            <p>
              In <strong>Revision 4</strong>, we challenged two assumptions about mobile VM management: first, that opening standard TCP SSH on Port 22 with <code className="text-indigo-300 text-sm font-mono">tmux</code> is good enough for cellular networks; and second, that controlling a cloud VM from a phone means typing long bash commands on a 6-inch glass screen.
            </p>
            <p>
              Anyone who has tried standard TCP SSH on a train knows what happens: as soon as your phone hands off from station Wi-Fi to 5G or hits a 3-second cellular dead zone, TCP head-of-line blocking freezes your terminal for 45 seconds. Worse, leaving Port 22 open to the public internet invites 10,000+ credential-stuffing bots per day.
            </p>
            <p>
              The solution is a <strong>4-Layer Pocket Control Plane</strong> that turns your iPhone or Android into an unbreakable remote steering wheel for your cloud sandbox:
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
            Verified Primary Sources &amp; Rate-Card Documentation (2026)
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            All compute allocations, per-second microVM rates, browser-hour meters, and token caching figures in this atlas are cross-checked against official documentation:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
            {[
              { name: "OpenAI Dots & ChatGPT Enterprise Pricing", url: "https://openai.com", domain: "openai.com" },
              { name: "E2B Firecracker MicroVM Pricing", url: "https://e2b.dev/pricing", domain: "e2b.dev" },
              { name: "Modal Sandboxes & Serverless GPUs", url: "https://modal.com/pricing", domain: "modal.com" },
              { name: "Daytona Sub-90ms AI Sandboxes", url: "https://daytona.io/pricing", domain: "daytona.io" },
              { name: "Fly.io Sprites Active-CPU MicroVMs", url: "https://fly.io", domain: "fly.io" },
              { name: "Cloudflare Sandboxes (@cloudflare/sandbox)", url: "https://developers.cloudflare.com", domain: "cloudflare.com" },
              { name: "Browserbase Agent Web Infrastructure", url: "https://browserbase.com/pricing", domain: "browserbase.com" },
              { name: "Steel.dev Open-Source Browser API", url: "https://steel.dev/pricing", domain: "steel.dev" },
              { name: "Browserless.io Enterprise Playwright", url: "https://browserless.io/pricing", domain: "browserless.io" },
              { name: "Hetzner Cloud CAX ARM & CPX EPYC", url: "https://www.hetzner.com/cloud", domain: "hetzner.com" },
              { name: "Netcup VPS 1000 G11 NVMe Root Servers", url: "https://www.netcup.com", domain: "netcup.com" },
              { name: "Contabo Cloud VPS High-RAM Tiers", url: "https://contabo.com", domain: "contabo.com" },
              { name: "OVHcloud Unmetered VPS Fleet", url: "https://www.ovhcloud.com", domain: "ovhcloud.com" },
              { name: "Oracle Cloud Always-Free 24GB ARM", url: "https://www.oracle.com/cloud/free/", domain: "oracle.com" },
              { name: "DeepSeek V4.1 API & UTC Off-Peak Docs", url: "https://api-docs.deepseek.com", domain: "deepseek.com" },
              { name: "Vast.ai Spot GPU Marketplace", url: "https://vast.ai/pricing", domain: "vast.ai" },
              { name: "RunPod Community & Secure GPU Cloud", url: "https://www.runpod.io/pricing", domain: "runpod.io" },
              { name: "Lambda Labs Zero-Egress GPU Clusters", url: "https://lambdalabs.com/service/gpu-cloud", domain: "lambdalabs.com" }
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
            <strong className="text-white">The 2026 Edge AI &amp; Cloud Sandbox Atlas</strong> • Built with Next.js App Router, TypeScript &amp; Tailwind CSS.
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
