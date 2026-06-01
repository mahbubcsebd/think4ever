'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Infinity as InfinityIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const rotatingWords = [
  'Outcome',
  'Refactoring',
  'Rapid Prototyping',
  'Build and Extend',
  'Modernize',
];

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
          className="text-gradient block absolute inset-x-0"
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
    // Circle ring — rotates via animate-hero-rotation (defined in globals.css @theme)
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
    "
    >
      {/* scad1 — top center, sits on the ring */}
      <span
        className="
        absolute
        w-[10px] h-[10px]
        rounded-full bg-brand-blue
        top-[-5.5px] left-0 right-0
        mx-auto
        z-[1]
      "
      />

      {/* scad2 — lower right on the ring */}
      <span
        className="
        absolute
        w-[10px] h-[10px]
        rounded-full bg-brand-blue
        right-[30.5px] bottom-[285px]
        z-[1]
      "
      />

      {/* scad3 — lower left on the ring */}
      <span
        className="
        absolute
        w-[10px] h-[10px]
        rounded-full bg-brand-blue
        left-[30.5px] bottom-[285px]
        z-[1]
      "
      />
    </div>
  );
}

/**
 * BreathingBlob — the gradient circle at bottom-left of the hero.
 * Framer Motion handles both the breathing scale and the color animation.
 */
function BreathingBlob() {
  return (
    // Outer wrapper: breathing scale animation
    <motion.div
      className="hidden md:block absolute top-[25%] left-[5%] md:left-[8%] w-[129px] h-[129px] rounded-full pointer-events-none select-none overflow-hidden z-10"
      animate={{ scale: [0.88, 1.06, 0.88] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Inner: animated gradient color cycling AND container for the icon */}
      <motion.div
        className="w-full h-full rounded-full flex items-center justify-center"
        animate={{
          background: [
            'linear-gradient(135deg, #07A7E1 0%, #093cad 60%, #3730a3 100%)',
            'linear-gradient(225deg, #3730a3 0%, #093cad 50%, #07A7E1 100%)',
            'linear-gradient(315deg, #07A7E1 0%, #4338ca 40%, #093cad 100%)',
            'linear-gradient(45deg,  #093cad 0%, #07A7E1 50%, #3730a3 100%)',
            'linear-gradient(135deg, #07A7E1 0%, #093cad 60%, #3730a3 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Infinity Icon animating */}
        <motion.div
          className="text-white/90 drop-shadow-md z-10"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <InfinityIcon size={56} strokeWidth={2} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* ── Orbital Circle ── */}
      <OrbitalCircle />

      {/* ── Breathing Gradient Blob (bottom-left) ── */}
      <BreathingBlob />

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

      {/* ── Scroll indicator ──
          rotate-90 makes the horizontal line + text read vertically on the right edge */}
      <div
        className="
        absolute
        right-[calc(100vw/2-1250px/2)]
        top-[700px]
        rotate-90
        select-none pointer-events-none z-10
      "
      >
        <p
          className="
          text-xs uppercase font-normal
          tracking-[.4em]
          flex items-center whitespace-nowrap
          text-[#353B3E]
        "
        >
          <span className="h-px w-10 min-w-10 bg-[#D0D0D0] inline-block mr-3" />
          SCROLL
        </p>
      </div>

      {/* ── Page Container ── */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full z-10 relative">
        <div className="flex flex-col gap-8 py-12">
          {/* Headline */}
          <div className="flex flex-col gap-2">
            <h1
              className="
              text-[clamp(2.8rem,6.5vw,5.5rem)] text-[95px]
              leading-[1.08]
              font-bold text-black
            "
            >
              From Idea <br />
              <MotionTextLoop />
            </h1>

            <p className="max-w-lg text-base md:text-lg text-zinc-500 leading-relaxed font-normal mt-3">
              The only AI platform that coordinates your entire software
              lifecycle — requirements, architecture, code, tests, and docs — in
              sync, in both directions, from the first idea to deployed output.
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-5 mt-2">
            <Link
              href="#about"
              className="group inline-flex items-center cursor-pointer select-none"
            >
              {/* Circle: border turns blue on hover, bg expands in */}
              <div
                className="
                w-11 h-11 rounded-full
                border border-zinc-300 group-hover:border-brand-blue
                flex items-center justify-center
                relative overflow-hidden
                transition-all duration-500 ease-out
                shrink-0
              "
              >
                <span
                  className="
                  absolute inset-0
                  bg-brand-blue rounded-full
                  scale-0 group-hover:scale-100
                  transition-transform duration-500 ease-out origin-center
                "
                />
                {/* Dot: brand-blue → white when bg fills */}
                <span
                  className="
                  relative z-10
                  w-2 h-2 rounded-full
                  bg-brand-blue group-hover:bg-white
                  transition-colors duration-500 ease-out
                "
                />
              </div>

              {/* Text: black, semibold, slides right on hover */}
              <span
                className="
                font-semibold text-base text-zinc-950
                relative z-10
                ml-2
              "
              >
                Start free - no card required
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
