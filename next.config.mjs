/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.valorant-api.com",
        port: "",
        pathname: "/agents/**", // Assuming the images are under the '/agents/' path
      },
    ],
  },
};

export default nextConfig;
