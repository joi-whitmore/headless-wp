import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPostBySlug } from '../../lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function Post() {
    const router = useRouter();
    const { slug } = router.query;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            if (slug) {
                try {
                    const postData = await getPostBySlug(slug);
                    setPost(postData);
                } catch (error) {
                    console.error('Error loading post:', error);
                } finally {
                    setLoading(false);
                }
            }
        }

        if (slug) {
            loadPost();
        }
    }, [slug]);

    if (!slug) return null;
    if (loading) return <div className="max-w-4xl mx-auto px-4"><p>Loading post...</p></div>;
    if (!post) return <div className="max-w-4xl mx-auto px-4"><p>Post not found</p></div>;

    return (
        <div className="max-w-4xl mx-auto px-4">
            <header className="py-6 border-b mb-8">
                <div className="text-2xl font-bold">
                    <Link href="/" className="hover:text-gray-700">
                        Your Site Name
                    </Link>
                </div>
            </header>

            <main>
                <article>
                    <header className="mb-8">
                        <h1
                            className="text-3xl font-bold mb-2"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                        <time className="text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                        </time>
                    </header>

                    {post.featuredImage?.node && (
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || ''}
                            width={800}
                            height={500}
                            className="w-full h-auto mb-8 rounded-lg"
                        />
                    )}

                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>

            <footer className="py-6 mt-12 border-t">
                <p>© {new Date().getFullYear()} Your Site Name</p>
            </footer>
        </div>
    );
}