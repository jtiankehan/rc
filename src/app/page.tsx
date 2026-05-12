'use client';

import CinematicHero from '@/components/CinematicHero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import DigitalSection from '@/components/DigitalSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <CinematicHero />
      <AboutSection />
      <ProjectsSection />
      <DigitalSection />
      <Footer />
    </main>
  );
}
