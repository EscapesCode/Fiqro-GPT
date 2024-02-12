/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// const withPWA = require('next-pwa')

// const nextConfig = {
// 	dest: 'public',
// 	register: true,
// 	skipWaiting: true,
// 	reactStrictMode: true,
// }

// module.exports = nextConfig


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'production'
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = withPWA(nextConfig)