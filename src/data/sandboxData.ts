export type WorkloadCategory =
  | "big-player-workspace"
  | "microvm-sandbox"
  | "remote-browser"
  | "non-major-vps"
  | "gpu-factory";

export interface SandboxProvider {
  id: string;
  name: string;
  tagline: string;
  category: WorkloadCategory;
  categoryLabel: string;
  isolation: string;
  baseSubscriptionUsd: number;
  baseCreditsText: string;
  representativeTier: string;
  vcpu: number;
  ramGb: number;
  storageGb: number;
  gpuModel?: string;
  vramGb?: number;
  hourlyRateUsd: number; // Paid commercial hourly rate
  monthly24x7Usd: number; // Paid monthly rate (zero free-tier reliance)
  bundlesLlmSubscription: boolean; // True if subscription includes LLM quota (Dots, Replit, Claude, Jules, Cursor, Devin)
  billingGranularity:
    | "Per-Second"
    | "Active-CPU Second"
    | "Per-Minute"
    | "Flat Monthly"
    | "Hourly"
    | "Sub + Credits";
  coldStartMs: number;
  maxSessionHours: number;
  bestUseCase:
    | "Remote Browser"
    | "OpenClaw 24/7"
    | "AI Factory"
    | "Burst Code Sandbox"
    | "All-in-One App IDE"
    | "Async Repo Swarm";
  priceToPowerScore: number; // 1-100 composite score on paid commercial tier
  stealthScore: number;
  sovereigntyScore: number;
  sourceUrl: string;
  sourceDomain: string;
  pros: string[];
  gotchas: string[];
  architectureNotes: string;
}

