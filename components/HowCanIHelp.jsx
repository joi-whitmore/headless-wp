
import React from 'react';
import Button from './Button';

// Function to parse text with ** for bold formatting
const formatDescription = (text) => {
    if (!text.includes('**')) {
        return text; // No formatting needed
    }

    // Split the text by ** markers
    const parts = text.split('**');
    const result = [];

    // Every odd-indexed part should be bold
    parts.forEach((part, index) => {
        if (index % 2 === 0) {
            // Regular text
            result.push(<span key={index}>{part}</span>);
        } else {
            // Bold text
            result.push(<strong key={index} className="font-medium">{part}</strong>);
        }
    });

    return result;
};


// ServiceCard component for each service offering
const ServiceCard = ({ image, title, description, buttonText, buttonLink }) => (
    <div className="flex flex-col items-center text-center p-8 max-w-[375px] h-full">
        <div className="mb-8 w-32 h-32">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
            />
        </div>

        <h3 className="accent-text text-4xl mb-4">{title}</h3>

        <p className="mb-6 text-(--sage-800) p-4">{formatDescription(description)}</p>

        <div className="flex-grow"></div>

        <Button
            text={buttonText || "LEARN MORE"}
            href={buttonLink || "#"}
            className="btn-primary" /* Uses sage-800 with ash-50 hover from updated Button component */
            size="md"
        />
    </div>
);

// Main component
const HowCanIHelp = ({
                         title = "How Can I Help?",
                         services = [
                             {
                                 image: '/images/1-1-deco.png',
                                 title: "1:1 Somatic Coaching",
                                 description: "**Break free from old patterns** and step fully into the life that's calling you. Through deep coaching, somatic work, and intuitive guidance, we shift what's been holding you back; so change actually lasts.",
                                 buttonText: "LEARN MORE",
                                 buttonLink: "/somatic-coaching"
                             },
                             {
                                 image: '/images/biz-coaching-deco-1.png',
                                 title: "Business Coaching",
                                 description: "Build a business that feels aligned. Together, we refine your strategy, clear the blocks, and create success on your terms, without the burnout.",
                                 buttonText: "LEARN MORE",
                                 buttonLink: "/business-coaching"
                             },
                             {
                                 image: '/images/design-coaching-deco.png',
                                 title: "Wayfinder Design Coaching",
                                 description: "More than a website, this is about bringing your vision to life. We craft a soul-aligned site that reflects your essence, speaks to your audience, and works.",
                                 buttonText: "LEARN MORE",
                                 buttonLink: "/design-coaching"
                             }
                         ]
                     }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
                <h2 className="heading-secondary mb-2 pb-10">{title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {services.map((service, index) => (
                    <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                            buttonText={service.buttonText}
                            buttonLink={service.buttonLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowCanIHelp;