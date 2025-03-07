// components/SEO.js
import { NextSeo } from 'next-seo';

export default function SEO({ title, description, url, imageUrl }) {
    return (
        <NextSeo
            title={title}
            description={description}
            canonical={url}
            openGraph={{
                url,
                title,
                description,
                images: imageUrl ? [{ url: imageUrl }] : [],
            }}
        />
    );
}