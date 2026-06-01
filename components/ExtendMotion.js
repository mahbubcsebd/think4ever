'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SplitSection from './SplitSection';
import VideoPlayer from './VideoPlayer';
import GradientText from './GradientText';

export default function ExtendMotion() {
  const listItems = [
    'Add any feature to an existing codebase — T4E understands the full context before touching a single file',
    'Change propagation happens automatically across code, tests, docs, and config',
    '14 files updated, tests passing, docs current — in 23 minutes',
    'Works with your existing repo — no migration, no lock-in',
  ];

  return (
    <SplitSection
      id="extend-motion"
      watermarkText="MOTION"
      leftTitle="Extend Motion"
      bottomContent={
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center w-full mt-8 md:mt-12">
          {/* Text List */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-8">
            <div className="flex flex-col gap-6">
              {listItems.map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="text-[14px] lg:text-[15px] text-[#353B3E] font-medium leading-[1.6]"
                >
                  {text}
                </motion.p>
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
                href="#"
                className="group inline-flex items-center cursor-pointer select-none"
              >
                {/* Circle: border turns blue on hover, bg expands in */}
                <div className="w-11 h-11 rounded-full border border-zinc-300 group-hover:border-brand-blue flex items-center justify-center relative overflow-hidden transition-all duration-500 ease-out shrink-0">
                  <span className="absolute inset-0 bg-brand-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                  {/* Dot: brand-blue → white when bg fills */}
                  <span className="relative z-10 w-2 h-2 rounded-full bg-brand-blue group-hover:bg-white transition-colors duration-500 ease-out" />
                </div>

                {/* Text: black, semibold, slides right on hover */}
                <span className="font-semibold text-base text-zinc-950 relative z-10 ml-2">
                  Extend something free
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
        className="text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
      >
        We are working <br className="hidden md:block" />
        on it <GradientText>Updates</GradientText> in real <br className="hidden md:block" />
        time Motion.
      </motion.h2>
    </SplitSection>
  );
}
