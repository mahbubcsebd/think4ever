"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GradientText from "./GradientText";

export default function PortfolioAccordion() {
  const [activeIndex, setActiveIndex] = useState(0); // First case study is active initially

  const accordionItems = [
    {
      id: "fgv",
      title: "FGV Holdings Berhad",
      subtitle: "Corporate Organisation",
      badge: "Website",
      image: "https://images.unsplash.com/photo-1592552197116-24b615024707?auto=format&fit=crop&w=1200&q=80",
      layoutType: "fgv",
    },
    {
      id: "felcra",
      title: "FELCRA",
      subtitle: "Corporate Organisation",
      badge: "Website",
      image: "https://images.unsplash.com/photo-1589923188900-85dae443942b?auto=format&fit=crop&w=1200&q=80",
      layoutType: "felcra",
    },
    {
      id: "caam",
      title: "CAAM",
      fullTitle: "CIVIL AVIATION AUTHORITY OF MALAYSIA",
      subtitle: "Government Organisation",
      badge: "Website",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80",
      layoutType: "caam",
    },
    {
      id: "sidc",
      title: "Securities Industry Development Corporation (SIDC)",
      subtitle: "Corporate Organisation",
      badge: "Website",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
      layoutType: "sidc",
    },
  ];

  return (
    <section
      id="portfolio-accordion"
      className="min-h-screen py-20 px-4 md:px-12 flex flex-col justify-center bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10 z-10">
        {/* Title block */}
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-zinc-400 mb-2">
            Featured Projects
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Case <GradientText>Studies</GradientText>.
          </h3>
        </div>

        {/* Premium Horizontal Accordion Component */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full gap-2.5 overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-xl">
          {accordionItems.map((item, idx) => {
            // Sliding Accordion sliding-window filter
            const isVisible = idx === activeIndex - 1 || idx === activeIndex || idx === activeIndex + 1;
            if (!isVisible) return null;

            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer overflow-hidden transition-all duration-500 relative flex flex-col ${
                  isActive
                    ? "flex-[4.5] h-[480px] lg:h-full cursor-default"
                    : "flex-[0.8] h-[100px] lg:h-full"
                }`}
              >
                {/* Background Full Cover Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transform scale-105 transition-transform duration-700 z-0"
                />

                {/* Overlaid Details Frame */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 transition-all duration-500 ${
                    isActive ? "bg-black/20" : "bg-black/60 hover:bg-black/50"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      /* Bespoke layout styling depending on project type */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col justify-between h-full w-full relative z-10"
                      >
                        {/* 1. FGV & FELCRA Layout Type (Top-aligned title, dark/red overlay theme) */}
                        {(item.layoutType === "fgv" || item.layoutType === "felcra") && (
                          <>
                            {/* Header details */}
                            <div className="flex flex-col gap-2 drop-shadow-md text-white">
                              <h4 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-3 mt-4">
                                <span className="text-zinc-200 text-sm font-semibold opacity-90">
                                  {item.subtitle}
                                </span>
                                <span className="bg-brand-blue text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                                  {item.badge}
                                </span>
                              </div>
                            </div>

                            {/* Vignette backplate */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent -m-12 z-[-1]" />

                            {/* Footer View Project Link */}
                            <div className="flex items-center gap-3 group text-white mt-auto pt-6">
                              <div className="w-11 h-11 rounded-full border border-white/20 group-hover:border-brand-blue flex items-center justify-center relative overflow-hidden transition-all duration-300">
                                <span className="absolute w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                                <span className="relative w-2 h-2 rounded-full bg-brand-blue" />
                              </div>
                              <span className="font-extrabold tracking-wider uppercase text-sm group-hover:text-brand-blue transition-colors">
                                View Project
                              </span>
                            </div>
                          </>
                        )}

                        {/* 2. CAAM Layout Type (Airplane top-down perspective details) */}
                        {item.layoutType === "caam" && (
                          <>
                            {/* Header details */}
                            <div className="flex flex-col gap-2 text-white drop-shadow-md">
                              <h4 className="text-4xl md:text-6xl font-black tracking-tight">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-3 mt-2">
                                <span className="text-zinc-200 text-sm font-semibold opacity-90">
                                  {item.subtitle}
                                </span>
                                <span className="bg-brand-blue text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                                  {item.badge}
                                </span>
                              </div>
                            </div>

                            {/* Centered CAAM Circle Logo Overlay */}
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-indigo-950/90 border border-white/10 flex items-center justify-center p-3 text-center shadow-lg backdrop-blur-sm z-20">
                              <span className="text-[10px] font-black tracking-widest text-white leading-none">
                                CAAM
                              </span>
                            </div>

                            {/* Background vector dashed lines overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-20 -m-12 z-[-1]">
                              <svg className="w-full h-full" viewBox="0 0 400 400">
                                <path
                                  d="M50,350 Q150,150 350,50"
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="2"
                                  strokeDasharray="4 4"
                                />
                                <path
                                  d="M100,380 Q200,180 380,100"
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                  strokeDasharray="3 3"
                                />
                              </svg>
                            </div>

                            {/* Lower heavy-font vertical alignment title & View Link */}
                            <div className="mt-auto flex flex-col gap-6 text-white w-full">
                              <h5 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-xl">
                                {item.fullTitle}
                              </h5>
                              <div className="flex items-center gap-3 group">
                                <div className="w-11 h-11 rounded-full border border-white/20 group-hover:border-brand-blue flex items-center justify-center relative overflow-hidden transition-all duration-300">
                                  <span className="absolute w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                                  <span className="relative w-2 h-2 rounded-full bg-brand-blue" />
                                </div>
                                <span className="font-extrabold tracking-wider uppercase text-sm group-hover:text-brand-blue transition-colors">
                                  View Project
                                </span>
                              </div>
                            </div>
                          </>
                        )}

                        {/* 3. SIDC Layout Type (Corporate white/cyan geometry and dark text) */}
                        {item.layoutType === "sidc" && (
                          <>
                            {/* Vignette white overlay backplate */}
                            <div className="absolute inset-0 bg-white/70 -m-12 z-[-1] backdrop-blur-[2px]" />

                            {/* Angled Cyan Polygon in the bottom-right corner */}
                            <div className="absolute bottom-0 right-0 w-[45%] h-[40%] bg-cyan-400/90 -mr-12 -mb-12 origin-bottom-right transform rotate-12 z-10 hidden lg:block" style={{ clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0% 100%)" }} />

                            {/* Header details with black/dark text */}
                            <div className="flex flex-col gap-2 text-zinc-950">
                              <h4 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-3 mt-4">
                                <span className="text-zinc-600 text-sm font-semibold">
                                  {item.subtitle}
                                </span>
                                <span className="bg-brand-blue text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                                  {item.badge}
                                </span>
                              </div>
                            </div>

                            {/* Footer View Project Link with dark styling */}
                            <div className="flex items-center gap-3 group text-zinc-950 mt-auto pt-6 z-20">
                              <div className="w-11 h-11 rounded-full border border-zinc-900/20 group-hover:border-brand-blue flex items-center justify-center relative overflow-hidden transition-all duration-300">
                                <span className="absolute w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                                <span className="relative w-2 h-2 rounded-full bg-brand-blue" />
                              </div>
                              <span className="font-extrabold tracking-wider uppercase text-sm group-hover:text-brand-blue transition-colors">
                                View Project
                              </span>
                            </div>
                          </>
                        )}
                      </motion.div>
                    ) : (
                      /* Collapsed Text Overlay (Standing vertically on desktop) */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex lg:flex-col justify-between items-center h-full w-full relative z-10 py-2 lg:py-6 text-white"
                      >
                        <h4 className="text-lg md:text-xl font-bold tracking-widest uppercase text-center lg:rotate-90 lg:my-auto whitespace-nowrap drop-shadow-md">
                          {item.title.split(" (")[0]} {/* truncate bracket info for collapsed view */}
                        </h4>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
