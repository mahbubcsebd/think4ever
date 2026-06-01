'use client';

import { motion } from 'framer-motion';
import SplitSection from './SplitSection';

export default function About() {
  return (
    <SplitSection
      id="about"
      watermarkText="ABOUT"
      leftTitle="What We Do"
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-[40px] md:text-[60px] font-bold text-[#09090D] leading-[1.1] md:leading-[65px] tracking-tight"
      >
        AI-powered <span className="text-gradient">Multi-</span><br className="hidden md:block" />
        <span className="text-gradient">Agent SDLC</span> platform.
      </motion.h2>

      {/* Paragraph Descriptions */}
      <div className="flex flex-col gap-6 max-w-2xl">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-base md:text-[17px] text-zinc-600 leading-relaxed font-normal"
        >
          A Platform that designs, builds, and deploys production-ready systems with &quot;total
          coherence and flexibility.&quot; In our platform AI agents handle much of the software
          engineering process end-to-end — from requirements through architecture,
          coding, testing, and deployment.
        </motion.p>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-base md:text-[17px] text-zinc-600 leading-relaxed font-normal"
        >
          Built by a team with 20+ years of experience shipping software at scale. We built
          the tool we always needed.
        </motion.p>
      </div>
    </SplitSection>
  );
}
