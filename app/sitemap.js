export default function sitemap() {
  const baseUrl = "https://www.masattorneys.co.za";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#practice-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/commercial-litigation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/debt-collection`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/debt-review`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/divorce-matters`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/family-law`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/road-accident-fund`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/third-party-claims`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/areas/wills-estates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/articles/commercial-lease`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/articles/divorce-rights`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/articles/unfair-dismissal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/popia-notice`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}