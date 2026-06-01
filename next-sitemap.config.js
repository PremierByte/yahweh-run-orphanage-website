module.exports = {
  siteUrl: "https://yahwehrunorphanage.org",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin", "/dashboard", "/auth"],
      },
    ],
  },
};
