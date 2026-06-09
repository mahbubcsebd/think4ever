'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Pricing() {
  const plans = [
    {
      label: 'Think Free',
      name: 'Free',
      price: 'Free',
      subText: '',
      subTextColor: 'text-green-500 text-[10px]',
      description:
        'Build, extend, or modernize something real before spending a penny.',
      features: [
        'Included 500 Orchestration Credits',
        '1 Project',
        'Build New, Extend Current, Modernize Legacy',
        'BYOK (bring your own model)',
        'Upgrade upon exceeding the free usage limits',
      ],
      buttonText: 'Start Free',
      href: 'https://portal.think4ever.com',
    },
    {
      label: 'Think New',
      name: 'Think New',
      price: '$25.00/month',
      subText: '',
      subTextColor: 'text-zinc-500 italic text-[10px]',
      description:
        'For solo developers, freelancers and startup founders',
      features: [
        'Included 2000 Orchestration Credits/Month',
        'Create up to 3 Projects',
        'Build New, Extend Current, Modernize Legacy',
        'BYOK (bring your own model)',
        'Add credits as needed ($0.05 per credit)',
      ],
      buttonText: 'Get Early Access',
      href: 'https://portal.think4ever.com',
    },
    {
      label: 'Think Big',
      name: 'Team',
      price: '$250.00/month',
      subText: '',
      subTextColor: 'text-zinc-500 italic text-[10px]',
      description:
        'For developer teams and multi-developer environments shipping together at speed.',
      features: [
        'Support up to 5 Users',
        'Create up to 5 Projects',
        'Access Shared Project Environments',
        'Pool Usage across the Team',
        'Utilize Admin Controls + Caps',
        'Access Priority System Orchestration',
      ],
      buttonText: 'Get Early Access',
      href: 'https://portal.think4ever.com',
    },
    {
      label: 'Think Blue',
      name: 'Enterprise',
      price: 'Custom',
      subText: '',
      subTextColor: 'text-zinc-500 italic text-[10px]',
      description:
        'For organisations with sophisticated environments, larger scale, and tailored deployment models.',
      features: [
        'Scale to Enterprise Teams',
        'Access Private Deployment Options',
        'Access Custom Usage Pools + Cost Controls',
        'Access Stage Gates + Confidence Scoring',
        'Access Dedicated Support + Onboarding',
      ],
      buttonText: 'Contact Sales',
      href: '/contact-us',
    },
  ];

  const getBorderRadius = (idx) => {
    if (idx === 0)
      return 'rounded-t-[24px] md:rounded-t-none md:rounded-tl-[24px] xl:rounded-l-[24px] xl:rounded-tr-none';
    if (idx === 1) return 'md:rounded-tr-[24px] xl:rounded-none';
    if (idx === 2) return 'md:rounded-bl-[24px] xl:rounded-none';
    if (idx === 3)
      return 'rounded-b-[24px] md:rounded-b-none md:rounded-br-[24px] xl:rounded-r-[24px] xl:rounded-bl-none';
    return '';
  };

  const getMargins = (idx) => {
    if (idx === 0) return '';
    if (idx === 1) return '-mt-[1px] md:mt-0 md:-ml-[1px]';
    if (idx === 2) return '-mt-[1px] md:-mt-[1px] md:ml-0 xl:mt-0 xl:-ml-[1px]';
    if (idx === 3)
      return '-mt-[1px] md:-mt-[1px] md:-ml-[1px] xl:mt-0 xl:-ml-[1px]';
    return '';
  };

  return (
    <SplitSection
      id="pricing"
      watermarkText="PRICING"
      leftTitle="Pricing"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative z-10 max-w-[1400px] mx-auto"
          >
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`group flex flex-col p-8 bg-transparent transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-zinc-200 hover:z-20 hover:bg-white relative origin-center border border-[#E0E0E0] min-h-[500px]
                  ${getBorderRadius(idx)}
                  ${getMargins(idx)}
                `}
              >
                {/* Header */}
                <div className="mb-6">
                  <h4 className="text-[#07A7E1] text-[11px] font-bold tracking-widest uppercase mb-2">
                    {plan.label}
                  </h4>
                  <h3 className="text-[20px] font-bold text-[#09090D] leading-tight mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-[18px] font-bold text-[#09090D]">
                      {plan.price}
                    </span>
                    <span className={plan.subTextColor}>{plan.subText}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#555B5E] leading-[1.6] font-medium mb-6">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-3 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check
                        className="w-[14px] h-[14px] text-[#07A7E1] shrink-0 mt-[3px]"
                        strokeWidth={3}
                      />
                      <span className="text-[12px] text-[#555B5E] font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Button */}
                <Link href={plan.href || '#'} className="mt-auto block w-full">
                  <button className="w-full bg-gradient-to-r from-[#07A7E1] to-[#093cad] hover:scale-[1.02] active:scale-95 text-white rounded-full py-3 px-4 font-semibold text-[13px] transition-transform duration-300 shadow-md shadow-blue-500/20">
                    {plan.buttonText}
                  </button>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
        >
          Build something real. <br />
          <GradientText>Start Free.</GradientText> Scale as{' '}
          <br className="hidden md:block" />
          you go.
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-[#353B3E] leading-[1.6] font-medium max-w-[500px]"
        >
          Every account starts with free credits — enough to complete a real
          project, not just a tutorial. No card required to begin.
        </motion.p>
      </div>
    </SplitSection>
  );
}
