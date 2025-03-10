import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
                <h2 className="heading-secondary mb-2 pb-10">
                    Client Feedback
                </h2>
                <TestimonialCarousel />
            </div>
        </section>
    );
}