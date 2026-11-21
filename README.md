# The 2026 Edge AI & Cloud Sandbox Atlas (`edge-ai-sandbox-atlas`)

> **Live Published Site:** [https://hafhaq.github.io/edge-ai-sandbox-atlas/](https://hafhaq.github.io/edge-ai-sandbox-atlas/)

An investigative engineering blog post, benchmark matrix, and interactive decision engine comparing **19+ Cloud Sandbox, Remote Browser, Managed Agent Computer, Non-Major Cloud VM, and GPU AI Factory providers**.

## 5 Iterative Planning Revisions (Assumption Challenges)

Before generating the final Next.js site, we completed 5 iterative planning revisions challenging our core technical and economic assumptions:

1. **[Revision 1: Initial Wide Survey](./planning/revision-1-initial-survey.md)** — Mapped 19+ providers across Managed Agent Computers (`OpenAI Dots`, `Claude Code Cloud`), MicroVM Sandboxes (`E2B`, `Modal`, `Daytona`, `Fly.io Sprites`, `Cloudflare Sandboxes`), Remote Browsers (`Browserbase`, `Steel.dev`, `Browserless`), Non-Major Cloud VMs (`Hetzner`, `Netcup`, `Contabo`, `OVHcloud`, `Oracle OCI Free Tier`), and GPU AI Factories (`Vast.ai`, `RunPod`, `Lambda Labs`, `Modal Serverless GPU`).
2. **[Revision 2: Challenging 'One Sandbox Fits All' & The 4-Workload Crossover](./planning/revision-2-workload-taxonomy.md)** — Dismantled the naive 24/7 linear comparison and established the **Duty-Cycle & Concurrency Crossover Law**, ASN datacenter IP blocking rules for remote browsers, and enterprise OAuth vs. root sovereignty boundaries.
3. **[Revision 3: The Arbitrage Stack — DeepSeek V4.1 + Non-Major Cloud VMs & Sweet Spots](./planning/revision-3-deepseek-arbitrage-and-sweet-spots.md)** — Exposed the **Heartbeat Token Trap** (72M input tokens/month just for an OpenClaw agent to wake every 15 minutes) and calculated how **Hetzner CAX21 ARM ($7.50/mo) or Netcup VPS 1000 ($6.20/mo) + DeepSeek V4.1-Flash/Pro Prefix Caching ($0.003/1M hit) + UTC Off-Peak Cron Scheduling** drops total 24/7 autonomous agent TCO from >$230/mo down to **$11.62/mo** (or **$4.12/mo** on Oracle OCI Always-Free 24GB ARM).
4. **[Revision 4: The Pocket Control Plane — Managing Your Sandbox VM From Your Phone](./planning/revision-4-mobile-control-plane.md)** — Challenged mobile TCP SSH Port 22 freezes and glass-keyboard fatigue; designed the **Tailscale WireGuard + UDP Mosh + Tmux/Zellij + Happy/Telegram + Tailscale Serve Live Steel Browser** mobile architecture.
5. **[Revision 5: Final Synthesis & Interactive Blog Blueprint](./planning/revision-5-final-synthesis.md)** — Designed the 4 client-side React/JavaScript calculation widgets and 3 high-contrast data figures embedded inside the long-form engineering essay.

## Interactive JavaScript Widgets Included

1. **Workload & Sandbox Price-to-Power TCO Simulator** (`src/components/WorkloadSimulatorWidget.tsx`)
2. **DeepSeek V4.1 + Non-Major Cloud VM Arbitrage Calculator & 24-Hour UTC Peak/Off-Peak Clock** (`src/components/DeepSeekArbitrageWidget.tsx`)
3. **19-Provider Filterable & Sortable Benchmark Atlas** (`src/components/ProviderAtlasWidget.tsx`)
4. **Pocket Control Plane Cloud-Init Bootstrap Script Generator** (`src/components/MobileControlWidget.tsx`)

## Local Development

```bash
npm install
npm run dev
```

To build the static export (`./out`):

```bash
npm run build
```
