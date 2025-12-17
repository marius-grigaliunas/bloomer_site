'use client';

import WhySection from '@/components/WhySection';
import AppCarousel from '@/components/AppCarousel';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';
import JoinTheWaitlistButton from '@/components/ui/JoinTheWaitlistButton';
import FAQ from '@/components/FAQ';
import QRCodeSection from '@/components/QRCodeSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-5xl">
        <header className="pt-6">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-semibold px-6 py-2 rounded-full text-sm md:text-base animate-slow-pulse" role="banner">
              Version 1.2.0 is here! Get it on Google Play for android devices
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-text-primary mb-6 leading-tight">
            Never kill another <span className="text-primary-deep">plant</span> again
          </h1>
          <p className="text-2xl md:text-3xl text-text-secondary mb-6 leading-relaxed max-w-4xl mx-auto">
            Bloomer identifies your plants and creates <span className="font-semibold text-primary-medium">personalized watering schedules</span>. 
          </p>
          <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto mb-6">
            No more guessing, no more plant casualties.
          </p>
          <div className="mb-8">
            <JoinTheWaitlistButton />
          </div>
        </header>

        {/* App Screenshots Carousel */}
        <section id="app-screenshots" aria-labelledby="app-screenshots-heading">
          <h2 id="app-screenshots-heading" className="sr-only">Bloomer App Screenshots</h2>
          <AppCarousel />
        </section>

        <section id="why" className='py-8' aria-labelledby="why-heading">
          <WhySection />
        </section>
        
        <section id="download" className='py-8' aria-labelledby="download-heading">
          <h2 id="download-heading" className="sr-only">Download Bloomer</h2>
          <QRCodeSection />
        </section>
        
        <section id="faq" className='py-16' aria-labelledby="faq-heading">
          <FAQ />
        </section>
      </div>
      <Footer />
    </main>
  )
}