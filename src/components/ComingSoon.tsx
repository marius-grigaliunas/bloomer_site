import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div className="text-center px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
            <div className="flex justify-center mb-8">
                <div className="relative">
                  <Image src="/images/bloomer-logo-nobackground.png" alt="bloomer logo" width={120} height={120} className="drop-shadow-lg" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-purple rounded-full animate-pulse"></div>
                </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6">
              Released for Android devices on Google Play store
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-4">
              The app is now finished and released for <span className="font-semibold text-primary-medium">Android devices</span>
            </p>
        </div>
        
      </div>
    </div>
  );
}
