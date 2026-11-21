export type WorkloadCategory =
  | "managed-agent"
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
  hourlyRateUsd: number; // Effective hourly rate for the representative tier
  monthly24x7Usd: number; // Cost if run 24/7 (730 hrs) or flat monthly rate
  billingGranularity: "Per-Second" | "Active-CPU Second" | "Per-Minute" | "Flat Monthly" | "Hourly";
  coldStartMs: number;
  maxSessionHours: number;
  bestUseCase: "Remote Browser" | "OpenClaw 24/7" | "AI Factory" | "Burst Code Sandbox" | "Enterprise Teammate";
  priceToPowerScore: number; // 1-100 composite score for its primary workload
  stealthScore: number; // 1-100 for web browsing anti-bot capability
  sovereigntyScore: number; // 1-100 for root SSH / BYOK freedom
  sourceUrl: string;
  sourceDomain: string;
  pros: string[];
  gotchas: string[];
  architectureNotes: string;
}

export const SANDBOX_PROVIDERS: SandboxProvider[] = [
  {
    id: "openai-dots-pro",
    name: "OpenAI Dots (ChatGPT Pro)",
    tagline: "Always-on AI teammate with dedicated cloud computer & browser",
    category: "managed-agent",
    categoryLabel: "Managed Agent Computer",
    isolation: "Dedicated Cloud VM + Managed Browser",
    baseSubscriptionUsd: 100,
    baseCreditsText: "Includes 1 baseline Dot + GPT-6 Astra / 6.1 Terra tokens ($200 & $500 tiers scale headroom)",
    representativeTier: "ChatGPT Pro ($100/mo) / Enterprise Standard Dot ($50/mo)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 50,
    hourlyRateUsd: 0.137,
    monthly24x7Usd: 100,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "Enterprise Teammate",
    priceToPowerScore: 84,
    stealthScore: 80,
    sovereigntyScore: 30,
    sourceUrl: "https://openai.com",
    sourceDomain: "openai.com",
    pros: [
      "Bundled frontier GPT-6 Astra / Terra token allocation",
      "4,000+ pre-authenticated SaaS & OAuth connectors (Slack, Jira, Workspace)",
      "First-party iOS widgets, push notifications & read-only proactive safety gates"
    ],
    gotchas: [
      "No bare-metal root SSH or custom kernel modules",
      "Pro scaling tiers jump from $100 to $200 and $500/mo for heavy background usage"
    ],
    architectureNotes:
      "Each active Dot gets an isolated cloud computer and headless browser that persists when you close ChatGPT, syncing with local files via desktop companion."
  },
  {
    id: "claude-code-cloud",
    name: "Claude Code Cloud Sessions",
    tagline: "Anthropic's managed repository sandbox & background coding container",
    category: "managed-agent",
    categoryLabel: "Managed Agent Computer",
    isolation: "Managed Container Sandbox",
    baseSubscriptionUsd: 100,
    baseCreditsText: "Bundled with Claude Max ($100–$200/mo) or API pay-as-you-go",
    representativeTier: "Claude Max ($100/mo) + claude --cloud session",
    vcpu: 4,
    ramGb: 8,
    storageGb: 30,
    hourlyRateUsd: 0.137,
    monthly24x7Usd: 100,
    billingGranularity: "Flat Monthly",
    coldStartMs: 1200,
    maxSessionHours: 24,
    bestUseCase: "Enterprise Teammate",
    priceToPowerScore: 82,
    stealthScore: 40,
    sovereigntyScore: 45,
    sourceUrl: "https://claude.com",
    sourceDomain: "claude.com",
    pros: [
      "Zero-config git repository checkout and background PR creation",
      "Native mobile control via Claude iOS/Android app",
      "Tightly optimized for Claude 4.6 Sonnet/Opus agentic tool loops"
    ],
    gotchas: [
      "Not designed for hosting public web servers or persistent databases",
      "Tied to Anthropic ecosystem unless paired with external VPS"
    ],
    architectureNotes:
      "Spawns an ephemeral or semi-persistent repo-scoped container managed directly from the terminal (`claude --cloud`) or Claude web/mobile UI."
  },
  {
    id: "e2b-microvm",
    name: "E2B (The AI Agent Cloud)",
    tagline: "Firecracker microVMs purpose-built for AI code execution & snapshots",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "Firecracker MicroVM",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Hobby: $0/mo ($100 one-time credit, 20 concurrent). Pro: $150/mo (100+ concurrent, 24h session)",
    representativeTier: "Standard Sandbox (2 vCPU / 4 GiB RAM)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 10,
    hourlyRateUsd: 0.17,
    monthly24x7Usd: 124.1,
    billingGranularity: "Per-Second",
    coldStartMs: 150,
    maxSessionHours: 24,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 91,
    stealthScore: 45,
    sovereigntyScore: 78,
    sourceUrl: "https://e2b.dev",
    sourceDomain: "e2b.dev",
    pros: [
      "~150ms boot times with instant memory & filesystem snapshot restore",
      "Hardware-level Firecracker KVM isolation prevents untrusted code escape",
      "First-class Code Interpreter SDK for Python & TypeScript agents"
    ],
    gotchas: [
      "Running 24/7 costs ~$124/mo per 2-vCPU sandbox (use pause/resume snapshots!)",
      "Pro plan ($150/mo) required for >1-hour continuous session duration"
    ],
    architectureNotes:
      "Billed strictly per second ($0.000014/vCPU-s + $0.000045/GiB-s). Ideal for parallel agent branch evaluation where 50 microVMs run for 30 seconds and vanish."
  },
  {
    id: "modal-sandboxes",
    name: "Modal Sandboxes",
    tagline: "Sub-second gVisor containers scaling from 0 to 5,000+ parallel nodes",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "gVisor Container Runtime",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Starter: $0/mo + $30/mo free compute credits! Team: $250/mo ($100 credit, 5,000 concurrency)",
    representativeTier: "1 Physical Core (2 vCPU) / 4 GiB RAM Sandbox",
    vcpu: 2,
    ramGb: 4,
    storageGb: 20,
    hourlyRateUsd: 0.079,
    monthly24x7Usd: 57.67,
    billingGranularity: "Per-Second",
    coldStartMs: 220,
    maxSessionHours: 24,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 96,
    stealthScore: 40,
    sovereigntyScore: 80,
    sourceUrl: "https://modal.com/pricing",
    sourceDomain: "modal.com",
    pros: [
      "$30/month renewable free compute credit covers ~380 sandbox-hours/mo for $0",
      "Lowest per-second CPU/RAM rate among managed serverless sandbox platforms (~$0.079/hr)",
      "Seamless attachment to serverless GPUs (T4 to H100/B300) in the same Python script"
    ],
    gotchas: [
      "gVisor syscall interception has slight overhead on heavy disk-I/O builds vs bare KVM",
      "Requires Python/TS SDK declarative container definitions"
    ],
    architectureNotes:
      "Charges ~$0.047/physical core-hr (2 vCPUs) + ~$0.008/GiB-hr. With $30/mo free credit, solo developers get hundreds of hours of burst agent compute free."
  },
  {
    id: "daytona-sandbox",
    name: "Daytona",
    tagline: "Sub-90ms cold-start developer & AI agent execution sandboxes",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "OCI Container / Optional Kata MicroVM",
    baseSubscriptionUsd: 0,
    baseCreditsText: "$0 mandatory base fee; includes $200 free trial compute credit",
    representativeTier: "2 vCPU / 4 GiB RAM / 5 GiB Free Storage",
    vcpu: 2,
    ramGb: 4,
    storageGb: 10,
    hourlyRateUsd: 0.165,
    monthly24x7Usd: 120.45,
    billingGranularity: "Per-Second",
    coldStartMs: 85,
    maxSessionHours: 168,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 92,
    stealthScore: 42,
    sovereigntyScore: 85,
    sourceUrl: "https://daytona.io/pricing",
    sourceDomain: "daytona.io",
    pros: [
      "Industry-fastest cold start (<90ms) makes tool execution feel local",
      "No monthly platform subscription gate ($0 base, pure per-second utility)",
      "Optional on-demand GPU attachment (RTX 4090 @ $0.99/hr to H100 @ $4.29/hr)"
    ],
    gotchas: [
      "Standard isolation uses fast containers unless VM-isolation mode is toggled",
      "Long-lived 24/7 workspaces are cheaper on raw VPS unless auto-suspend is enabled"
    ],
    architectureNotes:
      "Prices vCPU at $0.0504/hr and RAM at $0.0162/GiB-hr with first 5 GiB storage free. Built specifically for high-frequency coding agent loops."
  },
  {
    id: "fly-sprites",
    name: "Fly.io Sprites",
    tagline: "Persistent hardware-isolated microVMs billed on active CPU usage",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "Firecracker MicroVM",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Pay-as-you-go or Hero Plan ($100/mo for 1,200 CPU-hrs + 4,800 GB-hrs)",
    representativeTier: "2 vCPU / 4 GB RAM Persistent Sprite (25% active CPU duty)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 20,
    hourlyRateUsd: 0.107,
    monthly24x7Usd: 38.4,
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
      "Bills on cumulative ACTIVE CPU ($0.0385/CPU-hr) rather than idle wall-clock reservation",
      "Hot vs Cold storage checkpointing ($0.000683 vs $0.000027/GB-hr) retains state cheaply",
      "Global anycast edge routing across 30+ regions"
    ],
    gotchas: [
      "Memory usage ($0.021875/GB-hr) still accrues while resident in hot state",
      "Networking configuration requires learning Fly Machine / Sprite primitives"
    ],
    architectureNotes:
      "Bridges the gap between ephemeral sandboxes and persistent VMs: when your agent waits 8 seconds for an LLM API response, active CPU billing drops near zero."
  },
  {
    id: "cloudflare-sandboxes",
    name: "Cloudflare Sandboxes",
    tagline: "Edge-distributed container sandboxes paired with Workers & Durable Objects",
    category: "microvm-sandbox",
    categoryLabel: "MicroVM Code Sandbox",
    isolation: "Cloudflare Container Virtualization",
    baseSubscriptionUsd: 5,
    baseCreditsText: "Requires $5/mo Workers Paid base plan; active-CPU billing only",
    representativeTier: "2 vCPU / 4 GB Edge Sandbox (@cloudflare/sandbox)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 10,
    hourlyRateUsd: 0.065,
    monthly24x7Usd: 32.5,
    billingGranularity: "Active-CPU Second",
    coldStartMs: 180,
    maxSessionHours: 24,
    bestUseCase: "Burst Code Sandbox",
    priceToPowerScore: 93,
    stealthScore: 55,
    sovereigntyScore: 72,
    sourceUrl: "https://developers.cloudflare.com",
    sourceDomain: "cloudflare.com",
    pros: [
      "Active-CPU billing eliminates paying for network wait times during LLM tool calls",
      "Tight integration with Durable Objects for stateful agent memory and WebSockets",
      "Zero egress fees when interacting with R2 object storage"
    ],
    gotchas: [
      "Stacking Workers requests + Durable Objects + Container RAM requires careful metering",
      "Not meant for long-running GPU or heavy monolithic desktop software"
    ],
    architectureNotes:
      "Invoked directly via `@cloudflare/sandbox` inside a Cloudflare Worker, ideal for SaaS apps embedding isolated code execution per tenant at the edge."
  },
  {
    id: "browserbase",
    name: "Browserbase",
    tagline: "Agent-native remote headless browser fleet with Stagehand & live replay",
    category: "remote-browser",
    categoryLabel: "Remote Browser Fleet",
    isolation: "Isolated Managed Chromium VM",
    baseSubscriptionUsd: 20,
    baseCreditsText: "Free ($0, 1 hr). Developer: $20/mo (100 hrs, 25 concurrent). Startup: $99/mo (500 hrs, 100 concurrent)",
    representativeTier: "Developer ($20/mo, ~$0.12/hr overage) / Startup ($99/mo, ~$0.10/hr)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 5,
    hourlyRateUsd: 0.12,
    monthly24x7Usd: 87.6,
    billingGranularity: "Per-Minute",
    coldStartMs: 400,
    maxSessionHours: 6,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 92,
    stealthScore: 97,
    sovereigntyScore: 60,
    sourceUrl: "https://browserbase.com/pricing",
    sourceDomain: "browserbase.com",
    pros: [
      "Best-in-class DOM session replay and visual inspection for debugging agent clicks",
      "Native integration with Stagehand, Playwright, Puppeteer, and MCP browser servers",
      "Built-in stealth fingerprinting and managed residential proxy routing"
    ],
    gotchas: [
      "1-minute minimum billing increment per browser session",
      "Residential proxy bandwidth is metered separately beyond plan allowance"
    ],
    architectureNotes:
      "Offloads Chromium's 1GB+ RAM spikes and datacenter IP blocking from your primary agent orchestrator into an observable cloud browser grid."
  },
  {
    id: "steel-dev",
    name: "Steel.dev",
    tagline: "Open-source headless browser API for AI agents (Cloud or Self-Hosted)",
    category: "remote-browser",
    categoryLabel: "Remote Browser Fleet",
    isolation: "Isolated Browser Container / VM",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Launch: $0/mo + $30 free credit ($0.10/hr). Scale: $250/mo ($100 credit, $0.08/hr, 100 concurrent)",
    representativeTier: "Launch ($0.10/hr) / Scale ($0.08/hr) or Self-Hosted OSS ($0)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 5,
    hourlyRateUsd: 0.10,
    monthly24x7Usd: 73.0,
    billingGranularity: "Per-Minute",
    coldStartMs: 350,
    maxSessionHours: 24,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 95,
    stealthScore: 94,
    sovereigntyScore: 95,
    sourceUrl: "https://steel.dev/pricing",
    sourceDomain: "steel.dev",
    pros: [
      "100% open-source core on GitHub—run on Steel Cloud ($0.08–$0.10/hr) or self-host on a $5 VPS",
      "Embeddable live browser iframe lets you watch & take over from your phone when 2FA appears",
      "Transparent add-ons: residential proxies ($6–$10/GB) and CAPTCHA solving"
    ],
    gotchas: [
      "Launch tier caps individual session duration at 15 minutes (1 hr on Scale, 24 hr Enterprise)",
      "Self-hosting still requires bringing your own residential proxy for strict anti-bot sites"
    ],
    architectureNotes:
      "The ultimate hybrid choice: prototype on Steel Cloud with $30 free credit, or deploy the official Steel Docker image on a 8GB Contabo/Hetzner VPS."
  },
  {
    id: "browserless",
    name: "Browserless.io",
    tagline: "Enterprise Puppeteer, Playwright & BrowserQL automation workhorse",
    category: "remote-browser",
    categoryLabel: "Remote Browser Fleet",
    isolation: "Dedicated Container / Enterprise Fleet",
    baseSubscriptionUsd: 25,
    baseCreditsText: "Free (1k units). Prototyping: $25/mo (~165 hrs). Starter: $140/mo (~1,500 hrs). Scale: $350/mo",
    representativeTier: "Starter Plan ($140/mo for 180k units / ~1,500 browser hours)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 10,
    hourlyRateUsd: 0.093,
    monthly24x7Usd: 68.0,
    billingGranularity: "Per-Minute",
    coldStartMs: 450,
    maxSessionHours: 1,
    bestUseCase: "Remote Browser",
    priceToPowerScore: 87,
    stealthScore: 95,
    sovereigntyScore: 82,
    sourceUrl: "https://browserless.io/pricing",
    sourceDomain: "browserless.io",
    pros: [
      "BrowserQL GraphQL API handles complex multi-step stealth navigation cleanly",
      "Mature Docker self-hosting images and air-gapped enterprise options",
      "Predictable unit-bundled pricing drops effective hourly cost under $0.09/hr at scale"
    ],
    gotchas: [
      "Unit consumption multiplier increases when residential stealth proxies are enabled",
      "Annual billing required for lowest advertised monthly tier rates"
    ],
    architectureNotes:
      "Battle-tested across millions of daily Playwright/Puppeteer sessions for PDF rendering, scraping, and agent web interaction."
  },
  {
    id: "hetzner-cax21",
    name: "Hetzner Cloud (CAX21 ARM / CPX22)",
    tagline: "The sovereign price-to-performance champion for 24/7 OpenClaw agents",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 7.5,
    baseCreditsText: "Hourly billing with monthly cap (~€6.49–$7.50/mo for CAX21 4 ARM vCPU / 8GB RAM)",
    representativeTier: "CAX21 (4 Ampere ARM64 vCPU, 8 GB RAM, 80 GB NVMe, 20 TB Traffic)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 80,
    hourlyRateUsd: 0.0103,
    monthly24x7Usd: 7.5,
    billingGranularity: "Hourly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 99,
    stealthScore: 25,
    sovereigntyScore: 100,
    sourceUrl: "https://www.hetzner.com/cloud",
    sourceDomain: "hetzner.com",
    pros: [
      "Unbeatable 8 GB RAM + 4 vCPU + 80 GB NVMe for ~$7.50/mo ($0.01/hr) with <0.5% CPU steal",
      "20 TB high-speed EU/US bandwidth included; instant snapshots and cloud-init automation",
      "Runs OpenClaw + Docker + Tailscale + local Qdrant + 2 headless browser tabs effortlessly"
    ],
    gotchas: [
      "Strict account verification checks on initial signup",
      "Datacenter IP ASN is blocked by strict anti-bot sites unless routed through Steel/proxy"
    ],
    architectureNotes:
      "When paired with DeepSeek V4.1 Flash ($0.003/1M cached input), Hetzner CAX21 delivers a 24/7 sovereign AI computer for under $12/month total TCO."
  },
  {
    id: "netcup-vps-1000",
    name: "Netcup (VPS 1000 G11)",
    tagline: "German engineering with massive 256 GB NVMe storage & 8 GB RAM per euro",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 6.2,
    baseCreditsText: "~€5.75 / $6.20 per month with generous 256 GB NVMe disk",
    representativeTier: "VPS 1000 G11 (4 vCPU, 8 GB DDR5 RAM, 256 GB NVMe, 80 TB Traffic)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 256,
    hourlyRateUsd: 0.0085,
    monthly24x7Usd: 6.2,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 98,
    stealthScore: 25,
    sovereigntyScore: 100,
    sourceUrl: "https://www.netcup.com",
    sourceDomain: "netcup.com",
    pros: [
      "3.2x more NVMe storage (256 GB) than similarly priced competitors—ideal for multi-repo clones & Docker images",
      "Consistent sustained CPU and disk I/O performance in Nuremberg/Vienna/Manassas data centers",
      "Under $6.50/mo for 4 vCPU / 8 GB RAM"
    ],
    gotchas: [
      "Lowest price tiers often prefer 6-to-12 month contract terms (hourly cancelable tiers cost ~€1 more)",
      "Control panel UI feels classic compared to modern serverless dashboards"
    ],
    architectureNotes:
      "The storage-per-euro king for developers whose Claude Code or OpenClaw agents check out dozens of monorepos and build heavy Docker layers."
  },
  {
    id: "contabo-vps-4",
    name: "Contabo (Cloud VPS 4)",
    tagline: "Maximum raw RAM capacity per dollar for memory-hungry browser & vector containers",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 5.28,
    baseCreditsText: "Starts at ~$5.28 / €5.50/mo for 4 vCPU, 8 GB RAM, 100 GB SSD/NVMe",
    representativeTier: "Cloud VPS 4 (4 vCPU, 8 GB RAM, 100 GB SSD, Unlimited Traffic 200-300 Mbps)",
    vcpu: 4,
    ramGb: 8,
    storageGb: 100,
    hourlyRateUsd: 0.0072,
    monthly24x7Usd: 5.28,
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
      "Lowest price on Earth for 8 GB to 24 GB RAM allocations ($5.28 to $14/mo)",
      "Prevents OOM crashes when self-hosting 5+ concurrent Chromium tabs in Steel.dev Docker",
      "Unmetered bandwidth (200–300 Mbps fair-use port)"
    ],
    gotchas: [
      "Higher host CPU oversubscription (5%–12% CPU steal) and lower disk IOPS than Hetzner/Netcup",
      "Not recommended for latency-critical real-time compilation benchmarks"
    ],
    architectureNotes:
      "Use Contabo as your high-RAM secondary worker node for self-hosted Steel browser containers and local Qdrant vector databases."
  },
  {
    id: "ovhcloud-vps1",
    name: "OVHcloud (VPS-1 / VPS-2)",
    tagline: "Entry-level $4.50/mo European/North American VPS with unmetered 500 Mbps pipe",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 4.5,
    baseCreditsText: "Starts at ~$4.50/mo for 2 vCores, 4 GB RAM, 40 GB NVMe",
    representativeTier: "VPS-1 (2 vCPU, 4 GB RAM, 40 GB NVMe, Unmetered 500 Mbps)",
    vcpu: 2,
    ramGb: 4,
    storageGb: 40,
    hourlyRateUsd: 0.0062,
    monthly24x7Usd: 4.5,
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
      "Enterprise-grade DDoS protection and unmetered 500 Mbps public traffic",
      "Lowest clean entry ticket ($4.50/mo) for a lightweight OpenClaw + DeepSeek orchestrator",
      "Global datacenter footprint (EU, Canada, US, APAC)"
    ],
    gotchas: [
      "4 GB RAM tier requires configuring a 4 GB zram/swap file if spawning local headless Chrome",
      "40 GB base disk fills up if Docker build cache isn't pruned weekly"
    ],
    architectureNotes:
      "Rock-solid lightweight webhook gateway and Telegram-connected OpenClaw host when heavy browser jobs are offloaded to Steel or Browserbase."
  },
  {
    id: "oracle-oci-free",
    name: "Oracle Cloud (OCI Always Free ARM)",
    tagline: "The $0/mo unicorn: 4 Ampere A1 ARM cores + 24 GB RAM forever",
    category: "non-major-vps",
    categoryLabel: "Non-Major Cloud VM",
    isolation: "KVM Full Virtual Machine",
    baseSubscriptionUsd: 0,
    baseCreditsText: "$0/mo Always Free allowance: up to 4 Ampere A1 cores, 24 GB RAM, 200 GB Block Storage",
    representativeTier: "VM.Standard.A1.Flex (4 ARM vCPU, 24 GB RAM, 200 GB Storage)",
    vcpu: 4,
    ramGb: 24,
    storageGb: 200,
    hourlyRateUsd: 0,
    monthly24x7Usd: 0,
    billingGranularity: "Flat Monthly",
    coldStartMs: 0,
    maxSessionHours: 730,
    bestUseCase: "OpenClaw 24/7",
    priceToPowerScore: 97,
    stealthScore: 25,
    sovereigntyScore: 95,
    sourceUrl: "https://www.oracle.com/cloud/free/",
    sourceDomain: "oracle.com",
    pros: [
      "24 GB RAM and 4 ARM cores for $0.00/month—enough to run OpenClaw, Steel, Qdrant, and Ollama small models",
      "10 TB/month free outbound data transfer",
      "Upgrade account to Pay-As-You-Go (while staying inside free resource limits) to bypass capacity waitlists"
    ],
    gotchas: [
      "Home region capacity shortages on pure free-tier accounts; strict signup card verification",
      "Idle instances (<15% CPU/RAM over 7 days) can be reclaimed on unverified free accounts"
    ],
    architectureNotes:
      "The ultimate zero-cost hardware arbitrage: pair OCI's 24 GB RAM free instance with $4.12/mo of cached DeepSeek V4.1 tokens."
  },
  {
    id: "vast-ai-gpu",
    name: "Vast.ai (P2P GPU Marketplace)",
    tagline: "Spot-market GPU compute from $0.31/hr (L40) to $0.67/hr (A100 80GB)",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "Docker Container or KVM VM on Host GPU",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Pure pay-as-you-go credit balance; billed per second/hour by host",
    representativeTier: "1x NVIDIA A100 80GB SXM (~$0.67/hr) or RTX 4090 24GB (~$0.31/hr)",
    vcpu: 16,
    ramGb: 64,
    storageGb: 100,
    gpuModel: "A100 80GB / RTX 4090",
    vramGb: 80,
    hourlyRateUsd: 0.67,
    monthly24x7Usd: 489.1,
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
      "Lowest raw $/TFLOP and $/VRAM-hour on the planet (A100 80GB under $0.75/hr, L40 at ~$0.31/hr)",
      "Massive global supply of consumer RTX 4090/5090 and datacenter A100/H100 nodes",
      "Supports custom Docker templates and direct SSH/Tailscale injection"
    ],
    gotchas: [
      "Peer-to-peer marketplace means variable host reliability and network upload/download speeds",
      "Not suited for un-checkpointed multi-day training runs without automated S3/R2 state sync"
    ],
    architectureNotes:
      "Unbeatable for batch embedding generation, LoRA fine-tuning, and running private 70B local models when jobs checkpoint to cloud storage."
  },
  {
    id: "runpod-gpu",
    name: "RunPod (Community & Secure Cloud)",
    tagline: "Developer-friendly GPU pods & serverless endpoints billed by the second",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "Container Pod / Bare-Metal Cluster",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Pay-as-you-go per-second billing; zero base subscription",
    representativeTier: "RTX 4090 24GB ($0.34/hr Comm) / A100 80GB ($1.79/hr Secure) / H100 ($3.99/hr)",
    vcpu: 16,
    ramGb: 62,
    storageGb: 100,
    gpuModel: "RTX 4090 24GB / H100 80GB",
    vramGb: 24,
    hourlyRateUsd: 0.34,
    monthly24x7Usd: 248.2,
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
      "Dual tier: Community Cloud ($0.34/hr RTX 4090) for cheap dev vs Secure Cloud (Tier-3/4 DC) for production",
      "FlashBoot serverless GPU endpoints spin up in <2 seconds for burst inference",
      "1-click vLLM, ComfyUI, and PyTorch templates with instant SSH & Jupyter"
    ],
    gotchas: [
      "Persistent network volumes continue billing storage (~$0.07/GB-mo) while pods are stopped",
      "Secure Cloud rates are higher than P2P Vast.ai spot listings"
    ],
    architectureNotes:
      "The sweet spot for interactive GPU sandboxes where an agent SSHes into an RTX 4090 pod for 20 minutes ($0.11 total) to compile and benchmark CUDA/vLLM jobs."
  },
  {
    id: "lambda-labs-gpu",
    name: "Lambda Labs (1-Click Clusters & Cloud)",
    tagline: "Enterprise ML engineering fleet with zero egress fees & H100/B200 SXM",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "Dedicated GPU Virtual Machine",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Per-minute GPU billing with $0 data egress fees",
    representativeTier: "1x A100 ($1.99/hr) / 1x H100 SXM ($4.29/hr) / 1x B200 SXM6 ($6.99/hr)",
    vcpu: 26,
    ramGb: 200,
    storageGb: 512,
    gpuModel: "H100 80GB SXM / B200",
    vramGb: 80,
    hourlyRateUsd: 4.29,
    monthly24x7Usd: 3131.7,
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
      "Zero data egress fees saves thousands of dollars when pushing/pulling multi-terabyte model checkpoints",
      "Uniform enterprise data center hardware with full NVLink/InfiniBand fabrics",
      "Pre-configured Lambda Stack (CUDA, cuDNN, PyTorch) works out of the box"
    ],
    gotchas: [
      "Single-GPU on-demand H100/A100 inventory can sell out during peak hours",
      "Overkill for simple CPU-bound agent loops or small batch jobs"
    ],
    architectureNotes:
      "Built for heavy multi-GPU pre-training and full-parameter fine-tuning where network interconnect and zero egress costs outweigh raw spot-market hourly discounts."
  },
  {
    id: "modal-gpu-factory",
    name: "Modal Serverless GPU Factory",
    tagline: "Scale-to-zero H100 ($3.95/hr) & B300 ($7.10/hr) billed strictly per second",
    category: "gpu-factory",
    categoryLabel: "GPU AI Factory",
    isolation: "gVisor GPU Container",
    baseSubscriptionUsd: 0,
    baseCreditsText: "Includes $30/mo free compute credits on Starter plan ($0 base)",
    representativeTier: "Serverless NVIDIA H100 80GB ($3.95/hr) or L40S 48GB ($1.95/hr)",
    vcpu: 8,
    ramGb: 64,
    storageGb: 50,
    gpuModel: "H100 80GB / L40S 48GB / B300",
    vramGb: 80,
    hourlyRateUsd: 3.95,
    monthly24x7Usd: 2883.5,
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
      "No idle GPU waste: a 30-second H100 inference batch costs just $0.033 and scales immediately back to $0",
      "Sub-2-second GPU container cold starts via custom distributed container file system",
      "$30/mo free credit lets you run ~7.5 hours of H100 or ~50 hours of T4 ($0.59/hr) every month for $0"
    ],
    gotchas: [
      "Code must be structured as Modal Python functions/classes rather than an unmanaged pet VM",
      "Sustained 24/7 month-long runs are cheaper on reserved bare-metal clusters"
    ],
    architectureNotes:
      "The undisputed king of spiky AI Factory workloads: trigger 20 parallel H100s from a webhook, process 10,000 video/embedding jobs in 3 minutes, and pay under $4."
  }
];

