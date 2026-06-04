'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Zap, Sparkles, Code } from 'lucide-react';
import Link from 'next/link';

export default function StartFreePage() {
  const [formData, setFormData] = useState({ name: '', email: '', workspace: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.workspace) {
      setSubmitted(true);
    }
  };

  const features = [
    "1 Active Project Workspace",
    "Voice & Chat System Design",
    "Automated Code Generation",
    "Real-time Architecture Mapping",
  ];

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center py-20 px-4 overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#07A7E1]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#093cad]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left Side: Copy and Features */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#e25d24] bg-[#fff0ea] border border-[#fde2d7] w-fit">
              <Sparkles className="w-3 h-3" /> Free Sandbox Path
            </span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-zinc-950 tracking-tight">
              Start Free. <br />
              <span className="bg-gradient-to-r from-[#07A7E1] to-[#093cad] bg-clip-text text-transparent">Build Instantly.</span>
            </h1>
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mt-2 max-w-md">
              Turn your ideas into live systems in seconds. Explore the power of agentic development in our sandbox environment.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#eafaf1] border border-[#d1f5e1] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10b981]" strokeWidth={3} />
                </div>
                <span className="text-[14px] sm:text-[15px] font-semibold text-zinc-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-100 pt-6 flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Shield className="w-4 h-4 text-zinc-400" />
              <span>No credit card required</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Code className="w-4 h-4 text-zinc-400" />
              <span>Sandbox Access</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07A7E1]/10 to-[#093cad]/10 rounded-3xl filter blur-xl opacity-70 -z-10" />
          
          <div className="bg-[#f0f8ff]/60 border border-[#07a7e1]/22 backdrop-blur-[20px] rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">Create Sandbox Workspace</h2>
                  <p className="text-zinc-500 text-xs sm:text-sm">Set up your free sandbox to get started</p>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-zinc-900 text-sm focus:outline-none focus:border-[#07A7E1] focus:ring-1 focus:ring-[#07A7E1] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-zinc-900 text-sm focus:outline-none focus:border-[#07A7E1] focus:ring-1 focus:ring-[#07A7E1] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Workspace Name</label>
                    <input
                      type="text"
                      required
                      placeholder="my-cool-project"
                      value={formData.workspace}
                      onChange={(e) => setFormData({ ...formData, workspace: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-zinc-900 text-sm focus:outline-none focus:border-[#07A7E1] focus:ring-1 focus:ring-[#07A7E1] transition-all"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 mt-2">
                    <input
                      type="checkbox"
                      required
                      id="agreement"
                      className="w-4 h-4 rounded border-zinc-300 text-[#093cad] focus:ring-[#07A7E1] mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="agreement" className="text-xs text-zinc-500 leading-normal select-none cursor-pointer">
                      I agree to the{' '}
                      <Link href="/privacy-policy" className="text-[#093cad] hover:underline font-semibold">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy-policy" className="text-[#093cad] hover:underline font-semibold">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 bg-[#e25d24] text-white font-semibold rounded-xl hover:bg-[#c95320] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 cursor-pointer"
                >
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-10 gap-6">
                <div className="w-16 h-16 rounded-full bg-[#eafaf1] border border-[#d1f5e1] flex items-center justify-center text-[#10b981]">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">Workspace Ready!</h3>
                  <p className="text-zinc-500 text-sm max-w-sm">
                    Hi {formData.name}, we've initialized your free project workspace <strong>{formData.workspace}</strong>. Check your inbox at <strong>{formData.email}</strong> to activate.
                  </p>
                </div>
                <Link
                  href="https://portal.think4ever.com"
                  className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-semibold rounded-xl hover:opacity-95 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Go to Portal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
