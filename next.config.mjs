/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

// Bundle analyzer (optional, run with ANALYZE=true)
const withBundleAnalyzer = (config) => {
  if (process.env.ANALYZE === 'true') {
    const { default: analyzer } = require('@next/bundle-analyzer')({
      enabled: true,
    })
    return analyzer(config)
  }
  return config
}

export default withBundleAnalyzer(nextConfig)
