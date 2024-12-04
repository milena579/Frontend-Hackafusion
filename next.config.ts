import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
          source: "/register",
          destination: "/register"
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
        }
    ];
}
};

export default nextConfig;
