/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // Your local origin
        '1md5h5np-3000.inc1.devtunnels.ms', // The dev tunnel host from the error message
        // You can add other trusted origins here if needed
      ],
    },
  },
};


export default nextConfig;
