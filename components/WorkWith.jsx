import React from 'react';

// ClientCard component for each client box
const ClientCard = ({ image, description }) => (
    <div className="bg-(--sage-50) px-8 pb-10 rounded-lg flex flex-col items-center">
        <div className="mb-4 w-full max-w-xs">
            <img src={image} alt="Client" className="w-full h-auto" />
        </div>
        <p className="text-center text-gray-800">{description}</p>
    </div>
);

// Main component
const WhoIWorkWith = ({
              title = "Who I Work With",
              clientData = [
                  {
                      image: 'https://joiwhitmore.com/wp-content/uploads/2025/02/piano-man-300.png',
                      description: 'People who are high-achievers but exhausted from carrying too much—whether in relationships, work, or both.'
                  },
                  {
                      image: 'https://joiwhitmore.com/wp-content/uploads/2025/02/woman-in-chains-300.png',
                      description: 'Women who are waking up to the truth that their power was never in the hustle—but in the wisdom of the feminine they were taught to ignore.'
                  },
                  {
                      image: 'https://joiwhitmore.com/wp-content/uploads/2025/02/self-aware-300.png',
                      description: 'Smart, self-aware people who\'ve done all the \'inner work\'—but still feel like something isn\'t clicking.'
                  }
              ],
              buttonText = "FIND OUT IF WE ARE A GOOD FIT",
              buttonLink = "#"
          }) => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 heading-secondary">{title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {clientData.map((client, index) => (
                        <ClientCard
                            key={index}
                            image={client.image}
                            description={client.description}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href={buttonLink}
                        className="inline-block bg-green-100 hover:bg-green-200 text-green-800 font-medium py-3 px-6 rounded-md transition duration-300"
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhoIWorkWith;