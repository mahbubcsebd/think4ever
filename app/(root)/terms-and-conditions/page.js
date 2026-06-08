'use client';

import SplitSection from '@/components/SplitSection';
import GradientText from '@/components/GradientText';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  // Fade-in animation for articles on scroll
  const articleAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden font-sans">
      <SplitSection
        id="terms-hero"
        leftTitle="TERMS"
        watermarkText="TERMS"
        className="!min-h-0 !pt-16 lg:!pt-24 !pb-24 lg:!pb-36 z-10"
        bottomContent={
          <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
        {/* Meta info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-gray-100 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[13px] text-gray-400">
            <span>
              Effective Date:{' '}
              <strong className="text-gray-600">June 6, 2026</strong>
            </span>
            <span className="hidden sm:inline text-gray-200">|</span>
            <span>
              Last Updated:{' '}
              <strong className="text-gray-600">June 6, 2026</strong>
            </span>
          </div>
        </div>

        {/* Prose content */}
        <div className="space-y-12">
          <motion.div {...articleAnimation} className="border-b border-gray-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937] tracking-tight">
              Terms and Conditions for Think4Ever Global Inc.
            </h1>
          </motion.div>

          {/* Section 1 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              By accessing or using the suite of AI applications provided by Think4Ever Global Inc. (&quot;Think4Ever,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including but not limited to the think4everDev autonomous engineering platform and the Crammr AI-driven study tool (collectively, the &quot;Services&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you may not access or use the Services.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              2. Description of Services and Scope
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Think4Ever provides advanced agentic AI platforms designed to accelerate the Software Development Life Cycle (SDLC) and enhance educational workflows.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20">
              <strong className="text-[#1f2937]">2.1 Limitation of Scope:</strong> The think4everDev platform is engineered exclusively for autonomous software development and SDLC management. The Services do not perform data cleanup tasks. It is the sole responsibility of the User to ensure that any data, codebases, or inputs provided to the Services are properly formatted, cleansed, and prepared prior to processing.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              3. Infrastructure and Quality of Service
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20 mb-3">
              <strong className="text-[#1f2937]">3.1 Top-Tier Model Guarantee:</strong> Think4Ever is committed to providing uncompromising quality in our autonomous outputs. Our operational model relies exclusively on top-tier Large Language Models (LLMs). We do not switch between different LLM tiers to save operational costs. Users are guaranteed that their workloads are continuously processed by premium, high-capability models to ensure reliable and consistent performance across all platforms.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20">
              <strong className="text-[#1f2937]">3.2 Service Availability:</strong> While we strive for high availability, the Services rely on complex AI infrastructure and third-party APIs. We do not guarantee uninterrupted access and reserve the right to perform scheduled maintenance.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              4. User Obligations and Permitted Use
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-2">
              You agree to use the Services only for lawful purposes and in accordance with these Terms. You shall not:
            </p>
            <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc">
              <li>Use the Services to generate malicious code, malware, or systems designed to compromise cybersecurity.</li>
              <li>Attempt to reverse-engineer, decompile, or extract the underlying agentic architecture or prompts of think4ever platform.</li>
              <li>Input sensitive, classified, or highly regulated personal data (such as PHI under HIPAA) without executing a separate Business Associate Agreement (BAA) with Think4Ever Global Inc.</li>
            </ul>
          </motion.div>

          {/* Section 5 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20 mb-3">
              <strong className="text-[#1f2937]">5.1 Think4Ever IP:</strong> The platform architecture, underlying software, user interfaces, and agentic workflows remain the exclusive property of Think4Ever Global Inc.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20">
              <strong className="text-[#1f2937]">5.2 User Content and Output:</strong> You retain all ownership rights to the original prompts, codebases, and data you submit to the Services. Subject to your compliance with these Terms, Think4Ever assigns to you all rights, title, and interest in the specific code, software architecture, or study materials generated by the Services as a direct result of your inputs.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              6. Disclaimers and Limitation of Liability
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20 mb-3">
              <strong className="text-[#1f2937]">6.1 &quot;As Is&quot; Provision:</strong> The Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Think4Ever disclaims all warranties, express or implied, including fitness for a particular purpose. Given the probabilistic nature of AI, we do not warrant that generated code will be entirely error-free or perfectly optimized without human review.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20">
              <strong className="text-[#1f2937]">6.2 Limitation of Liability:</strong> To the maximum extent permitted by law, Think4Ever Global Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising from your use of the Services.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div {...articleAnimation} className="space-y-3">
            <h2 className="text-[18px] font-bold text-[#1f2937]">
              7. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-3">
              This Agreement is governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Disputes will be resolved in the courts of Wilmington, Delaware. This default governing law and jurisdiction clause is subject to mandatory consumer protection laws applicable in your jurisdiction and is overridden by the terms of the applicable Regional Addendum where relevant.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] pl-4 border-l-2 border-[#07A7E1]/20">
              <strong className="text-[#1f2937]">7.1 Regional Addendum:</strong> Users in the EU/EEA, UK, Brazil, South Korea, Mexico, Taiwan, Australia, and Canada should refer to their applicable Regional Addendum for jurisdiction-specific governing law and dispute resolution provisions, which take precedence over this Section 7.
            </p>
          </motion.div>
        </div>
          </article>
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
            Terms & <GradientText>Conditions</GradientText>
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
          >
            Agreement governing the use and access of the Think4Ever suite of services.
          </motion.p>
        </div>
      </SplitSection>
    </main>
  );
};

export default TermsAndConditions;
