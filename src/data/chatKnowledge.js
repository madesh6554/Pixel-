// ── Chat Knowledge Base ──────────────────────────────────
// All Q&A pairs pulled from FAQSection, coursesData, servicesData,
// plus general company info. Used by the fuzzy-search chatbot.

export const knowledge = [

  // ── COMPANY GENERAL ─────────────────────────────────────
  {
    q: 'What is The Pixel Company?',
    a: 'The Pixel Company is a Creative Intelligence brand that builds, designs, and educates. We combine strategy, storytelling, and smart systems to create brands that think, move, and grow with purpose.',
    tags: ['about', 'company', 'pixel', 'who'],
  },
  {
    q: 'What makes The Pixel Company different?',
    a: 'We are a creative intelligence agency that bridges the gap between high-end branding and technical AI automation. We don\'t just design — we build systems that scale your growth.',
    tags: ['different', 'unique', 'why', 'special'],
  },
  {
    q: 'Do you work with global clients or just local startups?',
    a: 'While we are proud to be based in Coimbatore, Tamil Nadu, we work with fast-growing brands and startups across India and globally through our remote-first dedicated workflow.',
    tags: ['global', 'local', 'coimbatore', 'india', 'remote', 'clients'],
  },
  {
    q: 'How fast can we see results?',
    a: 'Branding and automation setups are usually live within 7–14 days. Performance marketing typically starts showing measurable data within the first 48–72 hours of launch.',
    tags: ['results', 'timeline', 'fast', 'quick', 'time', 'days'],
  },
  {
    q: 'Can you help us build our own AI tools?',
    a: 'Absolutely. We specialize in engineering custom AI-driven growth systems and automations tailored to your specific business friction points.',
    tags: ['ai', 'tools', 'custom', 'automation', 'build'],
  },
  {
    q: 'How do we get started?',
    a: 'The best way is to connect with us on WhatsApp (+91 9045 860 876) or send an email to contactthepixelcompany@gmail.com. We\'ll jump on a 15-minute discovery call to see if we\'re a perfect fit for your goals.',
    tags: ['start', 'begin', 'contact', 'get started', 'connect', 'work together'],
  },
  {
    q: 'Where is The Pixel Company located?',
    a: 'We are located at NO.9, Dr. Jeyavarthanavelu Nagar, Masakalipalayam Rd, Peelamedu, Argus Nagar, Coimbatore, Tamil Nadu 641002.',
    tags: ['location', 'address', 'office', 'where', 'coimbatore'],
  },
  {
    q: 'How can I contact The Pixel Company?',
    a: 'You can reach us by phone at +91 9045 860 876, by email at contactthepixelcompany@gmail.com, or visit our Contact Us page to send a message directly.',
    tags: ['contact', 'phone', 'email', 'reach', 'whatsapp'],
  },

  // ── SERVICES ─────────────────────────────────────────────
  {
    q: 'What services do you offer?',
    a: 'We offer 7 core services: Digital Marketing, Web Development, Performance Marketing, Branding, Search Engine Optimisation (SEO), Social Media Marketing, and Automation.',
    tags: ['services', 'offer', 'what do you do', 'help'],
  },
  {
    q: 'Do you offer branding services?',
    a: 'Yes. Our branding service covers brand strategy, visual identity design, logo creation, brand guidelines, and everything needed to make your brand instantly recognisable and emotionally resonant.',
    tags: ['branding', 'logo', 'identity', 'design', 'visual'],
  },
  {
    q: 'What does your digital marketing service include?',
    a: 'Digital marketing includes content strategy and planning, campaign management, email marketing, analytics and reporting, brand content creation, and social media management.',
    tags: ['digital marketing', 'content', 'campaign', 'email', 'social', 'analytics'],
  },
  {
    q: 'Do you build websites?',
    a: 'Yes. We build landing pages, full multi-page websites, e-commerce stores, and mobile-first experiences. All sites are fast, conversion-focused, and fully owned by you.',
    tags: ['website', 'web development', 'landing page', 'ecommerce', 'build'],
  },
  {
    q: 'What is performance marketing?',
    a: 'Performance marketing means paid ads on Google, Meta (Facebook & Instagram), and YouTube — built around data, not guesswork. We find your audience, deliver the right message, and scale only what converts.',
    tags: ['performance', 'ads', 'google', 'meta', 'facebook', 'instagram', 'paid', 'roas'],
  },
  {
    q: 'Do you offer SEO services?',
    a: 'Yes. Our SEO service covers technical SEO audits, keyword research, on-page optimisation, content strategy, link building, and local SEO to help your site rank higher on Google.',
    tags: ['seo', 'search engine', 'google ranking', 'organic', 'keywords'],
  },
  {
    q: 'Do you manage social media?',
    a: 'Yes. Social media marketing is one of our core services — including content creation, scheduling, community management, and growth strategy across Instagram, Facebook, LinkedIn, and more.',
    tags: ['social media', 'instagram', 'facebook', 'linkedin', 'manage', 'posts'],
  },
  {
    q: 'Do you offer automation services?',
    a: 'Yes. We build custom AI-driven automation systems that reduce manual work, connect your tools, and create workflows that scale without adding headcount.',
    tags: ['automation', 'workflow', 'ai', 'systems', 'automate'],
  },

  // ── COURSES GENERAL ──────────────────────────────────────
  {
    q: 'What courses do you offer?',
    a: 'We currently offer 4 courses through The Pixel Academy: Marketing Playbook for Startups, Essentials of Marketing & Branding, Applied Prompt Engineering, and Fundamentals of AI Tools.',
    tags: ['courses', 'academy', 'learn', 'training', 'education'],
  },
  {
    q: 'Are your courses self-paced?',
    a: 'Yes. All our courses are self-paced — you can learn anytime, anywhere, on your own schedule.',
    tags: ['self-paced', 'flexible', 'schedule', 'anytime', 'own time'],
  },
  {
    q: 'Do I get a certificate after completing a course?',
    a: 'Yes. You receive a Pixel Company Certificate of Completion after finishing any course, which you can showcase to verify your skills.',
    tags: ['certificate', 'certification', 'completion', 'credential'],
  },
  {
    q: 'How do I purchase a course?',
    a: 'Click "Buy Now" on any course page. You\'ll be directed to a Skill Rain portal to complete your payment. After payment, you get full access and can login anytime from your mobile.',
    tags: ['buy', 'purchase', 'enrol', 'payment', 'how to', 'skillrain'],
  },
  {
    q: 'Do I need experience to join a course?',
    a: 'No prior experience is required for any of our courses. Every course is beginner-friendly and designed to take you from the basics to advanced frameworks step by step.',
    tags: ['experience', 'beginner', 'prior knowledge', 'requirements', 'background'],
  },

  // ── COURSE 1: MARKETING PLAYBOOK ─────────────────────────
  {
    q: 'What is the Marketing Playbook for Startups?',
    a: 'The Marketing Playbook & Masterclass is a 2-module course that gives founders, freelancers, and creators a 30-day system to plan content, write captions, run ads, and build funnels that convert.',
    tags: ['marketing playbook', 'startups', 'founders', 'freelancers'],
  },
  {
    q: 'Who is the Marketing Playbook designed for?',
    a: 'The Playbook is built for founders, freelancers, creators, and early-stage marketers who want structure without hiring an agency. If you\'re doing it all and need a clear plan to grow your brand, this is for you.',
    tags: ['marketing playbook', 'who', 'for whom', 'audience'],
  },
  {
    q: 'What is the difference between the Playbook and the Masterclass?',
    a: 'The Playbook (PDF) gives you the 30-day system — ready-to-use templates, captions, and campaign frameworks. The Masterclass (Video) teaches you the strategic thinking behind execution.',
    tags: ['marketing playbook', 'masterclass', 'difference', 'pdf', 'video'],
  },
  {
    q: 'How quickly can I see results from the Marketing Playbook?',
    a: 'Most learners start seeing clarity and engagement shifts within the first 10 days. The Playbook is built to show measurable progress by the end of the 30-day cycle.',
    tags: ['marketing playbook', 'results', 'timeline', '10 days', '30 days'],
  },

  // ── COURSE 2: ESSENTIALS OF MARKETING & BRANDING ─────────
  {
    q: 'What is Essentials of Marketing and Branding?',
    a: 'A 17-module course that teaches you how real brands are built — covering consumer psychology, cultural influence, storytelling, audience targeting, moment marketing, and future-proof strategies. It helps you think like a brand.',
    tags: ['essentials', 'marketing', 'branding', 'course'],
  },
  {
    q: 'Who is the Essentials of Marketing and Branding course for?',
    a: 'This course is for creators, entrepreneurs, students, and professionals who want to understand marketing and branding beyond buzzwords. If you want to learn how brands think, grow, and connect with people, this is for you.',
    tags: ['essentials', 'who', 'for whom', 'audience', 'students', 'entrepreneurs'],
  },
  {
    q: 'How long does the Essentials course take to complete?',
    a: 'The course is self-paced. On average, most learners complete it in 3 to 4 weeks while applying concepts in real time.',
    tags: ['essentials', 'duration', 'how long', 'weeks', 'complete'],
  },
  {
    q: 'Is the Essentials course practical or theoretical?',
    a: 'Both. You\'ll understand the theory driving modern marketing and immediately see how it connects to real brands and campaigns. Each module ends with practical takeaways and examples.',
    tags: ['essentials', 'practical', 'theory', 'real world', 'case studies'],
  },

  // ── COURSE 3: APPLIED PROMPT ENGINEERING ─────────────────
  {
    q: 'What is Applied Prompt Engineering?',
    a: 'An online course available in Tamil & English that teaches you how to craft effective prompts, use the GCAS Framework, automate tasks, and make AI work for you — not the other way around.',
    tags: ['prompt engineering', 'ai', 'chatgpt', 'prompts', 'tamil', 'english'],
  },
  {
    q: 'What will I learn in the Prompt Engineering course?',
    a: 'You\'ll learn: crafting effective prompts, the GCAS Framework (Goal, Context, Audience, Style), meta prompting, AI integrations, data visualisation, task automation, fact-checking, research, content creation, and a capstone project.',
    tags: ['prompt engineering', 'learn', 'gcas', 'framework', 'automate'],
  },
  {
    q: 'What tools are taught in Prompt Engineering?',
    a: 'The course covers LLM tools like ChatGPT and Gemini, Perplexity AI, Image Generation Tools, Video Generation AI Tools, and NotebookLM.',
    tags: ['prompt engineering', 'tools', 'chatgpt', 'gemini', 'perplexity', 'notebooklm'],
  },
  {
    q: 'How much does the Prompt Engineering course cost?',
    a: 'The Applied Prompt Engineering course is priced at ₹499 (original price ₹999). It\'s available in Tamil & English.',
    tags: ['prompt engineering', 'price', 'cost', 'fee', '499', 'rupees'],
  },

  // ── COURSE 4: FUNDAMENTALS OF AI TOOLS ───────────────────
  {
    q: 'What is Fundamentals of AI Tools?',
    a: 'A course that teaches you how to use 22+ AI tools — covering writing, visuals, video, analytics, and automation. It helps you think like a system designer, automate like a strategist, and create like a visionary.',
    tags: ['fundamentals', 'ai tools', '22 tools', 'automation', 'visuals'],
  },
  {
    q: 'Who is the Fundamentals of AI Tools course for?',
    a: 'Anyone who wants to understand how modern AI tools actually work — creators, marketers, designers, students, and professionals who want to use AI practically in their daily workflow.',
    tags: ['fundamentals', 'ai tools', 'who', 'for whom', 'audience'],
  },
  {
    q: 'What AI tools will I learn in the Fundamentals course?',
    a: 'You\'ll master 22+ tools including ChatGPT Plus, Gemini, Grok, Perplexity, Synthesia, HeyGen, Veo-3, Sora, Meta AI, Adobe Firefly, Leonardo AI, Jasper, Genspark, Manus AI, Copilot, NotebookLM, Napkin.AI, Gamma AI, and more.',
    tags: ['fundamentals', 'ai tools', 'chatgpt', 'gemini', 'firefly', 'copilot', 'list'],
  },
  {
    q: 'Do I need to pay for the AI tools in the Fundamentals course?',
    a: 'Many tools have free versions. Where premium access is required, alternatives or trial options are provided so you can learn without a large upfront cost.',
    tags: ['fundamentals', 'ai tools', 'free', 'paid', 'cost', 'premium'],
  },

  // ── P.I.X.E.L ETHOS ─────────────────────────────────────
  {
    q: 'What is the PIXEL learning philosophy?',
    a: 'P.I.X.E.L stands for: Purpose-Driven Learning, Intelligent Application, eXperimentation as a Habit, Evolution over Perfection, and Lifelong Learning Culture. It\'s the framework behind every Pixel Academy course.',
    tags: ['pixel', 'philosophy', 'learning', 'ethos', 'framework'],
  },
];
