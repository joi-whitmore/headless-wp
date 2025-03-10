import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '/styles/BlogGrid.module.css';

const BlogGrid = ({ posts }) => {
    // Sample posts data - replace with your actual data
    const samplePosts = [
        {
            id: 1,
            slug: 'the-music-of-me',
            title: 'THE MUSIC OF ME: A JOURNEY THROUGH SOUND AND SOUL',
            excerpt: 'A few years ago, I declared to the Universe that I wanted to find a true community—a space where I could be my most authentic self. I had no idea then that my journey would not only bring me deep, meaningful connections through coaching',
            image: '/images/music-soundtrack-of-life.jpg',
        },
        {
            id: 2,
            slug: 'my-naked-arm',
            title: 'MY NAKED ARM',
            excerpt: 'My naked arm was once enslaved by my obscene loyalty to the Corporate World of Conformity. Now freed, the open-air sleeve on my left arm tells my story of discovery and truth. The was first uprising by my soul to express its true self came in the form of a small Buddhist mantra...',
            image: '/images/the-naked-arm.jpg',
        },
        {
            id: 3,
            slug: '5-ways-changing-my-thinking',
            title: '5 WAYS CHANGING MY THINKING CHANGED MY LIFE',
            excerpt: 'Deciding to enroll in the Martha Beck Wayfinder Life Coach Training was a decision that definitely came from my soul. I awoke in the wee hours of the morning after reading her book, "Finding Your Way in a Wild New World"...',
            image: '/images/joi-book-1.jpg',
        }
    ];

    // Use passed posts or sample posts if none provided
    const blogPosts = posts || samplePosts;

    // Split the posts: first one for featured, rest for the grid
    const featuredPost = blogPosts[0];
    const gridPosts = blogPosts.slice(1);

    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.blogGrid}>
                    {/* Featured post (larger, on the left) */}
                    {featuredPost && (
                        <div className={styles.featuredPost}>
                            <Link href={`/blog/${featuredPost.slug}`} className={styles.postLink}>
                                <div className={styles.featuredImageContainer}>
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className={styles.postImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className={styles.featuredOverlay}>
                                        <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                                    </div>
                                </div>
                                <div className={styles.postMeta}>
                                    <time dateTime={featuredPost.date}>
                                        {featuredPost.date}
                                    </time>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Grid posts (smaller, on the right) */}
                    <div className={styles.postsGrid}>
                        {gridPosts.map(post => (
                            <div key={post.id} className={styles.gridPost}>
                                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                                    <div className={styles.gridImageContainer}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className={styles.postImage}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className={styles.gridContent}>
                                        <h3 className={styles.gridTitle}>{post.title}</h3>
                                        <div className={styles.postMeta}>
                                            <time dateTime={post.date}>
                                                <span className={styles.calendarIcon}>📅</span> {post.date}
                                            </time>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;