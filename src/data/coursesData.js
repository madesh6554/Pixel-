// Imports for course images
import imgMarketing from '../assets/partners images/Marketing Playbook.webp';
import imgEssentials from '../assets/partners images/Essentials of Marketing & Branding.webp';
import imgPrompt from '../assets/partners images/Applied Prompt Engineering.webp';
import imgFundamentals from '../assets/partners images/Fundamentals of AI Tools.webp';

// All 4 courses — full verbatim content from thepixelcompany.in

export const pixelEthos = [
  {
    letter: 'P',
    title: 'Purpose-Driven Learning',
    desc: 'Every course starts with why. Teaching not just skills, but systems of thinking that help learners understand context, culture, and real-world purpose behind every concept.',
  },
  {
    letter: 'I',
    title: 'Intelligent Application',
    desc: 'Learning means nothing without doing. Focus on applying ideas — whether running campaigns, building workflows, or using AI tools. Knowledge is practical, measurable, and result-oriented.',
  },
  {
    letter: 'X',
    title: 'eXperimentation as a Habit',
    desc: 'Growth happens through curiosity. Learners are encouraged to test, tweak, and kindle the experiment instinct, because failure, reflection, and reinvention are part of creative mastery.',
  },
  {
    letter: 'E',
    title: 'Evolution over Perfection',
    desc: "Education is for growth, not grades. The approach adapts to change, blending human creativity with digital intelligence and preparing learners for 'what's next', not just 'what's now.'",
  },
  {
    letter: 'L',
    title: 'Lifelong Learning Culture',
    desc: "Education doesn't end with a course. Learners stay connected, evolving through community, collaboration, and continuous access to new tools and ideas.",
  },
];