export interface DeepSeekModelTier {
  id: string;
  name: string;
  badge: string;
  concurrencyLimit: number;
  offPeakInputCacheMissPer1M: number;
  offPeakInputCacheHitPer1M: number;
  offPeakOutputPer1M: number;
  peakInputCacheMissPer1M: number;
  peakInputCacheHitPer1M: number;
  peakOutputPer1M: number;
  bestFor: string;
}

export const DEEPSEEK_TIERS: DeepSeekModelTier[] = [
  {
    id: "deepseek-flash",
    name: "DeepSeek-V4.1-Flash (deepseek-flash)",
    badge: "90% Volume Workhorse • Multimodal",
    concurrencyLimit: 2500,
    offPeakInputCacheMissPer1M: 0.15,
    offPeakInputCacheHitPer1M: 0.003,
    offPeakOutputPer1M: 0.60,
    peakInputCacheMissPer1M: 0.30,
    peakInputCacheHitPer1M: 0.006,
    peakOutputPer1M: 1.20,
    bestFor:
      "OpenClaw 5-minute background heartbeats, DOM scraping triage, log monitoring, multimodal screenshot parsing, and high-concurrency sub-agent fan-out."
  },
  {
    id: "deepseek-v4-pro",
    name: "DeepSeek-V4-Pro (deepseek-v4-pro)",
    badge: "10% Heavy Reasoning & Multi-File Code",
    concurrencyLimit: 500,
    offPeakInputCacheMissPer1M: 0.66,
    offPeakInputCacheHitPer1M: 0.022,
    offPeakOutputPer1M: 1.98,
    peakInputCacheMissPer1M: 1.32,
    peakInputCacheHitPer1M: 0.044,
    peakOutputPer1M: 3.96,
    bestFor:
      "Complex multi-file refactoring, system architecture synthesis, security auditing, and deep debugging when triggered by V4.1-Flash."
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
    title: "Initial Wide Survey — Mapping the 2026 Sandbox Landscape",
    fileName: "revision-1-initial-survey.md",
    assumptionChallenged:
      "Initial Assumption: All cloud sandboxes and AI computers can be ranked on a single linear table by 24/7 monthly vCPU-hour price.",
    whatFailed:
      "Converting E2B ($0.17/hr) or Daytona ($0.165/hr) into ~$122/month and comparing them linearly against a $6/mo Hetzner VPS completely misrepresented burst concurrency and microVM snapshot branching.",
    breakthroughInsight:
      "Separated the landscape into 5 structural categories: Managed Agent Computers (OpenAI Dots), MicroVM Code Sandboxes (E2B, Modal, Daytona, Sprites, Cloudflare), Remote Browser Fleets (Browserbase, Steel, Browserless), Non-Major Cloud VMs (Hetzner, Netcup, Contabo, OVH, OCI), and GPU AI Factories (Vast, RunPod, Lambda, Modal).",
    quantifiedImpact:
      "Established baseline specs across 19+ providers and uncovered a 20x cost variance depending on duty cycle."
  },
  {
    revNumber: 2,
    title: "Challenging 'One Sandbox Fits All' & The 4-Workload Crossover",
    fileName: "revision-2-workload-taxonomy.md",
    assumptionChallenged:
      "Challenged 3 Assumptions: (1) A $6 VPS always beats serverless sandboxes; (2) Headless Chromium on a VPS equals Browserbase/Steel; (3) OpenAI Dots and self-hosted OpenClaw are 1:1 substitutes.",
    whatFailed:
      "Spawning 40 concurrent Docker test builds on a $6 4GB VPS causes immediate OOM kills, whereas 40 parallel 45-second sandboxes on Modal cost $0.79/day ($0 net after Modal's $30 free credit). Furthermore, 100% of raw VPS datacenter ASNs are blocked by Cloudflare/DataDome.",
    breakthroughInsight:
      "Formulated the Duty-Cycle & Concurrency Crossover equation: Serverless microVMs win by 3x–10x when Peak/Avg Concurrency > 8x; Static Non-Major Cloud VMs win by 10x–15x when continuous duty cycle exceeds 35% at low concurrency.",
    quantifiedImpact:
      "Defined exact architectural boundaries for Remote Browsers (ASN reputation + 1GB/tab RAM), OpenClaw (24/7 state), Burst Evals (<150ms boot), and AI Factories."
  },
  {
    revNumber: 3,
    title: "The Arbitrage Stack — DeepSeek + Non-Major Cloud VMs & Sweet Spots",
    fileName: "revision-3-deepseek-arbitrage-and-sweet-spots.md",
    assumptionChallenged:
      "Challenged 2 Assumptions: (1) All cheap European VPS RAM/vCPUs perform equally (Contabo vs Hetzner/Netcup); (2) The VM is the primary cost in a self-hosted agent setup.",
    whatFailed:
      "Discovered the 'Heartbeat Token Trap': an OpenClaw agent waking every 15 minutes with a 25k token workspace consumes 72M input tokens/month just staying awake ($233/mo on uncached frontier APIs, dwarfing the $6 VPS!). Also exposed CPU steal (5–12%) on ultra-budget high-RAM VPS nodes vs <0.5% on Hetzner ARM / Netcup G11.",
    breakthroughInsight:
      "Engineered the 3-Lever DeepSeek Arbitrage Stack: (1) 90/10 routing between DeepSeek-V4.1-Flash and V4-Pro, (2) 85%+ Disk Prefix Cache hits ($0.003/1M input—a 50x drop), and (3) UTC Off-Peak cron batching (outside 01:00–04:00 & 06:00–10:00 UTC for another 50% discount).",
    quantifiedImpact:
      "Dropped total 24/7 autonomous agent TCO (4 vCPU / 8GB NVMe VM + 75M input / 3M output tokens) from ~$240/mo down to $11.62/mo on Hetzner CAX21 (or $4.12/mo on Oracle OCI Free 24GB ARM)."
  },
  {
    revNumber: 4,
    title: "The Pocket Control Plane — Managing Your Sandbox VM From a Phone",
    fileName: "revision-4-mobile-control-plane.md",
    assumptionChallenged:
      "Challenged 2 Assumptions: (1) Standard TCP SSH over Port 22 + tmux works reliably on cellular networks; (2) Managing a cloud VM from a phone requires typing bash commands on a 6-inch glass keyboard.",
    whatFailed:
      "Public Port 22 attracts thousands of brute-force bots/hour, and TCP SSH freezes for 30–120 seconds during Wi-Fi-to-5G cellular handoffs or train tunnels due to TCP head-of-line blocking.",
    breakthroughInsight:
      "Designed the 4-Tier Zero-Trust Pocket Control Plane: (1) Tailscale WireGuard Mesh (zero open public ports) + UDP Mosh (instant predictive local echo, survives 6-hour phone sleep/roaming) + Tmux/Zellij; (2) Happy / Claude Code mobile approval UIs; (3) Voice-dictated Telegram Bot bridges for OpenClaw; (4) Tailscale Serve HTTPS mobile web views for live Steel.dev browser takeover.",
    quantifiedImpact:
      "Zero dropped terminal sessions across cellular handoffs, zero exposed public ingress ports, and 1-tap mobile 2FA/diff approvals."
  },
  {
    revNumber: 5,
    title: "Final Synthesis, Editorial Blog Design & Interactive Decision Engine",
    fileName: "revision-5-final-synthesis.md",
    assumptionChallenged:
      "Challenged the UX Assumption that a static comparison table is enough for developers choosing across 19+ providers and 4 distinct workloads.",
    whatFailed:
      "Static tables force readers to do mental math across per-second CPU rates, GiB-seconds, monthly base fees, free credit deductions, and token cache hit percentages.",
    breakthroughInsight:
      "Combined an investigative long-form engineering essay ('Distill.pub meets Pragmatic Engineer') with 5 data visualizations and 4 live client-side JavaScript calculation widgets.",
    quantifiedImpact:
      "Delivered a complete, self-contained Next.js static export site with downloadable revision docs, interactive TCO calculators, live UTC off-peak arbitrage clock, and a custom mobile cloud-init bootstrap generator."
  }
];
