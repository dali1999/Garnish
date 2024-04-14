/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '*', 'www.thecocktaildb.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
