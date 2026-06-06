import React from 'react';
import { MessageCircle, Mail, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const StillHaveQuestions = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-20 sm:pb-32">
      <div className="bg-[#fbfcfe] border border-gray-100 rounded-md p-10 sm:p-14 text-center space-y-6">
          <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-[#07A7E1]">
             <MessageCircle size={24} fill="currentColor" fillOpacity={0.1} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#111827]">Still have questions?</h3>
            <p className="text-gray-400 text-[14px] sm:text-[15px] max-w-lg mx-auto leading-relaxed font-medium">
              Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you promptly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Button asChild className="h-11 px-8 bg-white border border-[#e2e8f0] hover:bg-gray-50 text-gray-800 rounded-full font-bold text-[13px] shadow-sm active:scale-[0.98] transition-all">
              <Link href="/contact-us" className="flex items-center gap-2">
                <Mail size={16} />
                Contact Us
              </Link>
            </Button>
            <Button asChild className="h-11 px-8 bg-gradient-to-r from-[#07A7E1] to-[#093cad] hover:opacity-90 text-white rounded-full font-bold text-[13px] shadow-lg shadow-blue-500/15 active:scale-[0.98] transition-all border-none">
              <Link href="https://portal.think4ever.com" className="flex items-center gap-2">
                <Rocket size={16} />
                Get Early Access
              </Link>
            </Button>
          </div>
      </div>
    </section>
  );
};
