// lib/api.js
// This file contains functions to fetch data from the WordPress site using GraphQL.
import graphQLClient from './graphql-client';

export async function getSiteInfo() {
    const query = `
    query SiteInfo {
      generalSettings {
        title
        description
        url
      }
    }
  `;

    try {
        const data = await graphQLClient.request(query);

        return {
            title: data.generalSettings.title,
            description: data.generalSettings.description,
            url: data.generalSettings.url
        };
    } catch (error) {
        console.error('Error fetching site info:', error);
        return {
            title: 'Joi Whitmore', // Fallback title
            description: '',
            url: ''
        };
    }
}

export async function getAllPosts() {
    const query = `
    query AllPosts {
      posts(first: 20) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

    try {
        const data = await graphQLClient.request(query);
        return data.posts.nodes;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getHomePageData() {
    const query = `
    query HomePageData {
      page(id: "1169", idType: DATABASE_ID) {
        title
        homepageContent {
          mainHero {
            heroHeadline
            heroSubheader
            heroIntroText
          }
        }
      }
    }
  `;

    try {
        const data = await graphQLClient.request(query);
        return data?.page || null;
    } catch (error) {
        console.error('Error fetching homepage data:', error);
        return null;
    }
}

export async function getPostBySlug(slug) {
    const query = `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

    const variables = { slug };
    try {
        const data = await graphQLClient.request(query, variables);
        return data.post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

export async function getAllPostSlugs() {
    const query = `
    query AllPostSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

    try {
        const data = await graphQLClient.request(query);
        return data.posts.nodes;
    } catch (error) {
        console.error('Error fetching post slugs:', error);
        return [];
    }
}

export async function getMainMenu() {
    const query = `
    query MainMenu {
      menus {
        nodes {
          name
          slug
          menuItems {
            nodes {
              id
              path
              label
              parentId
              url
              target
            }
          }
        }
      }
    }
  `;

    try {
        const data = await graphQLClient.request(query);

        // Find the primary/main menu - you might need to adjust this logic
        // depending on how your menus are named in WordPress
        const mainMenu = data.menus.nodes.find(
            menu => menu.slug === 'primary' || menu.slug === 'main-menu' || menu.name.includes('Primary')
        );

        if (!mainMenu) {
            console.log('Menu not found. Available menus:', data.menus.nodes.map(m => m.name));
            return [];
        }

        return mainMenu.menuItems.nodes || [];
    } catch (error) {
        console.error("Error fetching menu:", error);
        return []; // Return empty array as fallback
    }
}