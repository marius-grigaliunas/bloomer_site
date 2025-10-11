import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AppPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 py-16 pt-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-medium hover:text-primary-deep transition-colors mb-6"
          >
            ← Back to Bloomer
          </Link>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            App's privacy policy
          </h1>
          <p className="text-text-secondary">
            Coming soon
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-background-surface rounded-lg p-8 shadow-sm">
            <p className="text-text-secondary leading-relaxed text-center py-12">
              This privacy policy for the Bloomer mobile application is currently being prepared and will be available soon.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}

