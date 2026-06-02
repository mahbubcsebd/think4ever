'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import GradientText from './GradientText';
import SplitSection from './SplitSection';
import VideoPlayer from './VideoPlayer';

export default function ModernizeMotion() {
  const listItems = [
    'Maps your entire legacy system from a cold start — dependencies, architecture debt, undocumented relationships',
    'Generates a structured modernization plan with fully linked requirements',
    'Produces the first working sprint output with requirements, architecture, and code in sync throughout',
    'Every change propagates — upstream and downstream — automatically',
  ];

  return (
    <SplitSection
      id="modernize"
      watermarkText="REFACTOR"
      leftTitle="Modernize Motion"
      bottomContent={
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center w-full mt-8 md:mt-12">
          {/* Text List */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-8">
            <div className="flex flex-col gap-6">
              {listItems.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <ArrowRight
                    className="w-5 h-5 text-[#07A7E1] shrink-0 mt-[2px]"
                    strokeWidth={2.5}
                  />
                  <p className="text-[14px] lg:text-[15px] text-[#353B3E] font-medium leading-[1.6]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Hero Button Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4"
            >
              <Link
                href="https://portal.think4ever.com"
                className="group inline-flex items-center cursor-pointer select-none"
              >
                {/* Circle: border turns blue on hover, bg expands in */}
                <div className="w-11 h-11 rounded-full border border-zinc-300 group-hover:border-brand-blue flex items-center justify-center relative overflow-hidden transition-all duration-500 ease-out shrink-0">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#07A7E1] to-[#093cad] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                  {/* Dot: brand-blue → white when bg fills */}
                  <span className="relative z-10 w-2 h-2 rounded-full bg-brand-blue group-hover:bg-white transition-colors duration-500 ease-out" />
                </div>

                {/* Text: black, semibold, slides right on hover */}
                <span className="font-semibold text-base text-zinc-950 relative z-10 ml-2">
                  Get Early Access
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full"
          >
            <VideoPlayer
              videoId="CQpIODqNFek"
              className="aspect-video bg-zinc-900"
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
        A 6 – month <br />
        <GradientText>Refactor</GradientText> Took 94{' '}
        <br className="hidden md:block" />
        minutes.
      </motion.h2>
    </SplitSection>
  );
}
