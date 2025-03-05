import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Headless WordPress' }) {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Headless WordPress with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="py-6 border-b mb-8">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <Link href="/" className="hover:text-gray-700">
                            Your Site Name
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/" className="hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-600">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>{children}</main>

            <footer className="py-6 mt-12 border-t">
                <p>© {new Date().getFullYear()} Your Site Name</p>
            </footer>
        </div>
    );
}