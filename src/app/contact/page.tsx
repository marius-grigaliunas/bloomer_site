'use client';
import { useState } from 'react';
import { validateEmail } from '@/lib/emailValidation';
import { SubmitUserMessage } from '@/lib/appwrite';
import Footer from '@/components/Footer';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Validate email
        const emailValidation = validateEmail(email);
        if (!emailValidation.isValid) {
            setError(emailValidation.error || 'Please enter a valid email address');
            setIsLoading(false);
            return;
        }

        // Validate message
        if (!message.trim()) {
            setError('Please enter a message');
            setIsLoading(false);
            return;
        }

        try {
            await SubmitUserMessage(message, email);
            setIsSubmitted(true);
        } catch (error) {
            setError('Something went wrong. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-8 pt-24">
                <div className="text-center max-w-2xl">
                    <div className="mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mb-6">
                            <span className="text-4xl">🌱</span>
                        </div>
                        <h1 className="text-5xl font-bold text-text-primary mb-6">
                            Message Sent!
                        </h1>
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                            Thank you for reaching out. We&apos;ll get back to you soon!
                        </p>
                    </div>
                    
                    <div className="p-8 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20 shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-3 h-3 bg-success rounded-full mr-3"></div>
                            <p className="text-lg font-semibold text-success">
                                Your message has been received
                            </p>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                            We appreciate your interest in Bloomer and will respond within 30 days.
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background-primary flex flex-col items-center justify-start p-8 pt-16">
            <div className="text-center max-w-3xl w-full">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-medium/10 rounded-full mb-4">
                        <span className="text-2xl">💬</span>
                    </div>
                    <h1 className="text-4xl font-bold text-text-primary mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-text-secondary mb-6 leading-relaxed max-w-2xl mx-auto">
                        Have questions about Bloomer? We&apos;d love to hear from you! 
                        Send us a message and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-background-surface rounded-3xl shadow-xl border border-secondary-medium/10 p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-text-primary text-left">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                required
                                className="w-full px-6 py-4 border-2 border-secondary-medium/20 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-medium/20 focus:border-primary-medium transition-all duration-200 text-lg placeholder-text-secondary/60"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-semibold text-text-primary text-left">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell us what's on your mind..."
                                required
                                rows={6}
                                className="w-full px-6 py-4 border-2 border-secondary-medium/20 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-medium/20 focus:border-primary-medium transition-all duration-200 text-lg placeholder-text-secondary/60 resize-vertical"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-4 bg-danger/10 border border-danger/20 rounded-xl">
                                <p className="text-danger text-sm font-medium text-center">{error}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading || !email || !message.trim()}
                            className="w-full bg-gradient-to-r from-primary-medium to-primary-deep hover:from-primary-deep hover:to-primary-medium disabled:from-secondary-medium/50 disabled:to-secondary-medium/50 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                'Send Message 📧'
                            )}
                        </button>
                    </form>

                    {/* Additional Info */}
                    <div className="mt-8 pt-6 border-t border-secondary-medium/10">
                        <p className="text-sm text-text-secondary text-center">
                            We typically respond within 30 days. For urgent matters, please mention it in your message.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
