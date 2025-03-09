

"use client";
import React from "react";
import Image from "next/image";

function HeroImage() {
    return (
        <div className="relative h-full">
            <Image
                src="/images/main-image.png" // Update this with your actual image path
                alt="Joi Whitmore"
                width={600}
                height={800}
                className="object-cover h-full"
                style={{
                    objectPosition: "center",
                    marginBottom: 0,
                    display: "block"
                }}
                priority
            />
        </div>
    );
}

export default HeroImage;