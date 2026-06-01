'use client';

import { motion } from 'framer-motion';
import SplitSection from './SplitSection';

export default function Impacts() {
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
        /* Overlapping Circles Full Width */
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center -space-y-6 md:-space-y-0 md:-space-x-4 lg:-space-x-6 w-full pb-12">
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
              // Transparent background so lines cross, reduced overlap, added hover scale
              className="w-[240px] h-[240px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] shrink-0 rounded-full flex flex-col justify-center items-center text-center border border-[#E0E0E0] bg-transparent relative select-none transition-transform duration-500 ease-out hover:border-brand-blue hover:z-30 hover:scale-110"
              style={{ zIndex: 10 + idx }}
            >
              <h3 className="text-[26px] lg:text-[28px] font-bold text-[#07A7E1] tracking-tight mb-2">
                {circle.title}
              </h3>
              <ul className="flex flex-col text-[14px] lg:text-[15px] text-[#353B3E] font-medium leading-[1.4]">
                {circle.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      }
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
      >
        End-to-End <span className="text-[#07A7E1]">SDLC</span>{' '}
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
          className="text-base md:text-[17px] text-[#353B3E] leading-relaxed font-normal"
        >
          Bi-Directional software development. Approach as a developer or
          approach as a software engineer..
        </motion.p>
      </div>
    </SplitSection>
  );
}
