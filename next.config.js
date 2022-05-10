const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3'

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
      {
        source: "/api/movies/:id",
        destination: `${BASE_URL}/movie/:id?api_key=${API_KEY}`,
        permanent: true,
      },
      {
        source: "/serverMain",
        destination: "/serverMain/1",
        permanent: true,
      },
      {
        source: "/serverMain/0",
        destination: "/serverMain/1",
        permanent: true,
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `${BASE_URL}/movie/:id?api_key=${API_KEY}`
      }
    ];
  },
  images: {
    domains: ['image.tmdb.org'],
  }
};