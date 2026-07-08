'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import GradientText from './GradientText';

export default function ProblemStatement() {
  const stats = [
    {
      stat: '2x',
      label: 'MAGNITUDE',
      desc: 'Code churn has doubled since AI tools went mainstream — more code written, discarded, and rewritten than ever before.',
    },
    {
      stat: '10-20%',
      label: 'OPPORTUNITY COST',
      desc: 'New development budgets redirected to technical debt before a line of code is written.',
    },
    {
      stat: '42%',
      label: 'IMPACT',
      desc: "Of every developer's week lost to tech debt and bad code — ~$85B in lost productivity annually.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-white relative z-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-auto bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#f5f5f5] whitespace-nowrap">
          CHALLENGE
        </span>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-start">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 lg:gap-6 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#093cad] bg-[#eaf0ff] border border-[#dbeafe] w-fit mb-2">
              <Cpu className="w-3.5 h-3.5 text-[#093cad]" /> The Challenge Today
            </span>
            <h2 className="text-[28px] sm:text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight">
              AI tools ship more code. Developers spend more time <GradientText>fixing it.</GradientText>
            </h2>
          </motion.div>

          {/* Right Column: Stats */}
          <div className="flex flex-col w-full lg:pt-8">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`py-8 md:py-10 flex flex-col gap-4 ${
                  idx !== 0 ? 'border-t border-zinc-200' : 'pt-0 lg:pt-0'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[40px] md:text-[48px] font-extrabold leading-none tracking-tight">
                    <GradientText>{item.stat}</GradientText>
                  </span>
                  <span className="text-zinc-500 font-bold text-[12px] md:text-[13px] uppercase tracking-[0.1em]">
                    {item.label}
                  </span>
                </div>
                <p className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
