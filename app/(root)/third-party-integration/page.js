'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ExternalLink, ShieldAlert, Puzzle, Terminal, Code, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import GradientText from '@/components/GradientText';
import SplitSection from '@/components/SplitSection';

export default function ThirdPartyIntegrationPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [copiedMCP, setCopiedMCP] = useState(false);

  const mcpConfigText = `{
  "mcpServers": {
    "think4ever": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp",
        "--header",
        "Authorization: Bearer tf_YOUR_TOKEN"
      ]
    }
  }
}`;

  const handleCopyMCP = () => {
    navigator.clipboard.writeText(mcpConfigText);
    setCopiedMCP(true);
    setTimeout(() => setCopiedMCP(false), 2000);
  };

  // Smooth scroll to hash on load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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
    <div className="min-h-screen bg-white relative py-12 overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[30%] bg-[#07A7E1]/3 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-10%] w-[50%] h-[30%] bg-[#093cad]/3 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[30%] bg-[#07A7E1]/3 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Hero Intro Header */}
      <div className="max-w-[1400px] mx-auto z-10 relative px-4 md:px-12 mt-12 mb-6 text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit mx-auto">
          <Puzzle className="w-3.5 h-3.5 text-[#093cad]" /> Centralized Integrations
        </span>
        <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-zinc-950 tracking-tight">
          3rd Party Integration
        </h1>
        <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
          Connect your favorite developer environments, external AI clients, and code interfaces with the centralized Think4Ever platform.
        </p>
      </div>

      <SplitSection
        id="think-mcp"
        watermarkText="MCP"
        leftTitle="Think MCP"
        className="pb-12 md:pb-20 lg:pb-36"
        bottomContent={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mt-8 md:mt-12">
            <div className="flex flex-col gap-6 pr-0 lg:pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit">
                <Puzzle className="w-3.5 h-3.5 text-[#093cad]" /> Model Context Protocol
              </span>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl">
                Work with Claude Code or Codex or other Clients. Connect native terminal assistants to your centralized project workspace using the open-source Model Context Protocol (MCP) standard.
              </p>
              <div className="flex items-center gap-2.5 sm:gap-4 mt-2 w-full">
                <Link
                  href="https://portal.think4ever.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-bold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm text-center whitespace-nowrap"
                >
                  Connect Client <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://think4ever.com/docs/manual_think_mcp.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 border border-zinc-200 hover:border-transparent text-zinc-700 hover:text-white font-semibold rounded-full active:scale-[0.98] transition-all duration-300 text-xs text-center whitespace-nowrap overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#07A7E1] to-[#093cad] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    MCP Docs <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Interactive Terminal Visualizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full border border-zinc-200 rounded-2xl overflow-x-auto bg-zinc-50 p-4 sm:p-6 shadow-md font-mono text-zinc-800 text-xs md:text-sm relative leading-relaxed whitespace-pre-wrap break-all"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-zinc-500 text-[11px] ml-2">config.json — Claude Desktop</span>
                </div>
                <button
                  onClick={handleCopyMCP}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-zinc-500 hover:text-[#093cad] bg-white border border-zinc-200 hover:border-zinc-300 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  {copiedMCP ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" /> Copy Code
                    </>
                  )}
                </button>
              </div>
              <p className="text-zinc-400">{`{`}</p>
              <p className="pl-4 text-zinc-500">"mcpServers": {`{`}</p>
              <p className="pl-8 text-zinc-500">"think4ever": {`{`}</p>
              <p className="pl-12 text-[#093cad]">"command": <span className="text-emerald-600">"npx"</span>,</p>
              <p className="pl-12 text-[#093cad]">"args": [</p>
              <p className="pl-16 text-emerald-600">"-y",</p>
              <p className="pl-16 text-emerald-600">"mcp-remote",</p>
              <p className="pl-16 text-emerald-600">"https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp",</p>
              <p className="pl-16 text-emerald-600">"--header",</p>
              <p className="pl-16 text-emerald-600">"Authorization: Bearer tf_YOUR_TOKEN"</p>
              <p className="pl-12 text-[#093cad]">]</p>
              <p className="pl-8 text-zinc-500">{`}`}</p>
              <p className="pl-4 text-zinc-500">{`}`}</p>
              <p className="text-zinc-400">{`}`}</p>
            </motion.div>
          </div>
        }
      >
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
        >
          Work in harmony with <br />
          <GradientText>External</GradientText> AI Clients.
        </motion.h2>
      </SplitSection>

      <SplitSection
        id="vscode-plugin"
        watermarkText="VS Code"
        leftTitle="VS Code Plugin"
        className="pb-12 md:pb-20 lg:pb-36"
        bottomContent={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mt-8 md:mt-12">
            <div className="flex flex-col gap-6 pr-0 lg:pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit">
                <Code className="w-3.5 h-3.5 text-[#093cad]" /> Editor Extension
              </span>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl">
                The VS Code plugin brings the full T4E SDLC platform directly into your editor. See your architecture map, track dependencies, and propagate changes — without leaving VS Code.
              </p>

              <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 flex gap-3.5 max-w-lg mt-1">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-bold text-zinc-900">Registered Users Only</span>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    This extension is private and distributed exclusively to registered users via the workspace portal.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-4 mt-2 w-full">
                <Link
                  href="https://portal.think4ever.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-bold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm text-center whitespace-nowrap"
                >
                  Download VSIX <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://think4ever.com/docs/dev/start_new_project.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 border border-zinc-200 hover:border-transparent text-zinc-700 hover:text-white font-semibold rounded-full active:scale-[0.98] transition-all duration-300 text-xs text-center whitespace-nowrap overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#07A7E1] to-[#093cad] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    Dev Guide <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Interactive Steps Visualizer */}
            <div className="bg-[#f8fafc] border border-zinc-200 rounded-[28px] p-6 shadow-lg flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200/60 pb-3">
                <h3 className="text-sm font-bold text-zinc-900">Setup Guide</h3>
                <div className="flex items-center gap-1">
                  {steps.map((s, idx) => (
                    <React.Fragment key={s.number}>
                      {idx > 0 && <ArrowRight className="w-3 text-zinc-400 mx-0.5" />}
                      <button
                        onClick={() => setActiveStep(s.number)}
                        className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border transition-all cursor-pointer ${
                          activeStep === s.number
                            ? "bg-[#093cad] text-white border-[#093cad] shadow-md shadow-[#093cad]/20"
                            : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        {s.number}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#093cad] uppercase tracking-wider mb-0.5">Step {steps[activeStep-1].number} of 3</span>
                  <h4 className="text-sm font-bold text-zinc-900">{steps[activeStep-1].title}</h4>
                  <p className="text-[12px] text-zinc-500 leading-relaxed mt-0.5">{steps[activeStep-1].desc}</p>
                </div>
                <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm aspect-video relative">
                  <img
                    src={steps[activeStep-1].image}
                    alt={steps[activeStep-1].title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
        >
          Think4ever lives <br />
          <GradientText>where</GradientText> you code.
        </motion.h2>
      </SplitSection>

      <SplitSection
        id="think-api"
        watermarkText="API"
        leftTitle="Think API"
        className="pb-12 md:pb-20 lg:pb-36"
        bottomContent={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mt-8 md:mt-12">
            <div className="flex flex-col gap-6 pr-0 lg:pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit">
                <Terminal className="w-3.5 h-3.5 text-[#093cad]" /> Developer API
              </span>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl">
                A professional, standard REST interface to programmatically manage access tokens and seamlessly drive your project configurations.
              </p>
              <div className="flex items-center gap-2.5 sm:gap-4 mt-2 w-full">
                <Link
                  href="https://portal.think4ever.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-bold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm text-center whitespace-nowrap"
                >
                  Generate Key <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://think4ever.com/docs/manual_think_api.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 border border-zinc-200 hover:border-transparent text-zinc-700 hover:text-white font-semibold rounded-full active:scale-[0.98] transition-all duration-300 text-xs text-center whitespace-nowrap overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#07A7E1] to-[#093cad] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    API Reference <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Interactive Code API Response Visualizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full border border-zinc-200 rounded-2xl overflow-x-auto bg-zinc-50 p-4 sm:p-6 shadow-md font-mono text-zinc-800 text-xs md:text-sm relative leading-relaxed whitespace-pre-wrap break-all"
            >
              <div className="flex items-center gap-1.5 border-b border-zinc-200 pb-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-zinc-500 text-[11px] ml-2">REST — GET /api/v1/workspace/project/schema</span>
              </div>
              <p className="text-zinc-800 font-bold"><span className="text-[#093cad]">GET</span> https://portal.think4ever.com/api/v1/workspace/project/schema</p>
              <p className="text-zinc-500">Headers: Authorization: Bearer tf_YOUR_TOKEN</p>
              <p className="text-zinc-400 mt-2">{`{`}</p>
              <p className="pl-4 text-[#093cad]">"status": <span className="text-emerald-600">"success"</span>,</p>
              <p className="pl-4 text-[#093cad]">"data": {`{`}</p>
              <p className="pl-8 text-[#093cad]">"workspace": <span className="text-emerald-600">"my-workspace"</span>,</p>
              <p className="pl-8 text-[#093cad]">"project": <span className="text-emerald-600">"think4ever"</span>,</p>
              <p className="pl-8 text-[#093cad]">"schema": {`{`}</p>
              <p className="pl-12 text-[#093cad]">"nodes": [</p>
              <p className="pl-16 text-[#093cad]">{`{ "id": "Header", "type": "component" },`}</p>
              <p className="pl-16 text-[#093cad]">{`{ "id": "Button", "type": "component" }`}</p>
              <p className="pl-12 text-[#093cad]">]</p>
              <p className="pl-8 text-[#093cad]">{`}`}</p>
              <p className="pl-4 text-[#093cad]">{`}`}</p>
              <p className="text-zinc-400">{`}`}</p>
            </motion.div>
          </div>
        }
      >
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
        >
          Expose T4E assets on <br />
          a <GradientText>Granular</GradientText> level
        </motion.h2>
      </SplitSection>
    </div>
  );
}
