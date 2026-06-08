import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Headphones,
  Layers,
  Rocket,
  Settings,
  ShieldCheck,
} from 'lucide-react';

const icons = {
  'All Questions': <Layers size={14} />,
  Platform: <Settings size={14} />,
  Pricing: <CreditCard size={14} />,
  Onboarding: <Rocket size={14} />,
  Support: <Headphones size={14} />,
  Security: <ShieldCheck size={14} />,
};

export const FAQFilters = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 relative z-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: 0.1,
        }}
        className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-3"
      >
        {categories.map((cat, idx) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * idx }}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'h-9 md:h-10 px-3 md:px-6 rounded-full text-xs md:text-[13px] font-bold flex items-center justify-center gap-1.5 md:gap-2.5 transition-all duration-300 border shadow-sm w-full md:w-auto',
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white border-transparent'
                : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:text-gray-800 hover:bg-gray-50/50',
            )}
          >
            {icons[cat]}
            {cat}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};
