// components/HeroHeading.jsx

"use client";
import React from "react";

function HeroHeading() {
    return (
        <div className="mb-2 flex">
            <h1 className="mb-1 text-5xl text-[#4a5145] font-['Playfair_Display'] flex-2/3">
                Break the Patterns.
            </h1>
            <h2 className="text-5xl accent-text flex-2/3">
                Rewrite Your Story.
            </h2>
        </div>
    );
}

export default HeroHeading;