import type { NextConfig } from "next";

const nextConfig = {
  rewrites: () => {
    return [
      {
        source: "/",
        destination: "/login"
      },
      {
        source: "/home",
        destination: "/home"
      },
      {
        source: "/cadastro",
        destination: "/cadastro"
      },
    ]
  }
};

export default nextConfig;
