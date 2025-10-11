import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-surface border-t border-secondary-medium/10 mt-16">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <Image src="/images/bloomer-logo-nobackground.png" alt="Bloomer" width={52} height={52}/>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Bloomer</h3>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4 max-w-md">
              Never kill another plant again.
            </p>
            <div className="flex items-center space-x-2">
              <span className="inline-block bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-semibold px-4 py-1 rounded-full text-sm">
                Coming Soon for Android
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-text-secondary hover:text-primary-medium transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-text-secondary hover:text-primary-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-text-secondary hover:text-primary-medium transition-colors duration-200"
                >
                  Website&apos;s privacy policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/app-privacy" 
                  className="text-text-secondary hover:text-primary-medium transition-colors duration-200"
                >
                  App&apos;s privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-primary-medium mr-2">📧</span>
                <a 
                  href="mailto:bloomer.app.info@gmail.com"
                  className="text-text-secondary hover:text-primary-medium transition-colors duration-200"
                >
                  bloomer.app.info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-secondary-medium/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <span>© 2025 Bloomer. All rights reserved.</span>
            </div>
            
            {/* Social Links or Additional Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <span>Made by</span>
                <span className="font-semibold text-primary-medium">Marius Grigaliūnas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
