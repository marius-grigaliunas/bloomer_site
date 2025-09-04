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
            <div className="text-center p-6 bg-success/10 rounded-lg border border-success/20">
                <p className="text-lg font-semibold text-success mb-2">
                    Thanks for your trust, see you when it&apos;s out! 🌱
                </p>
                <p className="text-text-secondary">
                    We&apos;ll email you as soon as Bloomer is ready.
                </p>
            </div>
        );
    }

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        validationError 
                            ? 'border-danger focus:ring-danger/50' 
                            : hasTypo 
                                ? 'border-warning focus:ring-warning/50'
                                : 'border-secondary-medium/30 focus:ring-primary-medium'
                    }`}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading || !email || !!validationError}
                    className="bg-primary-medium hover:bg-primary-deep disabled:bg-secondary-medium/50 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                    {isLoading ? 'Adding...' : 'Get notified 📧'}
                </button>
            </form>
            
            {/* Validation feedback */}
            {validationError && (
                <p className={`text-sm mb-4 ${hasTypo ? 'text-warning' : 'text-danger'}`}>
                    {validationError}
                </p>
            )}
            
            {/* Server error */}
            {error && <p className="text-danger text-sm mb-4">{error}</p>}
            <p className="text-sm text-text-secondary">
                By signing up, you agree to our{' '}
                <Link href="/privacy" className="text-primary-medium hover:text-primary-deep underline">
                    Privacy Policy
                </Link>
            </p>
        </div>
    );
}