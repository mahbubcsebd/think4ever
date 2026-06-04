'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ArrowDown, ExternalLink, Code } from 'lucide-react';
import Link from 'next/link';

export default function VSCodePluginPage() {
  const bulletPoints = [
    {
      title: "See Live Architecture",
      desc: "Visualize your entire codebase, APIs, and data models instantly as an interactive system map directly inside your workspace."
    },
    {
      title: "Track Dependencies",
      desc: "Instantly check which files and modules depend on each other before editing to avoid regression bugs."
    },
    {
      title: "Propagate Changes",
      desc: "Run multi-agent generation cycles to propagate edits downstream and keep your specs, designs, and code in sync."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative py-20 px-4 md:px-12 overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#07A7E1]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#093cad]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto z-10 relative mt-6 lg:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Headline & Bullets */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit">
                Official Extension
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] font-bold text-zinc-950 tracking-tight">
                Think4ever lives <br className="hidden sm:block" />
                where you code.
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl">
                The VS Code plugin brings the full T4E SDLC platform directly into your editor. 
                See your architecture map, track dependencies, and propagate changes — without leaving VS Code.
              </p>
            </div>

            {/* Install CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://marketplace.visualstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-bold rounded-xl shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-[#093cad]/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
              >
                Install the VS Code Plugin <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-6 mt-2">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#eafaf1] border border-[#d1f5e1] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-zinc-900 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-zinc-500 mt-1 leading-relaxed max-w-lg">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Mockup / Screenshot Placeholder */}
          <div className="relative w-full">
            {/* Background Blur Backing */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#07A7E1]/10 to-[#093cad]/10 rounded-[24px] filter blur-xl opacity-75 -z-10" />

            {/* Mockup Container */}
            <div className="bg-[#18181b] border border-zinc-800 rounded-[24px] shadow-2xl overflow-hidden aspect-video flex flex-col relative">
              {/* Mock Window Top Bar */}
              <div className="bg-[#1e1e1f] px-4 py-3 flex items-center justify-between border-b border-zinc-800 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[11px] text-zinc-500 font-medium font-mono">think4ever-workspace — Visual Studio Code</div>
                <div className="w-12" />
              </div>

              {/* Mock Window Content */}
              <div className="flex-1 flex items-center justify-center p-8 bg-zinc-950/80 backdrop-blur-sm relative group">
                <div className="flex flex-col items-center justify-center text-center gap-4 max-w-sm">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#07A7E1] shadow-lg">
                    <Code className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-zinc-200 text-base font-bold">Screenshot Placeholder</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      We will display a walkthrough/editor mockup screenshot of the VS Code Plugin extension dashboard right here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
