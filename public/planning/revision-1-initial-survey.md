# Revision 1: Initial Wide Survey — Cloud Sandboxes, Agent Computers & Edge AI

> **Date:** November 2026  
> **Stage:** Revision 1 of 5 (Initial Landscape Survey & First-Pass Assumptions)  
> **Purpose:** Map the emerging ecosystem of cloud sandboxes, persistent agent computers (OpenAI Dots, BoxCompute, Sprites), remote browsers, self-hosted agent stacks (OpenClaw), and GPU AI factories. Establish baseline pricing and compute metrics before challenging our assumptions in Revisions 2–5.

---

## 1. The Initial Premise

Edge computing and AI agents have converged around a core architectural truth: **an LLM without a computer is just a text generator; an LLM with a sandboxed computer is an autonomous worker.**

With the rise of **OpenAI Dots** (persistent AI teammates assigned their own cloud computer and browser), **OpenClaw** (the ubiquitous open-source personal agent framework), and serverless microVM fleets (**E2B, Modal, Daytona, Cloudflare Sandboxes, Fly.io Sprites**), developers and technical operators face a fragmented pricing matrix.

In Revision 1, our initial assumption is that we can categorize all providers on a single linear spectrum from "Cheap DIY VPS" to "Expensive Managed AI Computer" and rank them by raw vCPU/RAM per dollar.

---

## 2. First-Pass Provider Survey (Going Wide)

### Category A: Consumer & Enterprise Managed Agent Computers
1. **OpenAI Dots (ChatGPT Pro / Business / Enterprise)**
   - **What you get:** Always-on cloud virtual machine + integrated cloud browser + 4,000+ tool integrations powered by GPT-6 Astra / GPT-6.1 Terra.
   - **Pricing Tiers:**
     - ChatGPT Plus ($20/mo): Limited preview/testing access.
     - ChatGPT Pro ($100/mo, $200/mo, $500/mo): 1 baseline Dot at $100/mo, scaling background compute headroom and flagship model concurrency up to $500/mo.
     - Enterprise Flat-Rate per Dot: Standard Dot ($50/mo), Advanced Dot ($200/mo), Expert Dot ($500/mo).
   - **Initial Assumption:** Overpriced compared to a $5 VPS, aimed purely at non-technical enterprise workers. *(To be challenged in Rev 2 & 3).*

2. **Anthropic Claude Code Cloud Sessions (`claude --cloud`) & GitHub Codespaces**
   - **What you get:** Managed dev container / VM tightly coupled with repository state.
   - **Pricing:** Codespaces charges ~$0.18/hr (2-core, 8GB RAM) to ~$0.72/hr (8-core, 32GB RAM) plus storage ($0.07/GB-mo). Claude Max ($100–$200/mo) bundles heavy Claude Code token allowances.

### Category B: Ephemeral & Persistent Code Execution Sandboxes (MicroVMs)
1. **E2B (The AI Agent Cloud)**
   - **Architecture:** Firecracker MicroVMs (~150ms cold start, memory snapshots).
   - **Pricing:** Hobby ($0 + $100 one-time credit, max 1 hr session, 20 concurrent) vs Pro ($150/mo base, 24 hr session, 100+ concurrent). Compute billed per second: ~$0.000014/vCPU-s and ~$0.000045/GiB-s (~$0.17/hr for 2 vCPU / 4 GiB RAM).
2. **Daytona**
   - **Architecture:** Ultra-fast Linux containers (<90ms cold start) + optional VM isolation.
   - **Pricing:** $0 base subscription ($200 trial credit). Per-second billing: $0.0504/vCPU-hr, $0.0162/GiB-hr (~$0.165/hr for 2 vCPU / 4 GiB RAM). Also supports GPUs (RTX 4090 at $0.99/hr to H100 at $4.29/hr).
3. **Modal Sandboxes**
   - **Architecture:** gVisor containers with sub-second spin-up and scale-to-zero.
   - **Pricing:** Starter ($0/mo, includes $30/mo free compute credit), Team ($250/mo, includes $100/mo credit). Compute: ~$0.047/physical core-hr (= 2 vCPUs) + ~$0.008/GiB-hr (~$0.079/hr for 2 vCPU / 4 GiB RAM).
4. **Fly.io Sprites & Upstash Box / BoxCompute**
   - **Architecture:** Persistent hardware-isolated Firecracker microVMs with hot/cold storage checkpointing.
   - **Pricing (Fly.io Sprites):** Active usage billing! $0.0385/CPU-hr (cumulative active CPU) + $0.021875/GB-hr. Hero plan at $100/mo (1,200 CPU-hrs, 4,800 GB-hrs).
