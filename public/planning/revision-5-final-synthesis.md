# Revision 5: Final Synthesis, Editorial Blog Architecture & Interactive Widget Blueprint

> **Date:** November 2026  
> **Stage:** Revision 5 of 5 (Final Synthesis, UX/UI Critique & Next.js Static Export Specification)  
> **Purpose:** Challenge our presentation and UX assumptions. Transform the 4 previous technical revisions into an authoritative, richly illustrated, interactive long-form engineering essay and live benchmark atlas built with Next.js (`output: 'export'`) and published to GitHub Pages.

---

## 1. Challenging Our UX & Editorial Assumptions

### Assumption 5.1: "A gigantic pricing table at the top of the page is the best way to present 20+ cloud sandbox providers."
* **The Challenge:** In Revision 1, we planned to open with a massive table. However, readers visiting a technical deep-dive want **narrative clarity first** (why the shift from stateless LLMs to stateful cloud computers is happening), backed by **visual evidence (figures, SVG architecture diagrams, price-to-power scatter plots)**, and **interactive calculators** where they can plug in *their* workload parameters.
* **The Fix (The "Distill.pub meets Pragmatic Engineer" Blog Format):**
  1. **Long-Form Essay Spine:** Written like an authoritative, opinionated investigative engineering post with reading time, table of contents sidebar, pull-quotes, mathematical callouts, and inline citations.
  2. **Rich Figures, Charts & Sourced Architecture Visuals:**
     - **Figure 1 (Interactive Bar & Crossover Chart):** *Wall-Clock Monthly Cost vs. Active-CPU & Per-Second MicroVM Cost across Concurrency Levels (1x to 100x).*
     - **Figure 2 (Scatter Plot / Frontier Matrix):** *Price-to-Power Frontier across 22 Providers* (X-axis: Normalized Effective Monthly Cost or Hourly Compute Rate; Y-axis: Compute Density & Isolation Score; Bubble Size: RAM/VRAM allocation).
     - **Figure 3 (DeepSeek + Non-Major Cloud Arbitrage Stacked Chart):** *Monthly Token + Compute TCO Breakdown* comparing Uncached Frontier APIs vs. DeepSeek V4.1 Flash / V4 Pro with 85% Prefix Cache Hit + UTC Off-Peak Scheduling on Hetzner/Netcup/Oracle OCI.
     - **Figure 4 (Annotated Visual Gallery with Direct Primary Sources):** High-contrast architectural schematics and provider cards linking directly to verified pricing documentation (`openai.com`, `e2b.dev`, `modal.com`, `daytona.io`, `fly.io`, `cloudflare.com`, `browserbase.com`, `steel.dev`, `hetzner.com`, `contabo.com`, `netcup.com`, `deepseek.com`, `runpod.io`, `vast.ai`, `lambdalabs.com`).
     - **Figure 5 (Mobile Pocket Control Plane Network Topology Diagram):** Visual schematic of the *Phone -> Tailscale WireGuard Mesh -> UDP Mosh -> Tmux/Zellij -> OpenClaw / Claude Code / Steel Live Browser* architecture.

---

## 2. Specification of the 4 Interactive JavaScript Widgets

To make the blog post genuinely useful as a live decision engine, we will embed **4 interactive JavaScript/React widgets** directly inside the narrative sections:

### Widget 1: The Interactive Workload & Sandbox TCO Simulator
* **Controls:**
  - **Workload Preset Selector:** `Remote Browser Fleet` | `OpenClaw 24/7 Personal Agent` | `Burst Code Sandbox (E2B/Modal/Daytona)` | `AI Factory (GPU Inference/Training)` | `Enterprise Autonomous Teammate (OpenAI Dots)`
  - **Sliders:**
    - Daily Active Compute Hours (`0.5 hr` to `24 hrs/day`)
    - Peak Parallel Concurrency (`1` to `100 concurrent sandboxes`)
    - Minimum RAM / VRAM Requirement (`2 GB` to `80 GB`)
    - Daily Token Volume (`1M` to `200M tokens/month`)
    - DeepSeek Prefix Cache Hit Ratio (`0%` to `95%`) & Off-Peak UTC Scheduling Toggle (`On/Off`)
