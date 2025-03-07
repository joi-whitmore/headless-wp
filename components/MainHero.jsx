"use client";
import React from "react";
import HeroHeading from "./HeroHeading";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function MainHero() {
    return (
        <section className="pt-16 px-6 md:px-20 w-full bg-(--sage-50)">
            <div className="container mx-auto max-w-[1120px]">
                <div className="flex gap-8 items-center max-md:flex-col">
                    <div className="w-full md:w-1/2 max-md:order-2">
                        <div className="max-w-xl">
                            <HeroHeading />
                            <HeroContent />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 max-md:order-1">
                        <HeroImage />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainHero;
