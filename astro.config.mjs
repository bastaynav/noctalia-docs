// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { remarkHeadingId } from "remark-custom-heading-id";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Noctalia Docs",
      logo: { src: "./src/assets/noctalia-logo.svg", alt: "Noctalia" },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.noctalia.dev",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/noctalia-dev",
        },
      ],
      customCss: ["./src/styles/theme.css"],
      tableOfContents: true,
      sidebar: [
        {
          label: "Getting started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Configuration",
          autogenerate: { directory: "configuration" },
        },
        {
          label: "Development",
          autogenerate: { directory: "development" },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkHeadingId],
  },
});
