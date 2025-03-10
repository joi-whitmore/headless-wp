// components/Layout.js

import Head from 'next/head';
import Navbar from './Navbar';
import MainHero from "@/components/MainHero";
import ValueProposition from "@/components/ValueProposition";
import AboutSection from "@/components/AboutSection";
import WhoIWorkWith from "@/components/WorkWith";
import WorkWeDo from "@/components/WorkWeDo";
import HowCanIHelp from "@/components/HowCanIHelp";
import NewsletterSignup from "@/components/SignUp";
import TestimonialSection from "@/components/TestimonialSection";
import {Footer} from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";

export default function Layout({ children, title = 'Joi Whitmore', menuItems = [], pageData }) {
    return (
        <div className="min-h-screen flex flex-col text-gray-900">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Joi Whitmore's website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar menuItems={menuItems}/>

            <MainHero heroData={pageData?.homepageContent?.mainHero}/>

            <ValueProposition />

            <AboutSection />

            <WhoIWorkWith />

            <WorkWeDo />

            <HowCanIHelp />

            <NewsletterSignup />

            <TestimonialSection />
            <BlogGrid />

            <Footer />
        </div>
    );
}