export const SANDBOX_PROVIDERS: SandboxProvider[] = [
  // ==================== 1. BIG-PLAYER WORKSPACES & INTEGRATED AGENT PLATFORMS ====================
  {
    id: "replit-core-pro",
    name: "Replit (Core $25 / Pro $100 + Reserved VMs)",
    tagline: "All-in-one cloud IDE, Replit Agent, Postgres DB & instant web/mobile deployment",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Managed Cloud Container / Reserved VM",
    baseSubscriptionUsd: 25,
    baseCreditsText:
      "Core ($25/mo, $20 credits, 4 vCPU/4GB dev). Pro ($100/mo, $100 pooled credits, up to 10 parallel agents)",
    representativeTier: "Replit Core ($25/mo) + Reserved Always-On VM ($20-$50/mo)",
    vcpu: 4,
    ramGb: 4,
    storageGb: 50,
    hourlyRateUsd: 0.068,
    monthly24x7Usd: 45,
    bundlesLlmSubscription: true,
    billingGranularity: "Sub + Credits",
    coldStartMs: 800,
    maxSessionHours: 730,
    bestUseCase: "All-in-One App IDE",
    priceToPowerScore: 84,
    stealthScore: 40,
    sovereigntyScore: 55,
    sourceUrl: "https://replit.com/pricing",
    sourceDomain: "replit.com",
    pros: [
      "Zero DevOps: built-in Replit Agent, Postgres, Auth, live preview, and 1-click deployment",
      "Best-in-class native iOS & Android mobile app for building full-stack apps from a phone",
      "Pro tier ($100/mo) supports up to 10 parallel autonomous agents with 28-day DB rollbacks"
    ],
    gotchas: [
      "Effort-based Replit Agent checkpoints + active DB ($0.16/hr) + Reserved VMs drain the $20 Core credit fast",
      "A 2 vCPU / 8 GB Reserved VM alone costs ~$50/mo (vs $6.20/mo on Netcup or $7.50/mo on Hetzner)"
    ],
    architectureNotes:
      "Unbeatable for rapid zero-config full-stack app shipping, but 4x–7x pricier per GB of RAM than pairing a Non-Major Cloud VM with a flat-rate Claude/GLM login."
  },
  {
    id: "anthropic-claude-cloud",
    name: "Anthropic Claude Code Cloud (Pro / Max / Ultra)",
    tagline: "First-party Claude 4.6 Sonnet/Opus coding agent + claude --cloud repo containers",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Managed Container + Local/Remote CLI",
    baseSubscriptionUsd: 100,
    baseCreditsText:
      "Pro ($20/mo, 1x 5-hr cap) • Max ($100/mo, 5x quota) • Ultra ($200/mo, 10x quota, no 5-hr rolling cap)",
    representativeTier: "Claude Max ($100/mo) or Ultra ($200/mo) + Cloud Repo Sandbox",
    vcpu: 4,
    ramGb: 8,
    storageGb: 30,
    hourlyRateUsd: 0.137,
    monthly24x7Usd: 100,
    bundlesLlmSubscription: true,
    billingGranularity: "Flat Monthly",
    coldStartMs: 1100,
    maxSessionHours: 24,
    bestUseCase: "Async Repo Swarm",
    priceToPowerScore: 91,
    stealthScore: 40,
    sovereigntyScore: 60,
    sourceUrl: "https://claude.com/pricing",
    sourceDomain: "claude.com",
    pros: [
      "Industry gold-standard multi-file coding intelligence (Sonnet/Opus) included in flat monthly fee",
      "Authenticate `claude auth login` on your own Hetzner/Netcup VM OR spawn managed `claude --cloud` containers",
      "Ultra ($200/mo) removes the 5-hour rolling lockout window for marathon coding days"
    ],
    gotchas: [
      "Pro ($20/mo) hits the 5-hour rolling ceiling in ~90 mins of continuous autonomous OpenClaw/CLI loops",
      "Managed `claude --cloud` containers are repo-scoped and not meant for hosting persistent public databases"
    ],
    architectureNotes:
      "Power move: Run `claude auth login` inside a $7.50 Hetzner 8GB VM and pair with an $18 Z.ai GLM-5.3 fallback login so you never get locked out during 5-hour windows."
  },
  {
    id: "openai-dots-pro",
    name: "OpenAI Dots & Codex Cloud (ChatGPT Plus / Pro)",
    tagline: "Always-on AI teammate with dedicated cloud VM, browser & OAuth login support",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Dedicated Cloud VM + Managed Browser",
    baseSubscriptionUsd: 100,
    baseCreditsText:
      "Plus ($20/mo, OAuth CLI login) • Pro ($100 / $200 / $500/mo, includes persistent Cloud Dot VM + GPT-6 Astra/Terra)",
    representativeTier: "ChatGPT Pro ($100/mo) or Enterprise Standard Dot ($50/mo)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 50,
    hourlyRateUsd: 0.137,
    monthly24x7Usd: 100,
    bundlesLlmSubscription: true,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "All-in-One App IDE",
    priceToPowerScore: 87,
    stealthScore: 80,
    sovereigntyScore: 40,
    sourceUrl: "https://openai.com",
    sourceDomain: "openai.com",
    pros: [
      "Official OAuth login (`openclaw models auth login --provider openai`) lets you use Plus ($20) or Pro ($100) inside OpenClaw!",
      "Pro ($100+) includes an always-on OpenAI Dot cloud computer + browser with 4,000+ SaaS OAuth connectors",
      "First-party iOS widgets, Slack/Teams integration, and read-only safety gates"
    ],
    gotchas: [
      "Hosted Dot VMs do not give bare-metal root kernel access or custom Docker daemon control",
      "OAuth session tokens in external CLIs require a quick browser refresh every ~10 days"
    ],
    architectureNotes:
      "OpenAI uniquely supports both paths: use their hosted Dot cloud computer, OR log your $20/$100 ChatGPT account straight into a self-hosted OpenClaw VM via OAuth."
  },
  {
    id: "google-jules-ai-pro",
    name: "Google Jules + Gemini CLI (Google AI Pro / Ultra)",
    tagline: "15 to 60 concurrent Google-hosted async coding VMs + 1,500 daily CLI calls for $19.99/mo",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Google Cloud Isolated MicroVM per Task",
    baseSubscriptionUsd: 19.99,
    baseCreditsText:
      "AI Pro ($19.99/mo: 100 Jules VM tasks/day, 15 concurrent + 1,500 CLI req/day + 5TB). Ultra ($99.99/mo: 300 tasks/day, 60 concurrent)",
    representativeTier: "Google AI Pro ($19.99/mo) — Jules Async Cloud VMs + Gemini CLI OAuth",
    vcpu: 4,
    ramGb: 8,
    storageGb: 40,
    hourlyRateUsd: 0.027,
    monthly24x7Usd: 19.99,
    bundlesLlmSubscription: true,
    billingGranularity: "Flat Monthly",
    coldStartMs: 2500,
    maxSessionHours: 4,
    bestUseCase: "Async Repo Swarm",
    priceToPowerScore: 96,
    stealthScore: 45,
    sovereigntyScore: 55,
    sourceUrl: "https://jules.google",
    sourceDomain: "jules.google",
    pros: [
      "Insane subsidized value: $19.99/mo includes 100 async GitHub repo VM tasks/day (15 concurrent sandboxes) on Google's cloud!",
      "Log into `gemini` CLI via Google OAuth on your own VPS for 1,500–2,000 high-context Gemini Pro requests/day",
      "Also bundles 5 TB Google Drive storage and Google Colab compute credits"
    ],
    gotchas: [
      "Jules async VMs are task-scoped (clone repo -> run tests -> open PR) rather than a persistent 24/7 SSH server",
      "Pro/Ultra Jules plans require an individual `@gmail.com` account (Workspace enterprise uses Gemini Enterprise)"
    ],
    architectureNotes:
      "The ultimate force multiplier for a $7.50 Hetzner VM: run OpenClaw 24/7 on Hetzner authenticated with Gemini CLI OAuth, and offload 15 parallel repo PRs to Jules VMs."
  },
  {
    id: "xai-supergrok-colossus",
    name: "xAI SuperGrok & Grok Build (Memphis Colossus)",
    tagline: "Grok 4.7 & Grok Build 0.1 backed by 100,000+ H100/H200 Colossus supercluster",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Cloud Playground + Cursor/CLI Partner Integration",
    baseSubscriptionUsd: 30,
    baseCreditsText:
      "X Premium+ / SuperGrok ($30/mo) • SuperGrok Ultra ($100–$200/mo pooled across Grok Build, Cursor & X)",
    representativeTier: "SuperGrok ($30/mo) / Ultra ($100/mo) + Cloud VM Integration",
    vcpu: 4,
    ramGb: 8,
    storageGb: 30,
    hourlyRateUsd: 0.041,
    monthly24x7Usd: 30,
    bundlesLlmSubscription: true,
    billingGranularity: "Flat Monthly",
    coldStartMs: 500,
    maxSessionHours: 24,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 88,
    stealthScore: 65,
    sovereigntyScore: 70,
    sourceUrl: "https://x.ai",
    sourceDomain: "x.ai",
    pros: [
      "Real-time live X (Twitter) firehose + unrestricted web intelligence unavailable to any other LLM",
      "500K to 1M token context window on Memphis Colossus with lightning-fast `Grok Build 0.1` generation",
      "Consolidated X Subscription bundles pool usage across Grok chat, coding tools (Cursor), and API console credits"
    ],
    gotchas: [
      "Requires pairing with an external compute VM (Hetzner/Netcup) or Cursor for persistent Linux filesystem storage",
      "Long-context calls (>200K tokens) consume quota at 2x standard rate"
    ],
    architectureNotes:
      "Unmatched when your OpenClaw agent needs live social/market sentiment monitoring, breaking-news research, and high-speed code generation."
  },
  {
    id: "cursor-background-agents",
    name: "Cursor Background Agents (Pro / Pro+ / Ultra)",
    tagline: "Remote cloud container sandboxes that clone repos & ship PRs asynchronously",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Managed AWS/GCP Dev Container Sandbox",
    baseSubscriptionUsd: 60,
    baseCreditsText:
      "Pro ($20/mo) • Pro+ ($60/mo, 3x pool) • Ultra ($200/mo, 50x usage pool + priority Cloud Background Agent VMs)",
    representativeTier: "Cursor Pro+ ($60/mo) or Ultra ($200/mo) Background Agent Fleet",
    vcpu: 4,
    ramGb: 8,
    storageGb: 40,
    hourlyRateUsd: 0.082,
    monthly24x7Usd: 60,
    bundlesLlmSubscription: true,
    billingGranularity: "Flat Monthly",
    coldStartMs: 1500,
    maxSessionHours: 24,
    bestUseCase: "Async Repo Swarm",
    priceToPowerScore: 89,
    stealthScore: 35,
    sovereigntyScore: 65,
    sourceUrl: "https://cursor.com/pricing",
    sourceDomain: "cursor.com",
    pros: [
      "Switch seamlessly across Claude 4.6, GPT-6, Grok 4.7, Gemini, and DeepSeek under one flat subscription",
      "Background Agents spin up isolated remote VMs with your custom Dockerfile and `.cursor/environment.json`",
      "Ultra ($200/mo) delivers ~50x base usage allowance for heavy parallel background agent swarms"
    ],
    gotchas: [
      "Pro ($20/mo) background agent VM compute draws down included fast-request pools rapidly",
      "Background containers hibernate when idle rather than serving 24/7 production traffic"
    ],
    architectureNotes:
      "You can also connect Cursor Desktop/Mobile via Remote-SSH to a $7.50 Hetzner VM to get unlimited 24/7 Linux persistence while using Cursor's subsidized model pool."
  },
  {
    id: "devin-windsurf-max",
    name: "Devin & Windsurf (Cognition Pro $20 / Max $200)",
    tagline: "Autonomous SWE cloud workstation with integrated browser, terminal & Cascade flows",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Dedicated Cloud SWE Workstation VM",
    baseSubscriptionUsd: 20,
    baseCreditsText:
      "Windsurf/Devin Pro ($20/mo individual daily/weekly quota) • Max ($200/mo continuous autonomous cloud agents) • Teams ($40/seat)",
    representativeTier: "Devin / Windsurf Max ($200/mo) or Pro ($20/mo)",
    vcpu: 4,
    ramGb: 16,
    storageGb: 50,
    hourlyRateUsd: 0.274,
    monthly24x7Usd: 200,
    bundlesLlmSubscription: true,
    billingGranularity: "Flat Monthly",
    coldStartMs: 2000,
    maxSessionHours: 72,
    bestUseCase: "Async Repo Swarm",
    priceToPowerScore: 85,
    stealthScore: 70,
    sovereigntyScore: 55,
    sourceUrl: "https://windsurf.com/pricing",
    sourceDomain: "windsurf.com",
    pros: [
      "Full graphical cloud workstation (shell + code editor + live interactive Chrome browser) per Devin session",
      "Slack/Jira/Linear native triggers let you tag `@Devin` from your phone to reproduce and patch bugs",
      "Pro tier ($20/mo) democratizes Cognition's agent harness with structured daily/weekly quotas"
    ],
    gotchas: [
      "Full autonomous multi-hour cloud VM fleets require the $200/mo Max tier or enterprise seat commits",
      "Less customizable at the raw OS/WireGuard network level than a self-hosted Netcup/Hetzner VPS"
    ],
    architectureNotes:
      "Following Cognition's unification of Devin and Windsurf, Max ($200/mo) replaces legacy $500/mo ACU complexity with predictable power-user quotas."
  },
  {
    id: "github-codespaces-copilot",
    name: "GitHub Codespaces + Copilot (Pro+ $39 / Max $100)",
    tagline: "First-party GitHub cloud VMs ($0.18–$0.72/hr) + multi-model Copilot AI Credits",
    category: "big-player-workspace",
    categoryLabel: "Big-Player Agent Workspace",
    isolation: "Dedicated Hyper-V / Azure Linux VM",
    baseSubscriptionUsd: 39,
    baseCreditsText:
      "Copilot Pro ($10/mo, 1.5k credits) • Pro+ ($39/mo, 7k credits) • Max ($100/mo, 20k credits) + Codespace VM ($0.18/hr 2C/8GB)",
    representativeTier: "Copilot Pro+ ($39/mo) + 2-Core/8GB Codespace (4 hrs/day = $21.60/mo)",
    vcpu: 2,
    ramGb: 8,
    storageGb: 32,
    hourlyRateUsd: 0.18,
    monthly24x7Usd: 170.4,
    bundlesLlmSubscription: true,
    billingGranularity: "Hourly",
    coldStartMs: 4500,
    maxSessionHours: 730,
    bestUseCase: "All-in-One App IDE",
    priceToPowerScore: 81,
    stealthScore: 35,
    sovereigntyScore: 75,
    sourceUrl: "https://github.com/features/copilot/plans",
    sourceDomain: "github.com",
    pros: [
      "Instant zero-trust `.devcontainer` parity with corporate GitHub repositories and Secrets",
      "Copilot Pro+ ($39/mo) & Max ($100/mo) bundle generous multi-model credits (Claude, GPT, Gemini)",
      "Use `gh cs ssh` from mobile Termius/Blink to attach directly to any active Codespace"
    ],
    gotchas: [
      "Leaving a 2-core ($0.18/hr = $131/mo) or 4-core ($0.36/hr = $262/mo) Codespace running 24/7 for an agent is 18x pricier than Hetzner!",
      "Always set a 30-minute auto-suspend timeout on Codespaces; use a $7.50 VPS for 24/7 daemons instead"
    ],
    architectureNotes:
      "Pro tip: Buy Copilot Pro ($10) or Pro+ ($39) for its subsidized multi-model LLM credits, and run the actual compute on a $6.20 Netcup or $7.50 Hetzner VM!"
  },

  // ==================== 2. PAID MICROVM CODE SANDBOXES ====================
  {
    id: "e2b-microvm",
    name: "E2B Pro (The AI Agent Cloud)",
    tagline: "Firecracker microVMs with ~150ms memory snapshot branching & 24h sessions",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "Firecracker MicroVM",
    baseSubscriptionUsd: 150,
    baseCreditsText:
      "Pro Plan: $150/mo base (100–1,100 concurrent sandboxes, 24h max session) + $0.17/hr per 2 vCPU / 4 GiB VM",
    representativeTier: "E2B Pro + Standard 2 vCPU / 4 GiB Firecracker Sandbox ($0.17/hr)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 20,
    hourlyRateUsd: 0.17,
    monthly24x7Usd: 124.1,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Second",
    coldStartMs: 150,
    maxSessionHours: 24,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 91,
    stealthScore: 45,
    sovereigntyScore: 80,
    sourceUrl: "https://e2b.dev/pricing",
    sourceDomain: "e2b.dev",
    pros: [
      "~150ms cold start with memory & filesystem snapshotting—fork a running agent state into 50 branches instantly",
      "Hardware-level Firecracker KVM isolation prevents untrusted code escape",
      "Battle-tested Code Interpreter SDK for production multi-tenant AI SaaS"
    ],
    gotchas: [
      "Requires $150/mo Pro tier for 24-hour continuous sessions and 100+ concurrency",
      "24/7 continuous wall-clock runtime costs $124/mo per sandbox (always pause/snapshot when idle)"
    ],
    architectureNotes:
      "Billed per second ($0.000014/vCPU-s + $0.000045/GiB-s). Built for high-concurrency parallel evaluation and customer-facing code execution."
  },
  {
    id: "modal-sandboxes",
    name: "Modal Sandboxes (Paid Commercial Rate)",
    tagline: "Sub-second gVisor containers scaling to 5,000+ parallel nodes at $0.079/hr",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "gVisor Container Runtime",
    baseSubscriptionUsd: 0,
    baseCreditsText:
      "Pure per-second commercial utility (~$0.047/physical core-hr + $0.008/GiB-hr = $0.079/hr). Team plan: $250/mo",
    representativeTier: "Paid 1 Physical Core (2 vCPU) / 4 GiB RAM Sandbox ($0.079/hr)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 20,
    hourlyRateUsd: 0.079,
    monthly24x7Usd: 57.67,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Second",
    coldStartMs: 220,
    maxSessionHours: 24,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 95,
    stealthScore: 40,
    sovereigntyScore: 82,
    sourceUrl: "https://modal.com/pricing",
    sourceDomain: "modal.com",
    pros: [
      "Lowest commercial per-second CPU+RAM rate among managed serverless sandbox platforms ($0.079/hr)",
      "Scale from 0 to 5,000 parallel test sandboxes in under a second with zero idle cost",
      "Attach any serverless GPU (T4 to H100/B300) to the exact same sandbox function"
    ],
    gotchas: [
      "gVisor syscall interception adds minor overhead on heavy kernel I/O vs bare KVM",
      "Not meant to replace a $7.50 24/7 static SSH server for a single user"
    ],
    architectureNotes:
      "Even ignoring starter credits, Modal's $0.079/hr commercial rate means 100 parallel 30-second test runs cost just $0.065 total."
  },
  {
    id: "daytona-sandbox",
    name: "Daytona Cloud Sandboxes",
    tagline: "Sub-90ms cold-start AI execution environments with optional Kata VM & GPU",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "OCI Container / Optional Kata MicroVM",
    baseSubscriptionUsd: 0,
    baseCreditsText:
      "Commercial usage rate: $0.0504/vCPU-hr + $0.0162/GiB-hr = $0.165/hr for 2 vCPU / 4 GiB RAM",
    representativeTier: "Paid 2 vCPU / 4 GiB RAM Sandbox ($0.165/hr, per-second billing)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 15,
    hourlyRateUsd: 0.165,
    monthly24x7Usd: 120.45,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Second",
    coldStartMs: 85,
    maxSessionHours: 168,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 92,
    stealthScore: 42,
    sovereigntyScore: 86,
    sourceUrl: "https://daytona.io/pricing",
    sourceDomain: "daytona.io",
    pros: [
      "Fastest cold start in the industry (<90ms) makes remote agent tool calls feel instantaneous",
      "Zero mandatory platform subscription fee—pay strictly per second of active sandbox life",
      "Native git workspace hydration and on-demand GPU attachment (RTX 4090 @ $0.99/hr to H100 @ $4.29/hr)"
    ],
    gotchas: [
      "Must enable auto-suspend when used as a daily dev environment to avoid $120/mo 24/7 burn",
      "Hardware VM isolation is an opt-in toggle over default fast containers"
    ],
    architectureNotes:
      "Ideal when your coding agent spawns dozens of short-lived environments per hour and needs sub-100ms responsiveness."
  },
  {
    id: "fly-sprites",
    name: "Fly.io Sprites (Active-CPU MicroVMs)",
    tagline: "Persistent Firecracker microVMs billed on cumulative active CPU cycles",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "Firecracker MicroVM",
    baseSubscriptionUsd: 0,
    baseCreditsText:
      "Commercial rates: $0.0385/active CPU-hr + $0.021875/GB-hr RAM. Hero Plan: $100/mo (1,200 CPU-hrs + 4,800 GB-hrs)",
    representativeTier: "2 vCPU / 4 GB Persistent Sprite (~25% active CPU duty = ~$29/mo)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 20,
    hourlyRateUsd: 0.107,
    monthly24x7Usd: 29.5,
    bundlesLlmSubscription: false,
    billingGranularity: "Active-CPU Second",
    coldStartMs: 300,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 90,
    stealthScore: 50,
    sovereigntyScore: 88,
    sourceUrl: "https://fly.io",
    sourceDomain: "fly.io",
    pros: [
      "Bills CPU strictly on ACTIVE cycles ($0.0385/CPU-hr)—you don't pay for CPU while waiting on LLM responses!",
      "Hot ($0.000683/GB-hr) vs Cold ($0.000027/GB-hr) disk checkpointing preserves full Linux state cheaply",
      "30+ global edge regions with private WireGuard (6pn) mesh networking built in"
    ],
    gotchas: [
      "Resident RAM still accrues while in hot state; hibernate to cold storage when inactive",
      "Higher monthly cost than a flat $7.50 Hetzner VPS if your CPU runs at 100% load 24/7"
    ],
    architectureNotes:
      "The best serverless microVM for stateful personal agents when you want automatic scale-to-cold without managing a single static VPS."
  },
  {
    id: "cloudflare-sandboxes",
    name: "Cloudflare Sandboxes (Workers Paid)",
    tagline: "Edge container sandboxes billed on active CPU cycles with Durable Object state",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "Cloudflare Container Virtualization",
    baseSubscriptionUsd: 5,
    baseCreditsText: "$5/mo Workers Paid base plan + active-CPU container & Durable Object metering",
    representativeTier: "Workers Paid ($5/mo) + 2 vCPU / 4 GB Edge Sandbox",
    vcpu: 2,
    ramGb: 4,
    storageGb: 10,
    hourlyRateUsd: 0.065,
    monthly24x7Usd: 28.0,
    bundlesLlmSubscription: false,
    billingGranularity: "Active-CPU Second",
    coldStartMs: 180,
    maxSessionHours: 24,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 92,
    stealthScore: 55,
    sovereigntyScore: 74,
    sourceUrl: "https://developers.cloudflare.com",
    sourceDomain: "cloudflare.com",
    pros: [
      "Active-CPU billing slashes cost by 65%+ for I/O-bound agent tool loops waiting on LLM tokens",
      "Zero egress fees to Cloudflare R2 storage; couples directly with Durable Objects for agent memory",
      "Low $5/mo commercial entry ticket on Workers Paid plan"
    ],
    gotchas: [
      "Total bill stacks Workers requests, Durable Object duration, and container RAM",
      "Designed for programmatic `@cloudflare/sandbox` SDK execution rather than interactive SSH desktops"
    ],
    architectureNotes:
      "The top edge-native choice for SaaS builders embedding isolated code interpreters inside Cloudflare Workers applications."
  },

  // ==================== 3. PAID REMOTE BROWSER FLEETS ====================
  {
    id: "browserbase",
    name: "Browserbase (Developer $20 / Startup $99)",
    tagline: "Agent-native headless Chromium fleet with Stagehand, stealth & DOM session replay",
    category: "remote-browser",
    categoryLabel: "Remote Browser Fleet",
    isolation: "Isolated Managed Chromium VM",
    baseSubscriptionUsd: 20,
    baseCreditsText:
      "Developer: $20/mo (100 hrs, 25 concurrent, ~$0.12/hr overage) • Startup: $99/mo (500 hrs, 100 concurrent, ~$0.10/hr)",
    representativeTier: "Developer ($20/mo for 100 hrs) or Startup ($99/mo for 500 hrs)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 5,
    hourlyRateUsd: 0.10,
    monthly24x7Usd: 73.0,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Minute",
    coldStartMs: 400,
    maxSessionHours: 6,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 93,
    stealthScore: 98,
    sovereigntyScore: 62,
    sourceUrl: "https://browserbase.com/pricing",
    sourceDomain: "browserbase.com",
    pros: [
      "Gold-standard live DOM session replay & time-travel debugging for Stagehand/Playwright/MCP agents",
      "Managed residential proxy rotation and anti-bot TLS/canvas fingerprint stealth out of the box",
      "Offloads Chromium's 1GB+ per-tab RAM spikes from your main OpenClaw/agent server"
    ],
    gotchas: [
      "1-minute minimum billing round-up per browser session",
      "Residential proxy bandwidth is metered per GB beyond included plan pool"
    ],
    architectureNotes:
      "Essential when your agent interacts with Cloudflare/DataDome-protected commercial sites that immediately block Hetzner/AWS datacenter IPs."
  },
  {
    id: "steel-dev",
    name: "Steel.dev (Paid Cloud $0.08–$0.10/hr or Self-Hosted OSS)",
    tagline: "Open-source headless browser API for AI agents with live mobile human takeover",
    category: "remote-browser",
    categoryLabel: "Remote Browser Fleet",
    isolation: "Isolated Browser Container / VM",
    baseSubscriptionUsd: 25,
    baseCreditsText:
      "Pay-as-you-go Cloud ($0.10/hr) • Scale Plan ($250/mo, includes $100 credit, $0.08/hr, 100 concurrent) • Self-Hosted Docker ($0 software)",
    representativeTier: "Paid Cloud ($0.08–$0.10/hr) or Self-Hosted on Contabo 16GB VPS ($10.50/mo)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 5,
    hourlyRateUsd: 0.08,
    monthly24x7Usd: 58.4,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Minute",
    coldStartMs: 350,
    maxSessionHours: 24,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 96,
    stealthScore: 94,
    sovereigntyScore: 96,
    sourceUrl: "https://steel.dev/pricing",
    sourceDomain: "steel.dev",
    pros: [
      "Dual path: use Steel Cloud at $0.08–$0.10/hr OR self-host the open-source Docker container on a $10.50 16GB VPS!",
      "Embeddable live interactive browser stream lets you tap through 2FA/login prompts from your phone",
      "Transparent add-ons for residential proxies ($6–$10/GB) and automated CAPTCHA solving ($1–$3/1k)"
    ],
    gotchas: [
      "Self-hosting on a datacenter VPS still requires plugging in a residential proxy ($6/GB) for strict anti-bot targets",
      "Entry cloud tier limits single-session duration to 15–60 mins (24h on Enterprise/Self-Hosted)"
    ],
    architectureNotes:
      "The highest price-to-power remote browser architecture: run Steel's OSS Docker container on a 16GB Contabo/Netcup VPS and stream `:5173` over Tailscale Serve to your phone."
  },
  {
    id: "browserless",
    name: "Browserless.io (Prototyping $25 / Starter $140)",
    tagline: "High-throughput Puppeteer, Playwright & BrowserQL stealth grid",
    category: "remote-browser",
    categoryLabel: "Remote Browser Fleet",
    isolation: "Dedicated Container Fleet",
    baseSubscriptionUsd: 25,
    baseCreditsText:
      "Prototyping: $25/mo (~165 hrs / 20k units) • Starter: $140/mo (~1,500 hrs / 180k units) • Scale: $350/mo (~4,150 hrs)",
    representativeTier: "Starter Plan ($140/mo for ~1,500 browser hours = ~$0.093/hr)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 10,
    hourlyRateUsd: 0.093,
    monthly24x7Usd: 68.0,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Minute",
    coldStartMs: 450,
    maxSessionHours: 1,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 88,
    stealthScore: 95,
    sovereigntyScore: 82,
    sourceUrl: "https://browserless.io/pricing",
    sourceDomain: "browserless.io",
    pros: [
      "BrowserQL GraphQL stealth API bypasses sophisticated bot detectors without brittle Puppeteer hacks",
      "Predictable unit bundles drop effective cost to ~$0.085–$0.093/hr on Starter/Scale tiers",
      "Commercial Docker license available for private on-prem / VPC clusters"
    ],
    gotchas: [
      "Stealth proxy units consume credit multipliers faster than raw headless rendering",
      "Lowest tier pricing requires annual commitment"
    ],
    architectureNotes:
      "A proven enterprise workhorse for high-volume PDF rendering, automated scraping pipelines, and multi-region Playwright execution."
  },

  // ==================== 4. PAID NON-MAJOR CLOUD VMS (SOVEREIGN 24/7 BACKBONE) ====================
  {
    id: "netcup-vps-1000",
    name: "Netcup (VPS 1000 G11 / RS 2000 G11)",
    tagline: "256 GB to 512 GB NVMe + 8–16 GB DDR5 RAM at €5.75–€14.50/mo (Zero Free-Tier Lottery)",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 6.2,
    baseCreditsText:
      "VPS 1000 G11: $6.20/mo (4 vCPU, 8 GB DDR5, 256 GB NVMe) • RS 2000 G11: $15.50/mo (8 dedicated cores, 16 GB DDR5, 512 GB NVMe)",
    representativeTier: "VPS 1000 G11 ($6.20/mo: 4 vCPU / 8GB / 256GB NVMe) or RS 2000 ($15.50/mo: 8C/16GB/512GB)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 256,
    hourlyRateUsd: 0.0085,
    monthly24x7Usd: 6.2,
    bundlesLlmSubscription: false,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 99,
    stealthScore: 25,
    sovereigntyScore: 100,
    sourceUrl: "https://www.netcup.com",
    sourceDomain: "netcup.com",
    pros: [
      "Massive 256 GB NVMe disk on a $6.20/mo 8 GB RAM VM (3.2x more disk than Hetzner for holding 50+ repos & Docker images)",
      "Root Server (RS 2000 G11 at $15.50/mo) provides 8 dedicated AMD EPYC cores + 16 GB DDR5 + 512 GB NVMe",
      "80 TB/month high-speed traffic in Nuremberg, Vienna, Amsterdam, and Manassas (US East)"
    ],
    gotchas: [
      "Requires bringing your own LLM subscription login (`claude auth login`, ChatGPT OAuth, or Z.ai GLM / Qwen Coder key)",
      "Datacenter IP ASN needs Steel.dev or residential proxy when scraping protected websites"
    ],
    architectureNotes:
      "The undisputed paid price-to-power king: pair Netcup VPS 1000 ($6.20/mo) with Claude Pro ($20) + Z.ai GLM Coding Plan ($18) for an unstoppable 24/7 sovereign engineering machine."
  },
  {
    id: "hetzner-cax-cpx",
    name: "Hetzner Cloud (CAX21 ARM $7.50 / CPX31 AMD $14.50)",
    tagline: "Hourly-billed German/US cloud VMs with blistering NVMe & <0.5% CPU steal",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 7.5,
    baseCreditsText:
      "CAX21: $7.50/mo (4 Ampere ARM vCPU, 8 GB RAM, 80 GB NVMe) • CPX31: $14.50/mo (4 AMD EPYC vCPU, 8 GB RAM, 160 GB NVMe)",
    representativeTier: "CAX21 ARM ($7.50/mo: 4 vCPU / 8GB) or CPX31 x86 ($14.50/mo: 4 AMD vCPU / 8GB)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 80,
    hourlyRateUsd: 0.0103,
    monthly24x7Usd: 7.5,
    bundlesLlmSubscription: false,
    billingGranularity: "Hourly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 98,
    stealthScore: 25,
    sovereigntyScore: 100,
    sourceUrl: "https://www.hetzner.com/cloud",
    sourceDomain: "hetzner.com",
    pros: [
      "Instant 10-second Terraform/cloud-init provisioning with hourly billing and no minimum contract lock-in",
      "Near-zero CPU steal (<0.5%) and 20 TB included bandwidth across Germany, Finland, and US (Hillsboro/Ashburn)",
      "8 GB RAM comfortably runs OpenClaw + Claude Code CLI + Tailscale + local Postgres + 2 headless Chrome tabs"
    ],
    gotchas: [
      "CAX21 uses ARM64 (`aarch64`)—99% of Docker/Node/Python tools work natively, or pick CPX22/CPX31 ($7–$14.50) for x86_64",
      "Strict automated fraud filter during initial account creation"
    ],
    architectureNotes:
      "The developer favorite for automated `cloud-init` deployments: spin up a 4-vCPU / 8GB box in 10 seconds, run `tailscale up --ssh`, and log in with your subsidized LLM plan."
  },
  {
    id: "contabo-vps-highram",
    name: "Contabo (Cloud VPS 4 $5.28 / VPS 6 16GB $10.50)",
    tagline: "Maximum RAM capacity per dollar for self-hosting multi-tab Steel browser & vector DBs",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 5.28,
    baseCreditsText:
      "VPS 4: $5.28/mo (4 vCPU, 8 GB RAM, 100 GB SSD) • VPS 6: $10.50/mo (6 vCPU, 16 GB RAM, 200 GB NVMe) • VPS 8: $19/mo (8C / 24GB)",
    representativeTier: "Cloud VPS 6 ($10.50/mo for 6 vCPU, 16 GB RAM, 200 GB NVMe)",
    vcpu: 6,
    ramGb: 16,
    storageGb: 200,
    hourlyRateUsd: 0.0144,
    monthly24x7Usd: 10.5,
    bundlesLlmSubscription: false,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 93,
    stealthScore: 25,
    sovereigntyScore: 100,
    sourceUrl: "https://contabo.com",
    sourceDomain: "contabo.com",
    pros: [
      "Unmatched 16 GB RAM for $10.50/mo (or 8 GB for $5.28/mo)—prevents OOM crashes when running 8+ concurrent Chromium tabs",
      "Unmetered outbound traffic on a 200–300 Mbps port",
      "Global datacenter regions across US (Central/East/West), EU, UK, Singapore, Sydney, and Tokyo"
    ],
    gotchas: [
      "Higher host CPU oversubscription (5%–12% CPU steal) and lower sustained disk IOPS than Netcup or Hetzner",
      "Use for memory-bound workloads (headless browsers, Qdrant vector indexes) rather than latency-critical Rust compilation"
    ],
    architectureNotes:
      "The ideal high-RAM worker node: deploy the open-source `steel-browser` Docker stack here so your agent never runs out of memory on heavy web SPAs."
  },
  {
    id: "ovhcloud-vps",
    name: "OVHcloud (VPS-1 $4.50 / VPS-2 $9.00)",
    tagline: "DDoS-protected European & North American VMs with unmetered 500 Mbps–1 Gbps pipe",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 4.5,
    baseCreditsText:
      "VPS-1: $4.50/mo (2 vCPU, 4 GB RAM, 40 GB NVMe, 500 Mbps) • VPS-2: $9.00/mo (4 vCPU, 8 GB RAM, 80 GB NVMe, 1 Gbps)",
    representativeTier: "VPS-2 ($9.00/mo: 4 vCPU, 8 GB RAM, 80 GB NVMe) or VPS-1 ($4.50/mo)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 80,
    hourlyRateUsd: 0.0123,
    monthly24x7Usd: 9.0,
    bundlesLlmSubscription: false,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 91,
    stealthScore: 28,
    sovereigntyScore: 100,
    sourceUrl: "https://www.ovhcloud.com",
    sourceDomain: "ovhcloud.com",
    pros: [
      "Enterprise anti-DDoS scrubbing and truly unmetered 500 Mbps to 1 Gbps public bandwidth",
      "$4.50/mo entry point (VPS-1) is the cheapest commercial ticket for a dedicated 24/7 OpenClaw + Telegram host",
      "Predictable renewal pricing across North America, Europe, and Asia-Pacific"
    ],
    gotchas: [
      "40 GB – 80 GB disk is smaller than Netcup's 256 GB NVMe at a similar price point",
      "Single-core Geekbench speed trails Hetzner's newest AMD EPYC Genoa nodes"
    ],
    architectureNotes:
      "A rock-solid, unmetered-bandwidth host for 24/7 webhook orchestration, Telegram voice bots, and multi-agent routing."
  },

  // ==================== 5. PAID GPU AI FACTORIES ====================
  {
    id: "vast-ai-gpu",
    name: "Vast.ai (Paid Spot & On-Demand GPU Fleet)",
    tagline: "Lowest commercial $/VRAM-hour: L40 40GB ($0.31/hr) to A100 80GB ($0.67/hr)",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "Docker Container or KVM VM on Dedicated GPU",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Commercial per-second GPU billing: RTX 4090 (~$0.31/hr), L40 40GB (~$0.31/hr), A100 80GB (~$0.67/hr)",
    representativeTier: "1x NVIDIA A100 80GB SXM ($0.67/hr) or RTX 4090 24GB ($0.31/hr)",
    vcpu: 16,
    ramGb: 64,
    storageGb: 100,
    gpuModel: "A100 80GB / RTX 4090",
    vramGb: 80,
    hourlyRateUsd: 0.67,
    monthly24x7Usd: 489.1,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Second",
    coldStartMs: 15000,
    maxSessionHours: 730,
    bestUseCase: "AI Factory",
    priceToPowerScore: 96,
    stealthScore: 20,
    sovereigntyScore: 90,
    sourceUrl: "https://vast.ai/pricing",
    sourceDomain: "vast.ai",
    pros: [
      "Unbeatable raw GPU economics: rent an 80GB A100 for ~$0.67/hr (75% cheaper than AWS/GCP)",
      "Run private uncensored 70B/120B local models (Qwen3-72B, Llama-4, DeepSeek distilled) via vLLM/SGLang",
      "Direct SSH + Tailscale template injection lets your phone or OpenClaw agent spin up GPU workers on demand"
    ],
    gotchas: [
      "Marketplace hosts vary in network speed and uptime—filter by Verified Datacenter hosts (>99.5% reliability)",
      "Always sync checkpoints to S3/Cloudflare R2 so host maintenance never loses training state"
    ],
    architectureNotes:
      "The price-to-power king for sustained batch inference, private local LLM hosting, and LoRA fine-tuning."
  },
  {
    id: "runpod-gpu",
    name: "RunPod (Community $0.34/hr 4090 & Secure Cloud H100)",
    tagline: "Per-second GPU pods & FlashBoot serverless GPU endpoints",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "Container Pod / Dedicated Bare-Metal Cluster",
    baseSubscriptionUsd: 0,
    baseCreditsText:
      "Per-second GPU billing: RTX 4090 24GB ($0.34/hr Comm / $0.69/hr Secure) • A100 80GB ($1.79/hr) • H100 ($3.99/hr)",
    representativeTier: "RTX 4090 24GB ($0.34/hr) or A100 80GB ($1.79/hr Secure Cloud)",
    vcpu: 16,
    ramGb: 62,
    storageGb: 100,
    gpuModel: "RTX 4090 24GB / A100 80GB",
    vramGb: 24,
    hourlyRateUsd: 0.34,
    monthly24x7Usd: 248.2,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Second",
    coldStartMs: 4000,
    maxSessionHours: 730,
    bestUseCase: "AI Factory",
    priceToPowerScore: 94,
    stealthScore: 20,
    sovereigntyScore: 92,
    sourceUrl: "https://www.runpod.io/pricing",
    sourceDomain: "runpod.io",
    pros: [
      "Best developer UX for interactive GPU pods: 1-click vLLM, ComfyUI, and PyTorch templates with instant SSH",
      "Choose Community Cloud ($0.34/hr 4090) for cheap dev or Tier-3/4 Secure Cloud for SLA production",
      "FlashBoot serverless endpoints spin up GPU workers in <2 seconds for API traffic"
    ],
    gotchas: [
      "Stopped pods with attached persistent volumes continue accruing storage charges (~$0.07/GB-mo)",
      "Secure Cloud A100/H100 rates are pricier than Vast.ai marketplace listings"
    ],
    architectureNotes:
      "Ideal when your coding agent on a $7.50 Hetzner VM needs to spin up an RTX 4090 pod via API for 15 minutes ($0.085) to run CUDA tests or render video/audio."
  },
  {
    id: "modal-gpu-factory",
    name: "Modal Serverless GPU Factory (Paid Per-Second H100 / L40S)",
    tagline: "Scale-to-zero H100 ($3.95/hr) & L40S ($1.95/hr) billed strictly per active second",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "gVisor GPU Container",
    baseSubscriptionUsd: 0,
    baseCreditsText:
      "Commercial per-second GPU rates: T4 ($0.59/hr), L40S 48GB ($1.95/hr), A100 80GB ($3.70/hr), H100 ($3.95/hr), B300 ($7.10/hr)",
    representativeTier: "Serverless NVIDIA H100 80GB ($3.95/hr = $0.0011/sec) or L40S ($1.95/hr)",
    vcpu: 8,
    ramGb: 64,
    storageGb: 50,
    gpuModel: "H100 80GB / L40S 48GB / B300",
    vramGb: 80,
    hourlyRateUsd: 3.95,
    monthly24x7Usd: 2883.5,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Second",
    coldStartMs: 1800,
    maxSessionHours: 24,
    bestUseCase: "AI Factory",
    priceToPowerScore: 97,
    stealthScore: 25,
    sovereigntyScore: 84,
    sourceUrl: "https://modal.com/pricing",
    sourceDomain: "modal.com",
    pros: [
      "Zero idle GPU waste: a 25-second H100 inference job costs $0.027 and scales immediately back to $0",
      "Sub-2-second GPU container cold start with memory snapshotting of loaded model weights",
      "Fan out across 50 parallel H100 GPUs from a single Python decorator"
    ],
    gotchas: [
      "Not meant for 24/7 continuous month-long training (use Lambda Labs or Vast.ai for 24/7 runs)",
      "Requires structuring pipelines using Modal's Python/TS SDK"
    ],
    architectureNotes:
      "The undisputed champion for bursty AI Factories where GPU utilization is event-driven rather than continuous."
  },
  {
    id: "lambda-labs-gpu",
    name: "Lambda Labs (Zero-Egress H100 & B200 Clusters)",
    tagline: "Enterprise multi-GPU training clusters ($1.99/hr A100 to $4.29/hr H100) with $0 egress",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "Dedicated GPU Virtual Machine / Cluster",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Per-minute GPU billing: A100 ($1.99/hr), H100 SXM ($4.29/hr), B200 SXM6 ($6.99/hr) + $0 egress fees",
    representativeTier: "1x–8x NVIDIA H100 SXM ($4.29/GPU-hr) or B200 SXM6 ($6.99/GPU-hr)",
    vcpu: 26,
    ramGb: 200,
    storageGb: 512,
    gpuModel: "H100 80GB SXM / B200 SXM6",
    vramGb: 80,
    hourlyRateUsd: 4.29,
    monthly24x7Usd: 3131.7,
    bundlesLlmSubscription: false,
    billingGranularity: "Per-Minute",
    coldStartMs: 25000,
    maxSessionHours: 730,
    bestUseCase: "AI Factory",
    priceToPowerScore: 89,
    stealthScore: 20,
    sovereigntyScore: 94,
    sourceUrl: "https://lambdalabs.com/service/gpu-cloud",
    sourceDomain: "lambdalabs.com",
    pros: [
      "Zero data egress fees saves thousands of dollars when transferring multi-terabyte model checkpoints",
      "Full NVLink & InfiniBand interconnect across 8x H100 / B200 nodes with pre-installed Lambda Stack",
      "Predictable enterprise hardware without peer-to-peer host variance"
    ],
    gotchas: [
      "Single-GPU on-demand instances can face queue waitlists during peak hours",
      "Overkill for lightweight CPU-bound agent orchestration"
    ],
    architectureNotes:
      "The gold standard for serious multi-GPU pre-training and full-weight fine-tuning where network fabric and zero egress costs dominate."
  }
];

