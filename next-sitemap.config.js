/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/admin/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin"] },
    ],
  },
  transform: async (config, path) => {
    // Assign higher priority to key pages
    let priority = 0.5;
    if (path === "/") priority = 1.0;
    else if (path.startsWith("/guides")) priority = 0.8;
    else if (path.startsWith("/vendors")) priority = 0.7;

    return {
      loc: path,
      changefreq: "weekly",
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
