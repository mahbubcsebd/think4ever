'use client';
import GradientText from '@/components/GradientText';
import { FAQFilters } from '@/components/sections/faq/FAQFilters';
import { FAQList } from '@/components/sections/faq/FAQList';
import { StillHaveQuestions } from '@/components/sections/faq/StillHaveQuestions';
import SplitSection from '@/components/SplitSection';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const faqData = [
  {
    category: 'Platform',
    items: [
      {
        question: 'What is the multi-agent SDLC Platform?',
        answer:
          'The multi-agent SDLC Platform is a comprehensive solution designed to streamline your entire software development lifecycle. It provides tools and workflows for planning, building, testing, deploying, and monitoring your software projects — all in one unified platform.',
      },
      {
        question: 'Which programming languages and frameworks are supported?',
        answer:
          'Our platform is language-agnostic and supports all major programming languages and frameworks. Whether you use JavaScript, Python, Java, Go, Ruby, .NET, or any other technology stack, the platform integrates seamlessly with your existing toolchain.',
      },
      {
        question:
          'What distinct advantages does Think4Ever offer beyond the functionalities provided by these existing platforms?',
        answer:
          'Cursor and Claude Code are primarily coding agents optimized for rapid, prompt-based generation (often referred to as "vibe coding"). Their significant limitation is that context is not preserved or persisted, which quickly leads to a lack of system coherence. Think4Ever is a design-first, agentic SDLC platform. Its core advantage is that it is the only platform that allows you to build an architecture and design harness to continuously develop and evolve your solution. This persistent context ensures long-term architectural integrity and enables built-in security features, such as automated penetration testing, that simple coding agents cannot support. Preserving context is the most widely acknowledged industry problem.',
      },
      {
        question:
          'Given the abundance of available platforms, what compelling reasons should I consider for selecting Think4Ever?',
        answer:
          'If your goal is to build a quick, short-lived prototype or simply code assistance, Cursor and Claude are fantastic tools. However, you should select Think4Ever when you are building software where long-term maintainability matters. Unmanaged prompt-based generation inevitably results in architectural drift and technical debt. Think4Ever acts as a professionalization layer, applying continuous governance, compliance, and architectural rigor so your codebase scales safely over time rather than decaying. In addition, we are the only platform that enables you to build a comprehensive system architecture, live and living technical designs and documentation as well as ability to reengineer/refactor legacy solutions all in one integrated platform.',
      },
      {
        question:
          "The templates you currently offer appear to require further development, and their effectiveness seems largely dependent on the end-user's creativity. Perhaps you could consider providing a signature template?",
        answer:
          'This is a highly accurate observation and an excellent suggestion. Relying heavily on end-user creativity for initial setup contradicts our philosophy of strict architectural governance. Providing a locked-down, comprehensive "signature template" that serves as an immutable reference model is a great way to showcase our optimal features without the risk of user-induced drift. We will prioritize adding this to our roadmap.',
      },
      {
        question: 'Does the platform integrate with existing CI/CD tools?',
        answer:
          'Yes, we offer native integrations with popular CI/CD tools including GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, and Azure DevOps. We also provide a REST API for custom integrations.',
      },
      {
        question:
          'Is the platform available as a cloud or self-hosted solution?',
        answer:
          'Our solution is fully managed and available immediately. For organizations with specific compliance or infrastructure requirements.',
      },
      {
        question: 'What is the uptime SLA for the platform?',
        answer:
          'We guarantee 99.9% uptime for our cloud-hosted platform. Enterprise customers receive a 99.95% uptime SLA with dedicated infrastructure. Real-time status is available on our status page.',
      },
    ],
  },
  {
    category: 'Pricing',
    items: [
      {
        question: 'What pricing tiers are available?',
        answer:
          'We offer three main tiers: Think New ($25/month), Think Big ($250/month), and Think Blue (Custom pricing). Visit our pricing page for more details.',
      },

      {
        question: 'Can I change my plan later?',
        answer:
          'For those on the Think New Plan (solo developers, freelancers, founders, and small builder teams shipping AI-powered products), you can upgrade your plan any time. Changes take effect at the start of the next billing cycle. For those on the Think Big or Think Blue plans, individual contract terms govern plan and pricing adjustments.',
      },
    ],
  },
  {
    category: 'Onboarding',
    items: [
      {
        question: 'How long does it take to get started?',
        answer:
          'For the Think New tier, you can sign up and start using the platform within minutes. Think Big and Think Blue customers typically complete onboarding within 1-2 weeks, including configuration, integrations, and team training.',
      },
      {
        question: 'Do you provide onboarding assistance?',
        answer:
          'Yes. All plans include access to our documentation and getting-started guides. Think Big tier includes a dedicated onboarding session. Think Blue customers receive a full onboarding program with a dedicated Customer Success Manager.',
      },
      {
        question: 'Can I import data from my existing tools?',
        answer:
          'Yes, we provide migration tools and import utilities for common platforms including Jira, Trello, Asana, and GitHub Projects. Our team can also assist with custom migrations for Enterprise customers.',
      },
      {
        question: 'What training resources are available?',
        answer:
          'We provide web-based documentation, tutorials, video walkthroughs. Live training sessions are available (for Think Big & Think Blue tiers).',
      },
      {
        question: 'How do I invite my team members?',
        answer:
          'You can invite team members directly from the Team Management section in your Customer Portal. Simply enter their email addresses and assign appropriate roles. They will receive an invitation email to set up their accounts.',
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        question: 'What support channels are available?',
        answer:
          'Support varies by plan. Think New are self-serve with access to our online help portal. Think Big and Think Blue customers have access to our sales and support team who can address your needs directly — reach out to your contact or submit a request through the portal.',
      },
      {
        question: 'How do I submit a support ticket?',
        answer:
          'You can submit support tickets directly from your Customer Portal under the Support Tickets section. You can also email support@think4ever.com. All tickets are tracked and you will receive updates via email and in your portal.',
      },

      {
        question: 'Can I request a feature or report a bug?',
        answer:
          'Absolutely! We welcome feedback. You can submit feature requests and bug reports through the support ticket system in your portal. We also have a public roadmap where you can vote on upcoming features.',
      },
      {
        question: 'What are your support hours?',
        answer:
          'Our standard support team is available Mon-Fri during global business hours. Enterprise customers have access to 24/7/365 emergency technical support.',
      },
    ],
  },
  {
    category: 'Security',
    items: [
      {
        question: 'What security certifications does the platform hold?',
        answer:
          'Our platform is SOC 2 Type II certified and GDPR compliant. We also support SSO via SAML 2.0 and OIDC, role-based access control (RBAC), audit logging, and data encryption at rest and in transit.',
      },
    ],
  },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Questions');

  const categories = useMemo(() => {
    return ['All Questions', ...faqData.map((d) => d.category)];
  }, []);

  const filteredData = useMemo(() => {
    let data = faqData;

    // Filter by Category
    if (activeCategory !== 'All Questions') {
      data = data.filter((d) => d.category === activeCategory);
    }

    return data;
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white relative py-12 overflow-hidden font-sans">
      <SplitSection
        id="faq-hero"
        leftTitle="FAQ"
        watermarkText="FAQ"
        className="!min-h-0 !pt-16 lg:!pt-24 !pb-24 lg:!pb-36 z-10"
        bottomContent={
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 mt-8 md:mt-12">
            <FAQFilters
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <FAQList data={filteredData} />
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
            Frequently Asked <GradientText>Questions</GradientText>
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
          >
            Find answers to common questions about our platform, pricing,
            onboarding, and support.
          </motion.p>
        </div>
      </SplitSection>

      <StillHaveQuestions />
    </div>
  );
};

export default FAQPage;
