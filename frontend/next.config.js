/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "http://localhost:5001/login"
      },
      {
        source: "/api/register",
        destination: "http://localhost:5001/register"
      },
      {
        source: "/api/user",
        destination: "http://localhost:5001/user"
      },
      {
        source: "/api/user/all",
        destination: "http://localhost:5001/user/all"
      },
      {
        source: "/api/user/addMoney",
        destination: "http://localhost:5001/user/addMoney"
      },
      {
        source: "/api/user/exoense",
        destination: "http://localhost:5001/user/expense"
      },
      {
        source: "/api/",
        destination: "http://localhost:5001/"
      }
    ]
  }
}

module.exports = nextConfig
