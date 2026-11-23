import React from "react";
import InteractiveAppendixTabs from "@/components/InteractiveAppendixTabs";
import {
  ArrowUpRight,
  GitBranch,
  Terminal,
  Cpu,
  Smartphone,
  Layers,
  CheckCircle2,
  Server,
  KeyRound,
  ArrowDown
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Minimal Sticky Editorial Top Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 text-white font-bold text-sm tracking-tight">
            <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-mono text-xs text-slate-950 font-extrabold">
              AF
            </span>
            <span>The Personal AI Factory Playbook</span>
          </a>

          <nav aria-label="Article sections" className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-400">
            <a href="#tldr" className="hover:text-white transition-colors">
              TL;DR
            </a>
            <a href="#setting" className="hover:text-white transition-colors">
              Setting
            </a>
            <a href="#big-idea" className="hover:text-white transition-colors">
              Big Idea
            </a>
            <a href="#recommendations" className="hover:text-white transition-colors">
              Stacks
            </a>
            <a href="#how-to-build" className="hover:text-white transition-colors">
              How to Build It
            </a>
            <a href="#interactive-lab" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Data &amp; Calculators
            </a>
          </nav>

          <a
            href="https://github.com/hafhaq/edge-ai-sandbox-atlas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
          >
            <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
            <span>Repo</span>
            <ArrowUpRight className="h-3 w-3 text-slate-500" />
          </a>
        </div>
      </header>

      {/* Clean Editorial Article Container */}
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Article Title & Metadata */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-emerald-300 font-semibold">
              FIELD GUIDE • NOVEMBER 2026
            </span>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <a href="#interactive-lab" className="text-indigo-400 hover:underline">
              Includes interactive calculators &amp; 21-provider dataset ↓
            </a>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Building Your First AI Factory: Cloud Sandboxes, Subsidized Subscriptions &amp; Pocket Control
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-400 leading-relaxed font-serif">
            A practical, no-fluff guide to turning cheap dedicated compute and flat-rate AI subscriptions into an always-on engineering machine—without paying per-token API markups, gambling on unreliable free tiers, or staying chained to a laptop.
          </p>
        </header>

        {/* 1. INTRO & TL;DR */}
        <section id="tldr" className="scroll-mt-20 mb-14">
          <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 to-slate-900/70 p-6 sm:p-7">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 mb-3">
              TL;DR — THE EXECUTIVE SUMMARY
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  <strong>Separate compute from intelligence.</strong> Bundled cloud IDEs (Replit Reserved VMs, 24/7 GitHub Codespaces) charge a 5x–17x markup on raw RAM and CPU. Rent a paid commercial Linux VPS or bare-metal box instead—skip unreliable free tiers entirely.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  <strong>Log in with flat-rate subscriptions, not metered API keys.</strong> Autonomous agents burn millions of tokens just staying aware. Authenticate your CLI agents directly with a paid <strong>American subscription</strong> (Claude Pro/Max, ChatGPT Plus/Pro, Google AI Pro, SuperGrok) paired with a flat-rate <strong>Chinese Coding Plan</strong> (Z.ai GLM-5.3, Qwen Coder, Kimi Code, MiniMax) so you never hit a 5-hour lockout or a surprise bill.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  <strong>Match the topology to the workload.</strong> Solo builders need one $6–$15/mo 8–16 GB NVMe server. Startups need one 64–128 GB bare-metal host sliced into isolated containers (not shared RDP). Heavy 3D/C++ teams (like Unreal Engine) should put one 64–128 GB build/editor server behind an MCP lock queue and let lightweight agent VMs take turns.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  <strong>Steer it from your phone.</strong> Close public Port 22, run <strong>Tailscale + UDP Mosh + Tmux</strong> so cellular handoffs never freeze your terminal, and use voice-dictated chat bridges or 1-tap approval UIs when away from your desk.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. THE SETTING */}
        <section id="setting" className="scroll-mt-20 mb-14 space-y-5 font-serif text-base sm:text-[17px] leading-relaxed text-slate-300">
          <div className="font-sans text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            01 • THE SETTING
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why &ldquo;Chatting With an LLM&rdquo; Gave Way to Cloud Sandboxes
          </h2>

          <p>
            For the first few years of generative AI, the default developer workflow was copy-paste: ask a web chat window for a snippet, paste it into a local editor, run tests on your laptop, and repeat. That loop hits a hard ceiling the moment you want agents to actually <em>build</em>—cloning repositories, installing dependencies, running headless browsers, executing test suites, and iterating for hours while your laptop lid is closed.
          </p>

          <p>
            In response, the industry rushed to wrap AI models in hosted computers. OpenAI introduced always-on <strong>Dots</strong> ($100–$500/mo). Anthropic shipped <strong>Claude Code Cloud</strong>. Google bundled 15 to 60 concurrent async <strong>Jules</strong> coding VMs into Google AI Pro ($19.99/mo). Replit, Cursor, Devin/Windsurf, and GitHub Codespaces all built cloud workspaces, while specialist infrastructure platforms—<strong>E2B, Modal, Daytona, Fly.io Sprites, Cloudflare Sandboxes, Browserbase, and Steel.dev</strong>—engineered sub-second microVMs and stealth browser fleets.
          </p>

          <p>
            For someone trying to stand up their first <strong>AI factory</strong>—an always-on, repeatable production line of coding, research, and automation agents—the market now looks paralyzingly fragmented. Most newcomers fall into one of three traps:
          </p>

          <ol className="list-decimal pl-5 space-y-2.5 text-slate-300">
            <li>
              <strong className="text-white font-sans">The Per-Token Bleed:</strong> Wiring an autonomous agent (like OpenClaw or a continuous coding harness) to a metered API aggregator. Background heartbeats and multi-file context loops quietly rack up $200–$500/month in token bills.
            </li>
            <li>
              <strong className="text-white font-sans">The Cloud IDE Markup:</strong> Leaving a 4-core GitHub Codespace ($0.36/hr = $262/mo) or a Replit Reserved VM + active database running 24/7, paying hyperscaler margins for basic Linux compute.
            </li>
            <li>
              <strong className="text-white font-sans">The Free-Tier Mirage:</strong> Building critical workflows on hobby credits or Oracle Cloud free ARM instances that throw capacity errors or silently reclaim idle servers.
            </li>
          </ol>
        </section>

        {/* 3. THE BIG IDEA */}
        <section id="big-idea" className="scroll-mt-20 mb-14 space-y-5 font-serif text-base sm:text-[17px] leading-relaxed text-slate-300">
          <div className="font-sans text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            02 • THE BIG IDEA
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Decouple Commodity Metal From Subsidized Intelligence—Then Queue the Heavy Iron
          </h2>

          <p>
            Every high-leverage AI factory in 2026 rests on three architectural principles that flip the cost curve by an order of magnitude:
          </p>

          <div className="my-6 space-y-4 font-sans not-prose">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
                <KeyRound className="h-4 w-4" /> Principle 1: Dual-Flag Subsidized Logins Eliminate Both Overage Bills &amp; 5-Hour Lockouts
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AI labs subsidize flat-rate monthly plans heavily. When you authenticate your CLI agent inside a Linux VM using a $20–$100 American plan (<strong>Claude Pro/Max</strong>, <strong>ChatGPT Plus/Pro OAuth</strong>, <strong>Google AI Pro</strong>, or <strong>SuperGrok</strong>), you unlock hundreds of dollars of inference for a fixed fee—subject to a 5-hour rolling quota cap. Pair that primary US login with a flat-rate $18–$19/mo Chinese Coding Plan (<strong>Z.ai GLM-5.3</strong>, <strong>Alibaba Qwen Coder</strong>, <strong>Moonshot Kimi K2.5</strong>, or <strong>MiniMax M2.5</strong>). When your US window approaches its limit—or during routine background loops—your harness seamlessly rolls over. Bonus: Chinese plans like Z.ai apply a 0.5x off-peak credit multiplier during US/European daytime, doubling your effective quota.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-1.5">
                <Server className="h-4 w-4" /> Principle 2: Match Static Metal vs. Per-Second MicroVMs by Duty Cycle
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Continuous 24/7 agents belong on paid non-major European/US cloud VMs (<strong>Netcup</strong>, <strong>Hetzner</strong>, <strong>Contabo</strong>, <strong>OVHcloud</strong>) where 4 vCPU / 8 GB RAM / 256 GB NVMe costs $6.20–$7.50/month. Conversely, massive parallel fan-outs (running 40 isolated code builds for 30 seconds each) belong on per-second microVMs (<strong>Modal</strong> at $0.079/hr, <strong>Daytona</strong> &lt;90ms boot, <strong>E2B</strong> Firecracker snapshots, or <strong>Cloudflare</strong> active-CPU sandboxes). And when agents must browse anti-bot protected websites, offload Chromium to <strong>Steel.dev</strong> or <strong>Browserbase</strong> so datacenter IPs don&apos;t get blocked.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
                <Cpu className="h-4 w-4" /> Principle 3: Asymmetric Hub-and-Spoke Scaling for Teams &amp; Heavy Toolchains
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AI agents spend ~85% of their time reading text, reasoning, and waiting on tokens—and only ~15% hammering heavy compilers, shaders, or GPUs. For startups, don&apos;t buy 6 expensive cloud workstations or cram everyone onto one shared Windows/Linux RDP desktop (which causes port collisions and account-sharing bans). Slice one <strong>64–128 GB bare-metal server</strong> into isolated per-seat containers (each with its own subsidized LLM login). For ultra-heavy workloads like <strong>Unreal Engine 5</strong> or massive C++ monorepos, keep <strong>one 64–128 GB build/editor hub behind a queued MCP server</strong> (with hot <code className="text-amber-200">git worktree</code> slots and a shared Derived Data Cache) while lightweight $6–$8 agent VMs queue their turns for compiles, Blueprint inspection, and viewport screenshots.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CONCRETE RECOMMENDATIONS */}
        <section id="recommendations" className="scroll-mt-20 mb-14">
          <div className="font-sans text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            03 • RECOMMENDATIONS BY STAGE
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
            Four Battle-Tested AI Factory Blueprints (100% Paid, Zero Flaky Free Tiers)
          </h2>
          <p className="mt-3 text-slate-300 font-serif text-base leading-relaxed">
            Pick the tier that matches what you are building today. Every stack below uses SLA-backed commercial compute and flat-rate subscriptions with predictable monthly caps.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Blueprint 1 */}
            <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase text-emerald-400">
                    1. SOLO BUILDER SWEET SPOT
                  </span>
                  <span className="font-mono font-bold text-white text-lg">$44/mo</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  24/7 Sovereign Personal Agent
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li>• <strong>Compute:</strong> Netcup VPS 1000 G11 ($6.20/mo — 4 vCPU, 8 GB DDR5, 256 GB NVMe) or Hetzner CAX21 ($7.50/mo).</li>
                  <li>• <strong>US Login:</strong> Claude Pro ($20/mo), ChatGPT Plus ($20/mo), or Google AI Pro ($19.99/mo + 15 async Jules VMs).</li>
                  <li>• <strong>CN Companion:</strong> Z.ai GLM-5.3 Coding Plan ($18/mo) or Alibaba Qwen Coder ($19/mo).</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>Best for:</strong> Always-on OpenClaw / Claude Code agents, side projects, and mobile-steered coding.
              </div>
            </div>

            {/* Blueprint 2 */}
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase text-indigo-400">
                    2. ZERO-OPS PROTOTYPER
                  </span>
                  <span className="font-mono font-bold text-white text-lg">$25–$100/mo</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  All-in-One Managed Workspace
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li>• <strong>Web Apps from Phone:</strong> Replit Core ($25/mo) for instant UI preview, auth &amp; 1-click deploys.</li>
                  <li>• <strong>Async GitHub PRs:</strong> Google AI Pro ($19.99/mo — 100 Jules VM tasks/day) or Claude Max ($100/mo).</li>
                  <li>• <strong>Enterprise SaaS Teammate:</strong> OpenAI Dots Pro ($100/mo) for 4,000+ pre-wired OAuth connectors.</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>Best for:</strong> Shipping prototypes fast when you refuse to touch Linux or Docker.
              </div>
            </div>

            {/* Blueprint 3 */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase text-cyan-400">
                    3. STARTUP TEAM (5–10 SEATS)
                  </span>
                  <span className="font-mono font-bold text-white text-lg">~$430/mo total</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  One Mega Bare-Metal Host + Isolated Pods
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li>• <strong>Compute:</strong> 1× Hetzner AX102 ($130/mo — Ryzen 7950X 32T, 128 GB DDR5, 3.8 TB NVMe) or Netcup RS 8000 ($48/mo, 64 GB).</li>
                  <li>• <strong>Isolation:</strong> Proxmox LXC / Coder / Kasm WebRTC containers (1 per engineer, never shared RDP).</li>
                  <li>• <strong>Per-Seat LLM:</strong> Individual $38/mo dual US+CN login per engineer (~$304/mo for 8 seats).</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>Best for:</strong> Early-stage teams replacing $2,500/mo cloud workstations with dynamic 64 GB burst RAM.
              </div>
            </div>

            {/* Blueprint 4 */}
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase text-amber-400">
                    4. HEAVY 3D / C++ / GPU FACTORY
                  </span>
                  <span className="font-mono font-bold text-white text-lg">$198–$350/mo</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Queued MCP Hub + Lightweight Spokes
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li>• <strong>Heavy Hub:</strong> 1× Hetzner GEX44 ($198/mo — 64 GB RAM + RTX 4000 Ada 20 GB) or AX102 (128 GB CPU-only).</li>
                  <li>• <strong>Agent Spokes:</strong> Light 8 GB containers (or read-only bind mounts on the same host) queuing compile/editor turns via an MCP lock broker.</li>
                  <li>• <strong>Elastic Burst GPU:</strong> Modal Serverless H100 ($3.95/hr per-sec) or RunPod/Vast RTX 4090 ($0.34/hr).</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>Best for:</strong> Unreal Engine 5, heavy C++/Rust monorepos, and batch inference pipelines.
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW TO DO IT (STEP-BY-STEP INSTRUCTIONS) */}
        <section id="how-to-build" className="scroll-mt-20 mb-14">
          <div className="font-sans text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
            04 • HOW TO DO IT
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
            Stand Up Your AI Factory in 15 Minutes
          </h2>
          <p className="mt-3 text-slate-300 font-serif text-base leading-relaxed">
            Whether you start with a single $6.20 VPS or a $130 bare-metal box, the setup follows five clean steps.
          </p>

          <div className="mt-6 space-y-5">
            {/* Step 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs flex items-center justify-center">
                  1
                </span>
                Provision Paid Compute &amp; Lock Down the Firewall
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Spin up an Ubuntu 24.04 instance with at least <strong>4 vCPU and 8 GB RAM</strong> (2 GB–4 GB VMs choke as soon as you run Docker or a headless browser). Immediately install <strong>Tailscale</strong> and <strong>Mosh</strong>, then close public Port 22 so brute-force scanners cannot reach the box.
              </p>
              <pre className="mt-3 rounded-lg bg-slate-950 border border-slate-800 p-3.5 text-xs font-mono text-emerald-300 overflow-x-auto">
                <code>{`apt-get update && apt-get install -y curl git ufw mosh tmux zellij docker.io
curl -fsSL https://tailscale.com/install.sh | sh && tailscale up --ssh
ufw default deny incoming && ufw default allow outgoing
ufw allow in on tailscale0 && ufw allow 60000:60100/udp && ufw --force enable`}</code>
              </pre>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs flex items-center justify-center">
                  2
                </span>
                Install Your Agent Harness &amp; Authenticate Your Dual Subscriptions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Install Node.js 22 alongside <strong>Claude Code</strong> and <strong>OpenClaw</strong>. Authenticate your primary US plan via CLI OAuth (on a phone, open the login URL in Safari, approve, and paste the resulting <code className="text-indigo-300">localhost</code> callback URL straight back into your terminal), then add your Chinese Coding Plan token for seamless 5-hour overflow.
              </p>
              <pre className="mt-3 rounded-lg bg-slate-950 border border-slate-800 p-3.5 text-xs font-mono text-indigo-200 overflow-x-auto">
                <code>{`npm install -g @anthropics/claude-code openclaw happy-coder

# Option A: Authenticate Claude Pro/Max via CLI and bridge to OpenClaw
claude auth login
openclaw models auth login --provider anthropic --method cli --set-default

# Option B: Authenticate ChatGPT Plus/Pro via official OpenAI OAuth
openclaw models auth login --provider openai

# Add flat-rate companion Coding Plan (Z.ai GLM-5.3 / Qwen Coder / Kimi / MiniMax)
echo 'ZAI_CODING_PLAN_KEY="your-flat-rate-subscription-key"' >> ~/.openclaw.env`}</code>
              </pre>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs flex items-center justify-center">
                  3
                </span>
                Attach Specialized Tools Only Where Needed (Browsers &amp; Heavy Build Hubs)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Keep your agent container lean. For web automation on strict sites, point your agent to <strong>Browserbase</strong> or <strong>Steel.dev</strong> (or run Steel&apos;s open-source Docker image on a 16 GB node and run <code className="text-cyan-300">tailscale serve --bg 5173</code> so you can tap through 2FA prompts from your phone). For heavy engines like Unreal Engine 5, expose your 64–128 GB build box over Tailscale via a queued MCP endpoint with pre-warmed <code className="text-amber-300">git worktree</code> slots and a shared NVMe cache.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs flex items-center justify-center">
                  4
                </span>
                Connect Your Pocket Control Plane (Zero-Drop Mobile Operations)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Never rely on raw TCP SSH on cellular networks—it freezes every time you switch from Wi-Fi to 5G. Connect from <strong>Blink Shell</strong> (iOS), <strong>Termius</strong> (iOS/Android), or <strong>Termux</strong> (Android) using UDP Mosh inside a persistent <code className="text-emerald-300">tmux</code> session. For hands-free commuting, pair your VM with <strong>Happy</strong> (1-tap push approvals for Claude Code diffs) or a private <strong>Telegram voice-note bot</strong> locked to your user ID.
              </p>
              <pre className="mt-3 rounded-lg bg-slate-950 border border-slate-800 p-3.5 text-xs font-mono text-cyan-300 overflow-x-auto">
                <code>{`# From Blink Shell / Termius / Termux on your phone (with Tailscale active):
mosh root@100.x.y.z -- tmux new -A -s factory`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 6. CONCLUSION */}
        <section id="conclusion" className="scroll-mt-20 mb-14 space-y-5 font-serif text-base sm:text-[17px] leading-relaxed text-slate-300">
          <div className="font-sans text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            05 • CONCLUSION
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Own the Metal, Arbitrage the Quotas, Direct From Anywhere
          </h2>

          <p>
            Setting up an AI factory is no longer a game of spending $5,000/month on cloud GPUs or burning unbounded per-token invoices. The builders shipping fastest in 2026 treat cloud compute and frontier models as two separate markets: they buy reliable, high-density commodity Linux hardware for pennies on the dollar, authenticate flat-rate US and Chinese subscriptions inside isolated workspaces, and reserve expensive GPU or 64 GB+ build iron for queued, high-utilization MCP bursts.
          </p>

          <p>
            Start small this weekend: rent one paid 8 GB NVMe server, lock it behind Tailscale and Mosh, log in with your existing subscriptions, and run your first autonomous build from your phone. Once the loop clicks, scaling it into a multi-agent startup factory is just arithmetic.
          </p>

          <div className="pt-2 font-sans">
            <a
              href="#interactive-lab"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              Open the Interactive Calculators, 21-Provider Atlas &amp; Research Log
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Wide Container for the Tabbed Interactive Data Appendix & Calculators */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <InteractiveAppendixTabs />
      </div>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <strong className="text-slate-300">The Personal AI Factory Playbook</strong> • Built with Next.js &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="#interactive-lab" className="hover:text-slate-200">
              Data &amp; Calculators
            </a>
            <a
              href="https://github.com/hafhaq/edge-ai-sandbox-atlas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
