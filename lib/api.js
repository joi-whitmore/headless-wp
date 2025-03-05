import graphQLClient from './graphql-client';

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

    const data = await graphQLClient.request(query);
    return data.posts.nodes;
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
    const data = await graphQLClient.request(query, variables);
    return data.post;
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

    const data = await graphQLClient.request(query);
    return data.posts.nodes;
}