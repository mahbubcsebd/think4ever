'use client';

import { motion } from 'framer-motion';
import { ArrowRightLeft, RefreshCw, Save, Target } from 'lucide-react';
import SplitSection from './SplitSection';

export default function Architecture() {
  const cards = [
    {
      num: '01',
      icon: <Save className="w-5 h-5 text-indigo-500" strokeWidth={2.5} />,
      iconBg: 'bg-indigo-50',
      title: 'Persistent cross-session context',
      text: 'Every requirement, decision, and code change lives in a structured project graph — not a chat window. Come back tomorrow, next week, three sprints from now. T4E knows exactly what was built, why, and what comes next.',
      tags: [
        { text: 'session 1' },
        { arrow: true },
        { text: 'session 2' },
        { text: 'session n' },
        { arrow: true },
        { text: 'context intact' },
      ],
    },
    {
      num: '02',
      icon: <RefreshCw className="w-5 h-5 text-blue-500" strokeWidth={2.5} />,
      iconBg: 'bg-blue-50',
      title: 'Bidirectional change propagation',
      text: 'Change a requirement — the architecture, code, tests, and docs update. Change the code — the requirement reflects it. Every layer of your SDLC stays connected in both directions, automatically.',
      tags: [
        { text: 'requirements' },
        { arrow: true },
        { text: 'code' },
        { arrow: true },
        { text: 'tests' },
        { arrow: true },
        { text: 'docs' },
      ],
    },
    {
      num: '03',
      icon: <Target className="w-5 h-5 text-pink-500" strokeWidth={2.5} />,
      iconBg: 'bg-pink-50',
      title: 'Full SDLC coordination',
      text: 'T4E holds the entire lifecycle as a single coordinated system — from the first idea through to deployed, tested, documented output. Not a code generator that hands off. A platform that carries the whole thing.',
      tags: [
        { text: 'idea' },
        { arrow: true },
        { text: 'spec' },
        { arrow: true },
        { text: 'build' },
        { arrow: true },
        { text: 'outcome' },
      ],
    },
  ];

  return (
    <SplitSection
      id="architecture"
      watermarkText="ARCH"
      leftTitle="The Architecture"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            // Container is just a grid now, cards handle their own borders
            className="grid grid-cols-1 lg:grid-cols-3 relative z-10 max-w-5xl mx-auto"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`group flex flex-col p-8 md:p-10 bg-transparent transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-zinc-200 hover:z-20 hover:bg-white relative origin-center border border-[#E0E0E0]
                  ${idx === 0 ? 'rounded-t-[24px] lg:rounded-none lg:rounded-l-[24px]' : ''}
                  ${idx === 1 ? '-mt-[1px] lg:mt-0 lg:-ml-[1px]' : ''}
                  ${idx === 2 ? 'rounded-b-[24px] lg:rounded-none lg:rounded-r-[24px] -mt-[1px] lg:mt-0 lg:-ml-[1px]' : ''}
                `}
              >
                <span className="text-[#A0B0C0] text-[13px] font-bold tracking-widest mb-6 block">
                  {card.num}
                </span>

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${card.iconBg}`}
                >
                  {card.icon}
                </div>

                <h3 className="text-[20px] font-bold text-[#09090D] leading-[1.3] mb-4">
                  {card.title}
                </h3>

                <p className="text-[14px] text-[#555B5E] leading-[1.6] font-medium mb-12 flex-grow">
                  {card.text}
                </p>

                {/* Tags / Pills section at the bottom */}
                <div className="flex flex-wrap items-center gap-1 xl:gap-1.5 mt-auto">
                  {card.tags.map((item, itemIdx) => {
                    if (item.arrow) {
                      return (
                        <ArrowRightLeft
                          key={itemIdx}
                          className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#07A7E1] shrink-0"
                          strokeWidth={3}
                        />
                      );
                    }
                    return (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 text-[10px] md:text-[11px] font-bold text-[#555B5E] tracking-[0.05em] uppercase border border-[#E0E0E0] rounded-md bg-transparent group-hover:bg-white whitespace-nowrap transition-colors duration-500"
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
        >
          Layer 5. The <br />
          <span className="text-gradient">Outcome</span> layer.
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-[#353B3E] leading-[1.6] font-medium max-w-[500px]"
        >
          T4E is architecturally different — not a feature addition on top of
          code generation, but a ground-up redesign of how AI coordinates
          software work.
        </motion.p>
      </div>
    </SplitSection>
  );
}