export const coursesData = [
  // ──────────────────────────────────────────────────────
  // 1. MARKETING PLAYBOOK FOR STARTUPS
  // ──────────────────────────────────────────────────────
  {
    slug: 'marketing-playbook-for-startups',
    title: 'Marketing Playbook For Startups',
    icon: 'Lightbulb',
    color: '#8B5CF6',
    image: imgMarketing,
    buyUrl: 'https://skillrain.com/web/checkout/6836dfe3266866614943bf95',
    tagline: 'If your content theme shifts too often, both your audience and the algorithm disengage.',
    subheadline: 'Brands with clear patterns and stable formats receive 2–3× more push because the system knows exactly whom to show their content to. This Playbook helps you build those patterns through structured storytelling and automated workflows.',
    overview: "The Marketing Playbook & Masterclass isn't another \"how-to\" course. It's for founders, freelancers, and creators who are done guessing and ready to grow with purpose. In 30 days, you'll rethink how marketing works. You'll learn to plan content, write captions, run ads, and build funnels that actually convert. Every framework inside the Playbook is designed for clarity, not clutter. You'll walk away knowing how to market like a strategist and create like a human. Because in the age of algorithms, the real advantage is still originality.",
    whoIsItFor: 'Founders, freelancers, creators, and early-stage marketers wanting structure without agency costs.',
    whatYoullLearn: [
      'Market System for predictable results',
      'Automate setups that save hours every week',
      'Do storytelling campaign frameworks that convert',
      'Use tools to think strategically, not reactively',
    ],
    modules: [
      {
        title: 'Module 1: The 30-Day Marketing Playbook (PDF Toolkit)',
        desc: 'Master the framework behind consistent, strategic growth. This module gives you the complete 30-day roadmap to rebuild your marketing from scratch including ready-to-use templates, caption frameworks, and daily execution systems that eliminate guesswork.',
        topics: [
          'Content calendar for 30 days of growth-focused posts',
          'Caption templates and storytelling hooks for engagement',
          'DIY ad script and targeting blueprints for small budgets',
          'Funnel designs for lead generation and sales conversion',
        ],
        skills: 'Content strategy, social media planning, campaign design, funnel thinking',
      },
      {
        title: 'Module 2: The Masterclass (Video Session)',
        desc: "Learn the mindset and mechanics behind real marketing systems. In this module, you'll deep-dive into how to think, plan, and execute like a marketing strategist. Every concept from the Playbook comes alive through practical case studies and brand examples.",
        topics: [
          'How to create systems that scale without chaos',
          'Understanding attention, emotion, and audience behavior',
          'Turning insights into content that builds identity',
          'Real-time walkthrough of Playbook frameworks',
        ],
        skills: 'Strategic marketing thinking, storytelling for brands, ad funnel optimisation, execution planning',
      },
    ],
    highlights: [
      { title: '30-Day Growth System', desc: 'A step-by-step roadmap to rebuild how you plan, post, and grow one day at a time.' },
      { title: 'Real Startup Frameworks', desc: 'Learn the strategies used by real brands, not recycled marketing theories from old texts.' },
      { title: 'DIY Ad Starter Pack', desc: 'Ready-to-use scripts, hooks, and campaign blueprints for your first ₹200–₹500/day ads.' },
      { title: 'Lead Funnel Templates', desc: 'Convert followers into customers with beginner-friendly funnels that actually work.' },
      { title: 'Content & Caption Library', desc: 'Access 30 caption templates and post ideas crafted for engagement, information and growth.' },
      { title: 'Bonus Masterclass', desc: 'A 60-minute deep dive by a marketing expert on executing the Playbook like a pro.' },
    ],
    results: [
      { metric: 'Cost Per Lead', before: '₹75', after: '₹32' },
      { metric: 'Engagement Rate', before: '1.8%', after: '5.2%' },
      { metric: 'Website Traffic from Social', before: '210 sessions', after: '580 sessions' },
      { metric: 'Instagram Follower Growth', before: '—', after: '↑' },
    ],
    caseStudyQuotes: [
      'SparkleClean was losing ₹43 per lead before adopting the structured ad scripts.',
      'The Playbook allowed SparkleClean to become profitable on day 10 of their ad campaign.',
    ],
    withoutWith: {
      without: [
        'Wasted capital through unoptimised ads',
        'Founder burnout from constant research',
        'Stagnant growth with low engagement',
        'Inconsistent messaging and low conversions',
      ],
      with: [
        'Elimination of decision fatigue',
        'Battle-tested conversion templates',
        'Halved acquisition costs',
        'Structured funnel flows converting leads',
      ],
    },
    faqs: [
      { q: 'Who is the Marketing Playbook designed for?', a: "The Playbook is built for founders, freelancers, creators, and early-stage marketers who want structure without hiring an agency. If you're doing it all and need a clear plan to grow your brand this is for you." },
      { q: 'What is the difference between the Playbook and the Masterclass?', a: 'The PDF provides the 30-day system and templates; the video teaches strategic thinking behind execution.' },
      { q: 'How quickly can I see results?', a: 'Most learners start seeing clarity and engagement shifts within the first 10 days.' },
      { q: 'Do I need experience?', a: 'None required; beginner-friendly with advanced frameworks included.' },
      { q: 'What support is included?', a: 'Lifetime access to the Playbook, Masterclass, and all future updates.' },
      { q: 'How is this different from other marketing resources?', a: 'Focuses on execution and real systems versus theoretical approaches.' },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 2. ESSENTIALS OF MARKETING & BRANDING
  // ──────────────────────────────────────────────────────
  {
    slug: 'essentials-of-marketing-and-branding',
    title: 'Essentials of Marketing & Branding',
    icon: 'BookOpen',
    color: '#EC4899',
    image: imgEssentials,
    buyUrl: 'https://skillrain.com/web/checkout/68777a05857b45720572c2fa',
    tagline: 'If people scroll past your posts in under 2 seconds, something is missing. What\'s That?',
    subheadline: 'Story. Yes, Stories increase emotional retention by up to 60%, making your brand harder to forget. This course helps you decode the inner mechanics of branding, how brands think, communicate, and stay unforgettable.',
    overview: "The Essentials of Marketing & Branding is not your typical marketing course. It is built for learners who want to understand how real brands are made, not just how to make ads. You will explore the mindset, systems, and psychology that drive every strong brand you know. From consumer behavior and timing to cultural influence and storytelling, every chapter helps you see the bigger picture behind why people choose what they choose. This course does not just teach marketing tactics. It helps you think like a brand, connect emotion with logic, and build something people truly believe in. By the end, you will not just understand marketing. You will start seeing it everywhere.",
    whoIsItFor: 'Creators, entrepreneurs, students, and professionals who want to understand marketing and branding beyond buzzwords. If you want to learn how brands think, grow, and connect with people, this is for you.',
    whatYoullLearn: [
      'Build clarity in how you think and create',
      'Develop identity systems people instantly recognise',
      'Think like the creators of iconic global brands',
    ],
    modules: [
      {
        title: 'Module 1: What\'s Common in Marketing & Branding',
        desc: 'Learn the invisible thread connecting both — how marketing drives attention while branding builds emotion and trust.',
        topics: ['Key similarities', 'Brand consistency', 'Value alignment'],
        skills: 'Brand alignment, Strategic connection',
      },
      {
        title: 'Module 2: How Product Shapes Culture',
        desc: 'Discover how products influence habits, lifestyle, and language. Learn how everyday brands evolve into cultural symbols and how culture shapes products.',
        topics: ['Product identity', 'Cultural relevance', 'Emotional branding'],
        skills: 'Cultural marketing, Market observation, Storytelling',
      },
      {
        title: 'Module 3: What People Want vs What People Don\'t Have',
        desc: 'Understand psychology behind needs and desires. Learn how successful brands identify gaps and turn them into opportunities.',
        topics: ['Market gap analysis', 'Value creation', 'Consumer motivation'],
        skills: 'Demand mapping, Value positioning, Consumer insight',
      },
      {
        title: 'Module 4: How to Target the Right Audience',
        desc: 'Learn to find people who actually need your brand. Go beyond demographics and tap into intent, behaviour, and mindset.',
        topics: ['Audience segmentation', 'Targeting models', 'Customer personas'],
        skills: 'Target audience research, Data interpretation, Precision marketing',
      },
      {
        title: 'Module 5: Expert Segment',
        desc: 'Real-world insights from the CEO breaking down creative and strategic sides of modern marketing.',
        topics: ['Brand storytelling', 'Positioning', 'Real-time execution'],
        skills: 'Strategic vision, Brand direction, Creative decision-making',
      },
      {
        title: 'Module 6: Psychographic Segment (Deeper Understanding)',
        desc: "Dive into what drives human behaviour. Learn how psychographics explain not just what people buy, but why.",
        topics: ['Personality-based segmentation', 'Mindset mapping', 'Emotional intent'],
        skills: 'Advanced consumer analysis, Audience psychology',
      },
      {
        title: 'Module 7: Timing Is Everything',
        desc: 'Discover why perfect timing can make or break campaigns. Learn how brands anticipate and adapt to moments.',
        topics: ['Timing strategy', 'Trend awareness', 'Opportunity windows'],
        skills: 'Real-time response, Campaign planning, Adaptive marketing',
      },
      {
        title: 'Module 8: Moment Marketing – Part 1',
        desc: 'Understand what moment marketing is and why it matters. Know secrets behind push notifications.',
        topics: ['Cultural triggers', 'Audience trends', 'Relevance in real time'],
        skills: 'Timing analysis, Viral marketing awareness, Creative agility',
      },
      {
        title: 'Module 9: Moment Marketing – Part 2',
        desc: 'Go beyond theory with practical steps to execute moment marketing effectively without losing authenticity.',
        topics: ['Tools for spotting trends', 'Designing contextual campaigns'],
        skills: 'Execution strategy, Content adaptability, Brand responsiveness',
      },
      {
        title: 'Module 10: How to Create Strong Brand Visibility',
        desc: 'Learn to make your brand noticeable, relatable, and unforgettable through consistent design and communication.',
        topics: ['Visibility frameworks', 'Creative placement', 'Consistency'],
        skills: 'Brand recognition, Media planning, Message consistency',
      },
      {
        title: 'Module 11: Case Study of Dabur',
        desc: "Analyse Dabur's brand evolution and marketing decisions that made it one of India's most trusted names.",
        topics: ['Brand analysis', 'Heritage marketing', 'Adaptation over time'],
        skills: 'Case-based learning, Analytical strategy, Long-term brand building',
      },
      {
        title: 'Module 12: Celebrity vs Influencer Marketing',
        desc: 'Understand how both shape perception differently and how to choose the right fit for your brand.',
        topics: ['Celebrity appeal', 'Influencer authenticity', 'ROI comparison'],
        skills: 'Collaboration strategy, Partnership evaluation, Brand-image alignment',
      },
      {
        title: 'Module 13: Content Is the King',
        desc: 'Learn how content drives engagement, trust, and visibility. Create narratives that educate, entertain, and convert.',
        topics: ['Content pillars', 'Storytelling frameworks', 'Engagement strategy'],
        skills: 'Content creation, Message clarity, Storytelling for brands',
      },
      {
        title: 'Module 14: Crafting a Marketing Plan',
        desc: 'Build your own marketing roadmap from research to execution. Learn how to bring structure to ideas and direction to campaigns.',
        topics: ['Planning structure', 'Budget allocation', 'Performance tracking'],
        skills: 'Marketing planning, Campaign design, Structured execution',
      },
      {
        title: 'Module 15: Ethics of Marketing',
        desc: 'Understand the importance of honest communication, consumer trust, and social responsibility in branding.',
        topics: ['Transparency', 'Truthful messaging', 'Consumer ethics'],
        skills: 'Ethical decision-making, Responsible marketing',
      },
      {
        title: 'Module 16: Future-Proof Marketing',
        desc: 'Explore how technology, AI, and evolving consumer habits will shape the future of marketing and branding.',
        topics: ['Predictive marketing', 'Innovation', 'Automation in creativity'],
        skills: 'Future mindset, Adaptability, Innovation strategy',
      },
      {
        title: 'Module 17: Conclusion',
        desc: 'Summarise everything learned and see how each concept connects into a single ecosystem of creative intelligence.',
        topics: ['Marketing recap', 'Personal growth reflection', 'Action roadmap'],
        skills: 'Strategic clarity, Brand thinking, Real-world application',
      },
    ],
    highlights: [
      { title: 'Marketing Mindset Reset', desc: 'Learn how to think like a marketer and act like a strategist. You will understand the psychology, purpose, and process behind how great brands grow.' },
      { title: 'Brand Identity Made Simple', desc: 'Discover how to build a brand that feels real. From finding your voice to crafting visuals that tell your story, this is where branding becomes personal.' },
      { title: 'Consumer Psychology and Culture', desc: 'Understand why people choose what they choose. Learn how culture, timing, and perception shape decisions and how you can use that insight to connect better.' },
      { title: 'Practical Frameworks You Can Apply', desc: 'Every lesson is built for real-world use. You will walk away with systems and methods that simplify planning, communication, and execution.' },
      { title: 'Real Case Studies and Examples', desc: 'See how successful brands grew, adapted, and stayed relevant. Learn from actual market stories that show the power of clarity and creativity.' },
    ],
    theChoice: [
      {
        title: 'Sonic Branding',
        desc: 'It helps brands trigger instant recall and emotion through music, tone, and rhythm that speak their identity, essence, and personality.',
      },
      {
        title: 'Answer Engine Optimization',
        desc: 'Shifting from traditional SEO to AI-focused content that answers users directly through assistants like Gemini & ChatGPT.',
      },
      {
        title: 'Social & Immersive Commerce',
        desc: 'Creating a frictionless purchase path using social shopping and AR trials, leading to higher conversions and fewer returns.',
      },
    ],
    thenVsNow: {
      then: [
        { label: 'Focus', value: "Product-Centricity. The product's features were the hero and the primary selling point." },
        { label: 'Goal', value: 'Market Share and Volume. Success was measured primarily by unit sales and revenue numbers alone.' },
        { label: 'Communication', value: 'Monologue (One-way). The brand speaks, the consumer listens via mass channels like TV and print.' },
        { label: 'Marketing', value: 'Mass Media Advertising. Campaigns were broad, expensive, and often untargeted.' },
        { label: 'Relationships', value: 'Transactional. The relationship ends largely after the purchase is complete.' },
      ],
      now: [
        { label: 'Focus', value: "Customer-Centricity. The customer's experience, identity, and values are the core." },
        { label: 'Goal', value: 'Cultural Relevance and Loyalty. Success is measured by engagement, advocacy, and customer lifetime value (CLV).' },
        { label: 'Communication', value: 'Dialogue (Two-way). Brands listen, adapt, and converse actively across digital and social platforms.' },
        { label: 'Marketing', value: 'Content & Context. Targeted, personalised, value-driven, and story-based content is key.' },
        { label: 'Relationships', value: "Emotional and Community-Based. Customers belong to the 'brand tribe' and define the brand identity." },
      ],
    },
    faqs: [
      { q: 'Who is the Essentials of Marketing & Branding course designed for?', a: "This course is for creators, entrepreneurs, students, and professionals who want to understand marketing and branding beyond buzzwords. If you want to learn how brands think, grow, and connect with people, this is for you." },
      { q: 'Do I need prior marketing knowledge to join?', a: "Not at all. The course starts with the basics and moves into deeper insights step by step. Whether you're a beginner or already working in marketing, you'll find ideas you can immediately apply." },
      { q: 'What will I learn from this course?', a: "You'll learn how to build brands that people remember through strategy, storytelling, and cultural understanding. From consumer psychology and audience targeting to ethics and future-proof marketing, every chapter adds real-world clarity." },
      { q: 'How long will it take to complete the course?', a: "The course is self-paced, so you can learn on your own schedule. On average, most learners complete it in 3 to 4 weeks while applying concepts in real time." },
      { q: 'Is this course theoretical or practical?', a: "It's both. You'll understand the theory that drives modern marketing and immediately see how it connects to real brands and campaigns. Each chapter ends with practical takeaways and examples." },
      { q: 'Will I get a certificate after completing the course?', a: "Yes. Once you finish all chapters, you'll receive a Completion Certificate from The Pixel Company to recognise your learning." },
      { q: 'What kind of support do I get after enrolling?', a: "You get lifetime access to the course and future updates, plus community-based learning spaces where you can ask questions, share projects, and keep growing." },
      { q: 'How is this different from a regular marketing course?', a: "Most courses teach formulas; this one teaches frameworks. It helps you understand why marketing works and not just how. You'll learn to think like a strategist, not a trend follower, and develop the clarity to make your own creative decisions." },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 3. APPLIED PROMPT ENGINEERING
  // ──────────────────────────────────────────────────────
  {
    slug: 'applied-prompt-engineering',
    title: 'Applied Prompt Engineering',
    icon: 'Wrench',
    color: '#F59E0B',
    image: imgPrompt,
    buyUrl: 'https://skillrain.com/web/checkout/68a97c1ab47ed15286080c42',
    price: '₹499',
    originalPrice: '₹999',
    languages: 'Tamil & English',
    tagline: 'Master the Language of AI Prompt Engineering',
    subheadline: "It's your entry point into the world of Prompt Engineering — this is where ideas meet intelligence. We don't teach you how to use AI. We teach you how to make AI work for you.",
    overview: "Learn to craft effective prompts step-by-step with real-life examples. Go from basic prompts to advanced methods like chain prompts and structured systems. Automate repetitive tasks, visualise data, and build your own prompt system.",
    whoIsItFor: 'Creators, marketers, entrepreneurs, and anyone who wants to stop using AI casually and start using it strategically.',
    whatYoullLearn: [
      "Crafting Effective Prompts — Learn to write the perfect prompt step-by-step in simple Tamil & English with real-life examples.",
      "GCAS Framework — Use the secret formula (Goal, Context, Audience, Style) to control the tone & output exactly as you want.",
      "From Basic to Meta Prompting — Move from basic prompts to advanced methods like chain prompts and structured systems to make AI work smarter.",
      "Built-in Tools & Integrations — Explore hidden AI features like browsing, file uploads, and connect tools like Perplexity to WhatsApp.",
      "Data Visualisation with AI — Turn complex data and information into easy-to-understand visuals, reports, and charts through prompts.",
      "Automate & Schedule Tasks — Save hours by automating repetitive tasks from writing content to scheduling posts and generating reports.",
      "Fact-Checking & AI Ethics — Learn how to verify AI's facts, fix errors, and use it responsibly in your work, learning, and creativity.",
      "Research & Content Creation — Use AI for deep research, script writing, blog creation, and ad copies in your own unique voice and style.",
      "Capstone Project — Apply everything you've learned by building a real project, like your own prompt system or automation idea.",
      "The Future of Gen-AI — Get a sneak peek into what's next; GPT-5, multimodal tools, and the new era of AI-powered creativity.",
    ],
    tools: ['ChatGPT', 'Gemini', 'Perplexity AI', 'Image Generation Tools', 'Video Generation AI Tools', 'NotebookLM'],
    highlights: [
      { title: 'Self-Paced', desc: 'Learn anytime, anywhere — on your own schedule.' },
      { title: 'Hands-on', desc: 'Real brand use cases, not just theory.' },
      { title: 'Certificate', desc: 'Showcase your AI literacy with a completion certificate.' },
      { title: 'Frameworks', desc: 'Tested prompt templates you can use immediately.' },
      { title: 'Bonus', desc: 'Plug-and-play prompts ready for real projects.' },
    ],
    whyPixel: "Because we don't just teach digital intelligence, we build it. Since we're practising and implementing in the real world, collaborating with brands, we are result-driven — not just in papers but in action. Our team works at the intersection of design, automation, and marketing — turning AI into a creative engine that powers real businesses.",
    whyPixelPoints: [
      'Build branded automation systems',
      'Build self-sustaining AI systems that work smart and scale on their own',
      'Create viral content faster',
      'Save 10+ hours every week using AI smartly',
    ],
    purchaseSteps: [
      'Click the "Buy Now" option to begin.',
      "You'll be directed to a portal powered by Skill Rain to complete your purchase.",
      "After completing your payment you'll get complete access to the course.",
      'Login anytime using your mobile phone to start learning.',
      'Feel free to contact us if you have any concerns: +91 96266 31362',
    ],
    faqs: [],
  },

  // ──────────────────────────────────────────────────────
  // 4. FUNDAMENTALS OF AI TOOLS
  // ──────────────────────────────────────────────────────
  {
    slug: 'fundamentals-of-ai-tools',
    title: 'Fundamentals of AI Tools',
    icon: 'Bot',
    color: '#10B981',
    image: imgFundamentals,
    buyUrl: 'https://skillrain.com/web/checkout/68a6bb96a01edcd136e758d1',
    tagline: 'If manual work causes 30–40% of your delays, AI can eliminate most of it.',
    subheadline: 'AI tools cut that effort by handling research, writing, design, planning, organizing, and repetitive workflows faster than any manual process. This course shows you how to use 22 powerful tools the right way so AI becomes your co-worker, not just a shortcut.',
    overview: "The Master 22+ AI Tools course is not another tutorial on how to use tools. It is built for learners who want to understand how the world's smartest systems work together and how to make them work for you. You will explore how creators, marketers, and innovators use AI to build faster, automate smarter, and create more effectively across every domain including writing, design, video, and strategy. From ChatGPT and Gemini to Adobe Firefly and Copilot, every module helps you uncover the logic, creativity, and workflow behind the tools shaping the modern world. This course does not just teach how to use AI. It helps you think like a system designer, automate like a strategist, and create like a visionary. By the end, you will not just know AI tools. You will know how to combine them, command them, and build ideas that work while you sleep.",
    whoIsItFor: 'Anyone who wants to understand how modern AI tools actually work. It suits creators, marketers, designers, students, and professionals.',
    whatYoullLearn: [
      'Use the right tools confidently',
      'Create simple workflows that save time',
      'Automate repetitive tasks to focus better',
    ],
    modules: [
      {
        title: 'Module 1: The 30-Day Marketing Playbook (PDF Toolkit)',
        desc: 'Content calendars, caption templates, ad scripts, and funnel designs for strategic 30-day growth.',
        topics: ['Content calendar for 30 days of growth-focused posts', 'Caption templates and storytelling hooks', 'DIY ad scripts and targeting blueprints', 'Funnel designs for lead and sales conversion'],
        skills: 'Content strategy, social media planning, campaign design, funnel thinking',
      },
      {
        title: 'Module 2: The Masterclass (Video Session)',
        desc: 'Strategic thinking, scalable systems, audience behaviour, content identity, and framework walkthroughs.',
        topics: ['How to create scalable systems', 'Understanding audience behavior', 'Converting insights into identity-building content', 'Real-time framework walkthroughs'],
        skills: 'Strategic marketing thinking, storytelling, ad funnel optimisation, execution planning',
      },
      {
        title: 'Module 3: Introduction to AI & LLM Tools',
        desc: 'Understand what AI tools and LLMs are, how ChatGPT works, and how to prompt effectively for productivity and creativity.',
        topics: ['What are AI tools and LLMs', 'ChatGPT applications and capabilities', 'Effective prompting for productivity', 'Boosting creativity with AI'],
        skills: 'AI fundamentals, prompt structuring, productivity enhancement',
      },
      {
        title: 'Module 4: Content Creation & Productivity Tools',
        desc: 'Master Gemini and Grok for creative writing, deep research, idea generation, and branding applications.',
        topics: ['Google Gemini and Grok for writing', 'Creative writing and idea generation', 'Deep research mode and analysis', 'Branding applications with AI'],
        skills: 'Creative prompting, research automation, content strategy',
      },
      {
        title: 'Module 5: Image & Video Generation Tools',
        desc: 'Learn DALL·E, Synthesia, HeyGen, Veo-3, Meta AI, and Sora for visual creation and AI video generation.',
        topics: ['Image generation with ChatGPT plugins and Meta AI', 'Hyper-realistic visual prompting', 'AI video generation with Sora, Veo-3, and HeyGen', 'Visual storytelling through prompting'],
        skills: 'Visual prompting, video generation, AI art direction',
      },
      {
        title: 'Module 6: Presentation, Ideation & Analytics Tools',
        desc: 'Use Gamma AI for presentations, Microsoft Copilot for automation, NotebookLM for study, and Napkin.AI for visualisation.',
        topics: ['Gamma AI for AI-powered presentations', 'Microsoft Copilot for workflow automation', 'Notebook LLM for research and study', 'Napkin.AI for data visualisation'],
        skills: 'Presentation design, analytical thinking, AI productivity',
      },
      {
        title: 'Module 7: Coding & Development Tools',
        desc: 'Explore Google AI Studio, no-code development, voice and audio generation, APIs, integrations, and automation agents.',
        topics: ['Google AI Studio and model customisation', 'Microsoft Co-Pilot for development', 'Voice and audio generation tools', 'APIs, integrations, and automation agents'],
        skills: 'No-code development, API integration, model customisation',
      },
    ],
    tools: [
      'ChatGPT Plus', 'Gemini', 'Grok', 'Perplexity', 'Synthesia', 'HeyGen',
      'Veo-3', 'Sora', 'Meta AI', 'Adobe Firefly', 'Leonardo AI', 'Jasper',
      'Genspark', 'Manus AI', 'Copilot', 'Notebook LLM', 'Napkin.AI',
      'Gamma AI', 'Presentation AI', 'Word AI', 'Perchance AI', 'Google AI Studio',
    ],
    highlights: [
      { title: 'Learn from Real-World Use Cases', desc: 'Learn each tool through real project scenarios that show practical AI use.' },
      { title: 'Master 22+ Tools that Cover Every Creative Function', desc: 'Master key AI tools covering writing, visuals, automation, and complete workflows.' },
      { title: 'Build Interconnected Workflows', desc: 'Learn linking tools so outputs flow seamlessly into efficient automated systems.' },
      { title: 'Understand the Psychology Behind Automation', desc: 'Understand AI behavior clearly to adapt tools better to your workflow.' },
      { title: 'Train for Adaptability, Not Dependency', desc: 'Learn adaptable frameworks ensuring skills remain relevant as tools continually evolve.' },
      { title: 'Develop Skills Used by Modern Creative Teams', desc: "Build practical creative abilities today's teams use combining creativity and AI efficiency." },
    ],
    aiMetrics: [
      { label: 'ROI per $1 Spent', prefix: '$', value: '3.71', suffix: '' },
      { label: 'Software Dev Productivity', prefix: '+', value: '126', suffix: '%' },
      { label: 'Content Creation Volume', prefix: '+', value: '59', suffix: '%' },
      { label: 'Customer Service Resolution', prefix: '+', value: '16', suffix: '%' },
      { label: 'Exec. Analysis Time', prefix: '−', value: '100', suffix: '%' },
    ],
    faqs: [
      { q: 'Who is this for?', a: "Anyone who wants to understand how modern AI tools actually work. It suits creators, marketers, designers, students, and professionals." },
      { q: 'Do I need technical background?', a: "No prior coding or AI knowledge needed; concepts taught from fundamentals with real-world examples." },
      { q: "What makes it different?", a: "Most tutorials teach single tools; this course connects 22+ tools as one creative system, teaching the underlying logic and how they interact." },
      { q: "What professional benefit do I get?", a: "Learners gain automation and optimisation skills for content creation, design, marketing, and data management." },
      { q: "Do I need to pay for these tools?", a: "Many tools have free versions; premium alternatives or trials provided where needed." },
      { q: "Do I get a certificate?", a: "Yes — Pixel Company Certificate of Completion verifying AI-driven workflow understanding." },
      { q: "How long do I have access?", a: "Lifetime access with future updates and new tools as the AI ecosystem evolves." },
      { q: "What is the course structure?", a: "Focused modules covering writing, visuals, video, analytics, and automation with examples and guided workflows." },
    ],
  },
];

export const getCourseBySlug = (slug) =>
  coursesData.find((c) => c.slug === slug) || null;
