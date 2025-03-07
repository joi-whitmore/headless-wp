// components/Layout.js

import Head from 'next/head';
import Navbar from './Navbar';
import MainHero from "@/components/MainHero";


export default function Layout({ children, title = 'Joi Whitmore', menuItems = [] }) {
    return (
        <div className="min-h-screen flex flex-col text-gray-900">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Joi Whitmore's website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar menuItems={menuItems}/>

            <MainHero/>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="py-6 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} Joi Whitmore</p>
                </div>
            </footer>
        </div>
    );
}