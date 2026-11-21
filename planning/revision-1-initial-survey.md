# Revision 1: Wide Ecosystem Survey — Big Players, Cloud Sandboxes & Subsidized LLM Subscriptions

> **Date:** November 2026 (Updated post-critique)  
> **Stage:** Revision 1 of 5 (Comprehensive Landscape Survey — Zero Free-Tier Reliance)  
> **Purpose:** Map the full spectrum of **Cloud Compute Sandboxes** (Big Tech IDEs, Replit, Cursor, Devin/Windsurf, Anthropic, OpenAI Dots, MicroVMs, Remote Browsers, Non-Major Cloud VMs, and GPU Factories) alongside **Paid Subsidized LLM Subscriptions** (American & Chinese flat-rate plans that users log into via OAuth/CLI inside their sandbox rather than paying per-token OpenRouter/API markup).

---

## 1. Core Architectural Shift: No Unreliable Free Tiers, No Per-Token API Tax

In our initial draft, we made two flawed assumptions that we immediately discard in this revised planning sequence:
1. **No Free-Tier Reliance:** We previously included Oracle Cloud (OCI) Always-Free ARM and Modal's $30 free credit as primary baselines. In reality, OCI free capacity is notoriously unavailable (`Out of host capacity`), accounts get arbitrarily reclaimed, and hobby free tiers enforce 15-minute to 1-hour session kills. **Every calculation in this atlas now relies 100% on paid, SLA-backed, reproducible commercial tiers.**
2. **No Per-Token OpenRouter / Raw API Billing for Daily Agency:** Most engineers running **OpenClaw**, **Claude Code**, **Codex CLI**, or **OpenCode** inside a cloud VM do **not** attach a metered per-token OpenRouter key that can accidentally burn $400 over a weekend. Instead, they log into their cloud sandbox using **paid, heavily subsidized flat-rate monthly LLM subscriptions** from major American and Chinese AI labs:
   - **American Subsidized Plans:** Anthropic **Claude Pro ($20) / Max ($100) / Ultra ($200)** (`claude auth login`), OpenAI **ChatGPT Plus ($20) / Pro ($100–$200)** (`openclaw models auth login --provider openai`), **xAI SuperGrok / X Premium+ ($30–$100)**, **Google AI Pro ($19.99) / Ultra ($99.99)** (Gemini CLI + Jules async agent), **Cursor Pro ($20) / Ultra ($200)**, **GitHub Copilot Pro ($10) / Pro+ ($39) / Max ($100)**.
   - **Chinese Subsidized Coding Plans:** **Z.ai GLM Coding Plan** (GLM-5.3 Lite $18/mo, Pro $80/mo), **Alibaba Qwen Coder Plan** (Model Studio flat-rate coding pass, ~$15–$45/mo), **Moonshot Kimi Code Membership** (Kimi K2.5 long-context pass, ~$15–$39/mo), **MiniMax M-Plan Coding Subscription** (M2.5-highspeed Go/Explore/Build, ~$15–$49/mo), and **DeepSeek Fixed Subscription / Off-Peak Enterprise Pool**.

---

## 2. Going Wide: The 6 Compute & Sandbox Pillars (Paid Tiers Only)

### Pillar 1: Big-Player All-in-One Cloud Workspaces & Integrated Agent IDEs
1. **Replit (Core $20–$25/mo • Teams/Pro $90–$100/mo • Reserved VMs $15–$130/mo)**
   - **Compute Allocation:** Core workspaces scale up to **4 vCPU / 4 GB RAM** with **$20/mo included usage credits** (Pro includes $100/mo pooled credits and up to 10 parallel agents). Reserved always-on production VMs cost $15–$35/mo (1 vCPU / 4 GB) to $50/mo (2 vCPU / 8 GB).
   - **Strengths & Limits:** Instant full-stack hosting, mobile iOS/Android app, built-in database & auth. However, "effort-based" Replit Agent checkpoints draw down the $20 credit pool rapidly during heavy multi-file builds.
2. **Anthropic Claude Code (`claude --cloud` + Pro $20 / Max $100 / Ultra $200)**
   - **Compute Allocation:** Managed cloud repo container (~4 vCPU / 8 GB RAM) plus local CLI execution. Pro ($20/mo) enforces a 5-hour rolling window; Max ($100/mo) gives 5x Pro quota; Ultra ($200/mo) gives 10x Pro quota and eliminates the 5-hour rolling cap.
3. **OpenAI Dots & Codex Cloud (ChatGPT Plus $20 • Pro $100 / $200 / $500 • Enterprise $50–$500/Dot)**
   - **Compute Allocation:** Dedicated persistent cloud VM + cloud browser powered by GPT-6 Astra / 6.1 Terra with 4,000+ OAuth connectors.
4. **Google Jules & Project IDX / Firebase Studio (Google AI Pro $19.99/mo • Ultra $99.99/mo)**
   - **Compute Allocation:** Jules runs up to **100 async GitHub repo tasks/day (15 concurrent)** on Pro ($19.99/mo) and **300 tasks/day (60 concurrent)** on Ultra ($99.99/mo) inside isolated GCP microVMs, plus Gemini CLI (1,500–2,000 req/day).
