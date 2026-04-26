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

export default function LandingPage() {
  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen font-sans selection:bg-green-500/30">
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
  );
}
