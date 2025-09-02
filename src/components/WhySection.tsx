export default function WhySection() {
  const features = [
    {
      icon: "📸",
      title: "Snap & Identify",
      description: "Take 5 photos and instantly know your plant species and care needs."
    },
    {
      icon: "💧", 
      title: "Smart Watering",
      description: "Personalized and optimized watering schedules based on your plant. No more guessing!"
    },
    {
      icon: "🔔",
      title: "Never Forget", 
      description: "Notifications when it's time to water. Your plants will thank you."
    }
  ];

  return (
    <div className="w-full max-w-6xl mb-16">
      <h2 className="text-4xl font-bold text-text-primary text-center mb-12">
        Why you would love Bloomer
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-background-surface rounded-lg shadow-sm">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}