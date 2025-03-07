// pages/posts/[slug].js
import Layout from '../../components/Layout';
import { getPostBySlug, getAllPostSlugs, getMainMenu } from '@/lib/api';

export default function Post({ post, menuItems }) {
    if (!post) {
        return <Layout menuItems={menuItems}>Post not found</Layout>;
    }

    return (
        <Layout title={post.title} menuItems={menuItems}>
            <div className="container mx-auto px-4 py-8">
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
                        <img
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || ''}
                            className="w-full h-auto mb-8 rounded-lg"
                        />
                    )}

                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const posts = await getAllPostSlugs();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    try {
        const post = await getPostBySlug(params.slug);
        const menuItems = await getMainMenu();

        if (!post) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                post,
                menuItems,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            notFound: true,
        };
    }
}