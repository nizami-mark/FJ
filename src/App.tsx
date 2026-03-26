/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Symptoms } from './components/Symptoms';
import { MetabolicReset } from './components/MetabolicReset';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ExpertChat } from './components/ExpertChat';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Symptoms />
        <MetabolicReset />
        <CaseStudies />
        <Pricing />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <ExpertChat />
    </div>
  );
}
