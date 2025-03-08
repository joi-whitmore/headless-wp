"use client";
import React from "react";
import HeroHeading from "./HeroHeading";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function MainHero({ heroData }) {
    const {
        heroHeadline = "Break the Patterns. fallback",
        heroSubheader = "Rewrite Your Story. fallback",
        heroIntroText = "You've done the work...",
        heroImage = { sourceUrl: "/images/default-hero.jpg", altText: "Joi Whitmore" },
    } = heroData || {};

    return (
        <section className="pt-16 px-6 md:px-20 w-full bg-(--sage-50) mh-[400px] pattern-bg">
            <div className="container mx-auto max-w-[1120px] pt-16">
                <div className="flex gap-8 items-center max-md:flex-col">
                    <div className="w-full md:w-2/3 max-md:order-1">
                        <div className="w-full">
                            <HeroHeading title={heroHeadline} subtitle={heroSubheader}/>
                            <HeroContent content={heroIntroText}/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 max-md:order-2">
                        <HeroImage img={heroImage}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainHero;
