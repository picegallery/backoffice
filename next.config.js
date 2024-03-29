/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_AWS_BUCKET]
  }
}

module.exports = nextConfig
