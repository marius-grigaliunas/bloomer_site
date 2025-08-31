export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-text-primary mb-4">
            Never kill another plant again 🌱
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Bloomer identifies your plants and creates personalized watering schedules. 
            No more guessing, no more plant casualties.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 mb-12 text-4xl">
          <span>🥀</span>
          <span className="text-2xl text-secondary-medium">→</span>
          <span>🌿</span>
        </div>

        <div>
          <button className="bg-primary-medium hover:bg-primary-deep text-white font-semibold py-4 px-8 rounded-lg text-xl shadow-lg transition-colors">
            Get notified when Bloomer launches 📧
          </button>
        </div>
      </div>
    </main>
  )
}