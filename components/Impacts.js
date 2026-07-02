'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SplitSection from './SplitSection';
import GradientText from './GradientText';

function MobileAccordionCard({ circle, idx, isOpen, onToggle }) {
  return (
    <div 
      className="bg-white rounded-[16px] shadow-sm border border-zinc-100 flex overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      {/* Left Blue Strip */}
      <div className="w-10 bg-gradient-to-b from-[#07A7E1] to-[#093cad] flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-[13px] -rotate-90 whitespace-nowrap tracking-[0.2em]">
          {`0${idx + 1}`}
        </span>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[18px] text-[#09090D]">{circle.title}</h3>
          <div className="text-zinc-700">
            {isOpen ? <Minus strokeWidth={2} className="w-5 h-5" /> : <Plus strokeWidth={2} className="w-5 h-5" />}
          </div>
        </div>
        
        {/* Expanded Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-2 mt-4 text-[14px] text-[#555B5E] font-medium">
                {circle.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Impacts() {
  const [activeIdx, setActiveIdx] = useState(-1);

  const circles = [
    {
      title: 'Discovery',
      items: ['Requirements', 'Concept', 'Gap Analysis', 'Jira'],
    },
    {
      title: 'Design',
      items: ['Architecture', 'UI Design', 'Specifications'],
    },
    {
      title: 'Delivery',
      items: ['Security', 'Compliance', 'Build & Test', 'Git & SVN'],
    },
    {
      title: 'Operations',
      items: ['Deployment', 'Impact Analysis', 'Voice Analysis'],
    },
  ];

  return (
    <SplitSection
      id="capabilities"
      watermarkText="SDLC"
      leftTitle="Platform Capabilities"
      bottomContent={
        <>
          {/* Desktop View: Overlapping Circles */}
          <div className="mt-8 hidden md:flex flex-row items-center justify-center -space-x-4 lg:-space-x-6 w-full pb-12">
            {circles.map((circle, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + idx * 0.15,
                }}
                className="md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] shrink-0 rounded-full flex flex-col justify-start pt-12 lg:pt-16 xl:pt-[70px] items-center text-center border border-zinc-200/80 hover:border-[#093cad]/20 bg-white/85 backdrop-blur-2xl shadow-xl shadow-[#093cad]/5 relative select-none transition-transform duration-500 ease-out hover:border-brand-blue hover:z-30 hover:scale-110"
                style={{ zIndex: 10 + idx }}
              >
                <h3 className="text-[20px] lg:text-[28px] font-bold tracking-tight mb-2">
                  <GradientText>{circle.title}</GradientText>
                </h3>
                <ul className="flex flex-col text-[13px] lg:text-[15px] text-[#353B3E] font-medium leading-[1.4]">
                  {circle.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Mobile View: Accordion Cards */}
          <div className="mt-12 flex flex-col md:hidden gap-4 w-full">
            {circles.map((circle, idx) => (
              <MobileAccordionCard
                key={idx}
                circle={circle}
                idx={idx}
                isOpen={activeIdx === idx}
                onToggle={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
              />
            ))}
          </div>
        </>
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
        End-to-End <GradientText>SDLC</GradientText>{' '}
        <br className="hidden md:block" />
        Pipeline
      </motion.h2>

      {/* Paragraph Descriptions */}
      <div className="flex flex-col gap-6 max-w-2xl">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-base md:text-[17px] text-[#353B3E] leading-relaxed font-normal mt-2"
        >
          Bi-Directional software development. Approach as a developer or
          approach as a software engineer..
        </motion.p>
      </div>
    </SplitSection>
  );
}
