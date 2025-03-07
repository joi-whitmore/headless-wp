// components/Navbar.jsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";

function Navbar({ menuItems = [] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Determine whether to use dynamic menuItems from WordPress or fallback to static items
    const hasMenuItems = Array.isArray(menuItems) && menuItems.length > 0;

    // Define fallback navigation items if no menuItems are provided
    const fallbackNavItems = [
        { label: "About", path: "/about" },
        { label: "Work with Me", path: "/work-with-me" },
        { label: "Stories", path: "/stories" }
    ];

    // Use WordPress menuItems if available, otherwise use fallback
    const navigationItems = hasMenuItems ? menuItems : fallbackNavItems;

    return (
        <header className="flex justify-center items-center w-full bg-white h-[130px]">
            <nav className="flex justify-between items-center px-56 py-0 w-full max-w-[1512px] max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
                <Link href="/" className="text-decoration-none">
                    <h1 className="text-4xl text-black site-title">Joi Whitmore</h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="flex gap-8 items-center max-sm:hidden">
                    {navigationItems.map((item, index) => (
                        <NavLink
                            key={index}
                            text={item.label || item.title}
                            href={item.path || item.url}
                        />
                    ))}
                    <Link
                        href="#"
                        className="px-6 py-3 ml-10 text-sm font-medium text-white bg-[#8e2249] rounded cursor-pointer font-montserrat hover:bg-[#7a1d3e] transition duration-200"
                    >
                        LET'S HAVE A CHAT
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />

                {/* Mobile Menu (conditionally rendered) */}
                {isMenuOpen && (
                    <div className="fixed top-[130px] left-0 right-0 bg-white p-5 shadow-md z-50 sm:hidden">
                        <div className="flex flex-col gap-4">
                            {navigationItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    text={item.label || item.title}
                                    href={item.path || item.url}
                                />
                            ))}
                            <Link
                                href="#"
                                className="px-6 py-3 text-sm font-medium text-white bg-[#8e2249] rounded cursor-pointer font-montserrat hover:bg-[#7a1d3e] transition duration-200"
                            >
                                LET'S HAVE A CHAT
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;