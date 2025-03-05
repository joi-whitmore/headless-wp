import { GraphQLClient } from 'graphql-request';

// Add better error handling and logging
const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

if (!endpoint) {
    console.error('WordPress GraphQL endpoint URL is undefined. Make sure NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL is set in ..env.local');
}

const graphQLClient = new GraphQLClient(endpoint || 'http://localhost:3000'); // Fallback URL to prevent crash

export default graphQLClient;