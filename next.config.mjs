/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "bolympics-image-store-prod.s3.amazonaws.com",
      "https://lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
