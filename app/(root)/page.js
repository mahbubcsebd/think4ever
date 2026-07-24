import Hero from '@/components/Hero';
import BimodalWorkflow from '@/components/BimodalWorkflow';
import ProblemStatement from '@/components/ProblemStatement';
import FourCapabilities from '@/components/FourCapabilities';
import HowItWorks from '@/components/HowItWorks';
import ModernizeMotion from '@/components/ModernizeMotion';
import WhatWeDo from '@/components/WhatWeDo';
import WhoIsItFor from '@/components/WhoIsItFor';
import Pricing from '@/components/Pricing';
import VSCodePluginSection from '@/components/VSCodePluginSection';

// Temporarily commented-out sections (available to restore)
import Impacts from '@/components/Impacts';
import Architecture from '@/components/Architecture';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-brand-blue selection:text-white">
      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Hero Section + embedded ProofBar above the fold */}
        <Hero />

        {/* Bimodal Workspace & MCP Integration Section */}
        <BimodalWorkflow />

        {/* Problem Statement Section */}
        <ProblemStatement />

        {/* Four Capabilities Section */}
        <FourCapabilities />

        {/* Commented out standalone ProofBar (since it is now embedded inside Hero) */}
        {/* <ProofBar /> */}

        {/* Commented out About Section */}
        {/* <About /> */}

        {/* What We Do - 3 cards (Build, Extend, Modernize) */}
        <WhatWeDo />

        {/* Who is it for - table with Co-Develop scenarios */}
        <WhoIsItFor />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Impacts Section */}
        <Impacts />

        {/* Modernize Motion Section */}
        <ModernizeMotion />

        {/* Architecture Section */}
        <Architecture />

        {/* Commented out Build Motion Developer Section */}
        {/* <BuildMotionDeveloper /> */}

        {/* Commented out Extend Motion Section */}
        {/* <ExtendMotion /> */}

        {/* VS Code Plugin Section */}
        <VSCodePluginSection />

        {/* Pricing Section */}
        <Pricing />
      </main>
    </div>
  );
}
