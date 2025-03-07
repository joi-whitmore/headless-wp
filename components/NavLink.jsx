// components/NavigationBar.jsx

import React from "react";
import Link from "next/link";

function NavLink({ text, href = "#" }) {
    return (
        <Link
            href={href}
            className="text-base leading-8 text-black cursor-pointer font-montserrat hover:text-burgundy transition duration-200"
        >
            {text}
        </Link>
    );
}

export default NavLink;