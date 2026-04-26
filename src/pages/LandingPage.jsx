import { motion } from 'framer-motion';
import HeroSection from '../components/landing/HeroSection';
import InteractivePlate from '../components/landing/InteractivePlate';
import PersonalInsights from '../components/landing/PersonalInsights';
import DayInLife from '../components/landing/DayInLife';
import ProgressOverview from '../components/landing/ProgressOverview';
import NoFancyFood from '../components/landing/NoFancyFood';
import EducationalSection from '../components/landing/EducationalSection';
import GoalModules from '../components/landing/GoalModules';
import InteractiveVisuals from '../components/landing/InteractiveVisuals';
import HowItWorks from '../components/landing/HowItWorks';
import Testimonials from '../components/landing/Testimonials';
import CTASection from '../components/landing/CTASection';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeScene from '../components/landing/ThreeScene';

export default function LandingPage() {
  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen font-sans selection:bg-green-500/30 relative overflow-x-hidden">
      
      {/* FULL PAGE 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </Canvas>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-[#0f172a]/80 to-[#0f172a] pointer-events-none z-10" />
      </div>

      <div className="relative z-10">
        <HeroSection />
      <InteractivePlate />
      <PersonalInsights />
      <DayInLife />
      <ProgressOverview />
      <NoFancyFood />
      <GoalModules />
      <InteractiveVisuals />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      
      <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} GetShaped. Your Smart Lifestyle Coach.</p>
      </footer>
      </div>
    </div>
  );
}
