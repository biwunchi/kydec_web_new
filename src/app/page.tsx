'use client';

import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import About from '@/components/About';
import Ventures from '@/components/Ventures';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <About />
      <Ventures />
      <Footer />
    </main>
  );
}
