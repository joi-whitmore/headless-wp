import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            text: "I've spent my whole life prioritizing everyone else, always saying yes, always making sure others were okay. Inside, I was exhausted. Working with Joi helped me see the patterns that had been running my life and, more importantly, how to break free from them. For the first time, I truly understand what it means to choose myself without guilt. The grief I had been carrying started to move, and for the first time in years, I feel lighter.",
            author: "Alison K."
        },
        {
            id: 2,
            text: "The coaching sessions exceeded my expectations. Joi provided a safe space to explore my challenges while offering practical tools I could immediately apply. After six months of working together, I've made more progress in my career than in the previous three years.",
            author: "Michael T."
        },
        {
            id: 3,
            text: "What sets Joi apart is her ability to listen deeply and ask the right questions. She doesn't just offer generic advice - she helped me uncover solutions that were specifically tailored to my situation and values. This personalized approach made all the difference.",
            author: "Sarah L."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-advance testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 8000); // Change testimonial every 8 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    // State for the active and next testimonial
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[currentIndex]);
    const [nextTestimonial, setNextTestimonial] = useState(null);

    // Update active testimonial when currentIndex changes
    useEffect(() => {
        if (nextTestimonial) {
            const timer = setTimeout(() => {
                setActiveTestimonial(nextTestimonial);
                setNextTestimonial(null);
                setIsAnimating(false);
            }, 500); // Match the duration of the fade transition

            return () => clearTimeout(timer);
        }
    }, [nextTestimonial]);

    // Navigation functions
    const goToPrevious = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setNextTestimonial(testimonials[newIndex]);
    };

    const goToNext = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setNextTestimonial(testimonials[newIndex]);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return;

        setIsAnimating(true);
        setCurrentIndex(index);
        setNextTestimonial(testimonials[index]);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="relative overflow-hidden">
                {/* Testimonial Content */}
                <div className="relative min-h-[240px]">
                    <div
                        className={`absolute w-full transition-opacity duration-500 ${
                            isAnimating ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <p className="text-center text-gray-700 font-light leading-relaxed mb-6 px-4 md:px-12">
                            {activeTestimonial.text}
                        </p>
                        <p className="text-center text-gray-900 font-medium">
                            {activeTestimonial.author}
                        </p>
                    </div>

                    {nextTestimonial && (
                        <div className="absolute w-full opacity-0">
                            <p className="text-center text-gray-700 font-light leading-relaxed mb-6 px-4 md:px-12">
                                {nextTestimonial.text}
                            </p>
                            <p className="text-center text-gray-900 font-medium">
                                {nextTestimonial.author}
                            </p>
                        </div>
                    )}
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-100 rounded-full p-2 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-100 rounded-full p-2 transition-colors"
                    aria-label="Next testimonial"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                            index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;