'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Cpu, Anchor } from 'lucide-react';
import GradientText from './GradientText';

const pillars = [
  {
    feature: 'Architectural Guardrails',
    desc: "Stop hoping the AI guesses your architecture. Think's design artifacts provide rigid structural context via our MCP server, ensuring agents build within your defined boundaries, never outside them.",
    icon: ShieldCheck,
    iconColor: 'text-[#093cad]',
    iconBg: 'bg-[#093cad]/10',
  },
  {
    feature: 'The Living Source of Truth',
    desc: 'Your visual workspace is the ultimate control plane. When the design updates in Think, the context immediately syncs, automatically steering subsequent code generation back on track.',
    icon: RefreshCw,
    iconColor: 'text-[#07A7E1]',
    iconBg: 'bg-[#07A7E1]/10',
  },
  {
    feature: 'Deterministic Generation',
    desc: "From interactive states to component hierarchies, Think captures your complete intent. Your coding tool doesn't have to invent the UI or the logic; it simply executes the Think harness.",
    icon: Cpu,
    iconColor: 'text-[#093cad]',
    iconBg: 'bg-[#093cad]/10',
  },
];

export default function DesignHarness() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-white relative z-20 overflow-hidden border-t border-zinc-100">
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-auto bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#f8f9fa] whitespace-nowrap">
          Harness
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
              <Anchor className="w-3.5 h-3.5 text-[#093cad]" /> Design-First Spec
            </span>
            
            <h2 className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight">
              Design as a <GradientText>Harness</GradientText>
            </h2>

            <p className="text-[15px] lg:text-[16px] leading-relaxed text-zinc-500 font-medium max-w-2xl mt-2">
              Think4Ever doesn't just sketch your application; it builds the harness. 
              Our design artifacts act as strict, executable blueprints that guide, 
              constrain, and empower AI agents in other vibe-coding platforms. By 
              defining the architecture, logic, and UI visually first, you eliminate 
              AI drift and ensure every line of generated code aligns with your 
              exact system rules.
            </p>
          </motion.div>

          {/* Right Column: Three Pillars Card Table/Blocks */}
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
                  Three Pillars of the Harness
                </h4>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-lg font-medium">
                  Rigid guardrails, instant synchronization, and structured output keep downstream code generation fully deterministic.
                </p>
              </div>

              {/* Pillars list (Grid mimicking a table but highly premium) */}
              <div className="relative z-10 flex flex-col gap-6">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200/60 transition-all duration-300"
                  >
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center`}>
                        <pillar.icon className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-1.5">
                      <h5 className="font-bold text-[#09090D] text-[15px] sm:text-base leading-none">
                        {pillar.feature}
                      </h5>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                        {pillar.desc}
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
