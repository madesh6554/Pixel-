// All 6 service pages — full content data

export const servicesData = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'Globe',
    color: '#8B5CF6',
    tagline: 'Every click, a conversation. Every conversion, a story.',
    heroDesc:
      "We build digital ecosystems that keep your brand top-of-mind, every hour of every day. From content strategy to analytics, we run the full digital marketing lifecycle — so you grow while you sleep.",
    offerings: [
      { icon: 'Calendar', title: 'Content Strategy & Planning', desc: 'Monthly content calendars aligned with your brand voice and business goals.' },
      { icon: 'BarChart2', title: 'Campaign Management', desc: 'End-to-end multi-channel campaigns — planned, executed, and optimised.' },
      { icon: 'Mail', title: 'Email Marketing', desc: 'Sequences that nurture leads and convert prospects into paying customers.' },
      { icon: 'PieChart', title: 'Analytics & Reporting', desc: 'Clear dashboards showing what\'s working and exactly what to improve.' },
      { icon: 'Megaphone', title: 'Brand Content Creation', desc: 'Reels, graphics, carousels, and copy built to stop the scroll.' },
      { icon: 'Share2', title: 'Social Media Management', desc: 'Consistent publishing, engagement, and community growth across platforms.' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'We map your current digital presence and surface the gaps your competitors are exploiting.' },
      { step: '02', title: 'Strategy', desc: 'A 90-day plan tailored to your goals, audience, and competitive landscape.' },
      { step: '03', title: 'Execute', desc: 'We deploy content, campaigns, and tracking systems — no half-measures.' },
      { step: '04', title: 'Optimise', desc: 'Weekly data review to refine, scale what works, and cut what doesn\'t.' },
    ],
    whyPixel: [
      { icon: 'Target', title: 'Strategy Before Tactics', desc: 'We don\'t post for the sake of it. Every piece of content has a role in your growth funnel.' },
      { icon: 'TrendingUp', title: 'Data at the Core', desc: 'Our decisions come from your numbers, not gut feelings or industry trends.' },
      { icon: 'Zap', title: 'Speed Without Chaos', desc: 'Rapid execution with a system that keeps every campaign consistent and on-brand.' },
    ],
  },

  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'Code2',
    color: '#6366F1',
    tagline: 'Your website should be your best salesperson.',
    heroDesc:
      "We build websites that do more than look good — they load fast, convert visitors, and represent your brand with precision. No templates, no bloat. Purpose-built digital experiences that work 24/7.",
    offerings: [
      { icon: 'Layout', title: 'Landing Pages', desc: 'High-converting pages engineered for a single goal — lead capture, sales, or signups.' },
      { icon: 'Globe', title: 'Full Website Development', desc: 'Multi-page websites with clean architecture, fast performance, and a lasting impression.' },
      { icon: 'ShoppingCart', title: 'E-commerce Development', desc: 'Product catalogues, payment integrations, and conversion-focused UX that sells.' },
      { icon: 'Smartphone', title: 'Mobile-First Design', desc: 'Every site performs perfectly on any device — phone, tablet, or desktop.' },
      { icon: 'Zap', title: 'Speed & Performance Optimisation', desc: 'Core Web Vitals improvements for better Google rankings and lower bounce rates.' },
      { icon: 'Settings', title: 'CMS Integration', desc: 'Easy-to-manage content systems so you control your own site without a developer.' },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'We understand your business, your audience, and what you want visitors to do.' },
      { step: '02', title: 'Design', desc: 'Wireframes and mockups aligned with your brand — nothing goes to code until you\'re happy.' },
      { step: '03', title: 'Development', desc: 'Clean, fast, and scalable code built to grow with you.' },
      { step: '04', title: 'Launch & QA', desc: 'Thorough testing across browsers, devices, and load conditions before going live.' },
      { step: '05', title: 'Support', desc: 'Post-launch maintenance, updates, and performance monitoring.' },
    ],
    whyPixel: [
      { icon: 'Target', title: 'Built to Convert', desc: 'Every layout decision — button placement, headline order, CTA copy — is backed by conversion principles.' },
      { icon: 'Zap', title: 'Performance First', desc: 'We obsess over load speed because every extra second costs you customers.' },
      { icon: 'Shield', title: 'No Lock-In', desc: 'You own everything — code, content, domain. No proprietary platforms that trap you.' },
    ],
  },

  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    icon: 'Target',
    color: '#EC4899',
    tagline: 'Every rupee spent should return more than it costs.',
    heroDesc:
      "We run paid ads built around data, not guesswork. Whether it's Google, Meta, or YouTube — we find your audience, deliver the right message at the right moment, and scale only what converts.",
    offerings: [
      { icon: 'Search', title: 'Google Ads (Search & Display)', desc: 'Capture high-intent buyers who are actively searching for exactly what you offer.' },
      { icon: 'Globe', title: 'Meta Ads (Facebook & Instagram)', desc: 'Precision-targeted campaigns that reach the right people on the platforms they use most.' },
      { icon: 'Play', title: 'YouTube Advertising', desc: 'Video-first campaigns that build awareness, trust, and conversions at scale.' },
      { icon: 'RefreshCw', title: 'Retargeting Campaigns', desc: 'Re-engage visitors who didn\'t convert the first time — when intent is at its peak.' },
      { icon: 'MousePointer', title: 'Conversion Rate Optimisation', desc: 'Landing page testing to maximise every rupee of ad spend.' },
      { icon: 'BarChart2', title: 'Campaign Analytics & ROAS Tracking', desc: 'Transparent reporting with real return-on-ad-spend numbers, not vanity metrics.' },
    ],
    process: [
      { step: '01', title: 'Research', desc: 'Competitor analysis, audience research, and keyword mapping before a single rupee is spent.' },
      { step: '02', title: 'Plan', desc: 'Campaign structure, ad copy, creative brief, and targeting strategy — built for your budget.' },
      { step: '03', title: 'Launch', desc: 'Careful rollout with budget controls, bid strategies, and real-time monitoring.' },
      { step: '04', title: 'Monitor', desc: 'Daily checks on performance, spend efficiency, and conversion rates.' },
      { step: '05', title: 'Scale', desc: 'Double down on winning campaigns, cut losers fast, and expand into new audiences.' },
    ],
    whyPixel: [
      { icon: 'BarChart2', title: 'ROAS Transparency', desc: 'You see exactly where every rupee goes and what it returns. No hidden markups.' },
      { icon: 'Target', title: 'Creative That Converts', desc: 'Ad creative and copy built by people who understand both design and direct response.' },
      { icon: 'TrendingUp', title: 'Structured for Scale', desc: 'Campaigns set up from day one to scale without rebuilding from scratch.' },
    ],
  },

  {
    slug: 'branding',
    title: 'Branding',
    icon: 'Palette',
    color: '#F59E0B',
    tagline: 'People don\'t buy products. They buy identities.',
    heroDesc:
      "A great brand isn't just a logo — it's the feeling people get when they hear your name. We help you define who you are, what you stand for, and how the world should see you. Then we make it impossible to ignore.",
    offerings: [
      { icon: 'Pen', title: 'Logo Design & Visual Identity', desc: 'Logos, colour palettes, and typography systems that scale from business card to billboard.' },
      { icon: 'BookOpen', title: 'Brand Guidelines', desc: 'A complete rulebook so your brand stays consistent across every platform and touchpoint.' },
      { icon: 'MessageSquare', title: 'Brand Voice & Messaging', desc: 'Tone, language, and key messages that connect with your audience and stay in their memory.' },
      { icon: 'Target', title: 'Brand Strategy & Positioning', desc: 'How you\'re different, who you\'re for, and why they should choose you over every alternative.' },
      { icon: 'RefreshCw', title: 'Rebranding', desc: 'For brands that have outgrown their current identity and need to re-introduce themselves.' },
      { icon: 'Layers', title: 'Brand Collateral', desc: 'Business cards, pitch decks, social templates, and print materials that look unified.' },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'We go deep — stakeholder interviews, competitor analysis, and audience research.' },
      { step: '02', title: 'Strategy', desc: 'Your brand story, positioning, and differentiation — the foundation everything is built on.' },
      { step: '03', title: 'Design', desc: 'Logo, identity system, and brand assets created in multiple directions for review.' },
      { step: '04', title: 'Refine', desc: 'Iteration based on your feedback until every element feels exactly right.' },
      { step: '05', title: 'Deliver', desc: 'Complete brand guidelines + full asset package in every format you\'ll ever need.' },
    ],
    whyPixel: [
      { icon: 'Eye', title: 'Strategy First, Aesthetics Second', desc: 'Beautiful brands that don\'t have a strategy are just expensive decorations. We do both.' },
      { icon: 'Award', title: 'Built for Longevity', desc: 'Brands that look great in 2025 and still hold up in 2035.' },
      { icon: 'Users', title: 'For Every Touchpoint', desc: 'Digital, print, social, physical — your identity works everywhere we deliver it.' },
    ],
  },

  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimisation',
    icon: 'Search',
    color: '#10B981',
    tagline: 'The best place to hide something is page two of Google.',
    heroDesc:
      "We get your brand to the top of search results — and keep it there. Our SEO approach combines technical precision, content strategy, and authority building to deliver sustainable, compounding organic growth.",
    offerings: [
      { icon: 'Settings', title: 'Technical SEO Audit', desc: 'Site speed, crawlability, indexation, and architecture issues fixed from the ground up.' },
      { icon: 'FileText', title: 'On-Page SEO', desc: 'Keyword optimisation, meta tags, content structure, and internal linking done right.' },
      { icon: 'Link', title: 'Off-Page SEO & Link Building', desc: 'Quality backlinks from relevant sources that build domain authority over time.' },
      { icon: 'MapPin', title: 'Local SEO', desc: 'Google Business Profile optimisation, local citations, and map ranking for local searches.' },
      { icon: 'Pen', title: 'Content SEO', desc: 'Blog strategy and content creation built to rank, get shared, and convert readers.' },
      { icon: 'BarChart2', title: 'SEO Reporting & Rank Tracking', desc: 'Monthly reports on rankings, organic traffic, and the business impact of every improvement.' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'Full technical and content audit to find exactly what\'s holding your rankings back.' },
      { step: '02', title: 'Strategy', desc: 'Keyword research, content plan, and a link-building roadmap — prioritised by impact.' },
      { step: '03', title: 'Implementation', desc: 'On-page fixes, content creation, and technical improvements rolled out systematically.' },
      { step: '04', title: 'Track', desc: 'Monthly monitoring of rankings, organic traffic, and conversion from search.' },
      { step: '05', title: 'Scale', desc: 'Expand into new keyword clusters and markets as your authority grows.' },
    ],
    whyPixel: [
      { icon: 'TrendingUp', title: 'Compound Growth', desc: 'SEO builds on itself — the work done today pays dividends for years, not just the next month.' },
      { icon: 'Shield', title: 'White-Hat Only', desc: 'No shortcuts, no risky tactics. Sustainable rankings that won\'t disappear in the next algorithm update.' },
      { icon: 'FileText', title: 'Content That Ranks and Converts', desc: 'We write for humans first, search engines second — content your audience actually wants to read.' },
    ],
  },

  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    icon: 'Share2',
    color: '#3B82F6',
    tagline: 'Followers are a vanity metric. Community is everything.',
    heroDesc:
      "We build engaged social communities around your brand. From content creation to community management, we turn your social media into a real growth engine — not just a publishing calendar that burns your team out.",
    offerings: [
      { icon: 'Target', title: 'Platform Strategy', desc: 'Choosing the right platforms for your brand and audience — quality over spreading thin.' },
      { icon: 'Camera', title: 'Content Creation', desc: 'Reels, carousels, stories, and graphics built for maximum engagement on each platform.' },
      { icon: 'MessageSquare', title: 'Community Management', desc: 'Daily engagement, comment replies, and inbox management so no conversation gets missed.' },
      { icon: 'Users', title: 'Influencer Outreach', desc: 'Micro-influencer partnerships that align with your brand values and reach your ideal audience.' },
      { icon: 'Eye', title: 'Social Listening', desc: 'Tracking brand mentions, trending topics, and competitor activity in real time.' },
      { icon: 'BarChart2', title: 'Growth Analytics', desc: 'Follower growth, reach, engagement, and conversion metrics — reported monthly with clarity.' },
    ],
    process: [
      { step: '01', title: 'Strategy', desc: 'Platform selection, audience research, content pillars, and brand voice — the foundation.' },
      { step: '02', title: 'Content Calendar', desc: 'Monthly plan with themes, formats, and posting schedule reviewed and approved by you.' },
      { step: '03', title: 'Create', desc: 'Scroll-stopping content designed natively for each platform\'s format and algorithm.' },
      { step: '04', title: 'Post & Engage', desc: 'Consistent publishing at peak times + active community engagement that builds loyalty.' },
      { step: '05', title: 'Report', desc: 'Monthly performance review with growth insights and strategy refinements for the next cycle.' },
    ],
    whyPixel: [
      { icon: 'Heart', title: 'Community Over Vanity', desc: 'We optimise for engaged followers who become customers — not inflated numbers that never convert.' },
      { icon: 'Camera', title: 'Creative That Fits the Platform', desc: 'Content made for Instagram doesn\'t belong on LinkedIn. We build native content for each channel.' },
      { icon: 'TrendingUp', title: 'Tied to Business Goals', desc: 'Every social strategy links back to leads, sales, or brand authority — not just likes.' },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  servicesData.find((s) => s.slug === slug) || null;
