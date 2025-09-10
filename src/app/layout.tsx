import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  title: "Bloomer - AI Plant Care App | Never Kill Another Plant Again",
  description: "Bloomer uses AI to identify your plants and create personalized watering schedules. Get smart plant care tips, watering reminders, and never kill another plant again. Coming soon for Android.",
  keywords: [
    "plant care app",
    "AI plant identification", 
    "plant watering schedule",
    "plant care tips",
    "houseplant care",
    "plant identification",
    "gardening app",
    "plant reminders",
    "plant care assistant",
    "smart plant care"
  ],
  authors: [{ name: "Marius Grigaliunas" }],
  creator: "Marius Grigaliunas",
  publisher: "Bloomer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en-GB',
    url: 'https://bloomer-app.com',
    siteName: 'Bloomer - AI Plant Care App',
    title: 'Bloomer - AI Plant Care App | Never Kill Another Plant Again',
    description: 'Bloomer uses AI to identify your plants and create personalized watering schedules. Get smart plant care tips, watering reminders, and never kill another plant again.',
    images: [
      {
        url: '/images/bloomer-logo-nobackground.png',
        width: 1200,
        height: 630,
        alt: 'Bloomer - AI Plant Care App Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloomer - AI Plant Care App | Never Kill Another Plant Again',
    description: 'Bloomer uses AI to identify your plants and create personalized watering schedules. Get smart plant care tips, watering reminders, and never kill another plant again.',
    images: ['/images/bloomer-logo-nobackground.png'],
    creator: '@bloomer_app',
  },
  alternates: {
    canonical: 'https://bloomer-app.com',
  },
  category: 'technology',
  classification: 'Plant Care Application',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Bloomer',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#8b5cf6',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8b5cf6" },
    { media: "(prefers-color-scheme: dark)", color: "#8b5cf6" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO and AI search optimization
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bloomer-app.com/#organization",
        "name": "Bloomer",
        "url": "https://bloomer-app.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bloomer-app.com/images/bloomer-logo-nobackground.png",
          "width": 400,
          "height": 400
        },
        "description": "AI-powered plant care app that helps users identify plants and create personalized watering schedules",
        "founder": {
          "@type": "Person",
          "name": "Marius Grigaliunas"
        },
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Android"
      },
      {
        "@type": "WebSite",
        "@id": "https://bloomer-app.com/#website",
        "url": "https://bloomer-app.com",
        "name": "Bloomer - AI Plant Care App",
        "description": "Never kill another plant again with Bloomer's AI-powered plant identification and care scheduling",
        "publisher": {
          "@id": "https://bloomer-app.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bloomer-app.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "MobileApplication",
        "@id": "https://bloomer-app.com/#mobileapp",
        "name": "Bloomer",
        "description": "AI-powered plant care app for Android that identifies plants and creates personalized watering schedules",
        "url": "https://bloomer-app.com",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/PreOrder"
        },
        "publisher": {
          "@id": "https://bloomer-app.com/#organization"
        },
        "featureList": [
          "AI Plant Identification",
          "Personalized Watering Schedules", 
          "Plant Care Reminders",
          "Smart Care Tips",
          "Plant Health Monitoring"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO and AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//bloomer-app.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
