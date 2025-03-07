"use client";
import React from "react";

function HeroContent({ content }) {
    return (
        <div className="mt-6">
            <p className="max-w-md text-lg text-[#4a5145] leading-relaxed">
                {content}
            </p>
        </div>
    );
}

export default HeroContent;