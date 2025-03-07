// components/HeroHeading.jsx

"use client";
import React from "react";

function HeroHeading() {
    return (
        <div className="flex flex-col md:flex-row md:items-baseline mb-8">
            <h1 className="mb-1 text-4xl md:text-3xl heading-primary flex-2/3">
                Break the Patterns.
            </h1>
            <h2 className="text-5xl accent-text flex-2/3 text-right md:text-left sm:pt-2">
                Rewrite Your Story.
            </h2>
        </div>
    );
}

export default HeroHeading;