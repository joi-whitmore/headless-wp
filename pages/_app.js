import { montserrat, stayClassy } from '@/lib/fonts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <main className={`${montserrat.variable} ${stayClassy.variable}`}>
        <Component {...pageProps} />
      </main>
  );
}

export default MyApp;