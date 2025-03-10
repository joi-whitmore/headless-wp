import React, { useState } from 'react';
import Button from './Button';

const NewsletterSignup = ({
                              title = "Join the Conversation",
                              subtitle = "Sign up to receive updates and new stories!",
                              buttonText = "SIGN ME UP!",
                              backgroundColor = "bg-[#B2C49B]",
                          }) => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation
        if (!firstName.trim() || !email.trim()) {
            setMessage({ text: 'Please fill in all fields', isError: true });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ text: 'Please enter a valid email address', isError: true });
            return;
        }

        setIsSubmitting(true);
        setMessage({ text: '', isError: false });

        try {
            // This is a placeholder for the actual API call
            // When you have MailerLite credentials, replace this with the actual API call

            // Simulating an API call with a timeout
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', { firstName, email });

            // Success message
            setMessage({ text: 'Thanks for signing up!', isError: false });
            setFirstName('');
            setEmail('');

            // TODO: Add your MailerLite API integration here
            // Example:
            // const response = await fetch('your-api-endpoint', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ firstName, email })
            // });
            // const data = await response.json();
            // if (!response.ok) throw new Error(data.message || 'Something went wrong');

        } catch (error) {
            console.error('Submission error:', error);
            setMessage({
                text: error.message || 'Something went wrong. Please try again.',
                isError: true
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`py-12 ${backgroundColor}`}>
            <div className="container mx-auto px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8 md:flex-shrink-0">
                        <h2 className="accent-text text-3xl md:text-5xl mb-2 text-(--sage-800)">
                            {title}
                        </h2>
                        <p className="text-(--sage-800)">
                            {subtitle}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}
                          className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-sage-800"
                            disabled={isSubmitting}
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-sage-800"
                            disabled={isSubmitting}
                        />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-secondary-dark"
                            text={isSubmitting ? "SIGNING UP..." : buttonText}
                        />
                    </form>
                </div>

                {message.text && (
                    <div className={`mt-4 px-4 py-2 rounded ${message.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {message.text}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsletterSignup;