import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div className="text-center py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
            <div className="flex justify-center">
                <Image src="/images/bloomer-logo-nobackground.png" alt="bloomer logo" width={100} height={100} />
            </div>
            <h2 className="text-4xl font-bold text-text-primary mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We're finishing up the details and will be launching soon for android devices
          </p>
        </div>
        
      </div>
    </div>
  );
}
