/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://google.com */
  siteUrl: 'https://github.com/tigbbit/Next-MUI-TS-Jest-template',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
