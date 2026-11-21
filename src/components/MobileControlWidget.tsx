"use client";

import React, { useState, useMemo } from "react";
import {
  Smartphone,
  Shield,
  Terminal,
  Copy,
  Check,
  Wifi,
  MessageSquare,
  Globe,
  Lock
} from "lucide-react";

type MobileOs = "ios" | "android";
type ControlClient = "blink-mosh" | "termius-ssh" | "termux" | "happy-ui" | "telegram-bridge";
type AgentWorkload = "openclaw-deepseek" | "claude-code" | "steel-remote-browser";

export default function MobileControlWidget() {
  const [mobileOs, setMobileOs] = useState<MobileOs>("ios");
  const [client, setClient] = useState<ControlClient>("blink-mosh");
  const [workload, setWorkload] = useState<AgentWorkload>("openclaw-deepseek");
  const [copied, setCopied] = useState<boolean>(false);

  const generatedScript = useMemo(() => {
    const header = `#!/usr/bin/env bash
# ============================================================================
# POCKET CONTROL PLANE BOOTSTRAP (Revision 4 Zero-Trust Mobile VM Stack)
# Target OS: Ubuntu 24.04 LTS (Hetzner CAX21 ARM / Netcup VPS 1000 / OCI Free)
# Mobile Client: ${mobileOs.toUpperCase()} + ${client} | Workload: ${workload}
# ============================================================================
set -euo pipefail

echo "[1/5] Installing Tailscale WireGuard Mesh, Mosh (UDP Roaming), Zellij & Tmux..."
apt-get update && apt-get install -y curl git ufw mosh tmux zellij jq ca-certificates
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up --ssh

echo "[2/5] Locking down public ingress (Zero-Trust: Only Tailscale & UDP Mosh allowed)..."
ufw default deny incoming
ufw default allow outgoing
ufw allow in on tailscale0
ufw allow 60000:60100/udp comment "Mosh Roaming UDP over Tailnet"
ufw --force enable`;

    let workloadBlock = "";
    if (workload === "openclaw-deepseek") {
      workloadBlock = `
echo "[3/5] Installing Node.js 22 & OpenClaw Autonomous Agent..."
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs docker.io docker-compose-v2
npm install -g openclaw

cat << 'EOF' > /root/.openclaw.env
# DeepSeek V4.1 Arbitrage Routing (90% Flash Cached / 10% V4-Pro)
LLM_PRIMARY_PROVIDER=deepseek
DEEPSEEK_API_KEY=sk-your-deepseek-key
DEEPSEEK_DEFAULT_MODEL=deepseek-flash
DEEPSEEK_REASONING_MODEL=deepseek-v4-pro
ENABLE_PREFIX_CACHE=true
TELEGRAM_ALLOWED_USER_ID=123456789
EOF`;
    } else if (workload === "claude-code") {
      workloadBlock = `
echo "[3/5] Installing Node.js 22, Claude Code CLI & Happy Mobile Daemon..."
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
npm install -g @anthropics/claude-code happy-coder

# Configure persistent tmux auto-attach alias for mobile SSH/Mosh
cat << 'EOF' >> /root/.bashrc
alias agent="tmux attach -t claude-sandbox || tmux new -s claude-sandbox 'claude'"
EOF`;
    } else {
      workloadBlock = `
echo "[3/5] Deploying Self-Hosted Steel.dev Remote Browser Container + Tailscale Serve..."
apt-get install -y docker.io docker-compose-v2
docker run -d --name steel-browser --restart always \\
  -p 127.0.0.1:3000:3000 -p 127.0.0.1:5173:5173 \\
  ghcr.io/steel-dev/steel-browser:latest

# Expose Steel Live Browser viewer securely to your phone's Safari/Chrome over HTTPS
tailscale serve --bg 5173`;
    }

    const mobileInstructions =
      client === "blink-mosh"
        ? `# ON YOUR ${mobileOs.toUpperCase()} PHONE (Blink Shell):
# 1. Enable Tailscale VPN in iOS Control Center
# 2. Run in Blink Shell:
#    mosh root@100.x.y.z -- tmux new -A -s agent`
        : client === "termius-ssh"
        ? `# ON YOUR ${mobileOs.toUpperCase()} PHONE (Termius):
# 1. Create Host: Address = <your-vm.tailnet.ts.net>, Enable Mosh toggle
# 2. Add Startup Snippet: tmux new -A -s agent`
        : client === "termux"
        ? `# ON YOUR ANDROID PHONE (Termux):
# pkg install openssh mosh
# mosh root@100.x.y.z -- zellij attach --create agent`
        : client === "happy-ui"
        ? `# ON YOUR PHONE (Happy Mobile Wrapper for Claude Code):
# 1. Run 'happy' inside your VM terminal and scan the QR code from your phone
# 2. Approve file diffs, monitor token spend, and steer Claude Code via push notifications`
        : `# ON YOUR PHONE (Telegram Voice & Chat Bridge):
# 1. Message @BotFather -> /newbot -> paste token into /root/.openclaw.env
# 2. Dictate tasks via iOS/Android voice notes; tap inline buttons to approve git commits`;

    return `${header}\n${workloadBlock}\n\n${mobileInstructions}\n`;
  }, [mobileOs, client, workload]);

  const copyScript = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="widget-mobile-control"
      className="my-12 rounded-2xl border border-indigo-500/30 bg-slate-900/95 p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-300 mb-2">
            <Smartphone className="h-3.5 w-3.5" />
            INTERACTIVE JAVASCRIPT WIDGET #4 • THE POCKET CONTROL PLANE BUILDER
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Manage Your Cloud Sandbox VM From Your Phone (Zero-Drop Generator)
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Select your phone OS, mobile terminal/chat layer, and agent stack to generate a ready-to-run{" "}
            <code className="text-indigo-300">cloud-init</code> script with Tailscale WireGuard, UDP Mosh roaming, and private mobile browser takeover.
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            1. Mobile Device Platform
          </div>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { id: "ios", label: "iOS (iPhone / iPad)" },
                { id: "android", label: "Android / Fold" }
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMobileOs(item.id)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                  mobileOs === item.id
                    ? "bg-indigo-600/25 border-indigo-500 text-white"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            2. Mobile Control Plane Interface
          </div>
          <select
            value={client}
            onChange={(e) => setClient(e.target.value as ControlClient)}
            aria-label="Mobile Control Plane Interface"
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white"
          >
            <option value="blink-mosh">Blink Shell + Mosh UDP (Instant Echo, Never Drops)</option>
            <option value="termius-ssh">Termius + Snippets Bar + Tailscale SSH</option>
            <option value="happy-ui">Happy Mobile UI (Native Claude Code Diff & Push Approvals)</option>
            <option value="telegram-bridge">Telegram Voice & Inline Button Bot (OpenClaw Hands-Free)</option>
            <option value="termux">Termux Native Linux Userland (Android Power Choice)</option>
          </select>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            3. Sandbox Workload on VM
          </div>
          <select
            value={workload}
            onChange={(e) => setWorkload(e.target.value as AgentWorkload)}
            aria-label="Sandbox Workload on VM"
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white"
          >
            <option value="openclaw-deepseek">OpenClaw 24/7 + DeepSeek V4.1 Arbitrage</option>
            <option value="claude-code">Claude Code CLI + Tmux/Zellij Persistent Daemon</option>
            <option value="steel-remote-browser">Steel.dev Live Browser + Tailscale Serve HTTPS</option>
          </select>
        </div>
      </div>

      {/* Visual Architecture Flow Pills */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5">
          <div className="flex items-center gap-2 font-bold text-indigo-300 mb-1">
            <Lock className="h-3.5 w-3.5" /> 1. Zero Public Ports
          </div>
          <p className="text-slate-400 text-[11px]">
            <code className="text-slate-200">ufw deny incoming</code> blocks all port-22 scanners. Phone authenticates via Tailscale WireGuard IP (<code className="text-slate-200">100.x.y.z</code>).
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5">
          <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
            <Wifi className="h-3.5 w-3.5" /> 2. UDP Mosh Roaming
          </div>
          <p className="text-slate-400 text-[11px]">
            Survives switching from Wi-Fi to 5G or subway tunnels with zero TCP freeze and instant local keystroke echo.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5">
          <div className="flex items-center gap-2 font-bold text-amber-300 mb-1">
            <MessageSquare className="h-3.5 w-3.5" /> 3. Declarative Steering
          </div>
          <p className="text-slate-400 text-[11px]">
            Stop typing bash on glass: dictate tasks via voice notes or tap <code className="text-slate-200">[Approve Diff]</code> push notifications in Happy/Telegram.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5">
          <div className="flex items-center gap-2 font-bold text-cyan-300 mb-1">
            <Globe className="h-3.5 w-3.5" /> 4. Live Browser Takeover
          </div>
          <p className="text-slate-400 text-[11px]">
            <code className="text-slate-200">tailscale serve 5173</code> streams your agent&apos;s Steel browser to mobile Safari so you can tap through 2FA prompts.
          </p>
        </div>
      </div>

      {/* Generated Code Block */}
      <div className="mt-5 relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
          <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            bootstrap-pocket-sandbox.sh
          </span>
          <button
            type="button"
            onClick={copyScript}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/40 px-3 py-1 text-xs font-semibold text-indigo-200 hover:bg-indigo-600/30"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied to Clipboard
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy Cloud-Init Script
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
          <code>{generatedScript}</code>
        </pre>
      </div>
    </section>
  );
}
