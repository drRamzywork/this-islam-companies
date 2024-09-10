/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "compaines.thisislam.net",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
