'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/constant/blogData';
import { BlogViewSwitcher } from '@/components/sections/blog/BlogViewSwitcher';
import { BlogList } from '@/components/sections/blog/BlogList';
import { BlogNewsletter } from '@/components/sections/blog/BlogNewsletter';
import SplitSection from '@/components/SplitSection';
import GradientText from '@/components/GradientText';

export default function BlogPage() {
  const [view, setView] = useState('single');

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 relative overflow-hidden">
      <SplitSection
        id="blog-hero"
        leftTitle="BLOG"
        watermarkText="BLOG"
        className="!min-h-0 !pt-16 lg:!pt-24 !pb-24 lg:!pb-36 z-10"
        bottomContent={
          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 mt-8 md:mt-12">
            <BlogViewSwitcher view={view} setView={setView} />
            <BlogList view={view} posts={BLOG_POSTS} />
          </div>
        }
      >
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
          >
            Latest Articles & <GradientText>Insights</GradientText>
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
          >
            Stay up to date with the latest tutorials, updates, and announcements from the Think4Ever team.
          </motion.p>
        </div>
      </SplitSection>

      {/* <BlogNewsletter /> */}
    </div>
  );
}
