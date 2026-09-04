import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acriotech — Enterprise Software Engineering",
    short_name: "Acriotech",
    description: "Enterprise software, AI, cloud and automation engineering — Bhavnagar HQ, global delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#4B61B8",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/custom-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
