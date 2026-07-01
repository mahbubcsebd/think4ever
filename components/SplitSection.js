'use client';

import { motion } from 'framer-motion';

export default function SplitSection({
  id,
  watermarkText,
  leftTitle,
  children,
  bottomContent,
  className = '',
  watermarkClassName = '',
}) {
  return (
    <section
      id={id}
      className={`min-h-[90vh] flex flex-col justify-center px-4 md:px-16 pt-24 pb-16 lg:pt-32 lg:pb-48 relative overflow-hidden ${className}`}
    >
      {/* Background Watermark - Always positioned at the bottom of the section */}
      {watermarkText && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-auto bottom-0 pointer-events-none z-0 select-none ${watermarkClassName}`}
        >
          <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-black/5 whitespace-nowrap">
            {watermarkText}
          </span>
        </div>
      )}

      {/* Main Container */}
      <div className="container mx-auto max-w-[1400px] w-full flex flex-col gap-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
          {/* Left Side Column: Title */}
          {leftTitle && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 lg:mt-[22px] lg:justify-end lg:pr-12"
            >
              <span className="text-[#353B3E] font-medium text-[13px] md:text-[17px] leading-[1.6] md:leading-[24px] tracking-[4px] md:tracking-[8px] uppercase break-words md:whitespace-nowrap md:inline-flex md:items-center">
                {leftTitle}
              </span>
              <span className="w-16 h-[1px] bg-zinc-300 inline-block" />
            </motion.div>
          )}

          {/* Right Side Column: Primary Content */}
          <div className="flex flex-col gap-8 lg:pl-4">{children}</div>
        </div>

        {/* Full Width Bottom Content (Optional) */}
        {bottomContent && <div className="w-full">{bottomContent}</div>}
      </div>
    </section>
  );
}
