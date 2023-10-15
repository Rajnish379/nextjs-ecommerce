/** @type {import('next').NextConfig} */
const nextConfig = {
    // We need to add these three lines below if we want to write use server; in any of our components
    images: {
        remotePatterns: [{hostname: "images.unsplash.com" },{hostname: "plus.unsplash.com"}],
    },
    experimental:{
        serverActions: true
    }
}

module.exports = nextConfig
