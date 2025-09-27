// Robots.txt Generator for ReplAInow
interface RobotsConfig {
  allowAIBots: boolean;
  allowCrawling: boolean;
  sitemapUrl: string;
  customRules?: Array<{ userAgent: string; rules: Array<{ type: 'allow' | 'disallow'; path: string }> }>;
}

const baseUrl = 'https://replainow.com';

// Default robots.txt configuration
export const generateRobotsTxt = (config: RobotsConfig): string => {
  const { allowAIBots, allowCrawling, sitemapUrl, customRules } = config;
  
  let robots = '';
  
  // Default rules for all user agents
  robots += 'User-agent: *\n';
  if (allowCrawling) {
    robots += 'Allow: /\n';
    robots += 'Disallow: /api/\n';
    robots += 'Disallow: /admin/\n';
    // Assets & JSON generell erlaubt, um Rendering/Schema/AEO nicht zu bremsen:
    // (Parameter-Handling via Canonical/Sitemaps, nicht per robots blocken)
    robots += 'Allow: /.well-known/llm-facts.json\n';
    robots += 'Allow: /sitemap.xml\n';
    robots += 'Disallow: /404\n';
    robots += 'Disallow: /500\n';
  } else {
    robots += 'Disallow: /\n';
  }
  
  // AI Bot specific rules
  if (allowAIBots) {
    const aiBots = ['GPTBot','OAI-SearchBot','PerplexityBot','Perplexity-User','anthropic-ai','ClaudeBot'];
    
    aiBots.forEach((bot) => {
      robots += `\nUser-agent: ${bot}\n`;
      if (allowCrawling) {
        robots += 'Allow: /\n';
        robots += 'Disallow: /api/\n';
        robots += 'Disallow: /admin/\n';
      } else {
        robots += 'Disallow: /\n';
      }
    });
  }
  
  // Google Bot specific rules
  robots += '\nUser-agent: Googlebot\n';
  if (allowCrawling) {
    robots += 'Allow: /\n';
    robots += 'Disallow: /api/\n';
    robots += 'Disallow: /admin/\n';
    robots += 'Allow: /.well-known/llm-facts.json\n';
    robots += 'Allow: /sitemap.xml\n';
  } else {
    robots += 'Disallow: /\n';
  }
  
  // Bing Bot specific rules
  robots += '\nUser-agent: Bingbot\n';
  if (allowCrawling) {
    robots += 'Allow: /\n';
    robots += 'Disallow: /api/\n';
    robots += 'Disallow: /admin/\n';
    robots += 'Allow: /.well-known/llm-facts.json\n';
    robots += 'Allow: /sitemap.xml\n';
  } else {
    robots += 'Disallow: /\n';
  }
  
  // Custom rules
  if (customRules) {
    customRules.forEach(rule => {
      robots += `\nUser-agent: ${rule.userAgent}\n`;
      rule.rules.forEach(ruleItem => {
        robots += `${ruleItem.type}: ${ruleItem.path}\n`;
      });
    });
  }
  
  // Sitemap reference
  robots += `\nSitemap: ${sitemapUrl}`;
  
  return robots;
};

// Production robots.txt
export const productionRobots = generateRobotsTxt({
  allowAIBots: true,
  allowCrawling: true,
  sitemapUrl: `${baseUrl}/sitemap.xml`,
  customRules: [
    {
      userAgent: 'GPTBot',
      rules: [
        { type: 'allow', path: '/' },
        { type: 'disallow', path: '/api/' },
        { type: 'disallow', path: '/admin/' }
      ]
    }
  ]
});

// Staging robots.txt
export const stagingRobots = generateRobotsTxt({
  allowAIBots: false,
  allowCrawling: false,
  sitemapUrl: `${baseUrl}/sitemap.xml`
});

// Development robots.txt
export const developmentRobots = generateRobotsTxt({
  allowAIBots: false,
  allowCrawling: false,
  sitemapUrl: `${baseUrl}/sitemap.xml`
});

// Get robots.txt based on environment
export const getRobotsTxt = (environment: 'production' | 'staging' | 'development'): string => {
  const SEO_ENV = process.env.SEO_ENV || environment || 'development';
  const allowAIBots = (process.env.SEO_ALLOW_AI_BOTS ?? 'false') === 'true';
  
  switch (SEO_ENV) {
    case 'production':
      return generateRobotsTxt({
        allowAIBots: allowAIBots,
        allowCrawling: true,
        sitemapUrl: 'https://replainow.com/sitemap.xml'
      });
    case 'staging':
      return generateRobotsTxt({
        allowAIBots: false,
        allowCrawling: false,
        sitemapUrl: 'https://replainow.com/sitemap.xml'
      });
    case 'development':
    default:
      return generateRobotsTxt({
        allowAIBots: false,
        allowCrawling: false,
        sitemapUrl: 'https://replainow.com/sitemap.xml'
      });
  }
};