* **Live Output:** Dynamically calculates and ranks the **Top 5 Most Cost-Effective Stacks** for that exact profile, showing monthly Infra Cost, Token Cost, Total TCO, Cold-Start Latency, and why it wins.

### Widget 2: DeepSeek + Non-Major Cloud VM Arbitrage Calculator & UTC Off-Peak Clock
* **Controls:**
  - Select Non-Major Cloud Host: `Oracle OCI Free Tier ($0, 4 ARM / 24GB)` | `OVHcloud VPS-1 ($4.50, 2 vCPU / 4GB)` | `Contabo VPS 4 ($5.28, 4 vCPU / 8GB)` | `Netcup VPS 1000 G11 ($6.20, 4 vCPU / 8GB NVMe)` | `Hetzner CAX21 ARM ($7.50, 4 vCPU / 8GB)` | `Hetzner CPX31 ($14.50, 4 AMD vCPU / 8GB)`
  - Select Model Routing Mix: `% DeepSeek V4.1 Flash` vs `% DeepSeek V4 Pro` vs `% Claude Sonnet / GPT-6`
  - **Live UTC Peak/Off-Peak Visualizer:** Interactive 24-hour UTC timeline bar showing DeepSeek's 2x Peak windows (`01:00–04:00 UTC` and `06:00–10:00 UTC`) vs 1x Off-Peak windows, with a timezone converter so readers can see their exact local off-peak cron hours.

### Widget 3: Comprehensive 22-Provider Filterable & Sortable Atlas Table
* **Controls:**
  - Filter by Category (`All`, `Managed Agent Computer`, `MicroVM Code Sandbox`, `Remote Browser`, `Non-Major Cloud VPS`, `GPU AI Factory`)
  - Filter by Isolation Tech (`Firecracker MicroVM`, `gVisor`, `KVM Full VM`, `Docker/Container`, `Managed Chromium`, `Dedicated GPU`)
  - Search & Sort by Hourly Cost, Monthly Base Subscription, RAM/VRAM per Dollar, or Cold-Start Speed.
  - Expandable row drawer showing exact subscription tiers, overage fees, gotchas, and primary source citation links.

### Widget 4: Interactive Mobile VM Bootstrap & Stack Builder ("Pocket Control Plane Generator")
* **Controls:**
  - Pick Your Mobile OS: `iOS (iPhone / iPad)` | `Android`
  - Pick Your Control Interface: `Blink Shell + Mosh` | `Termius + Tailscale SSH` | `Termux Native` | `Happy (Claude Code UI)` | `Telegram Bot Bridge (OpenClaw)`
  - Pick Your Agent Workload: `OpenClaw + DeepSeek` | `Claude Code CLI` | `Steel.dev Remote Browser + Tailscale Serve`
* **Live Output:** Generates a customized, copy-pasteable `cloud-init` / bash bootstrap script and step-by-step mobile setup checklist tailored to the reader's phone and agent stack.

---

## 3. Revision Log Viewer Built Into the Site
Because the user asked us to *"Do 5 revisions and challenge Your assumptions. Save revisions as planning docs before generating the final site and sharing the published site with me"*, we will:
1. Commit all 5 Markdown files (`planning/revision-1-initial-survey.md` through `planning/revision-5-final-synthesis.md`) directly into the GitHub repository AND copy them to `public/planning/` so they are downloadable from the live site.
2. Include an interactive **"5-Revision Assumption Challenge Drawer / Tab"** right inside the blog post so readers can inspect how each assumption was tested, challenged, and refined across Revisions 1 to 5!

---

## 4. Technical Stack & Deployment Checklist
- **Framework:** Next.js (App Router, TypeScript, Tailwind CSS) configured with `output: 'export'` and `images: { unoptimized: true }` for zero-dependency static hosting on GitHub Pages.
- **Repository:** Public GitHub repository under `hafhaq/edge-ai-sandbox-atlas` with GitHub Actions workflow (`.github/workflows/deploy.yml`) deploying to GitHub Pages, plus direct `gh-pages` branch publication so the live site URL is immediately active and verified.
