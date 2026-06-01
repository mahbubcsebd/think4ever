"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Beautiful and navigation etc all smooth. I am very touched that the vendor managed to make those changes last minute too. Please convey my deepest thanks to them for their earnest effort. Many leaders start to try it. They very love the overall design. So professional.",
      author: "Datuk Lim Keng Yaik",
      designation: "Director, Selangor Tourism Council",
    },
    {
      quote: "Highly recommended agency for branding and digital solutions. The communication is exceptionally clear, the technical delivery is extremely high performance, and their design aesthetics are truly state-of-the-art.",
      author: "Sarah Jane",
      designation: "Marketing Lead, CAAM",
    },
    {
      quote: "Thank you for giving the great idea since the pitching session. Your team give a great homework before submit the proposal and quotation. They also assist and advise us on how to represent our content at the website. The team is friendly and very helpful during the development stage.",
      author: "Nur Shahidah Binti Senin",
      designation: "Executive, Malaysian Technical Standards Forum Bhd (MTSFB)",
    },
    {
      quote: "Their team brought our vision to life with speed and precision. The final platform exceeded our expectations, delivering massive conversion lifts and a splendid modern user experience.",
      author: "Marcus Chen",
      designation: "Product Head, FGV Holdings Berhad",
    },
    {
      quote: "A splendid experience from start to finish. The team is analytical, highly creative, and has really great taste. They delivered on every single requirement with perfect professionalism.",
      author: "Farhana Yusuf",
      designation: "General Manager, FELCRA Branding Division",
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-[60vh] bg-white flex flex-col justify-center px-4 md:px-16 py-20 relative overflow-hidden border-t border-zinc-100"
    >
      {/* Top Right Floating Gradient Decal Ball */}
      <div className="absolute top-12 right-[10%] w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-950 to-brand-blue shadow-lg shadow-indigo-950/20 select-none pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto flex flex-col gap-10 relative z-20">
        {/* Top Header Label: AOS Slide from Left */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 self-start"
        >
          <span className="text-zinc-500 font-extrabold tracking-widest text-xs uppercase whitespace-nowrap">
            Who Motivates Us
          </span>
          <span className="w-16 h-[1px] bg-zinc-300 inline-block" />
        </motion.div>

        {/* Large Quote Mark Backdrop Decal - Faint and elegant */}
        <div className="absolute left-[3%] top-[15%] select-none pointer-events-none z-0 text-zinc-100/70 font-serif text-[280px] leading-none">
          “
        </div>

        {/* Testimonials Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".custom-testimonials-pagination" }}
          initialSlide={2} /* Nur Shahidah is at index 2, active by default to match screenshot */
          loop={true}
          className="w-full relative z-10"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="pb-4">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 md:px-12 py-6">
                {/* Main Quote Text */}
                <p className="text-xl md:text-2xl font-medium text-zinc-800 leading-relaxed font-sans max-w-3xl">
                  “ {t.quote} ”
                </p>

                {/* Author Credentials */}
                <div className="mt-8 flex flex-col gap-1">
                  <span className="font-bold text-zinc-950 text-base md:text-lg">
                    {t.author}
                  </span>
                  <span className="text-brand-blue font-extrabold text-sm tracking-wide">
                    {t.designation}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Paginator Bullets - exactly 5 bullets styled in globals.css */}
        <div className="custom-testimonials-pagination flex justify-center items-center mt-2 select-none" />
      </div>
    </section>
  );
}
