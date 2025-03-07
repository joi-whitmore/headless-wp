export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        // Revalidate the home page
        await res.revalidate('/');

        // If specific post slug is provided
        if (req.query.slug) {
            await res.revalidate(`/posts/${req.query.slug}`);
        }

        return res.json({ revalidated: true });
    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
}