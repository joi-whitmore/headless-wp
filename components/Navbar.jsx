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
            <div className="w-full px-5 md:px-10 lg:px-16 xl:px-56">
                <nav className="flex justify-between items-center w-full">
                    <Link
                        href="/" className="text-decoration-none">
                        <h1 className="text-4xl text-black site-title">Joi Whitmore</h1>
                    </Link>

                    {/* Desktop Navigation - hide when below 960px (lg) */}
                    <div className="flex gap-8 items-center max-lg:hidden">
                        {navigationItems.map((item, index) => (
                            <NavLink
                                key={index}
                                text={item.label || item.title}
                                href={item.path || item.url}
                            />
                        ))}
                        <Link
                            href="#"
                            className="btn-primary"
                        >
                            LET'S HAVE A CHAT
                        </Link>
                    </div>

                    {/* Mobile Menu Button - only show below 960px (lg) */}
                    <div className="hidden max-lg:block">
                        <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu}/>
                    </div>

                    {/* Mobile Menu - only show when menu is open and below 960px (lg) */}
                    {isMenuOpen && (
                        <div className="fixed top-[130px] left-0 right-0 bg-white p-5 shadow-md z-50 lg:hidden">
                            <div className="flex flex-col gap-4">
                                {navigationItems.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        text={item.label || item.title}
                                        href={item.path || item.url}
                                    />
                                ))}
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 text-sm font-medium text-white bg-[#8e2249] rounded cursor-pointer font-montserrat hover:bg-[#7a1d3e] transition duration-200 text-center mt-2"
                                >
                                    LET'S HAVE A CHAT
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
);
}

export default Navbar;