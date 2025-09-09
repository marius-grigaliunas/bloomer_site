'use client';
import { useState, useEffect } from 'react';
import { SubmitEmail } from '@/lib/appwrite';
import { validateEmail, getEmailValidationMessage } from '@/lib/emailValidation';
import Link from 'next/link';

export default function EmailSignup() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [validationError, setValidationError] = useState('');
    const [hasTypo, setHasTypo] = useState(false);

    // Real-time email validation
    useEffect(() => {
        if (email) {
            const validationMessage = getEmailValidationMessage(email);
            setValidationError(validationMessage || '');
            setHasTypo(validationMessage?.includes('Did you mean') || false);
        } else {
            setValidationError('');
            setHasTypo(false);
        }
    }, [email]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Final validation before submission
        const validation = validateEmail(email);
        if (!validation.isValid) {
            setError(validation.error || 'Please enter a valid email address');
            setIsLoading(false);
            return;
        }

        try {
            await SubmitEmail(email);
            setIsSubmitted(true);
        } catch (error) {
            setError('Something went wrong. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isSubmitted) {
        return (
            <div className="bg-gradient-to-br from-brand-purple to-blue-600 text-white py-16 px-8 rounded-3xl">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="mb-4">
                            <span className="inline-block bg-white/20 text-white font-semibold px-4 py-2 rounded-full text-sm">
                                ✅ Successfully Added
                            </span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">
                            You&apos;re all set!
                        </h3>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Thanks for your trust, see you when it&apos;s out! 🌱
                        </p>
                    </div>
                    <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-lg mx-auto">
                        <p className="text-lg text-white/90">
                            We&apos;ll email you as soon as Bloomer is ready.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-brand-purple to-blue-600 text-white py-16 px-8 rounded-3xl">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <div className="mb-4">
                        <span className="inline-block bg-white/20 text-white font-semibold px-4 py-2 rounded-full text-sm">
                            🚀 Early Access
                        </span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">
                        Be the first to know when we launch
                    </h3>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Join our early access list and get exclusive updates about Bloomer&apos;s development
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className={`flex-1 px-6 py-5 border-2 rounded-2xl focus:outline-none focus:ring-4 transition-all text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 ${
                            validationError 
                                ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400' 
                                : hasTypo 
                                    ? 'border-yellow-400 focus:ring-yellow-400/20 focus:border-yellow-400'
                                    : 'border-white/20 focus:ring-white/20 focus:border-white/40'
                        }`}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !email || !!validationError}
                        className="bg-[#48bb78] hover:bg-[#38a169] disabled:bg-gray-400 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none"
                    >
                        {isLoading ? 'Adding...' : 'Get notified 📧'}
                    </button>
                </form>
                
                {/* Validation feedback */}
                {validationError && (
                    <p className={`text-sm mb-4 ${hasTypo ? 'text-yellow-300' : 'text-red-300'}`}>
                        {validationError}
                    </p>
                )}
                
                {/* Server error */}
                {error && <p className="text-red-300 text-sm mb-4">{error}</p>}
                <p className="text-sm text-white/80">
                    By signing up, you agree to our{' '}
                    <Link href="/privacy" className="text-white hover:text-white/80 underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}