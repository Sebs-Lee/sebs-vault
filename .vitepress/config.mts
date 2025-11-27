import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",

    title: "Sebs' Knowledge Vault",
    description: "Explore the curated notes and insights from Sebastian.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Post", link: "/post/Readme.md" },
        ],

        sidebar: generateSidebar([
            {
                documentRootPath: "docs",
                scanStartPath: "post",
                resolvePath: "/post/",
                collapsed: true,
                // useTitleFromFrontmatter: true
            },
        ]),

        footer: {
            message:
                "<a href='http://beian.miit.gov.cn/'>粤ICP备2025499035号-1</a>",
            copyright: "Copyright © 2025 Sebs-Lee",
        },

        socialLinks: [{ icon: "github", link: "https://github.com/Sebs-Lee" }],
    },
});