export interface SubsidizedLlmSubscription {
  id: string;
  name: string;
  provider: string;
  origin: "US" | "CN";
  originLabel: string;
  monthlyFeeUsd: number;
  tierName: string;
  flagshipModels: string;
  vmAuthMethod: string;
  quotaStructure: string;
  fiveHourBurstCapacityHours: number; // How many hours of continuous heavy coding within a 5-hour window before throttle
  offPeakBonusText: string;
  includesCloudSandboxText: string;
  compatibleHarnesses: string[];
  bestPairedWith: string;
  sourceUrl: string;
}

export const SUBSIDIZED_LLM_SUBSCRIPTIONS: SubsidizedLlmSubscription[] = [
  {
    id: "claude-pro-20",
    name: "Anthropic Claude Pro",
    provider: "Anthropic",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 20,
    tierName: "Claude Pro ($20/mo)",
    flagshipModels: "Claude 4.6 Sonnet & Opus",
    vmAuthMethod: "`claude auth login` (CLI OAuth; bridged to OpenClaw via `--method cli`)",
    quotaStructure: "1x Baseline • Rolling 5-hour session bucket + weekly ceiling",
    fiveHourBurstCapacityHours: 1.6,
    offPeakBonusText: "Standard 24/7 quota consumption",
    includesCloudSandboxText: "Includes basic `claude --cloud` repo sessions",
    compatibleHarnesses: ["Claude Code CLI", "OpenClaw (via CLI bridge)", "Claude Web/Mobile"],
    bestPairedWith: "Z.ai GLM-5.3 Lite ($18/mo) or Qwen Coder ($19/mo) to cover the remaining 3.4 hrs of heavy 5-hr loops",
    sourceUrl: "https://claude.com/pricing"
  },
  {
    id: "claude-max-100",
    name: "Anthropic Claude Max / Ultra",
    provider: "Anthropic",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 100,
    tierName: "Claude Max ($100/mo • 5x) / Ultra ($200/mo • 10x, no 5-hr cap)",
    flagshipModels: "Claude 4.6 Opus & Sonnet (Priority Queue)",
    vmAuthMethod: "`claude auth login` on your Cloud VM + `claude --cloud` remote containers",
    quotaStructure: "5x Pro usage allowance (Ultra @ $200 gives 10x and removes the 5-hour rolling lockout)",
    fiveHourBurstCapacityHours: 4.8,
    offPeakBonusText: "Priority queue access during US peak hours",
    includesCloudSandboxText: "Includes full `claude --cloud` background repo containers",
    compatibleHarnesses: ["Claude Code CLI", "OpenClaw", "Claude iOS/Android App"],
    bestPairedWith: "Netcup RS 2000 16GB ($15.50/mo) or Hetzner CPX31 ($14.50/mo) for heavy full-time engineering",
    sourceUrl: "https://claude.com/pricing"
  },
  {
    id: "chatgpt-plus-20",
    name: "OpenAI ChatGPT Plus",
    provider: "OpenAI",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 20,
    tierName: "ChatGPT Plus ($20/mo)",
    flagshipModels: "GPT-6 Astra / GPT-6.1 Sol & Codex",
    vmAuthMethod: "Official OAuth: `openclaw models auth login --provider openai` (or `codex login`)",
    quotaStructure: "Rolling 5-hour message/tool window + weekly fair-use cap",
    fiveHourBurstCapacityHours: 2.0,
    offPeakBonusText: "Standard OAuth token refresh (~10-day token lifetime)",
    includesCloudSandboxText: "Limited preview access to OpenAI Dots",
    compatibleHarnesses: ["OpenClaw (Native OAuth)", "OpenAI Codex CLI", "ChatGPT App"],
    bestPairedWith: "Z.ai GLM-5.3 ($18/mo) or Kimi Code ($19/mo) on a $7.50 Hetzner CAX21 VM",
    sourceUrl: "https://openai.com/chatgpt/pricing"
  },
  {
    id: "chatgpt-pro-100",
    name: "OpenAI ChatGPT Pro (With Cloud Dot VM)",
    provider: "OpenAI",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 100,
    tierName: "ChatGPT Pro ($100 / $200 / $500 tiers)",
    flagshipModels: "GPT-6 Astra & GPT-6.1 Terra (High Headroom)",
    vmAuthMethod: "Hosted OpenAI Dot Cloud Computer + `openclaw models auth login --provider openai`",
    quotaStructure: "High-cap background agent quota scaling from $100 to $200/$500 tiers",
    fiveHourBurstCapacityHours: 4.7,
    offPeakBonusText: "Includes 24/7 background Dot execution",
    includesCloudSandboxText: "INCLUDES 1 dedicated always-on OpenAI Dot Cloud Computer + Browser!",
    compatibleHarnesses: ["OpenAI Dots Cloud VM", "OpenClaw OAuth", "Codex CLI"],
    bestPairedWith: "Standalone all-in-one OR paired with a $6.20 Netcup VM for custom root Docker services",
    sourceUrl: "https://openai.com"
  },
  {
    id: "google-ai-pro-20",
    name: "Google AI Pro (Gemini CLI + Jules Cloud VMs)",
    provider: "Google",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 19.99,
    tierName: "Google AI Pro ($19.99/mo) / Ultra ($99.99/mo)",
    flagshipModels: "Gemini 3.0 / 2.5 Pro & Flash",
    vmAuthMethod: "Google OAuth in `gemini` CLI on your VM + GitHub App for Jules Cloud VMs",
    quotaStructure: "1,500–2,000 Gemini CLI requests/day + 100 Jules async VM tasks/day (15 concurrent!)",
    fiveHourBurstCapacityHours: 4.2,
    offPeakBonusText: "Massive daily request cap + 5 TB Google Drive included",
    includesCloudSandboxText: "INCLUDES 15 concurrent Google-hosted Jules coding VMs (60 on Ultra)!",
    compatibleHarnesses: ["Gemini CLI", "Google Jules Async VMs", "OpenClaw"],
    bestPairedWith: "The highest-leverage $19.99 subscription in tech—pair with a $6.20 Netcup VM + $18 Z.ai GLM",
    sourceUrl: "https://jules.google"
  },
  {
    id: "xai-supergrok-30",
    name: "xAI SuperGrok / X Premium+ (Colossus)",
    provider: "xAI",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 30,
    tierName: "SuperGrok / X Premium+ ($30/mo) • Ultra ($100/mo)",
    flagshipModels: "Grok 4.7 (500K ctx) & Grok Build 0.1",
    vmAuthMethod: "xAI Console / SuperGrok token injected into Cursor, OpenCode, or OpenClaw",
    quotaStructure: "Pooled subscription quota across Grok chat, Grok Build, Cursor & X firehose",
    fiveHourBurstCapacityHours: 3.5,
    offPeakBonusText: "Backed by 100,000+ GPU Memphis Colossus cluster",
    includesCloudSandboxText: "Web Console Playground + Cursor partner pool",
    compatibleHarnesses: ["OpenCode", "OpenClaw", "Cursor", "Grok Console"],
    bestPairedWith: "Hetzner CAX21 ($7.50/mo) for agents needing real-time X/web intelligence + coding",
    sourceUrl: "https://x.ai"
  },
  {
    id: "github-copilot-pro-plus-39",
    name: "GitHub Copilot Pro+ (Multi-Model Credits)",
    provider: "GitHub / Microsoft",
    origin: "US",
    originLabel: "🇺🇸 American Frontier",
    monthlyFeeUsd: 39,
    tierName: "Copilot Pro ($10) • Pro+ ($39, 7k credits) • Max ($100, 20k credits)",
    flagshipModels: "Claude 4.6 Sonnet/Opus, GPT-6, Gemini Pro (Multi-Model Switcher)",
    vmAuthMethod: "`gh auth login` inside your Cloud VM + VS Code Remote-SSH / Copilot CLI",
    quotaStructure: "Unlimited standard completions + 7,000 AI Credits/mo ($70 value) on Pro+",
    fiveHourBurstCapacityHours: 3.8,
    offPeakBonusText: "Switch models freely when one lab has latency spikes",
    includesCloudSandboxText: "Pairs with GitHub Codespaces ($0.18/hr extra) or any Remote-SSH VPS",
    compatibleHarnesses: ["VS Code Remote-SSH", "GitHub Copilot CLI", "Claude Code / Cline bridges"],
    bestPairedWith: "Run on a $6.20 Netcup or $7.50 Hetzner VM via Remote-SSH instead of paying $0.36/hr for Codespaces",
    sourceUrl: "https://github.com/features/copilot/plans"
  },
  {
    id: "zai-glm-coding-18",
    name: "Z.ai GLM Coding Plan (GLM-5.3)",
    provider: "Z.ai (Zhipu AI)",
    origin: "CN",
    originLabel: "🇨🇳 Chinese Coding Plan",
    monthlyFeeUsd: 18,
    tierName: "GLM Coding Lite ($18/mo) / Pro ($80/mo)",
    flagshipModels: "GLM-5.3 & GLM-5.3-Flash (Auto-Routing)",
    vmAuthMethod: "Dedicated Coding Plan token plugged natively into `Claude Code`, `OpenClaw`, `Cline`, `OpenCode`",
    quotaStructure: "High-volume 5-hour + weekly credit pool; 0.5x OFF-PEAK credit deduction outside Beijing peak!",
    fiveHourBurstCapacityHours: 4.5,
    offPeakBonusText: "50% credit discount during US/EU daytime (doubles your effective quota!)",
    includesCloudSandboxText: "BYO Cloud VM (plugs into any CLI agent harness)",
    compatibleHarnesses: ["Claude Code CLI", "OpenClaw / AutoClaw", "Cline", "OpenCode", "ZCode"],
    bestPairedWith: "Claude Pro ($20) or ChatGPT Plus ($20) on a $6.20 Netcup VM—eliminates 5-hour lockouts completely",
    sourceUrl: "https://z.ai"
  },
  {
    id: "alibaba-qwen-coder-19",
    name: "Alibaba Model Studio Qwen Coder Plan",
    provider: "Alibaba Cloud / Qwen",
    origin: "CN",
    originLabel: "🇨🇳 Chinese Coding Plan",
    monthlyFeeUsd: 19,
    tierName: "Qwen Coder Standard ($19/mo) / Pro ($45/mo)",
    flagshipModels: "Qwen3-Coder-Plus & Qwen3.5-Max",
    vmAuthMethod: "Model Studio Coding Plan API token configured in `Claude Code`, `Qwen Code`, `Cursor`, `Cline`",
    quotaStructure: "Structured 5-hour, weekly, and monthly request buckets tailored for heavy CLI loops",
    fiveHourBurstCapacityHours: 4.4,
    offPeakBonusText: "High concurrency allowance for sub-agent tool loops",
    includesCloudSandboxText: "BYO Cloud VM (plugs directly into Claude Code & OpenClaw)",
    compatibleHarnesses: ["Qwen Code CLI", "Claude Code CLI", "OpenClaw", "Cline", "Cursor"],
    bestPairedWith: "Google AI Pro ($19.99) or Claude Pro ($20) on a $7.50 Hetzner VM",
    sourceUrl: "https://www.alibabacloud.com"
  },
  {
    id: "moonshot-kimi-code-19",
    name: "Moonshot Kimi Code Membership (Kimi K2.5)",
    provider: "Moonshot AI",
    origin: "CN",
    originLabel: "🇨🇳 Chinese Coding Plan",
    monthlyFeeUsd: 19,
    tierName: "Kimi Code Pass ($19/mo) / Pro ($39/mo)",
    flagshipModels: "Kimi K2.5 Long-Context Reasoning",
    vmAuthMethod: "`kimi-cli` login or base-URL token injection into `Claude Code` & `OpenClaw`",
    quotaStructure: "Rolling 5-hour + weekly long-context ingestion pool (up to 2M context window)",
    fiveHourBurstCapacityHours: 4.2,
    offPeakBonusText: "Unmatched for sweeping whole-monorepo context ingestion without per-token fees",
    includesCloudSandboxText: "BYO Cloud VM",
    compatibleHarnesses: ["Kimi Code CLI", "Claude Code CLI", "OpenClaw", "OpenCode"],
    bestPairedWith: "Netcup 256GB NVMe VPS ($6.20/mo) for whole-repository code archaeology and refactoring",
    sourceUrl: "https://kimi.moonshot.cn"
  },
  {
    id: "minimax-mplan-19",
    name: "MiniMax M-Plan Coding Subscription (M2.5)",
    provider: "MiniMax",
    origin: "CN",
    originLabel: "🇨🇳 Chinese Coding Plan",
    monthlyFeeUsd: 19,
    tierName: "M-Plan Explore ($19/mo) / Build ($49/mo)",
    flagshipModels: "MiniMax M2.5 & M2.5-Highspeed",
    vmAuthMethod: "M-Plan subscription key plugged into `Claude Code`, `Cursor`, `Codex`, `OpenCode`",
    quotaStructure: "Blistering tokens-per-second (TPS) throughput with 5-hour/weekly rolling buckets",
    fiveHourBurstCapacityHours: 4.6,
    offPeakBonusText: "Fastest TPS generation speed for rapid test-fix-compile loops",
    includesCloudSandboxText: "BYO Cloud VM",
    compatibleHarnesses: ["MiniMax Code", "Claude Code CLI", "OpenClaw", "Cursor", "OpenCode"],
    bestPairedWith: "Claude Pro ($20) or SuperGrok ($30) on a Hetzner/Netcup VM for high-velocity UI & test loops",
    sourceUrl: "https://www.minimax.io"
  }
];

