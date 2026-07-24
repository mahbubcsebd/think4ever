'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Puzzle, ShieldCheck } from 'lucide-react';

const leftFeatures = [
  {
    category: 'The Bimodal Workspace',
    title: 'Two modes. Zero friction.',
    desc: 'Think4Ever splits your environment into dedicated zones for high-level system design and execution code. Draft your interactive requirements and UI components visually, then let our intelligent context ingestion translate your unstructured ideas into structured technical frameworks.',
    icon: LayoutGrid,
    iconColor: 'text-[#07A7E1]',
    iconBg: 'bg-[#07A7E1]/10',
  },
  {
    category: 'Think MCP Integration',
    title: 'Your design, delivered to your editor.',
    desc: 'Stop exporting assets or copying prompts. With Think MCP, your AI agents get a continuously queryable connection to your Think4Ever workspace. Extract design context, retrieve architectural blueprints, and generate code that perfectly matches your system rules—all from within other vibe-coding platforms.',
    icon: Puzzle,
    iconColor: 'text-[#093cad]',
    iconBg: 'bg-[#093cad]/10',
  },
  {
    category: 'Automated Validation',
    title: 'Built-in quality assurance.',
    desc: 'Because your coding environment is pulling from a centralized Think4Ever blueprint, downstream system breaks and tech debt are minimized. You maintain total clarity into how applications are connected and deployed, no matter where the code is actually written.',
    icon: ShieldCheck,
    iconColor: 'text-[#07A7E1]',
    iconBg: 'bg-[#07A7E1]/10',
  },
];

const workflowSteps = [
  {
    num: '1',
    title: 'Architect in Think4Ever',
    phase: 'Visual Blueprinting',
    desc: 'Map out your software architecture, UI frames, and interactive requirements directly in the visual canvas.',
  },
  {
    num: '2',
    title: 'Connect the MCP Server',
    phase: 'Instant Sync',
    desc: 'Add the Think MCP server to your local environment to instantly index your project\'s variables, components, and layout data.',
  },
  {
    num: '3',
    title: 'Code in Your Environment',
    phase: 'Agentic Generation',
    desc: 'Prompt the AI agent in other vibe-coding platforms to build a feature, allowing it to read the live Think4Ever context and generate precise, compliant code.',
  },
];

export default function BimodalWorkflow() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-white relative z-20 overflow-hidden border-t border-zinc-100">
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-auto bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#f8f9fa] whitespace-nowrap">
          Bimodal
        </span>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] xl:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Column: Feature Blocks */}
          <div className="flex flex-col gap-10 md:gap-12 w-full">
            {leftFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 md:gap-6 group"
              >
                {/* Icon Column */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-[14px] ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 shadow-sm border border-transparent group-hover:border-zinc-200/50 group-hover:scale-105 transition-all duration-300`}>
                    <item.icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Text Content Column */}
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#093cad] mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#09090D] mb-3 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-500 font-medium max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: The Workflow Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative lg:sticky lg:top-28"
          >
            {/* Premium Light-mode container matching the site theme */}
            <div className="relative bg-[#f8fafc]/60 backdrop-blur-sm text-zinc-950 p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[36px] border border-zinc-200/80 shadow-md shadow-zinc-100/50 overflow-hidden">
              
              {/* Premium Subtle Radial Glows for Light Mode */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#07A7E1]/5 rounded-full blur-[90px] pointer-events-none" />
              
              {/* Card Header */}
              <div className="relative z-10 mb-8 md:mb-10">
                <h4 className="text-xl sm:text-2xl font-bold text-[#09090D] tracking-tight mb-3">
                  The Workflow Experience
                </h4>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-lg font-medium">
                  A step-by-step visual flow helps developers understand exactly how the MCP server bridges the gap without forcing them to change their existing habits.
                </p>
              </div>

              {/* Steps Vertical Timeline */}
              <div className="relative z-10 flex flex-col gap-8 md:gap-10 pl-1">
                {workflowSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-4 md:gap-6 relative"
                  >
                    {/* Circle and segment container */}
                    <div className="relative flex flex-col items-center shrink-0 w-9">
                      {/* Circle Number Badge */}
                      <div className="z-10 w-9 h-9 rounded-full bg-[#093cad] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm border-[3px] border-white">
                        {step.num}
                      </div>

                      {/* Connecting Line Segment - hidden on last step */}
                      {idx !== workflowSteps.length - 1 && (
                        <div className="absolute top-9 bottom-[-32px] md:bottom-[-40px] w-[1.5px] border-l border-dashed border-zinc-300 left-1/2 -translate-x-1/2 pointer-events-none" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex flex-col pt-0.5">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                        <h5 className="font-bold text-[#09090D] text-[15px] sm:text-base leading-none">
                          {step.title}
                        </h5>
                        <span className="inline-block px-2 py-0.5 rounded bg-[#eaf0ff] border border-[#dbeafe] text-[10px] sm:text-[11px] font-semibold text-[#093cad] uppercase tracking-wider leading-none">
                          {step.phase}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                        {step.desc}
                      </p>
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
