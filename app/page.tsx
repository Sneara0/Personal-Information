import HeroSection from "./components/HeroSection";
import Services from "./components/services/Services";
import AntigravityWrapper from "./components/ui/AntigravityWrapper";
import { FloatElement } from "./components/ui/FloatElement";

export default function Home() {
  return (
    <AntigravityWrapper>
      <main className="relative min-h-screen">
        
        {/* Hero Section with Floating Effect */}
        <FloatElement delay={0.5}>
          <HeroSection />
        </FloatElement>

        {/* Services Section with a slight overlap or spacing */}
        <div className="relative z-20">
          <Services />
        </div>

        {/* Optional: Floating Decorative Message at Footer */}
        <div className="flex justify-center pb-20">
          <FloatElement delay={1.2}>
            <div className="px-6 py-3 border border-red-600/20 bg-red-600/5 text-red-500 rounded-full backdrop-blur-xl text-xs font-bold tracking-widest uppercase">
              Designed in Zero Gravity
            </div>
          </FloatElement>
        </div>

      </main>
    </AntigravityWrapper>
  );
}