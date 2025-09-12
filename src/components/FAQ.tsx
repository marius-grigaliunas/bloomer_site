'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Bloomer identify my plants?",
      answer: "Bloomer uses AI to analyze photos of your plants. Simply take 5 clear photos from different angles, and the model will identify the species and provide care information including watering schedules, light requirements, humidity, and common issues."
    },
    {
      question: "Is Bloomer free to use?",
      answer: "Yes! Bloomer will be free to download and use. I created this app as both a learning project and to help people like me stop accidentally killing their plants! It's designed for Android devices, and I'm working hard to ensure the best possible experience. Join the waitlist to be the first to know when I launch and get early access!"
    },
    {
        question: "When will Bloomer be available?",
        answer: "Bloomer is currently in development and will be launching soon, at the end of September for Android devices. Join the waitlist to be the first to know when the app is out."
    },
    {
        question: "Will Bloomer be available for iOS devices?",
        answer: "Bloomer is currently planned only for android devices, but with enough requests and resouces iOS release will happen."
    },
    {
      question: "What types of plants can Bloomer identify?",
      answer: "Bloomer can identify a wide variety of houseplants, garden plants, succulents, herbs, and flowers. The identification model includes thousands of plant species from around the world."
    },
    {
      question: "How accurate are the watering schedules?",
      answer: "Our watering schedules are personalized based on your specific plant species. While Bloomer provides science-based recommendations, factors like humidity, temperature, and season can affect your plant's needs, so I recommend monitoring your plants and adjusting as needed."
    }
  ];

  // Structured data for FAQ section - helps AI search engines understand the content
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl">
      {/* Structured data for FAQ section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      <div className="text-center mb-16">
        <h2 id="faq-heading" className="text-5xl md:text-6xl font-black text-text-primary mb-6">
          Frequently Asked <span className="text-brand-purple">Questions</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Everything you need to know about Bloomer and how it can help your plants thrive
        </p>
      </div>

      <div className="space-y-4" role="region" aria-labelledby="faq-heading">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-opacity-50"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              aria-describedby={`faq-answer-${index}`}
            >
              <h3 className="text-xl font-bold text-text-primary pr-4" itemProp="name">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/20 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-5 h-5 text-brand-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>
            
            <div 
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
              itemScope
              itemType="https://schema.org/Answer"
            >
              <div className="px-8 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-text-secondary leading-relaxed text-left" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
