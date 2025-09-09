export default function WhySection() {
  const features = [
    {
      icon: "📸",
      title: "Snap & Identify",
      description: "Take 5 photos and instantly know your plant species and care needs.",
      highlight: "AI-powered"
    },
    {
      icon: "💧", 
      title: "Smart Watering",
      description: "Personalized and optimized watering schedules based on your plant. No more guessing!",
      highlight: "Personalized"
    },
    {
      icon: "🔔",
      title: "Never Forget", 
      description: "Notifications when it's time to water. Your plants will thank you.",
      highlight: "Reliable"
    }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6">
          Why you would <span className="text-brand-purple">love</span> Bloomer
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Three powerful features that transform plant care from guesswork into a science
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div key={index} className="group text-center bg-[#f8fafc] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-purple-light/30 hover:-translate-y-1 p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">{feature.icon}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm font-semibold rounded-full mb-3">
                {feature.highlight}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
            <p className="text-text-secondary leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}