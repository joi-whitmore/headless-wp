import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Montserrat font from Google Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
                {/* Playfair Display font from Google Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
                {/* For Stay Classy, you'll need to add custom font files */}
                <style>{`
          @font-face {
            font-family: 'Stay Classy';
            src: url('/fonts/StayClassy.woff2') format('woff2'),
                 url('/fonts/StayClassy.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}