5. **Cursor Background Agents & Devin / Windsurf (Pro $20 • Pro+ $60 • Max/Ultra $200/mo)**
   - **Compute Allocation:** Remote cloud container sandboxes that clone your GitHub repo and work asynchronously in the background. Cursor Ultra ($200/mo) provides 50x base usage and priority cloud background agent VMs; Windsurf/Devin Max ($200/mo) unlocks continuous autonomous Devin Desktop/Cloud sessions.
6. **GitHub Codespaces + GitHub Copilot (Pro $10 / Pro+ $39 / Max $100 + $0.18–$0.72/hr VM)**
   - **Compute Allocation:** Paid Codespaces VMs cost **$0.18/hr** (2-core / 8 GB RAM), **$0.36/hr** (4-core / 16 GB RAM), or **$0.72/hr** (8-core / 32 GB RAM) + $0.07/GB-mo storage, paired with Copilot Pro+ ($39/mo, 7,000 AI credits) or Max ($100/mo, 20,000 AI credits).
7. **xAI Grok Build & SuperGrok / X Premium+ ($30/mo Premium+ • $100–$200/mo SuperGrok Ultra)**
   - **Compute Allocation:** Backed by the 100,000+ GPU **Colossus supercluster** in Memphis; bundles Grok 4.7 / Grok Build 0.1 coding allowances and Cursor partner integrations with real-time X firehose access.

### Pillar 2: Paid Serverless MicroVM Code Sandboxes (E2B, Modal, Daytona, Fly Sprites, Cloudflare)
- **E2B Pro ($150/mo platform + $0.17/hr per 2 vCPU / 4 GiB Firecracker MicroVM):** 24-hour max session length, 100+ concurrent microVMs, ~150ms memory snapshot restore.
- **Modal Paid Usage ($0.079/hr per 2 vCPU / 4 GiB gVisor Sandbox; Team Plan $250/mo):** Sub-second container boot, 5,000 concurrency, attach any GPU per second.
- **Daytona Paid Usage ($0.165/hr per 2 vCPU / 4 GiB Sandbox):** <90ms cold start, optional Kata VM isolation and GPU attachment.
- **Fly.io Sprites Hero Plan ($100/mo for 1,200 active CPU-hrs + 4,800 GB-hrs, or $0.0385/active CPU-hr):** Hardware-isolated Firecracker microVMs billed on *active CPU cycles* rather than idle wall-clock time.
- **Cloudflare Sandboxes ($5/mo Workers Paid base + active-CPU container metering):** Edge-distributed sandboxes coupled with Durable Objects.

### Pillar 3: Paid Remote Browser Fleets (Browserbase, Steel.dev, Browserless)
- **Browserbase Developer ($20/mo for 100 hrs, 25 concurrent) & Startup ($99/mo for 500 hrs, 100 concurrent):** Stagehand native, stealth anti-bot, live DOM session replay (~$0.10–$0.12/hr).
- **Steel.dev Paid Cloud ($0.08–$0.10/hr metered; Scale Plan $250/mo for 100 concurrent) or Self-Hosted Steel Docker:** Open-source browser API with live human takeover view, residential proxy add-ons ($6–$10/GB), and CAPTCHA solvers.
- **Browserless.io Prototyping ($25/mo for ~165 hrs) & Starter ($140/mo for ~1,500 hrs):** Enterprise Playwright/Puppeteer/BrowserQL grid.

### Pillar 4: Paid Non-Major Cloud VMs (The 24/7 Sovereign Compute Backbone)
- **Hetzner Cloud Paid Tiers:** CPX22 (2 AMD EPYC vCPU, 4 GB RAM, 80 GB NVMe, ~$7.00/mo), CAX21 (4 Ampere ARM64 vCPU, 8 GB RAM, 80 GB NVMe, **$7.50/mo**), CPX31 (4 AMD vCPU, 8 GB RAM, 160 GB NVMe, **$14.50/mo**).
- **Netcup Paid Root/VPS Tiers:** VPS 1000 G11 (4 vCPU, 8 GB DDR5, **256 GB NVMe**, **$6.20/mo**), RS 2000 G11 (8 dedicated vCPU cores, 16 GB DDR5, 512 GB NVMe, **$15.50/mo**).
- **Contabo Paid High-RAM Tiers:** Cloud VPS 4 (4 vCPU, 8 GB RAM, 100 GB SSD, **$5.28/mo**), Cloud VPS 6 (6 vCPU, **16 GB RAM**, 200 GB NVMe, **$10.50/mo**).
- **OVHcloud Paid Tiers:** VPS-1 (2 vCPU, 4 GB RAM, 40 GB NVMe, **$4.50/mo**), VPS-2 (4 vCPU, 8 GB RAM, 80 GB NVMe, **$9.00/mo**).

### Pillar 5: Paid GPU AI Factories (RunPod, Vast.ai, Lambda Labs, Modal GPU)
- **RunPod Secure & Community Paid Pods:** RTX 4090 24GB ($0.34–$0.69/hr), A100 80GB ($1.39–$1.79/hr), H100 80GB ($3.99/hr).
- **Vast.ai Paid GPU Fleet:** L40 40GB ($0.31/hr), A100 80GB ($0.67–$0.85/hr), H100 ($1.85–$2.40/hr).
- **Lambda Labs Paid Clusters:** A100 ($1.99/hr), H100 SXM ($4.29/hr), B200 SXM6 ($6.99/hr) with zero data egress fees.
- **Modal Paid Serverless GPU:** L40S 48GB ($1.95/hr), H100 80GB ($3.95/hr), B300 ($7.10/hr) billed strictly per active second.
