'use client';
import { motion } from 'framer-motion';
import GradientText from '@/components/GradientText';
import SplitSection from '@/components/SplitSection';
import { Diagram } from '@/components/sections/Diagram';
import {
  ArrowRight,
  Boxes,
  Database,
  Eye,
  GitBranch,
  MessageSquare,
  Rocket,
  Settings,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import ZoomableImage from '@/components/ZoomableImage';
import { useState } from 'react';

const steps = [
  {
    id: 1,
    phase: 'FOUNDATION',
    label: 'Connect your repo',
    badge: 'STEP 01',
    badgeColor: 'bg-blue-50 text-blue-600',
    iconColor: 'text-blue-500',
    icon: GitBranch,
    title: 'Connect your repo',
    description:
      'Start with a central hub where teams configure project settings, manage API keys, and define the technical foundation. Use your existing stack, choose your preferred architecture, or let AI guide recommendations based on your goals.',
    cardTitle: 'WHAT YOU CONFIGURE',
    cardItems: [
      'Project settings and environment preferences',
      'API keys and integration connections',
      'Preferred tech stack — or AI-guided recommendations',
      'Architecture and modernization goals',
    ],
    tag: 'BOTH PATHS',
    screenshot: '/images/product/step-1.png',
  },
  {
    id: 2,
    phase: 'FOUNDATION',
    label: 'Define what to build',
    badge: 'STEP 02',
    badgeColor: 'bg-green-50 text-green-600',
    iconColor: 'text-green-500',
    icon: MessageSquare,
    title: 'Define what to build',
    description:
      'Define application requirements in the way that works for your team. Type manually, chat with Sidekick, or speak to the voice assistant. Think4Ever transforms early ideas into structured business flows, technical foundations, and an architectural draft in minutes.',
    cardTitle: 'INPUT MODES',
    cardItems: [
      'Manual text entry',
      'Chat with Sidekick AI assistant',
      'Voice assistant input',
      'Al-assisted requirement analysis and strengthening',
    ],
    tag: 'BOTH PATHS',
    screenshot: '/images/product/step-2.png',
  },
  {
    id: 3,
    phase: 'DESIGN',
    label: 'Map your architecture',
    badge: 'STEP 03',
    badgeColor: 'bg-purple-50 text-purple-600',
    iconColor: 'text-purple-500',
    icon: Boxes,
    title: 'Map your architecture',
    description:
      'Think4Ever analyzes requirements to generate the core architectural pillars of the solution — the structural building blocks that define what the application does, how it behaves, and how the system is organized. Screens, components, services, and relationships visualized from day one.',
    cardTitle: 'GENERATED OUTPUTS',
    cardItems: [
      'System concepts and structured concept cards',
      'Architecture blueprints and visual concept diagram',
      'App domains, modules, services, and system blocks',
      'Database structures and screen flows',
    ],
    tag: 'BOTH PATHS',
    screenshot: '/images/product/step-3.png',
  },
  {
    id: 4,
    phase: 'DESIGN',
    label: 'See dependencies',
    badge: 'STEP 04',
    badgeColor: 'bg-red-50 text-red-600',
    iconColor: 'text-red-500',
    icon: Eye,
    title: 'See dependencies',
    description:
      'Click any node in the concept diagram and instantly see upstream and downstream implications across your system. Frontend to backend. Data to process. Rules to integrations. Make proactive choices before risk becomes rework.',
    cardTitle: 'IMPACT VISIBILITY COVERS',
    cardItems: [
      'Frontend and backend dependencies',
      'Data and process connections',
      'Rules and integration relationships',
      'Visual warnings and impact markers',
    ],
    tag: 'EXISTING CODE',
    screenshot: '/images/product/step-4.png',
  },
  {
    id: 5,
    phase: 'DESIGN',
    label: 'Model your data',
    badge: 'STEP 05',
    badgeColor: 'bg-cyan-50 text-cyan-600',
    iconColor: 'text-cyan-500',
    icon: Database,
    title: 'Model your data',
    description:
      'Think4Ever generates dynamic business flows — interactive process visualizations that show how work actually moves through the system. Each step can be explored in detail. Each dependency can be understood before implementation begins.',
    cardTitle: 'DATA LAYER COVERS',
    cardItems: [
      'Entity cards with animated relationship arrows',
      'Schemas, fields, and object dependencies',
      'Visual ERD with full system data context',
      'Centralized data governance in one view',
    ],
    tag: 'BOTH PATHS',
    screenshot: '/images/product/step-6.png',
  },
  {
    id: 6,
    phase: 'BUILD',
    label: 'Ship to production',
    badge: 'STEP 06',
    badgeColor: 'bg-blue-50 text-[#093cad]',
    iconColor: 'text-[#093cad]',
    icon: Rocket,
    title: 'Ship to production',
    description:
      'Generate code, run tests, deploy. Docs auto-generated and versioned with every release.',
    cardTitle: 'CI/CD & DEPLOYMENT',
    cardItems: [
      'Generate code automatically',
      'Run verification tests',
      'Deploy to cloud environments',
      'Auto-generated and versioned documentation',
    ],
    tag: 'BOTH PATHS',
    screenshot: '/images/product/step-8.png',
  },
];

const ProductPage = () => {
  const [activeStep, setActiveStep] = useState(null);
  const current = steps[activeStep ?? 0];

  const handleStepChange = (index) => {
    setActiveStep(index);
    const element = document.getElementById('step-detail-section');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <SplitSection
        id="how-it-works-hero"
        leftTitle="HOW IT WORKS"
        className="!min-h-0 !pt-16 lg:!pt-24 !pb-4 lg:!pb-8"
      >
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
          >
            One model. Every stage. <GradientText>Always in sync.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
          >
            Change anything — requirements, code, or architecture — it
            propagates everywhere.
          </motion.p>
        </div>
      </SplitSection>

      {/* Main Diagram Component */}
      <section className="pb-10 lg:pb-16">
        <Diagram activeIndex={activeStep} onStepClick={handleStepChange} />
      </section>

      {/* Interactive Step Detail */}
      <section
        id="step-detail-section"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16 scroll-mt-20"
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* Left Sidebar / Top Bar for Mobile */}
            <div className="w-full lg:w-[300px] border-b lg:border-b-0 lg:border-r border-gray-200 bg-[#f8f9fb] p-3 sm:p-4 lg:p-5 shrink-0">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto no-scrollbar pb-1 lg:pb-0 scroll-smooth">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 sm:py-3 rounded-xl transition-all duration-200 text-left shrink-0 lg:w-full ${
                        isActive
                          ? 'bg-white border border-[#093cad]/15 shadow-sm'
                          : 'hover:bg-white/70 border border-transparent'
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[11px] sm:text-[12px] font-bold shrink-0 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white'
                            : 'bg-gray-200/60 text-gray-400'
                        }`}
                      >
                        {step.id}
                      </span>
                      <span
                        className={`text-[12.5px] sm:text-[13.5px] font-medium leading-tight whitespace-nowrap lg:whitespace-normal ${
                          isActive
                            ? 'text-[#1f2937] font-semibold'
                            : 'text-gray-400'
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-6 sm:p-10 lg:p-12">
              <div className="animate-in fade-in duration-300" key={current.id}>
                {/* Badge */}
                <span
                  className={`inline-block text-[11px] font-bold tracking-widest px-3 py-1 rounded-md mb-6 ${current.badgeColor}`}
                >
                  {current.badge}
                </span>

                {/* Title */}
                <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1f2937] leading-[1.15] tracking-tight mb-6">
                  {current.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.6] sm:leading-[1.75] mb-6 sm:mb-8 max-w-2xl">
                  {current.description}
                </p>

                {/* Visual Preview / Screenshot */}
                {current.screenshot && (
                  <div className="mb-10 rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-blue-500/5 group">
                    <ZoomableImage
                      src={current.screenshot}
                      alt={current.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Feature Card */}
                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-6 sm:p-8 max-w-lg">
                  <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                    {current.cardTitle}
                  </p>
                  <ul className="space-y-3">
                    {current.cardItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[14px] text-gray-600 leading-relaxed"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#07A7E1] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Tag */}
                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[12px] font-semibold text-[#07A7E1]">
                    {current.tag}
                  </span>

                  {(activeStep ?? 0) < steps.length - 1 && (
                    <button
                      onClick={() => handleStepChange((activeStep ?? 0) + 1)}
                      className="group flex items-center gap-2 text-[14px] font-bold text-[#1f2937] hover:text-[#093cad] transition-all"
                    >
                      Next: {steps[(activeStep ?? 0) + 1].label}
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ProductPage;
