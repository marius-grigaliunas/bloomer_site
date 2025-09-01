'use client';
import { useState } from 'react';
import { SubmitEmail } from '@/lib/appwrite';
import { ID } from 'appwrite';

export default function EmailSignup() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await SubmitEmail(email);
            setIsSubmitted(true);
        } catch (error) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    if (isSubmitted) {
        return (
            <div className="text-center p-6 bg-success/10 rounded-lg border border-success/20">
                <p className="text-lg font-semibold text-success mb-2">
                    Thanks for your trust, see you when it's out! 🌱
                </p>
                <p className="text-text-secondary">
                    We'll email you as soon as Bloomer is ready.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 border border-secondary-medium/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                disabled={isLoading}
            />
            <button
                type="submit"
                disabled={isLoading || !email}
                className="bg-primary-medium hover:bg-primary-deep disabled:bg-secondary-medium/50 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
                {isLoading ? 'Adding...' : 'Get notified 📧'}
            </button>
            {error && <p className="text-danger text-sm mt-2">{error}</p>}
        </form>
    );
}