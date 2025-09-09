'use client';

import EmailSignup from '@/components/EmailSignup';
import WhySection from '@/components/WhySection';
import AppCarousel from '@/components/AppCarousel';
import ComingSoon from '@/components/ComingSoon';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-8 pt-24">
      <div className="text-center max-w-5xl">
        <div className="pt-12 pb-16">
          <div className="mb-8">
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
          <button 
            onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#48bb78] hover:bg-[#38a169] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Waitlist →
          </button>
        </div>

        {/* App Screenshots Carousel */}
        <div className="py-16">
          <AppCarousel />
        </div>

        <div className="py-16">
          <WhySection />
        </div>
        
        <div className="py-16">
          <ComingSoon />
        </div>
        
        <div id="email-signup" className="py-16">
          <EmailSignup/>
        </div>
      </div>
    </main>
  )
}