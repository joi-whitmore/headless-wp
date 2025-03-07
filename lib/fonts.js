import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

// Load Montserrat from Google Fonts
export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

// Load Stay Classy from local files
export const stayClassy = localFont({
    src: [
        {
            path: '../public/fonts/StayClassy.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/StayClassy.woff',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-stayclassy',
    display: 'swap',
});