import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
        {
          source: "/",
          destination: "/login",
        },
        {
          source: "/home",
          destination: "/home",
        },
        {
          source: "/cadastro",
          destination: "/cadastro"
        },
        {
          source: "/forum",
          destination: "/forum",
        },
        {
          source: "/discosion",
          destination: "/discosion",
        },
        {
          source: "/project",
          destination: "/project"
        },
        {
          source: "/profile",
          destination: "/profile"
        },
        {
          source: "/novoProjeto",
          destination: "/novoProjeto"
        },
        {
          source: "/users",
          destination: "/users"
        }
    ];
}
};

export default nextConfig;
