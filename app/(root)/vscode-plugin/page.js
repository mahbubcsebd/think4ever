'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, ShieldAlert, Cpu, Download, Key } from 'lucide-react';
import Link from 'next/link';

export default function VSCodePluginPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Locate the Integration Button",
      desc: "Inside your Think4ever Portal project dashboard, look at the top-right navigation bar and click the 'VS Code' integration button.",
      image: "/images/vs-extension/vs-1.jpg"
    },
    {
      number: 2,
      title: "Download VSIX & Copy Keys",
      desc: "Click 'Download .vsix' to grab the extension package. Copy your unique Server URL and Access Key generated for your sandbox instance.",
      image: "/images/vs-extension/vs-2.jpg"
    },
    {
      number: 3,
      title: "Install in VS Code",
      desc: "Open VS Code, navigate to Extensions, click the '...' menu, choose 'Install from VSIX', select the downloaded file, and paste your URL and Access Key.",
      image: "/images/vs-extension/vs-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative py-20 px-4 md:px-12 overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#07A7E1]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#093cad]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto z-10 relative mt-6 lg:mt-12">
        
        {/* Intro Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center mb-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit">
              <Cpu className="w-3.5 h-3.5 text-[#093cad]" /> Exclusive Extension
            </span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] font-bold text-zinc-950 tracking-tight font-sans">
              Think4ever lives <br />
              where you code.
            </h1>
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl">
              The VS Code plugin brings the full T4E SDLC platform directly into your editor. 
              See your architecture map, track dependencies, and propagate changes — without leaving VS Code.
            </p>

            <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 flex gap-3.5 max-w-lg mt-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-zinc-900">Registered Users Only</span>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  This extension is private and distributed exclusively to registered users via the workspace portal.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="https://portal.think4ever.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-bold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300"
              >
                Sign In to Download VSIX <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://think4ever.com/docs/dev/start_new_project.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-200 hover:border-transparent text-zinc-700 hover:text-white font-semibold rounded-full active:scale-[0.98] transition-all duration-300 text-sm overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#07A7E1] to-[#093cad] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Developer Guide <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Interactive Steps Visualizer */}
          <div className="bg-[#f8fafc] border border-zinc-200 rounded-[28px] p-6 sm:p-8 shadow-xl flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-zinc-200/60 pb-4">
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">How to Setup the Extension</h3>
              <div className="flex gap-2">
                {steps.map(s => (
                  <button
                    key={s.number}
                    onClick={() => setActiveStep(s.number)}
                    className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center border transition-all cursor-pointer ${
                      activeStep === s.number
                        ? "bg-[#093cad] text-white border-[#093cad] shadow-md shadow-[#093cad]/20"
                        : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Active Step details */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[#093cad] uppercase tracking-wider mb-1">Step {steps[activeStep-1].number} of 3</span>
                <h4 className="text-base sm:text-lg font-bold text-zinc-900">{steps[activeStep-1].title}</h4>
                <p className="text-[13px] sm:text-[14px] text-zinc-500 leading-relaxed mt-1">{steps[activeStep-1].desc}</p>
              </div>

              {/* Step Screenshot Frame */}
              <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm aspect-video relative">
                <img
                  src={steps[activeStep-1].image}
                  alt={steps[activeStep-1].title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
