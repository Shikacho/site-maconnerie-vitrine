/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://maison-talbat.com",
  generateRobotsTxt: true, // génère aussi /robots.txt
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*"], // on exclut les API routes
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [], // tu peux en ajouter plus tard si besoin
  },
};
