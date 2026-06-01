'use client';

import { motion } from 'framer-motion';
import { Blocks, Link2, Zap } from 'lucide-react';
import SplitSection from './SplitSection';
import GradientText from './GradientText';

export default function MultipleStartingPoints() {
  const cards = [
    {
      icon: <Blocks className="w-5 h-5 text-indigo-500" strokeWidth={2.5} />,
      iconBg: 'bg-indigo-50',
      title: 'Build',
      text: 'Start from intent — a voice memo, a Slack message, a rough idea. T4E takes you to deployed working software with every decision documented and every change tracked.',
      bottomText: 'Developers · Technical founders · Technical PMs',
    },
    {
      icon: <Link2 className="w-5 h-5 text-purple-500" strokeWidth={2.5} />,
      iconBg: 'bg-purple-50',
      title: 'Extend',
      text: 'Start from what already exists. Add a feature, integrate an API, build a new service. T4E understands your existing architecture and propagates every change through it automatically.',
      bottomText: 'Engineering teams · Platform teams · Testing teams',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" strokeWidth={2.5} />,
      iconBg: 'bg-amber-50',
      title: 'Modernize',
      text: "Start from legacy. T4E maps the system, surfaces what's undocumented, generates a structured modernization plan, and executes it sprint by sprint — keeping everything in sync.",
      bottomText: 'Enterprise architecture · CTO office · Digital transformation',
    },
  ];

  return (
    <SplitSection
      id="starting-points"
      watermarkText="EXTEND"
      leftTitle="Multiple Starting Points"
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

                {/* Bottom text section with top border */}
                <div className="pt-6 border-t border-zinc-100 mt-auto">
                  <p className="text-[12px] font-medium text-[#555B5E] leading-relaxed">
                    {card.bottomText}
                  </p>
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
          className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
        >
          Build. <GradientText>Extend.</GradientText> <br />
          Modernize.
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-[#353B3E] leading-[1.6] font-medium max-w-[500px]"
        >
          The same platform serves every software lifecycle need — no editions, no
          feature fragmentation, no complexity.
        </motion.p>
      </div>
    </SplitSection>
  );
}
