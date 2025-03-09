// pages/api/subscribe.js

export default async function handler(req, res) {
    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { firstName, email } = req.body;

        // Basic validation
        if (!firstName || !email) {
            return res.status(400).json({ message: 'First name and email are required' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // MailerLite API credentials
        // Get these from environment variables
        const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
        const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

        if (!MAILERLITE_API_KEY) {
            console.error('MailerLite API key not found');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        // Prepare subscriber data
        const subscriberData = {
            email: email,
            fields: {
                name: firstName
            },
            groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : []
        };

        // MailerLite API v2 endpoint
        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`
            },
            body: JSON.stringify(subscriberData)
        });

        const data = await response.json();

        // Check for API errors
        if (!response.ok) {
            console.error('MailerLite API error:', data);
            return res.status(response.status).json({
                message: data.message || 'Error connecting to newsletter service'
            });
        }

        // Success
        return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}