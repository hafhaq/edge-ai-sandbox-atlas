import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The 2026 Edge AI & Cloud Sandbox Atlas — Compute, Arbitrage & Pocket Control",
  description:
    "An investigative engineering guide and interactive benchmark comparing OpenAI Dots, E2B, Modal, Daytona, Fly Sprites, Browserbase, Steel.dev, OpenClaw on Non-Major Cloud VMs + DeepSeek V4.1, and GPU AI Factories."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
