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
      top-[-262px] right-[120px]
      bottom-auto left-auto
      animate-hero-rotation
      pointer-events-none
      will-change-transform
      z-10
    "
    >
      {/* Ball 1 - Top Center (0 degrees) */}
      <div className="absolute inset-0 flex justify-center z-10">
        <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-brand-blue flex items-center justify-center -translate-y-1/2 shadow-lg drop-shadow-md border-[2px] border-white">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="text-white flex items-center justify-center"
              style={{ animation: 'hero-rotation 12s linear infinite reverse' }}
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
        className="absolute inset-0 flex justify-center z-10"
        style={{ transform: 'rotate(120deg)' }}
      >
        <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-brand-blue flex items-center justify-center -translate-y-1/2 shadow-lg drop-shadow-md border-[2px] border-white">
          {/* Static counter-rotation of 120deg */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ transform: 'rotate(-120deg)' }}
          >
            <div
              className="text-white flex items-center justify-center"
              style={{ animation: 'hero-rotation 12s linear infinite reverse' }}
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
        className="absolute inset-0 flex justify-center z-10"
        style={{ transform: 'rotate(240deg)' }}
      >
        <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-brand-blue flex items-center justify-center -translate-y-1/2 shadow-lg drop-shadow-md border-[2px] border-white">
          {/* Static counter-rotation of 240deg */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ transform: 'rotate(-240deg)' }}
          >
            <div
              className="text-white flex items-center justify-center"
              style={{ animation: 'hero-rotation 12s linear infinite reverse' }}
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

import BreathingBlob from './ui/BreathingBlob';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* ── Orbital Circle Background ── */}
      <OrbitalCircle />

      {/* ── Vertical Watermark "THINK4EVER" ──
          writing-mode:vertical-rl makes text flow top→bottom.
          rotate-180 flips it so it reads bottom→top.
          top-0 bottom-0 stretches it to full section height. */}
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
        text-[#e2e8f0]
        tracking-[-0.04em]
        opacity-55
        whitespace-nowrap
        z-0
      "
      >
        THINK4EVER
      </div>

      {/* ── Page Container ── */}
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] w-full z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-12 lg:py-24">
          {/* Left Side: Text Content */}
          <div className="flex flex-col gap-8">
            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1
                className="
              text-[28px] sm:text-[40px] md:text-[54px] lg:text-[68px] xl:text-[80px]
              leading-[1.08]
              font-bold text-black
              flex flex-col gap-1 sm:gap-2
            "
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:gap-4">
                  <span className="inline-flex flex-wrap items-center gap-x-2 md:gap-3">
                    <span className="inline-flex items-center gap-x-3">
                      <BreathingBlob className="shrink-0" /> From Code or
                    </span>
                    <span className="inline-flex items-center gap-2 md:gap-3">
                      Concept
                      <ArrowRight
                        className="w-[0.6em] h-[0.6em] text-black shrink-0"
                        strokeWidth={3}
                      />
                    </span>
                  </span>
                </div>
                <MotionTextLoop />
              </h1>

              <p className="max-w-lg text-base md:text-lg text-zinc-500 leading-relaxed font-normal mt-3">
                The first AI-native SDLC platform that keeps your architecture,
                code, and every dependency connected — so a change anywhere
                propagates everywhere.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-6 mt-4">
              {/* Free Path CTA */}
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <Link
                  href="/start-free"
                  className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#e25d24] text-white font-semibold rounded-xl shadow-lg shadow-orange-500/10 hover:bg-[#c95320] hover:shadow-orange-500/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Start Free
                </Link>
                <span className="text-[12px] text-zinc-400 font-medium select-none">
                  No credit card required
                </span>
              </div>

              {/* Paid Path CTA */}
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <Link
                  href="/#pricing"
                  className="w-full sm:w-auto text-center px-8 py-3.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-semibold rounded-xl shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Get Early Access
                </Link>
                <span className="text-[12px] text-zinc-400 font-medium select-none">
                  For Teams & Power Users
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Video Player */}
          <div className="w-full relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50"
            >
              <VideoPlayer
                videoId="CQpIODqNFek"
                className="aspect-video bg-zinc-900"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
