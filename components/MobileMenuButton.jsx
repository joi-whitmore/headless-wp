// components/MobileMenuButton.jsx

import React from "react";

function MobileMenuButton({ isOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            className="hidden max-lg:flex flex-col justify-center items-center w-10 h-10 border-none bg-transparent cursor-pointer focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <span
                className={`block w-6 h-0.5 bg-black mb-1.5 transition-transform duration-300 ${
                    isOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
            />
            <span
                className={`block w-6 h-0.5 bg-black mb-1.5 transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                    isOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
            />
        </button>
    );
}

export default MobileMenuButton;