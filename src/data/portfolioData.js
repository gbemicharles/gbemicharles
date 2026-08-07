export const personalInfo = {
  name: "Gbemicharles",
  title: "AI & Web3 Full-Stack Developer | Website, Bot & Mini-App Builder",
  tagline: "AI & Web3 Full-Stack Developer | Website, Bot & Mini-App Builder | TON Ecosystem Strategist | UI/UX & Web Performance Expert.",
  typingPhrases: [
    "Telegram Mini-App Developer",
    "Telegram Bot Developer",
    "AI Expert & Engineer",
    "Full-Stack Web & App Developer",
    "UI/UX & Web Performance Expert",
    "Website & Webpage Developer",
    "TON Ecosystem Builder",
    "React & Node.js Specialist"
  ],
  bio: "A powerhouse Full-Stack Developer, AI Expert, and Web3 Engineer specializing in building high-performance websites, custom webpages, Telegram bots, and blockchain-integrated mini-applications. As an OG supporter of the TON ecosystem, I bridge responsive UI/UX designs and artificial intelligence with Telegram's decentralized expansion. I design and ship responsive user interfaces, deploy scalable APIs, build Telegram Mini-Apps, and construct robust automation bots to bring the next million users to Web3.",
  location: "Nigeria (Available Remote Worldwide)",
  email: "lordgbemicharles@gmail.com",
  github: "https://github.com/gbemicharles",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com/Gbemicharles_",
  telegram: "https://t.me/gbemicharles",
  status: "Available for high-impact websites, mini-apps, bots, & AI builds",
  resumeUrl: "/Gbemicharles_Resume.pdf"
};

export const statsData = [
  { label: "Years in Software", value: 9, suffix: "+" },
  { label: "Websites & Mini-Apps", value: 50, suffix: "+" },
  { label: "AI & Automation Bots", value: 12, suffix: "+" },
  { label: "Community Builders Reached", value: 50, suffix: "K+" }
];

export const skillCategories = [
  {
    name: "Web & App Development",
    icon: "Layout",
    skills: [
      { name: "Website & Webpage Design", level: 96 },
      { name: "Telegram Mini-Apps (TMA) API", level: 93 },
      { name: "TON Connect SDK & Wallet Integrations", level: 95 },
      { name: "Responsive UI/UX & Web Performance", level: 94 },
      { name: "Full-Stack Web & App Architectures", level: 92 }
    ]
  },
  {
    name: "AI & Telegram Bots",
    icon: "Cpu",
    skills: [
      { name: "Telegram Bot API (Node.js/Python)", level: 95 },
      { name: "LLM & OpenAI API Integration", level: 92 },
      { name: "Semantic Search & Vector Databases", level: 88 },
      { name: "Automated Chat Workflows & Agents", level: 87 },
      { name: "AI Prompt Engineering", level: 94 }
    ]
  },
  {
    name: "Core Engineering",
    icon: "Server",
    skills: [
      { name: "React / Next.js / TypeScript", level: 95 },
      { name: "Node.js / Express / FastAPI", level: 90 },
      { name: "PostgreSQL / MongoDB / Redis", level: 88 },
      { name: "Git Version Control & CI/CD", level: 96 },
      { name: "Docker Container Deployments", level: 85 }
    ]
  }
];

export const projectCategories = ["All", "Web3 & TON", "AI & Mini Apps", "Bots", "Web3 & DEX"];

export const projectsData = [
  {
    id: "pedro-on-ton",
    title: "Pedro on TON",
    category: "Web3 & TON",
    image: "/images/pedroton.jpg",
    description: "Pedro is an AI bot and Telegram Mini-App designed for tracking balances and interacting with meme token holders in a high-vibe, community-focused way.",
    tech: ["React", "Vite", "TON Connect", "OpenAI API", "Python", "FastAPI"],
    liveUrl: "https://t.me/pedroton_bot",
    githubUrl: "https://github.com/gbemicharles",
    featured: true,
    highlights: [
      "AI conversational agent vibe-checking and engaging with token holders",
      "Non-custodial balance tracker displaying user meme and jetton assets",
      "Interactive community leaderboard and gamified social rewards"
    ]
  },
  {
    id: "toniq",
    title: "TON Intelligence Quotient (TONIQ)",
    category: "AI & Mini Apps",
    image: "/images/toniq.jpg",
    description: "TONIQ is a smart Telegram assistant for TON. Manage wallets, explore NFTs, and execute real DeFi in one place.",
    tech: ["React", "TypeScript", "@tonconnect/ui-react", "FastAPI", "PostgreSQL", "Web3 APIs"],
    liveUrl: "https://t.me/tonintelligencequotientbot",
    githubUrl: "https://github.com/gbemicharles",
    featured: true,
    highlights: [
      "Smart assistant parsing blockchain data and answering user DeFi commands",
      "Multi-wallet management interface with secure sign-in controls",
      "All-in-one DeFi engine supporting NFT explorer tools and swap metrics"
    ]
  },
  {
    id: "mediaroom-bot",
    title: "MediaRoom Bot",
    category: "Bots",
    image: "/images/mediaroom.jpg",
    description: "MediaRoom Bot is the operating system for digital content creation. It combines AI writing, image generation, video creation, automation, and publishing tools into one platform, enabling individuals and teams to produce professional-quality media at scale.",
    tech: ["Node.js", "GramJS", "Express", "OpenAI API", "Stable Diffusion", "MongoDB"],
    liveUrl: "https://t.me/themediaroombot",
    githubUrl: "https://github.com/gbemicharles",
    featured: true,
    highlights: [
      "All-in-one content engine combining AI copywriting, images, and video creation",
      "Automated asset publishing pipeline posting across major social channels",
      "Scale-ready architecture designed for creators and collaborative media teams"
    ]
  },
  {
    id: "gramfinity",
    title: "Gramfinity",
    category: "Web3 & DEX",
    image: "/images/gramfinity.png",
    description: "A comprehensive Web3 trade terminal, DEX explorer, whale tracker, and portfolio analytics platform for the TON blockchain. Built to run seamlessly as both a standalone web application and a Telegram Mini-App.",
    tech: ["React", "TypeScript", "Vite", "@tonconnect/ui-react", "Chart.js", "WebSockets", "FastAPI"],
    liveUrl: "https://github.com/gbemicharles",
    githubUrl: "https://github.com/gbemicharles",
    featured: true,
    highlights: [
      "Instant Trade Terminal with real-time candlestick charts and dynamic order books",
      "Discover Scanner analyzing security parameters and holder concentration risks",
      "Whale Tracker and Portfolio Scanner detailing real-time whale movements across TON DEXs"
    ]
  }
];

