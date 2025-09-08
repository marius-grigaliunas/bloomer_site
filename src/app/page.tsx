import EmailSignup from '@/components/EmailSignup';
import WhySection from '@/components/WhySection';
import AppCarousel from '@/components/AppCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-8 pt-24">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-text-primary mb-4">
            Never kill another plant again
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Bloomer identifies your plants and creates personalized watering schedules. 
            No more guessing, no more plant casualties.
          </p>
        </div>

        {/* App Screenshots Carousel */}
        <AppCarousel />

        <WhySection />
        <EmailSignup/>
      </div>
    </main>
  )
}