export interface RevisionSummary {
  revNumber: number;
  title: string;
  fileName: string;
  assumptionChallenged: string;
  whatFailed: string;
  breakthroughInsight: string;
  quantifiedImpact: string;
}

export const FIVE_REVISIONS: RevisionSummary[] = [
  {
    revNumber: 1,
    title: "Wide Ecosystem Survey — Big Players, MicroVMs & Subsidized LLM Logins",
    fileName: "revision-1-initial-survey.md",
    assumptionChallenged:
      "Challenged 2 Flawed Premises: (1) Relying on free tiers (Oracle OCI / hobby trials) that suffer capacity lockouts and 15-min kills; (2) Assuming users pay per-token OpenRouter/API fees instead of logging in with subsidized flat-rate monthly LLM subscriptions.",
    whatFailed:
      "Free tiers like OCI Always-Free fail in production due to 'Out of Host Capacity' errors and idle reclamation. Meanwhile, raw per-token API keys expose 24/7 autonomous agents to $250+/mo runaway heartbeat bills.",
    breakthroughInsight:
      "Re-baselined the entire atlas strictly on PAID, SLA-backed commercial tiers across 21 Compute/Workspace providers (Replit, Anthropic, OpenAI Dots, Google Jules, xAI Grok, Cursor, Devin/Windsurf, GitHub Codespaces, E2B, Modal, Daytona, Sprites, Cloudflare, Browserbase, Steel, Hetzner, Netcup, Contabo, OVH, RunPod, Vast, Lambda) AND 11 Paid Subsidized US/Chinese LLM Subscriptions.",
    quantifiedImpact:
      "100% reproducible paid infrastructure with zero free-tier lottery and predictable flat-rate monthly budgets."
  },
  {
    revNumber: 2,
    title: "Big-Player Bundled Workspaces vs. Modular VM + Subsidized OAuth Login",
    fileName: "revision-2-workload-taxonomy.md",
    assumptionChallenged:
      "Challenged the assumption that all-in-one workspaces (Replit Core $25/mo, GitHub Codespaces $0.18–$0.36/hr, Cursor Ultra $200/mo) are the most cost-effective way to run persistent 24/7 agents.",
    whatFailed:
      "On Replit Core ($25/mo), a single $20 credit pool is cannibalized simultaneously by Replit Agent checkpoints, Reserved VM hosting ($20–$50/mo), and active Postgres DB hours ($0.16/hr = $116/mo!). On GitHub Codespaces, a 4-core/16GB VM running 24/7 costs $262.80/mo vs $15.50/mo on Netcup RS 2000 G11 (a 17x markup!).",
    breakthroughInsight:
      "Mapped the exact CLI OAuth & Coding Plan login flows (`openclaw models auth login --provider openai`, `claude auth login`, `gemini` CLI + Jules, and Z.ai/Qwen/Kimi/MiniMax Coding Plan keys) so users can bring their subsidized $18–$20/mo LLM subscription onto a $6.20–$7.50/mo 8GB NVMe server.",
    quantifiedImpact:
      "Separating the 24/7 Linux VM ($6.20–$15.50/mo) from the subsidized LLM login ($18–$39/mo) delivers 4x the RAM/NVMe at 1/5th the monthly cost of bundled cloud IDEs."
  },
  {
    revNumber: 3,
    title: "The US + Chinese Subsidized Subscription Matrix & 5-Hour Quota Blender",
    fileName: "revision-3-deepseek-arbitrage-and-sweet-spots.md",
    assumptionChallenged:
      "Challenged the assumption that a single $20/mo US subscription (Claude Pro or ChatGPT Plus) can power an autonomous coding agent all day without hitting the 5-hour rolling lockout.",
    whatFailed:
      "Heavy autonomous agent loops exhaust a single $20 Claude Pro or ChatGPT Plus 5-hour rolling bucket in ~90 minutes, leaving your VM agent stalled for 3.5 hours unless you pay $100–$200/mo for Max/Ultra.",
    breakthroughInsight:
      "Engineered the 'Dual-Flag Subsidized Subscription Combo': pair one American subscription (Claude Pro $20, ChatGPT Plus $20, Google AI Pro $19.99 with 15 concurrent Jules VMs, or SuperGrok $30) with one Chinese flat-rate Coding Plan (Z.ai GLM-5.3 $18/mo with 0.5x off-peak credit deduction, Alibaba Qwen Coder $19/mo, Moonshot Kimi K2.5 $19/mo, or MiniMax M2.5 $19/mo) inside the same Claude Code / OpenClaw harness.",
    quantifiedImpact:
      "Delivers uninterrupted 24/7 autonomous coding + 256GB NVMe 8GB VM for $44.20/mo flat ($6.20 Netcup VM + $20 US Sub + $18 CN Coding Plan)—saving $155+/mo vs $200 Ultra plans with zero per-token overage risk."
  },
  {
    revNumber: 4,
    title: "The Pocket Control Plane — Mobile OAuth Bridging, Mosh & Big-Player Apps",
    fileName: "revision-4-mobile-control-plane.md",
    assumptionChallenged:
      "Challenged 2 Mobile Assumptions: (1) You can't complete `localhost:1455` OAuth logins (ChatGPT Plus / Claude CLI) on a headless remote VM from a phone; (2) Standard TCP SSH Port 22 works on cellular networks.",
    whatFailed:
      "Opening a remote CLI's `localhost` OAuth callback on mobile Safari fails unless bridged, and TCP SSH freezes for 45+ seconds during Wi-Fi-to-5G handoffs or subway tunnels.",
    breakthroughInsight:
      "Documented the Mobile OAuth Paste-Back & Tailscale Tunnel flow alongside Chinese Coding Plan token injection (which never expires every 10 days), paired with UDP Mosh + Tmux/Zellij, Happy/Telegram voice steering, Tailscale Serve live Steel browser 2FA takeover, and compared against native Replit/Claude/Jules mobile apps.",
    quantifiedImpact:
      "1-minute mobile OAuth login renewal, zero dropped terminal sessions across 5G roaming, and 1-tap mobile 2FA browser takeover."
  },
  {
    revNumber: 5,
    title: "Final Synthesis — Interactive Subscription Blender & 21-Provider Paid Atlas",
    fileName: "revision-5-final-synthesis.md",
    assumptionChallenged:
      "Challenged our initial widget design that modeled per-token API sliders instead of real-world flat-rate subscription combinations and 5-hour rolling quota coverage.",
    whatFailed:
      "Developers using subsidized logins care about 'Will I hit a 5-hour quota wall?' and 'How much real vCPU/RAM/NVMe do I get for my monthly budget?', not raw per-million token decimal math.",
    breakthroughInsight:
      "Rebuilt the interactive widgets around (1) The Paid Compute + Subsidized LLM Subscription Matcher, (2) The US + Chinese Subsidized Subscription & 5-Hour Quota Blender, (3) The 21-Provider Paid Commercial Atlas (including Replit, Anthropic, Grok, Google Jules, Cursor, Devin, Codespaces), and (4) The Mobile OAuth + Mosh Bootstrap Generator.",
    quantifiedImpact:
      "A complete, zero-free-tier decision engine for modern agent infrastructure published live on GitHub Pages."
  }
];
