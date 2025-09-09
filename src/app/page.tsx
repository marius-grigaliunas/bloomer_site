'use client';

import EmailSignup from '@/components/EmailSignup';
import WhySection from '@/components/WhySection';
import AppCarousel from '@/components/AppCarousel';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';
import JoinTheWaitlistButton from '@/components/ui/JoinTheWaitlistButton';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-5xl">
        <div className="pt-6">
          <div className="">
            <span className="inline-block bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-semibold px-6 py-2 rounded-full text-sm md:text-base animate-slow-pulse">
              Coming Soon for Android
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
          <JoinTheWaitlistButton />
        </div>

        {/* App Screenshots Carousel */}
        <div id="app-screenshots">
          <AppCarousel />
        </div>

        <div id="why" className='py-8'>
          <WhySection />
        </div>
        
        <div id="coming-soon" className='py-8'>
          <ComingSoon />
        </div>
        
        <div id="email-signup" className='py-8'>
          <EmailSignup/>
        </div>
        
        <div id="faq" className='py-16'>
          <FAQ />
        </div>
      </div>
      <Footer />
    </main>
  )
}