// All 6 service pages — full content data

// Automation service images
import automationBanner from '../assets/partners images/services/Automation-Banner.webp';
import automationLeadGen from '../assets/partners images/services/Automation -Lead-Generation.webp';
import automationCustomerSupport from '../assets/partners images/services/Automation-Customer-Support.webp';
import automationECommerce from '../assets/partners images/services/Automation-E-Commerce.webp';
import automationHumanBot from '../assets/partners images/services/Automation-Human-Bot.webp';
import automationMarketing from '../assets/partners images/services/Automation-Marketting.webp';
import automationServiceBot from '../assets/partners images/services/Automation-Service-Bot.webp';
import automationTaskAutomation from '../assets/partners images/services/Automation-Task-Automation.webp';
import automationWhyModern from '../assets/partners images/services/Automation-Why-Modern-1-min.webp';

export const servicesData = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'Globe',
    color: '#8B5CF6',
    tagline: 'We Don\'t Just Run Ads. We Build Digital Eco-Systems that Sell.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&h=450&q=80',
    ],
    heroDesc:
      "Pixel builds data-driven, creative marketing systems that sustain attention and deliver consistent, measurable, human-centered growth today.",
    offerings: [
      { icon: 'Globe', title: 'Meta Ads Management', desc: 'We design Meta campaigns that think like humans and perform like machines using precise audience targeting, data-backed creative testing, and funnel systems that scale sustainably.' },
      { icon: 'Search', title: 'Google & YouTube Ads', desc: 'We build ad ecosystems that appear at the exact moment your customer is ready to decide, with every keyword and conversion point crafted to turn curiosity into clicks.' },
      { icon: 'TrendingUp', title: 'SEO', desc: 'We focus on sustainable SEO that ranks because it deserves to, driven by meaningful content, strong structure, and relevance.' },
      { icon: 'BarChart2', title: 'Analytics & Optimisation', desc: 'Our analytics framework turns complex data into a clear direction, showing what to scale, what to stop, and how to grow smarter.' },
      { icon: 'MousePointer', title: 'Conversion & Funnel Design', desc: 'We map the path from the first click to the final action, aligning emotion, design, and logic to make every user journey feel natural and result-oriented.' },
      { icon: 'Layers', title: 'Strategy & Growth Systems', desc: 'We build growth systems that connect every piece of your marketing puzzle — ads, content, SEO, and funnels — focused on consistency, clarity, and scale.' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'We map your current digital presence, identify gaps, and understand where your audience is — and where they\'re going.' },
      { step: '02', title: 'Strategy', desc: 'A tailored growth plan built around your goals, audience behaviour, and competitive landscape.' },
      { step: '03', title: 'Execute', desc: 'We deploy campaigns, content, and tracking systems — built to run together, not in silos.' },
      { step: '04', title: 'Optimise', desc: 'Continuous data review to refine targeting, improve creative, and scale what converts.' },
    ],
    whyPixel: [
      { icon: 'Layers', title: 'Integrated Growth Systems', desc: 'Ads, content, SEO, and funnels work together under one unified strategy — not managed by separate teams pulling in different directions.' },
      { icon: 'TrendingUp', title: 'Insight-Led Strategy', desc: 'We plan around data, timing, and human behaviour — not trending tactics that disappear next month.' },
      { icon: 'Zap', title: 'Creativity That Converts', desc: 'Ideas shaped by audience psychology, turning storytelling into measurable performance that compounds with every campaign.' },
    ],
  },

  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'Code2',
    color: '#6366F1',
    tagline: 'Your website should be your best salesperson.',
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=450&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&h=450&q=80',
    ],
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
    tagline: 'Build a Brand People Choose, Not Just Notice',
    images: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&h=450&q=80',
    ],
    heroDesc:
      "People now look for brands that go further than just selling. Pixel guides brands and individuals to create purpose-driven impact that matters. Your brand should speak before you do and it should tell the right story every time. Work with Pixel to build an identity that feels confident and consistent.",
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
    images: [
      'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&h=450&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=600&h=450&q=80',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&h=450&q=80',
    ],
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

  {
    slug: 'automation',
    title: 'Automation',
    icon: 'Zap',
    color: '#F97316',
    tagline: 'How much time would you save if everything was automated?',
    images: [
      automationBanner,
      automationWhyModern,
      automationHumanBot,
    ],
    heroDesc:
      "We build automated systems that reduce manual work, speed up decisions, and keep your entire process running smoothly — saving you up to 6–10 hours every day. Stop doing tasks manually. Start scaling intentionally.",
    offerings: [
      { icon: 'Users', title: 'Lead & Sales Automation Bots', desc: 'Automation evaluates interest, organises responses, integrates with your tools, and keeps your sales pipeline active without daily effort.', image: automationLeadGen },
      { icon: 'ShoppingCart', title: 'E-Commerce & Product Sales Bots', desc: 'Reads your catalogue, understands preferences, and suggests the right items instantly — giving customers a reliable and effortless shopping experience.', image: automationECommerce },
      { icon: 'MessageSquare', title: 'Customer Support & Experience Automation', desc: 'Instant replies remove repetitive queries and track orders automatically. Teams save nearly 10 hours every day while customers receive support within seconds.', image: automationCustomerSupport },
      { icon: 'Calendar', title: 'Service Business Bots', desc: 'Scheduling flows fill slots, send reminders, and manage cancellations — saving around 4 hours daily while reducing no-shows significantly.', image: automationServiceBot },
      { icon: 'Megaphone', title: 'Marketing Campaigning Bots', desc: 'Smart workflows segment audiences, deliver updates, and scale promotions reliably — improving reach and response rates across every channel.', image: automationMarketing },
      { icon: 'Bell', title: 'Internal Operations & HR Bots', desc: 'Smart workflows deliver instant policy access, handle updates, and route requests correctly — reducing daily workload and keeping information organised.', image: automationTaskAutomation },
      { icon: 'Activity', title: 'Hybrid Human + Bot Handover', desc: 'Smart flows detect when human help is needed, escalate instantly, and maintain context — making support faster, clearer, and more reliable.', image: automationHumanBot },
    ],
    process: [
      { step: '01', title: 'Analyse — Discovery & Audit', desc: 'We study your current processes, locate bottlenecks, and identify tasks that drain time or break consistency. This step reveals what to automate, why, and where the biggest impact lies.' },
      { step: '02', title: 'Blueprint — Architecture & Design', desc: 'We blueprint your automation system — workflows, triggers, actions, tools, integrations, and data flow. This stage ensures the solution is scalable, secure, and aligned with your business logic.' },
      { step: '03', title: 'Build — Development & Integration', desc: 'We build the actual automation nodes, workflows, API connections, triggers, and routing logic. Your existing tools are connected seamlessly so everything runs as one unified system.' },
      { step: '04', title: 'Deploy — Deployment & Handoff', desc: 'We test the automation, deploy it with zero downtime, and train your internal team. Once live, your workflows run automatically while you stay fully in control.' },
    ],
    whyPixel: [
      { icon: 'Settings', title: 'Tailored Workflows, Not Templates', desc: 'Most companies install generic automations that barely fit their process. We build systems around your logic, your tools, and your operational challenges — delivering precision from day one.' },
      { icon: 'Zap', title: 'Speed Decides Who Wins', desc: 'Customers expect instant replies, instant updates, and instant action. We automate workflows so tasks that took hours now happen in seconds — giving your business a real competitive edge.' },
      { icon: 'TrendingUp', title: 'Built to Scale Without Hiring', desc: 'Growing businesses can\'t keep hiring just to handle repetitive tasks. Automation reduces human error and frees your team to focus on real work that drives revenue.' },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  servicesData.find((s) => s.slug === slug) || null;
