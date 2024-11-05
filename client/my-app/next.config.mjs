/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.External_Domain_NextJsAccess], // Add the external image domain here
      },
};

export default nextConfig;
