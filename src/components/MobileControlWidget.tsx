"use client";

import React, { useState, useMemo } from "react";
import {
  Smartphone,
  Terminal,
  Copy,
  Check,
  Wifi,
  MessageSquare,
  Globe,
  Lock,
  KeyRound
} from "lucide-react";

type MobileOs = "ios" | "android";
type ControlClient =
  | "blink-mosh"
  | "termius-ssh"
  | "happy-ui"
  | "telegram-bridge"
  | "replit-jules-native";
type AgentSubscriptionStack =
  | "claude-plus-glm"
  | "chatgpt-oauth-plus-qwen"
  | "google-jules-plus-kimi"
  | "supergrok-plus-minimax";

export default function MobileControlWidget() {
  const [mobileOs, setMobileOs] = useState<MobileOs>("ios");
  const [client, setClient] = useState<ControlClient>("blink-mosh");
  const [subStack, setSubStack] = useState<AgentSubscriptionStack>("claude-plus-glm");
  const [copied, setCopied] = useState<boolean>(false);

  const generatedScript = useMemo(() => {
    const header = `#!/usr/bin/env bash
# ============================================================================
# POCKET CONTROL PLANE & SUBSIDIZED LLM LOGIN BOOTSTRAP (Revision 4)
# Paid Host: Ubuntu 24.04 LTS (Netcup VPS 1000 $6.20/mo or Hetzner CAX21 $7.50/mo)
# Mobile Client: ${mobileOs.toUpperCase()} + ${client} | Subsidized Login: ${subStack}
# ============================================================================
set -euo pipefail

echo "[1/5] Installing Tailscale WireGuard Mesh, Mosh (UDP Roaming), Zellij & Tmux..."
apt-get update && apt-get install -y curl git ufw mosh tmux zellij jq ca-certificates
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up --ssh

echo "[2/5] Locking down public ingress (Zero-Trust: Close Port 22, allow Tailscale & UDP Mosh)..."
ufw default deny incoming
ufw default allow outgoing
ufw allow in on tailscale0
ufw allow 60000:60100/udp comment "Mosh Roaming UDP over Tailnet"
ufw --force enable

echo "[3/5] Installing Node.js 22, Claude Code CLI, OpenClaw & Steel Remote Browser..."
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs docker.io docker-compose-v2
npm install -g @anthropics/claude-code openclaw happy-coder`;

    let authBlock = "";
    if (subStack === "claude-plus-glm") {
      authBlock = `
echo "[4/5] Configuring Dual US + Chinese Subsidized Login (Claude Pro/Max + Z.ai GLM-5.3 Plan)..."
# Step A: Authenticate your paid Claude Pro ($20) or Max ($100) subscription via CLI OAuth:
# (Open the printed URL in mobile Safari, approve, and paste the callback code back into terminal)
claude auth login
openclaw models auth login --provider anthropic --method cli --set-default

# Step B: Inject your flat-rate Z.ai GLM-5.3 Coding Plan ($18/mo) key as zero-lockout companion:
cat << 'EOF' >> /root/.openclaw.env
FALLBACK_CODING_PLAN_PROVIDER=zai-glm
ZAI_CODING_PLAN_KEY=zai-sub-your-flat-rate-coding-plan-key
ZAI_PRIMARY_MODEL=glm-5.3
ZAI_OFFPEAK_MULTIPLIER=0.5
EOF`;
    } else if (subStack === "chatgpt-oauth-plus-qwen") {
      authBlock = `
echo "[4/5] Configuring ChatGPT Plus/Pro Official OAuth + Alibaba Qwen Coder Plan ($19/mo)..."
# Step A: Log in with your paid ChatGPT Plus ($20) or Pro ($100) subscription via OAuth:
# Tip for Mobile: When browser redirects to localhost:1455/?code=..., copy the full URL from
# mobile Safari/Chrome address bar and paste it right back into the OpenClaw prompt!
openclaw models auth login --provider openai

# Step B: Add Alibaba Model Studio Qwen3-Coder-Plus flat-rate Coding Pass for 24/7 loops:
cat << 'EOF' >> /root/.openclaw.env
COMPANION_CODING_PLAN=alibaba-qwen-coder
QWEN_CODER_SUBSCRIPTION_KEY=ms-sub-your-qwen-coder-plan-key
QWEN_MODEL=qwen3-coder-plus
EOF`;
    } else if (subStack === "google-jules-plus-kimi") {
      authBlock = `
echo "[4/5] Configuring Google AI Pro ($19.99/mo Gemini CLI + 15 Jules VMs) + Moonshot Kimi Code ($19/mo)..."
# Step A: Install & authenticate Gemini CLI with your Google AI Pro (@gmail.com) OAuth login
# (Unlocks 1,500-2,000 high-context requests/day + 100 async Jules GitHub VM tasks/day!)
npm install -g @google/gemini-cli
gemini auth login

# Step B: Add Moonshot Kimi K2.5 Code Membership key for 2M-token whole-monorepo ingestion:
cat << 'EOF' >> /root/.openclaw.env
COMPANION_CODING_PLAN=moonshot-kimi-code
KIMI_CODE_SUBSCRIPTION_KEY=kimi-sub-your-membership-key
KIMI_MODEL=kimi-k2.5-code
EOF`;
    } else {
      authBlock = `
echo "[4/5] Configuring xAI SuperGrok ($30/mo Colossus) + MiniMax M-Plan Highspeed ($19/mo)..."
cat << 'EOF' >> /root/.openclaw.env
# xAI SuperGrok / X Premium+ Subscription Token (Grok 4.7 + Grok Build 0.1 + Live X Firehose)
PRIMARY_SUBSCRIPTION_PROVIDER=xai-supergrok
XAI_SUBSCRIPTION_TOKEN=xai-sub-your-supergrok-token
XAI_MODEL=grok-4.7

# MiniMax M-Plan Coding Subscription (M2.5-Highspeed for rapid test-fix loops)
COMPANION_CODING_PLAN=minimax-mplan
MINIMAX_MPLAN_KEY=mm-sub-your-mplan-key
MINIMAX_MODEL=minimax-m2.5-highspeed
EOF`;
    }

    const mobileInstructions =
      client === "blink-mosh"
        ? `# [5/5] ON YOUR ${mobileOs.toUpperCase()} PHONE (Blink Shell + UDP Mosh):
# 1. Enable Tailscale VPN in Control Center
# 2. Run in Blink Shell (survives subway tunnels & 5G handoffs with zero lag):
#    mosh root@100.x.y.z -- tmux new -A -s agent`
        : client === "termius-ssh"
        ? `# [5/5] ON YOUR ${mobileOs.toUpperCase()} PHONE (Termius + Tailscale SSH):
# 1. Add Host: Address = <your-vm.tailnet.ts.net>, Toggle "Use Mosh" ON
# 2. Set Startup Snippet: tmux new -A -s agent`
        : client === "happy-ui"
        ? `# [5/5] ON YOUR ${mobileOs.toUpperCase()} PHONE (Happy Mobile UI for Claude Code):
# 1. Run 'happy' inside your VM tmux session and scan the QR code from your phone
# 2. Approve file diffs and bash commands with 1 tap via native mobile push notifications`
        : client === "telegram-bridge"
        ? `# [5/5] ON YOUR ${mobileOs.toUpperCase()} PHONE (Telegram Voice Note & Inline Approval Bot):
# 1. Lock OpenClaw to your numeric Telegram user_id in /root/.openclaw.env
# 2. Dictate tasks hands-free via voice notes; tap [Approve & Push PR] inline buttons`
        : `# [5/5] USING NATIVE BIG-PLAYER MOBILE APPS + YOUR VM:
# - Replit Mobile App (iOS/Android): Instant preview & Replit Agent chat for Core ($25/mo)
# - Google Jules (jules.google on mobile Safari): Assign GitHub issues to 15 concurrent Google VMs
# - Tailscale Serve Live Browser: Run 'tailscale serve --bg 5173' to tap through 2FA on your phone`;

    return `${header}\n${authBlock}\n\n${mobileInstructions}\n`;
  }, [mobileOs, client, subStack]);

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
            INTERACTIVE JAVASCRIPT WIDGET #4 • MOBILE VM &amp; SUBSIDIZED OAUTH LOGIN GENERATOR
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Manage Your Cloud VM &amp; Authenticate Subsidized LLM Plans From Your Phone
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Generate a custom bootstrap script that sets up{" "}
            <strong className="text-indigo-300">Tailscale WireGuard + UDP Mosh</strong> and configures your{" "}
            <strong className="text-emerald-300">
              Paid US OAuth Login (Claude / ChatGPT / Gemini CLI / SuperGrok) + Chinese Coding Plan
            </strong>{" "}
            from an iPhone or Android.
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
            <option value="blink-mosh">Blink Shell + UDP Mosh (Instant Echo, Survives Tunnels)</option>
            <option value="termius-ssh">Termius + Snippets Bar + Tailscale SSH</option>
            <option value="happy-ui">Happy Mobile UI (1-Tap Claude Code Diff &amp; Push Approvals)</option>
            <option value="telegram-bridge">Telegram Voice Note &amp; Inline Button Bot (OpenClaw)</option>
            <option value="replit-jules-native">Native Replit Mobile App + Google Jules Mobile Web</option>
          </select>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            3. Subsidized Subscription Login Pair
          </div>
          <select
            value={subStack}
            onChange={(e) => setSubStack(e.target.value as AgentSubscriptionStack)}
            aria-label="Subsidized Subscription Login Pair"
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white"
          >
            <option value="claude-plus-glm">
              🇺🇸 Claude Pro/Max OAuth + 🇨🇳 Z.ai GLM-5.3 Coding Plan ($18/mo)
            </option>
            <option value="chatgpt-oauth-plus-qwen">
              🇺🇸 ChatGPT Plus/Pro OAuth + 🇨🇳 Alibaba Qwen Coder Plan ($19/mo)
            </option>
            <option value="google-jules-plus-kimi">
              🇺🇸 Google AI Pro (Gemini CLI + 15 Jules VMs) + 🇨🇳 Kimi Code ($19/mo)
            </option>
            <option value="supergrok-plus-minimax">
              🇺🇸 xAI SuperGrok ($30/mo Colossus) + 🇨🇳 MiniMax M2.5 Plan ($19/mo)
            </option>
          </select>
        </div>
      </div>

      {/* Visual Architecture Flow Pills */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5">
          <div className="flex items-center gap-2 font-bold text-indigo-300 mb-1">
            <KeyRound className="h-3.5 w-3.5" /> 1. Mobile OAuth Paste-Back
          </div>
          <p className="text-slate-400 text-[11px]">
            Complete <code className="text-slate-200">claude auth login</code> or ChatGPT OAuth in mobile Safari and paste the <code className="text-slate-200">localhost:1455/?code=</code> URL back into Mosh.
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
            <MessageSquare className="h-3.5 w-3.5" /> 3. Voice &amp; Push Approvals
          </div>
          <p className="text-slate-400 text-[11px]">
            Dictate tasks via Telegram voice notes or tap <code className="text-slate-200">[Approve Diff]</code> in Happy / Google Jules Mobile.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5">
          <div className="flex items-center gap-2 font-bold text-cyan-300 mb-1">
            <Globe className="h-3.5 w-3.5" /> 4. Live 2FA Takeover
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
