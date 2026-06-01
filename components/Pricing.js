'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SplitSection from './SplitSection';
import GradientText from './GradientText';

export default function Pricing() {
  const plans = [
    {
      label: 'STARTER',
      name: 'Free',
      price: '$0/mo',
      subText: 'No card required',
      subTextColor: 'text-green-500 text-[10px]',
      description: 'Free credits on signup. Build, extend, or modernize something real before spending a cent.',
      features: [
        'Free OCU starter credits',
        '1 project',
        'Build,Extend,Modernize',
        'Persistent cross-session context',
        'BYOK (bring your own model)',
      ],
      buttonText: 'Start free',
    },
    {
      label: 'THINK NEW',
      name: 'Solo Builder',
      price: '$25/mo',
      subText: 'per builder - 500 credits included',
      subTextColor: 'text-zinc-500 italic text-[10px]',
      description: 'For solo developers, freelancers, and technical founders shipping AI-powered products.',
      features: [
        '500 credits/month ($0.05 per credit)',
        'Up to 3 projects',
        'System design + code generation',
        'BYOK (bring your own model)',
        'Add credits as needed',
      ],
      buttonText: 'Get early access',
    },
    {
      label: 'THINK BIG',
      name: 'Team',
      price: '$250/mo',
      subText: 'Up to 5 users',
      subTextColor: 'text-zinc-500 italic text-[10px]',
      description: 'For developer teams and multi-developer environments shipping together at speed.',
      features: [
        'Up to 5 users',
        'Up to 5 projects',
        'Shared project environments',
        'Usage pooling across team',
        'Admin controls + caps',
        'Priority system orchestration',
      ],
      buttonText: 'Get early access',
    },
    {
      label: 'THINK BLUE',
      name: 'Enterprise',
      price: 'Custom',
      subText: 'tailored to your scale',
      subTextColor: 'text-zinc-500 italic text-[10px]',
      description: 'For organizations with sophisticated environments, larger scale, and tailored deployment models.',
      features: [
        'Scales to enterprise teams',
        'Private deployment options',
        'Custom usage pools + cost controls',
        'Stage gates + confidence scoring',
        'Dedicated support + onboarding',
      ],
      buttonText: 'Contact sales',
    },
  ];

  const getBorderRadius = (idx) => {
    if (idx === 0) return 'rounded-t-[24px] md:rounded-t-none md:rounded-tl-[24px] xl:rounded-l-[24px] xl:rounded-tr-none';
    if (idx === 1) return 'md:rounded-tr-[24px] xl:rounded-none';
    if (idx === 2) return 'md:rounded-bl-[24px] xl:rounded-none';
    if (idx === 3) return 'rounded-b-[24px] md:rounded-b-none md:rounded-br-[24px] xl:rounded-r-[24px] xl:rounded-bl-none';
    return '';
  };

  const getMargins = (idx) => {
    if (idx === 0) return '';
    if (idx === 1) return '-mt-[1px] md:mt-0 md:-ml-[1px]';
    if (idx === 2) return '-mt-[1px] md:-mt-[1px] md:ml-0 xl:mt-0 xl:-ml-[1px]';
    if (idx === 3) return '-mt-[1px] md:-mt-[1px] md:-ml-[1px] xl:mt-0 xl:-ml-[1px]';
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
            // 4 Column Grid on extra large screens, 2 on tablet, 1 on mobile
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative z-10 max-w-7xl mx-auto"
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
                    <span className={plan.subTextColor}>
                      {plan.subText}
                    </span>
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
                      <Check className="w-[14px] h-[14px] text-[#07A7E1] shrink-0 mt-[3px]" strokeWidth={3} />
                      <span className="text-[12px] text-[#555B5E] font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Button */}
                <button className="w-full bg-gradient-to-r from-[#07A7E1] to-[#0089BA] hover:scale-[1.02] active:scale-95 text-white rounded-full py-3 px-4 font-semibold text-[13px] transition-transform duration-300 shadow-md shadow-blue-500/20 mt-auto">
                  {plan.buttonText}
                </button>
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
          <GradientText>Start Free.</GradientText> Scale as <br className="hidden md:block" />
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
