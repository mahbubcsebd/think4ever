"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Accolades() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slide1Awards = [
    {
      title: "SMM",
      year: "2024",
      label: "2024 WINNER",
    },
    {
      title: "Web Design",
      year: "2024",
      label: "2024 WINNER",
    },
    {
      title: "WordPress",
      year: "2024",
      label: "2024 WINNER",
    },
  ];

  const slide2Awards = [
    {
      title: "AD WORLD MASTERS",
      award: "Agency of the Year",
      medal: "BRONZE",
      year: "2021",
    },
    {
      title: "AD WORLD MASTERS",
      award: "Agency of the Year",
      medal: "BRONZE",
      year: "2020",
      isSpecialColor: true, // 2020 has specific colors in screenshot
    },
    {
      title: "AD WORLD MASTERS",
      award: "Agency of the Year",
      medal: "BRONZE",
      year: "2019",
    },
  ];

  return (
    <section
      id="insights"
      className="min-h-[70vh] flex flex-col justify-center bg-zinc-50/50 px-6 md:px-16 py-20 relative overflow-hidden border-t border-zinc-100"
    >
      {/* Giant Background Watermark "ACCOLADES" - Positioned at bottom, lighter and faint */}
      <div className="absolute inset-x-0 bottom-[-5%] select-none pointer-events-none z-0 flex items-end justify-center overflow-hidden h-[50%]">
        <span className="font-extrabold font-sans text-[24vw] uppercase tracking-tighter leading-none text-zinc-200/12 dark:text-zinc-800/5 whitespace-nowrap select-none">
          ACCOLADES
        </span>
      </div>

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12 relative z-20">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end w-full">
          {/* Left Side: "OUR ACCOLADES" with Divider */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center gap-4 lg:self-start lg:mt-4"
          >
            <span className="text-zinc-500 font-extrabold tracking-widest text-xs uppercase whitespace-nowrap">
              Our Accolades
            </span>
            <span className="w-16 h-[1px] bg-zinc-300 inline-block" />
          </motion.div>

          {/* Right Side: Heading Tagline */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-8 lg:pl-6"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Every recognition <br />
              <span className="text-brand-blue">matters</span>.
            </h2>
          </motion.div>
        </div>

        {/* Swiper Accolades Carousel Track - Aligned to the right, occupying 70% width */}
        <div className="relative lg:w-[70%] w-full ml-auto flex items-center px-12 py-6">
          {/* Custom Navigation Left Arrow */}
          <button
            ref={prevRef}
            className="absolute left-0 z-30 w-11 h-11 rounded-full border border-zinc-200 hover:border-brand-blue flex items-center justify-center bg-white hover:bg-zinc-50 hover:text-brand-blue transition-all cursor-pointer shadow-sm select-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Swiper Component */}
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true, el: ".custom-accolades-pagination" }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            className="w-full"
          >
            {/* Slide 1: Laurels (2024 Winners) */}
            <SwiperSlide className="pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-4 w-full">
                {slide1Awards.map((award, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex flex-col items-center group cursor-pointer transition-all duration-500 select-none"
                  >
                    {/* Custom Vector Laurel Wreath SVG */}
                    <div className="w-48 h-48 relative flex items-center justify-center p-6 border border-transparent rounded-2xl group-hover:border-zinc-200/50 group-hover:bg-white/80 group-hover:shadow-lg group-hover:shadow-zinc-200/30 transition-all duration-500 transform group-hover:scale-115">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-400 group-hover:text-brand-blue transition-colors duration-500">
                        {/* Laurel Wreath */}
                        <path d="M25,65 Q15,45 25,25 Q18,35 22,50 Q18,55 25,65" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M75,65 Q85,45 75,25 Q82,35 78,50 Q82,55 75,65" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        {/* Little wreath leaves */}
                        <circle cx="20" cy="35" r="2.5" fill="currentColor" />
                        <circle cx="21" cy="45" r="2.5" fill="currentColor" />
                        <circle cx="24" cy="55" r="2.5" fill="currentColor" />
                        <circle cx="80" cy="35" r="2.5" fill="currentColor" />
                        <circle cx="79" cy="45" r="2.5" fill="currentColor" />
                        <circle cx="76" cy="55" r="2.5" fill="currentColor" />
                        {/* Central Logo 'E' mark */}
                        <text x="50" y="32" textAnchor="middle" className="font-extrabold text-2xl fill-zinc-950 font-sans">E</text>
                      </svg>
                      {/* Inside Label */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                        <span className="text-[11px] font-black text-zinc-950 tracking-widest text-center mt-2 leading-none uppercase">
                          {award.label.split(" ")[0]} <br />
                          <span className="text-[12px] text-zinc-900">{award.label.split(" ")[1]}</span>
                        </span>
                        <span className="text-[9px] font-black tracking-widest text-zinc-400 mt-2 uppercase">
                          {award.title}
                        </span>
                        {/* Flag Icon */}
                        <span className="text-[10px] mt-1.5">🇲🇾</span>
                      </div>
                    </div>
                    {/* Centered Year Footer */}
                    <span className="mt-6 text-lg font-bold text-zinc-400 group-hover:text-zinc-950 group-hover:font-extrabold transition-all duration-300">
                      {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 2: Ad World Masters Diamond Badges */}
            <SwiperSlide className="pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-4 w-full">
                {slide2Awards.map((award, aIdx) => {
                  const isSpecial = award.isSpecialColor;

                  return (
                    <div
                      key={aIdx}
                      className="flex flex-col items-center group cursor-pointer transition-all duration-500 select-none"
                    >
                      {/* Clean Diamond Badge SVG/Border Overlay */}
                      <div className={`w-48 h-48 relative flex items-center justify-center p-6 border rounded-2xl transition-all duration-500 transform group-hover:scale-115 ${
                        isSpecial
                          ? "border-amber-500/80 bg-gradient-to-br from-amber-50 to-orange-50 shadow-md shadow-amber-200/40"
                          : "border-transparent group-hover:border-zinc-200/50 group-hover:bg-white/80 group-hover:shadow-lg group-hover:shadow-zinc-200/30"
                      }`}>
                        {/* Diamond Border */}
                        <div className={`absolute inset-0 m-4 rotate-45 border-2 transition-all duration-500 ${
                          isSpecial
                            ? "border-gradient border-amber-500"
                            : "border-zinc-300 group-hover:border-indigo-600"
                        }`} style={isSpecial ? { borderImage: "linear-gradient(135deg, #f97316 0%, #a855f7 100%) 1" } : undefined} />

                        {/* Inner Texts */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center relative z-10">
                          <span className={`text-[8px] font-bold tracking-widest leading-none ${
                            isSpecial ? "text-zinc-700" : "text-zinc-400 group-hover:text-zinc-600"
                          }`}>
                            {award.title}
                          </span>
                          <span className={`text-[12px] font-black tracking-tight leading-none mt-2 ${
                            isSpecial ? "text-indigo-900" : "text-zinc-800 group-hover:text-zinc-950"
                          }`}>
                            {award.award}
                          </span>
                          <span className={`text-[10px] font-extrabold tracking-widest mt-2 ${
                            isSpecial ? "text-amber-600" : "text-zinc-500 group-hover:text-zinc-800"
                          }`}>
                            {award.medal}
                          </span>
                          <span className={`text-[7px] font-bold mt-1 ${
                            isSpecial ? "text-zinc-500" : "text-zinc-400"
                          }`}>
                            {award.year}
                          </span>
                        </div>
                      </div>
                      {/* Centered Year Footer */}
                      <span className={`mt-6 text-lg transition-all duration-300 ${
                        isSpecial
                          ? "text-zinc-950 font-extrabold font-sans"
                          : "text-zinc-400 group-hover:text-zinc-950 group-hover:font-extrabold"
                      }`}>
                        {award.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Right Arrow */}
          <button
            ref={nextRef}
            className="absolute right-0 z-30 w-11 h-11 rounded-full border border-zinc-200 hover:border-brand-blue flex items-center justify-center bg-white hover:bg-zinc-50 hover:text-brand-blue transition-all cursor-pointer shadow-sm select-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Custom Bullet Pagination Element styled in globals.css */}
        <div className="custom-accolades-pagination flex justify-center items-center mt-4 select-none" />
      </div>
    </section>
  );
}
