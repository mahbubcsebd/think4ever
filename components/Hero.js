'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Infinity as InfinityIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';

const rotatingWords = ['Prototype.', 'Refactor.', 'Scale.', 'Build.', 'Ship.'];

function MotionTextLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="block h-[1.2em] overflow-hidden relative w-full">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: 48,
            opacity: 0,
            transition: { duration: 0.25, ease: 'easeIn' },
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
            mass: 1,
          }}
          className="text-gradient block absolute inset-x-0 whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * OrbitalCircle — 946×946px ring, top:-262px right:120px (overhangs top-right).
 * 3 dots at scad1/scad2/scad3 positions ride the rotating wrapper.
 */
function OrbitalCircle() {
  return (
    // Circle ring — rotates via animate-hero-rotation
    <div
      className="
      absolute
      w-[946px] h-[946px]
      border border-[#E0E0E0]
      rounded-full
      top-[-262px] -right-[150px] lg:-right-[350px] xl:-right-[200px] 2xl:right-[50px]
      bottom-auto left-auto
      pointer-events-none
      will-change-transform
      z-10
    "
    >
      {/* Ball 1 - Top Center (0 degrees) */}
      <div className="absolute inset-0 flex justify-center z-10 max-md:rotate-[150deg] md:rotate-0">
        <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-brand-blue flex items-center justify-center -translate-y-1/2 shadow-lg drop-shadow-md border-[2px] border-white">
          <div className="w-full h-full flex items-center justify-center max-md:-rotate-[150deg] md:-rotate-0">
            <div
              className="text-white flex items-center justify-center"
            >
              <InfinityIcon
                size="12"
                strokeWidth={3}
                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ball 2 - Bottom Right (120 degrees) */}
      <div
        className="absolute inset-0 flex justify-center z-10 max-md:rotate-[90deg] md:rotate-[120deg]"
      >
        <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-brand-blue flex items-center justify-center -translate-y-1/2 shadow-lg drop-shadow-md border-[2px] border-white">
          {/* Static counter-rotation of 120deg */}
          <div
            className="w-full h-full flex items-center justify-center max-md:-rotate-[90deg] md:-rotate-[120deg]"
          >
            <div
              className="text-white flex items-center justify-center"
            >
              <InfinityIcon
                size="12"
                strokeWidth={3}
                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ball 3 - Bottom Left (240 degrees) */}
      <div
        className="absolute inset-0 hidden md:flex justify-center z-10 md:rotate-[240deg]"
      >
        <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-brand-blue flex items-center justify-center -translate-y-1/2 shadow-lg drop-shadow-md border-[2px] border-white">
          {/* Static counter-rotation of 240deg */}
          <div
            className="w-full h-full flex items-center justify-center md:-rotate-[240deg]"
          >
            <div
              className="text-white flex items-center justify-center"
            >
              <InfinityIcon
                size="12"
                strokeWidth={3}
                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import ProofBar from './ProofBar';
import BreathingBlob from './ui/BreathingBlob';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-white pt-24 pb-12 lg:pt-16 lg:pb-8 xl:pt-24 xl:pb-12 overflow-hidden"
    >
      {/* ── Orbital Circle Background ── */}
      <OrbitalCircle />

      {/* ── Vertical Watermark "THINK4EVER" ── */}
      <div
        className="
        absolute
        right-[calc(100vw/2-1140px/2)]
        top-0 bottom-0
        [writing-mode:vertical-rl]
        rotate-180
        pointer-events-none select-none
        flex items-center justify-center
        text-[clamp(5rem,10vw,9rem)]
        font-black uppercase
        text-zinc-200
        tracking-[-0.04em]
        opacity-80
        whitespace-nowrap
        z-0
      "
      >
        THINK4EVER
      </div>

      {/* ── Page Container ── */}
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] w-full z-20 relative flex flex-col justify-start gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] xl:grid-cols-[1.4fr_1fr] 2xl:grid-cols-[1.3fr_1fr] gap-8 lg:gap-8 xl:gap-8 2xl:gap-12 items-center py-4 lg:py-2 xl:py-2 2xl:py-6">
          {/* Left Side: Text Content */}
          <div className="flex flex-col gap-5 lg:gap-4 xl:gap-4 2xl:gap-6">
            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1
                className="
              text-[28px] sm:text-[40px] md:text-[54px] lg:text-[46px] xl:text-[48px] 2xl:text-[72px]
              leading-[1.08]
              font-bold text-black
              flex flex-col gap-1 sm:gap-2
            "
              >
                <span className="inline-flex items-center gap-x-3 md:gap-x-4 sm:whitespace-nowrap">
                  <BreathingBlob className="shrink-0" /> Design in Think.
                </span>
                <span className="text-gradient sm:whitespace-nowrap">
                  Code anywhere
                </span>
              </h1>

              <p className="max-w-lg lg:max-w-xl xl:max-w-xl 2xl:max-w-lg text-sm md:text-base lg:text-sm xl:text-base 2xl:text-base text-zinc-500 leading-relaxed font-normal mt-2">
                Build your system architecture in Think4Ever's bimodal workspace.
                Stream live context directly to other vibe-coding platforms and
                IDEs via our native MCP server.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mt-1 lg:mt-0 xl:mt-0 2xl:mt-2">
              {/* Free Path CTA */}
              <div className="flex flex-col items-center gap-1.5">
                <Link
                  href="https://portal.think4ever.com"
                  className="w-full sm:w-auto text-center px-8 py-3 lg:py-2.5 xl:py-2.5 2xl:py-3 bg-[#093cad] text-white font-semibold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                >
                  Start Designing for Free
                </Link>
                <span className="text-[11px] text-zinc-400 font-medium select-none text-center">
                  No credit card required
                </span>
              </div>

              {/* Paid Path CTA */}
              <div className="flex flex-col items-center gap-1.5">
                <Link
                  href="/#pricing"
                  className="w-full sm:w-auto text-center px-6 py-[10.5px] lg:py-[8.5px] xl:py-[8.5px] 2xl:py-[10.5px] border-2 border-[#093cad] text-[#093cad] hover:bg-[#093cad] hover:text-white font-semibold rounded-full active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                >
                  <span>Get Early Access</span>
                </Link>
                <span className="text-[11px] text-zinc-400 font-medium select-none text-center">
                  For Teams & Power Users
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Stacked Video Players */}
          <div className="flex flex-col gap-4 w-full 2xl:max-w-[540px] relative mt-4 lg:mt-0 lg:ml-auto">
            {/* Video 1: Greenfield */}
            <div className="flex flex-col gap-1.5 xl:gap-1.5 2xl:gap-2">
              <h3 className="text-xs sm:text-sm font-bold text-zinc-800 tracking-tight">
                Build from scratch
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="w-full rounded-[20px] md:rounded-[24px] lg:rounded-[16px] xl:rounded-[16px] 2xl:rounded-[24px] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50"
              >
                <VideoPlayer
                  videoId="Lq-vza9_CzI"
                  className="aspect-video bg-zinc-900"
                  title="video 1 — greenfield"
                />
              </motion.div>
            </div>

            {/* Video 2: Brownfield */}
            <div className="flex flex-col gap-1.5 xl:gap-1.5 2xl:gap-2">
              <h3 className="text-xs sm:text-sm font-bold text-zinc-800 tracking-tight">
                Bring your own code, adapt existing
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="w-full rounded-[20px] md:rounded-[24px] lg:rounded-[16px] xl:rounded-[16px] 2xl:rounded-[24px] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50"
              >
                <VideoPlayer
                  videoId="FY68DuwOf4Q"
                  className="aspect-video bg-zinc-900"
                  imageClassName="scale-x-[1.15] scale-y-[1.04] group-hover:scale-x-[1.19] group-hover:scale-y-[1.08]"
                  title="video 2 — brownfield"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Proof Bar embedded directly */}
        <div className="w-full">
          <ProofBar className="px-0 pt-0 pb-0 bg-transparent" />
        </div>
      </div>
    </section>
  );
}
