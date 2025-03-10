// pages/index.js

import Link from 'next/link';
import Layout from '../components/Layout';
import {getAllPosts, getHomePageData, getMainMenu, getSiteInfo} from '@/lib/api';

export default function Home({ posts, menuItems, siteInfo, pageData }) {
  return (
      <Layout title={`Home | ${siteInfo.title}`} menuItems={menuItems} pageData={pageData}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
                <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
                  {post.featuredImage?.node && (
                      <img
                          src={post.featuredImage.node.sourceUrl}
                          alt={post.featuredImage.node.altText || ''}
                          className="w-full h-48 object-cover"
                      />
                  )}

                  <div className="p-4">
                    <h2
                        className="text-xl font-semibold mb-2"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                    />

                    <div
                        className="text-gray-600 mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />

                    <Link
                        href={`/posts/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </Layout>
  );
}

export async function getStaticProps() {
  try {
    const posts = await getAllPosts();
    const pageData = await getHomePageData();
    const menuItems = await getMainMenu();
    const siteInfo = await getSiteInfo();

    return {
      props: {
        posts,
        menuItems,
        siteInfo,
        pageData
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        posts: [],
        menuItems: [],
        pageData: null,
        siteInfo: {
          title: 'Joi Whitmore', // Fallback title
          description: '',
          url: ''
        }
      },
      revalidate: 10,
    };
  }
}