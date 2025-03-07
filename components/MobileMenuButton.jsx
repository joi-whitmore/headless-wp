import React from "react";

function MobileMenuButton({ isOpen, onClick }) {
    return (
        <button
            className="hidden max-sm:block max-sm:text-2xl max-sm:text-black"
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            <i className="ti ti-menu-2" />
        </button>
    );
}

export default MobileMenuButton;