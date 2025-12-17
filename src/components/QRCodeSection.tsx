'use client';
import Image from 'next/image';

export default function QRCodeSection() {
    return (
        <a 
            href="https://play.google.com/store/apps/details?id=com.grimar.bloomer&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-brand-purple to-blue-600 text-white py-16 px-8 rounded-3xl transition-transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
        >
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h3 className="text-4xl font-bold text-white mb-4">
                        Download Bloomer Today
                    </h3>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Scan the QR code below to download Bloomer on your Android device and start caring for your plants like never before
                    </p>
                </div>
                
                {/* QR Code Container */}
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto">
                    <div className="bg-white p-6 rounded-xl mb-4 inline-block">
                        <Image
                            src="/images/bloomer-qr-code.png"
                            alt="Scan to download Bloomer app"
                            width={250}
                            height={250}
                            className="w-full max-w-[250px] h-auto"
                            priority
                        />
                    </div>
                    <p className="text-lg text-white/90 font-medium">
                        Scan to get Bloomer on Google Play
                    </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🌱</span>
                        <span>AI Plant Identification</span>
                    </div>
                    <div className="hidden sm:block text-white/40">•</div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">💧</span>
                        <span>Smart Watering Schedules</span>
                    </div>
                    <div className="hidden sm:block text-white/40">•</div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🔔</span>
                        <span>Care Reminders</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

