'use client';

import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ShieldAlert } from 'lucide-react';
import GradientText from './GradientText';

const artifacts = [
  {
    num: '1',
    title: 'Domain Concepts',
    visual: 'Core entities, data models, and object relationships mapped visually on the canvas.',
    harness: 'Coding agents query Think via MCP to inherit exact naming conventions, typing, and schema structures. This prevents agents from creating duplicate models, mismatched fields, or hallucinated data properties.',
  },
  {
    num: '2',
    title: 'Business Rules',
    visual: 'Explicit validations, role permissions, policy constraints, and edge cases documented directly alongside UI components.',
    harness: 'AI tools read these rules straight from the visual blueprint, automatically writing backend and frontend logic that complies with your business boundaries from line one.',
  },
  {
    num: '3',
    title: 'Interactive Workflows',
    visual: 'Multi-step state transitions, user journeys, and asynchronous system loops defined as explicit state machines.',
    harness: 'Agents use these workflow maps to generate clean routing, state management, and error-handling routines without losing context or skipping failure paths midway through generation.',
  },
];

export default function DesignArtifacts() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-white relative z-20 overflow-hidden border-t border-zinc-100">
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-auto bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#f8f9fa] whitespace-nowrap">
          Artifacts
        </span>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] xl:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Column: Heading and Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 lg:gap-6 lg:sticky lg:top-28"
          >
            {/* Small Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit mb-2">
              <Layers className="w-3.5 h-3.5 text-[#093cad]" /> Active Governance
            </span>
            
            <h2 className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight">
              Design artifacts that <GradientText>govern your code.</GradientText>
            </h2>

            <p className="text-[15px] lg:text-[16px] leading-relaxed text-zinc-500 font-medium max-w-2xl mt-2">
              When AI agents lack structured context, they hallucinate logic. 
              Think4Ever captures your application's core architecture visually—converting 
              your application concepts, business rules, and workflows into an active, 
              executable harness that guides Think Coding Agents or downstream code 
              generation via MCP.
            </p>
          </motion.div>

          {/* Right Column: Core Artifacts as Guardrails Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Premium Light-mode container matching the site theme */}
            <div className="relative bg-[#f8fafc]/60 backdrop-blur-sm text-zinc-950 p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[36px] border border-zinc-200/80 shadow-md shadow-zinc-100/50 overflow-hidden">
              
              {/* Premium Subtle Radial Glows for Light Mode */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#07A7E1]/5 rounded-full blur-[90px] pointer-events-none" />
              
              {/* Card Header */}
              <div className="relative z-10 mb-8 md:mb-10">
                <h4 className="text-xl sm:text-2xl font-bold text-[#09090D] tracking-tight mb-2">
                  Core Artifacts as Guardrails
                </h4>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-lg font-medium">
                  Mapping visual representations of data structures, validation constraints, and workflows directly to active code execution.
                </p>
              </div>

              {/* Artifacts List */}
              <div className="relative z-10 flex flex-col gap-8">
                {artifacts.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-3 pb-6 border-b border-zinc-200/60 last:pb-0 last:border-none"
                  >
                    {/* Item Title */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#093cad] bg-[#eaf0ff] w-5 h-5 rounded-md flex items-center justify-center">
                        {item.num}
                      </span>
                      <h5 className="font-extrabold text-[#09090D] text-base leading-none">
                        {item.title}
                      </h5>
                    </div>

                    {/* Sub-items (Visual Artifact & How It Acts as a Harness) */}
                    <div className="flex flex-col gap-3 pl-7">
                      {/* Visual Artifact */}
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-600 uppercase tracking-wider">
                          <CheckCircle2 className="w-3 h-3 text-zinc-500" /> The Visual Artifact
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                          {item.visual}
                        </p>
                      </div>

                      {/* How It Acts as a Harness */}
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded bg-[#eafaf1] border border-[#d1f5e1] text-[10px] font-bold text-[#10b981] uppercase tracking-wider">
                          <ShieldAlert className="w-3 h-3 text-[#10b981]" /> How It Acts as a Harness
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                          {item.harness}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