5. **Cloudflare Sandboxes (`@cloudflare/sandbox`)**
   - **Architecture:** Edge container virtualization coupled with Cloudflare Workers & Durable Objects.
   - **Pricing:** $5/mo Workers Paid base plan; active-CPU billing only, dramatically cutting cost during LLM network wait cycles.

### Category C: Dedicated Remote Browser Fleet Infrastructure
1. **Browserbase:** Free ($0, 3 concurrent), Developer ($20/mo, 25 concurrent, 100 hrs included, ~$0.12/hr overage), Startup ($99/mo, 100 concurrent, 500 hrs, ~$0.10/hr). Includes Stagehand integration, stealth anti-bot, and live DOM session replay.
2. **Steel.dev:** Open-source core + managed cloud. Launch ($0 base, $30 credit, $0.10/hr, 15-min max session), Scale ($250/mo, includes $100 credit, $0.08/hr, 100 concurrent, 1-hr session). Add-ons for residential proxies ($6–$10/GB) and CAPTCHA ($1–$3/1k).
3. **Browserless.io:** Free, Prototyping ($25/mo, ~165 hrs / 20k units), Starter ($140/mo, ~1,500 hrs / 180k units), Scale ($350/mo, ~4,150 hrs / 500k units).

### Category D: Non-Major Cloud VMs (The Self-Hosted / OpenClaw Backbone)
1. **Hetzner Cloud:** CPX22 (2 AMD vCPU, 4 GB RAM, 80 GB NVMe, 20 TB traffic) at ~$6–$11/mo depending on tier/region; CAX21 (4 Ampere ARM vCPU, 8 GB RAM, 80 GB NVMe) at ~$7.50/mo.
2. **Contabo:** Cloud VPS 4 (4 vCPU, 8 GB RAM, 100 GB NVMe) at ~$5.28/mo (€5.50).
3. **Netcup:** VPS 1000 G11 (4 vCPU, 8 GB RAM, 256 GB NVMe) at ~€5.75/mo.
4. **OVHcloud:** VPS-1 (2 vCores, 4 GB RAM, 40 GB NVMe, unmetered 500 Mbps) at ~$4.50/mo.
5. **Oracle Cloud (OCI) Free Tier:** 4 Ampere A1 ARM cores, 24 GB RAM, 200 GB block storage at **$0/mo** forever (subject to capacity availability).

### Category E: AI Factories (High-Density GPU Sandboxes)
1. **Vast.ai (P2P Marketplace):** RTX 4090 (~$0.29–$0.35/hr), L40 40GB (~$0.31/hr), A100 80GB (~$0.67–$0.85/hr).
2. **RunPod (Community vs Secure Cloud):** RTX 4090 ($0.34/hr Comm / $0.69/hr Secure), A100 80GB ($1.39–$1.79/hr), H100 80GB ($3.99/hr).
3. **Lambda Labs:** A100 ($1.99/hr), H100 SXM ($4.29/hr), B200 SXM6 ($6.99/hr) with zero egress fees.
4. **Modal Serverless GPUs:** T4 ($0.59/hr), L40S ($1.95/hr), A100 ($2.50–$3.70/hr), H100 ($3.95/hr), B300 ($7.10/hr) billed strictly per second.

---

## 3. Initial Draft Outline for the Site
- **Hero Section:** Comparison table of all providers.
- **Section 1:** What is a Cloud Sandbox?
- **Section 2:** OpenClaw vs Dots vs E2B.
- **Section 3:** GPU pricing table.
- **Section 4:** Mobile SSH tools.

---

## 4. Critique of Revision 1 (Why This Is Not Good Enough)
1. **Flawed Linear Comparison:** Comparing E2B ($0.17/hr = $122/mo if run 24/7) directly against Hetzner ($6/mo for 24/7) misses the entire point of *duty cycle*, *snapshot branching*, and *concurrency*. An agent spawning 50 parallel sandboxes for 12 seconds each costs $0.03 on E2B/Modal, whereas a single 2 vCPU Hetzner VPS would choke and crash.
2. **Superficial Workload Definitions:** We listed "Remote Browser vs OpenClaw vs AI Factory", but haven't defined the exact architectural boundaries (memory footprint, network egress, residential IP score, GPU VRAM bandwidth) that dictate why one provider fails where another shines.
3. **Underdeveloped Non-Major Cloud + DeepSeek Analysis:** We noted DeepSeek's API pricing and European VPS costs, but haven't modeled the actual **Total Cost of Ownership (TCO)** including prefix cache hit ratios and UTC off-peak scheduling.
4. **Action for Revision 2:** Challenge the "24/7 Flat Rate vs Per-Second Serverless" assumption and build a rigorous 4-Workload Taxonomy with real unit economics.
