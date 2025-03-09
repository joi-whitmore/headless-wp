// components/HeroHeading.jsx

"use client";
import React from "react";

function HeroHeading({title, subtitle}) {
    return (
        <div className="flex flex-col md:flex-row md:items-baseline mb-8">
            <h1 className="mb-1 heading-primary flex-2/3">
                {title}
            </h1>
            <h2 className="text-5xl accent-text text-(--burgundy) flex-2/3 text-right md:text-left sm:pt-2">
                {subtitle}
            </h2>
        </div>
    );
}

export default HeroHeading;