export const experienceTimeline = [
  {
    role: "Web3 Software Engineer & Community Strategist",
    company: "Pedro TON (@_PEDROTON)",
    period: "2024 - Present",
    type: "Web3",
    description: "Engineering responsive Web3 landing pages, custom interactive portal interfaces, and community systems on the TON blockchain. Collaborating on token distribution portals and user onboarding flows.",
    skills: ["Web3 Engineering", "React", "UI/UX Design", "TON Ecosystem", "Community Strategy"]
  },
  {
    role: "Full-Stack Web & App Developer",
    company: "Freelance Contracts",
    period: "2023 - Present",
    type: "Contract",
    description: "Developing responsive websites, custom webpages, backend automation bots, custom AI integrations, and launching Telegram Mini-Apps (TMAs).",
    skills: ["Telegram Bots", "Mini-Apps", "React", "TypeScript", "OpenAI API", "FastAPI"]
  },
  {
    role: "Certificate in Mobile App Development",
    company: "AstraTech",
    period: "2022",
    type: "Education",
    description: "Certificate of Completion specializing in cross-platform mobile application development, UI/UX responsiveness, and native API integrations.",
    skills: ["Mobile Apps", "UI/UX Design", "AstraTech", "React Native", "Flutter"]
  },
  {
    role: "National Diploma (ND) & Higher National Diploma (HND) in Computer Science",
    company: "Computer Science Studies",
    period: "2018 - 2023",
    type: "Education",
    description: "Completed National Diploma (ND) and Higher National Diploma (HND) programs in Computer Science. Specialized in software design, systems analysis, data structures, algorithms, databases, and OOP.",
    skills: ["Software Engineering", "Algorithms", "OOP", "Systems", "Database Systems"]
  }
];

export const terminalCommands = {
  help: "Available commands:\n  whoami      - Brief summary of Gbemicharles\n  skills      - List website, bot, & app development skills\n  projects    - View websites, bots, and mini-apps built\n  experience  - View my timeline in the ecosystem\n  contact     - Display contact info & domains\n  clear       - Clear terminal output\n  sudo hire   - Unlock recruiter contact protocol!",
  whoami: "Gbemicharles | Full-Stack Web & App Developer specializing in websites, Telegram bots, mini-apps, and AI integrations.",
  skills: "Web & Apps: Website & webpage design, Telegram Mini-Apps (TMA), React, TypeScript, Next.js, Node.js, Express, CSS\nBots & AI:  Telegram Bot API, OpenAI API integration, Automation bots, LLMs, FastAPI, Python\nDatabases:  PostgreSQL, MongoDB, Redis, Docker, Git CI/CD",
  projects: "1. Pedro on TON (Web3 & TON)\n2. TON Intelligence Quotient (TONIQ) (Mini Apps)\n3. Mediaroom Bot (AI & Bots)\n4. Gramfinity (Web3 & DEX)",
  experience: "• 2024-Pres: Web3 Software Engineer & Community Strategist @ Pedro TON\n• 2023-Pres: Full-Stack Web & App Developer @ Web & AI Contracts\n• 2022:      Certificate in Mobile App Dev @ AstraTech\n• 2018-2023: ND & HND in Computer Science",
  contact: "Email: lordgbemicharles@gmail.com\nTelegram: t.me/gbemicharles\nWebsites: gbemicharles.com | gbemicharles.org | gbemicharles.dev | gbemicharles.ton\nTwitter/X: @Gbemicharles_\nGitHub: github.com/gbemicharles\nStatus: Available for websites, webpages, bots, mini-apps, and full-stack app builds!"
};


