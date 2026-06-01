import About from '@/components/About';
import Architecture from '@/components/Architecture';
import BuildMotionDeveloper from '@/components/BuildMotionDeveloper';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Impacts from '@/components/Impacts';
import ModernizeMotion from '@/components/ModernizeMotion';
import ProofBar from '@/components/ProofBar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-brand-blue selection:text-white">
      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Proof Bar */}
        <ProofBar />

        {/* About Section with Scroll Animations */}
        <About />

        {/* Impacts Section with Overlapping Circles */}
        <Impacts />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Modernize Motion Section with Video Player */}
        <ModernizeMotion />

        {/* Architecture Section with Feature Cards */}
        <Architecture />

        {/* Build Motion - Developer Section */}
        <BuildMotionDeveloper />

        {/* Multiple Starting Points Section */}
        {/* <MultipleStartingPoints /> */}

        {/* Extend Motion Section */}
        {/* <ExtendMotion /> */}

        {/* Pricing Section */}
        {/* <Pricing /> */}

        {/* Portfolio Showcase Image Accordion */}
        {/* <PortfolioAccordion /> */}

        {/* Client Testimonials Slider */}
        {/* <Testimonials /> */}

        {/* Accolades Honors and Recognition Section */}
        {/* <Accolades /> */}
      </main>
    </div>
  );
}
