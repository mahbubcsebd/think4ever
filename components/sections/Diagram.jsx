'use client';
import { motion } from 'framer-motion';
import {
  Boxes,
  Database,
  Eye,
  GitBranch,
  MessageSquare,
  Rocket,
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Connect your repo',
    desc: 'Paste a GitHub URL, drop a ZIP, or start from scratch. Sidekick reads your stack, maps your dependencies, and generates a structured architectural blueprint — in under 4 minutes. Zero config.',
    tag: 'BOTH PATHS',
    icon: GitBranch,
    num: '01',
  },
  {
    id: 2,
    title: 'Blueprint your system',
    desc: 'Every dependency, data model, business flow, and role — live and connected before a line of code is written. Click any node. See upstream and downstream impact instantly. Fix it before it breaks.',
    tag: 'BOTH PATHS',
    icon: Boxes,
    num: '02',
  },
  {
    id: 3,
    title: 'Build in Dev Mode',
    desc: 'Build using Think coding agent or your favorite coding agent. Natural language commands. Live file tree builds in real time. Use Cursor, Claude Code, Codex, or Windsurf — every agent reads from the same blueprint.',
    tag: 'BOTH PATHS',
    icon: MessageSquare,
    num: '03',
  },
  {
    id: 4,
    title: 'Ship it',
    desc: 'Run tests, deploy, done. Docs auto-generated and versioned with every release. Post-deployment agents keep monitoring. Your blueprint stays in sync after you ship.',
    tag: 'BOTH PATHS',
    icon: Rocket,
    num: '04',
  },
];

const StepCard = ({ step, isActive, onClick, idx }) => {
  const Icon = step.icon;
  
  // Custom tag styling matching screenshot with subtle borders
  const isBothPaths = step.tag === 'BOTH PATHS';
  const tagClass = isBothPaths 
    ? 'bg-[#e0f2fe]/40 border border-[#bae6fd] text-[#0284c7]' 
    : 'bg-[#e0e7ff]/40 border border-[#c7d2fe] text-[#4f46e5]';

  // Distinct background/border for non-active icon boxes based on step
  const iconBoxStyles = {
    '01': 'bg-[#e0f2fe]/40 border border-[#bae6fd] text-[#0284c7]',
    '02': 'bg-[#e0e7ff]/40 border border-[#c7d2fe] text-[#4f46e5]',
    '03': 'bg-[#e0f2fe]/40 border border-[#bae6fd] text-[#0284c7]',
    '04': 'bg-[#e0f2fe]/40 border border-[#bae6fd] text-[#0284c7]',
    '05': 'bg-[#e0f2fe]/40 border border-[#bae6fd] text-[#0284c7]',
    '06': 'bg-[#e0f2fe]/40 border border-[#bae6fd] text-[#0284c7]'
  };

  // Explicit borders to avoid conflicts (e.g., md:border-b-0 and md:border-b)
  let borderClasses = 'border-zinc-200/80 ';
  
  // Mobile borders (all rows except last get a bottom border)
  if (idx !== 3) {
    borderClasses += 'border-b ';
  }
  
  // Desktop borders (2x2 grid)
  if (idx === 0) {
    borderClasses += 'md:border-r md:border-b';
  } else if (idx === 1) {
    borderClasses += 'md:border-b md:border-r-0';
  } else if (idx === 2) {
    borderClasses += 'md:border-r md:border-b-0';
  } else if (idx === 3) {
    borderClasses += 'md:border-r-0 md:border-b-0';
  }

  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col p-6 sm:p-8 text-left w-full h-full transition-all duration-300 outline-none
        ${isActive ? 'bg-[#f8fafc]/80 shadow-[inset_0_0_12px_rgba(7,167,225,0.05)]' : 'bg-white hover:bg-zinc-50/50'}
        ${borderClasses}
      `}
    >
      {/* Step Number */}
      <div className="text-[12px] font-bold text-zinc-400 mb-2 font-mono">
        {step.num}
      </div>

      {/* Icon */}
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 ${
          isActive 
            ? 'scale-110 bg-gradient-to-br from-[#07A7E1] to-[#093cad] text-white shadow-md' 
            : `${iconBoxStyles[step.num]} group-hover:scale-105`
        }`}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
      </div>

      {/* Title */}
      <h3 className={`font-bold text-[16px] sm:text-[18px] mb-2 leading-tight transition-colors duration-300 ${
        isActive ? 'text-[#093cad]' : 'text-zinc-900'
      }`}>
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-zinc-500 leading-relaxed mb-6 flex-1">
        {step.desc}
      </p>

      {/* Tag */}
      <span className={`inline-block self-start px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider ${tagClass}`}>
        {step.tag}
      </span>
    </button>
  );
};

export const Diagram = ({ activeIndex = 0, onStepClick = () => {} }) => {
  return (
    <div className="w-full bg-white max-w-[1100px] mx-auto px-4">
      <div className="border border-zinc-200/80 rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-xl shadow-zinc-200/30 grid grid-cols-1 md:grid-cols-2">
        {steps.map((step, idx) => (
          <div key={step.id} className="h-full">
            <StepCard
              step={step}
              isActive={activeIndex === idx}
              onClick={() => onStepClick(idx)}
              idx={idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
