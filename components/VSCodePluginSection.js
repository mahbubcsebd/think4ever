'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function VSCodePluginSection() {
  return (
    <SplitSection
      id="vscode-plugin-home"
      watermarkText="EDITOR"
      leftTitle="VS Code Plugin"
      bottomContent={
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center w-full mt-8 md:mt-12">
          {/* Text Content & Buttons */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit">
              <Cpu className="w-3.5 h-3.5 text-[#093cad]" /> Exclusive Extension
            </span>
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl">
              The VS Code plugin brings the full T4E SDLC platform directly into your editor. 
              See your architecture map, track dependencies, and propagate changes — without leaving VS Code.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="/vscode-plugin"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-bold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 text-sm"
              >
                Get Extension <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://think4ever.com/docs/dev/start_new_project.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-zinc-200 hover:border-transparent text-zinc-700 hover:text-white font-semibold rounded-full active:scale-[0.98] transition-all duration-300 text-xs overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#07A7E1] to-[#093cad] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Developer Guide <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Screenshot Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-xl aspect-video relative"
          >
            <img
              src="/images/vs-extension/vs-2.jpg"
              alt="VS Code Extension"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      }
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
      >
        Think4ever lives <br />
        where you <GradientText>code</GradientText>.
      </motion.h2>
    </SplitSection>
  );
}
