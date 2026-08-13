export type Bullet = {
  lead: string
  text: string
  href?: string
  hrefLabel?: string
}

export type Role = {
  company: string
  title: string
  location: string
  start: string
  end: string
  bullets: Bullet[]
}

export type EarlierRole = {
  company: string
  title: string
  period: string
}

export type Tool = {
  name: string
  href: string
}

export type ToolGroup = {
  label: string
  items: Tool[]
}

export type Degree = {
  school: string
  credential: string
  period: string
}

export type Profile = {
  name: string
  tagline: string
  email: string
  github: string
  linkedin: string
}

export type IntroLink = {
  text: string
  href: string
}

export type IntroPart = string | IntroLink

export type IntroParagraph = IntroPart[]

export function introToPlainText(parts: IntroPart[]): string {
  return parts.map((p) => (typeof p === 'string' ? p : p.text)).join('')
}

export function introToMarkdown(parts: IntroPart[]): string {
  return parts
    .map((p) => (typeof p === 'string' ? p : `[${p.text}](${p.href})`))
    .join('')
}

export type CvData = {
  profile: Profile
  intro: IntroParagraph[]
  roles: Role[]
  earlier: EarlierRole[]
  toolStack: ToolGroup[]
  education: Degree[]
  awards: string
}

export const cv: CvData = {
  profile: {
    name: 'Samuel Sendzul',
    tagline: 'Product focused software engineer',
    email: 'samuel.sendzul@gmail.com',
    github: 'https://github.com/Samuel-Sendzul',
    linkedin: 'https://www.linkedin.com/in/samuel-sendzul/',
  },

  intro: [
    [
      "Hi, I'm Sam, a software developer working across AI products, fintech, and blockchain. I've built an ",
      {
        text: 'OCR pipeline',
        href: 'https://www.linkedin.com/pulse/how-i-built-support-any-kind-pdf-week-samuel-sendzul-srjvf/',
      },
      ' that processes thousands of PDFs a week and overhauled a ',
      { text: 'mobile app', href: 'https://www.getrecall.ai' },
      " currently serving 17,000+ monthly users. I've also worked on scalable payment processing systems, crypto trading algorithms, and a ",
      {
        text: 'crypto acceptance product',
        href: 'https://stitch.money/payment-methods/pay-with-crypto',
      },
      '. Outside of work, I develop my own apps, such as ',
      { text: 'Blitz Rugby', href: 'https://blitz.rugby' },
      ', which now has 2,000+ monthly active users.',
    ],
  ],

  roles: [
    {
      company: 'Recall',
      title: 'Founding Engineer',
      location: 'Remote',
      start: 'Jan 2026',
      end: 'Present',
      bullets: [
        {
          lead: 'OCR pipeline',
          text: 'Built a self-hosted server that handles any PDF and processes thousands a week, ~95% cheaper than the cheapest cloud option. Owned research, deployment, monitoring, and alerting.',
          href: 'https://www.linkedin.com/pulse/how-i-built-support-any-kind-pdf-week-samuel-sendzul-srjvf/',
          hrefLabel: 'Article',
        },
        {
          lead: 'Mobile rewrite',
          text: 'Moved the app from a poorly performing React Native wrapped webview to Capacitor. Migrated 17k+ MAU with no interruption, shipped both store releases, and made the app faster to use and easier to develop on.',
        },
        {
          lead: 'Platform upgrades',
          text: 'Owned large platform upgrades from design and development to monitoring and iteration, including: knowledge base search, bulk upload with AI actions, and images as a primary card type with OCR and vision model integrations so users can save and recall more than text.',
        },
      ],
    },
    {
      company: 'Stitch',
      title: 'Full Stack Engineer',
      location: 'Cape Town, South Africa',
      start: 'Aug 2024',
      end: 'Dec 2025',
      bullets: [
        {
          lead: 'Shield fraud platform',
          text: 'Built core components of the realtime fraud prevention platform: rule-based monitoring, merchant-level customisation, and sync/async block-approve decisioning. Shield won Consumer Anti-Fraud Solution of the Year at Absa’s Commercial Payments Summit 2025.',
        },
        {
          lead: 'Hosted payment UI',
          text: 'Researched and designed a server-driven overhaul with a lightweight JS templating engine for entry-level devices and unreliable networks. Cut effective bundle size to near 0KB and hit <200ms p95 LCP.',
        },
        {
          lead: 'One click card payments',
          text: 'Built identity resolution across devices and sessions, then used those insights to persist card preference and ship a one-click card flow with a 2–3% conversion uplift for key merchants.',
        },
        {
          lead: 'Merchant Dashboard',
          text: 'Improved Finance Ops workflows for reconciliation, refunds, and realtime transaction analytics. Focused on reducing friction and improving data reliability for enterprise merchants.',
        },
      ],
    },
    {
      company: 'CrissCross',
      title: 'Full Stack Engineer',
      location: 'Cape Town, South Africa',
      start: 'Mar 2023',
      end: 'Jul 2024',
      bullets: [
        {
          lead: 'Pay with Crypto API',
          text: 'Built the Go payments API behind Stitch’s Pay with Crypto, covering Binance, Luno, VALR, and on-chain transfers plus settlement, reconciliation, and payment management. Still used by major SA betting brands.',
        },
        {
          lead: 'Trading and pricing',
          text: 'Worked on the Go algorithmic trading engine for cross-border liquidity, including position scaling, hedge management, and settlement. Built the pricing engine traders use for quoting and opportunity sourcing.',
        },
        {
          lead: 'Trading dashboards',
          text: 'Built React/Next.js dashboards for traders and enterprise clients to visualise markets, quote and book trades, monitor exposures, and withdraw funds.',
        },
      ],
    },
    {
      company: 'FiveWest',
      title: 'Full Stack Engineer',
      location: 'Cape Town, South Africa',
      start: 'Jun 2022',
      end: 'Feb 2023',
      bullets: [
        {
          lead: 'Crypto Payments Gateway',
          text: 'Designed and built it end to end so African merchants could accept crypto and settle automatically into local currency. Owned architecture, integration flows, and settlement logic.',
        },
        {
          lead: 'Sprint lead',
          text: 'Led engineering sprints for the gateway: set deliverables, made core architecture decisions, and kept reliability, security, and compliance in scope.',
        },
      ],
    },
    {
      company: 'Invictus Capital',
      title: 'Junior Quantitative Software Developer',
      location: 'Cape Town, South Africa',
      start: 'Mar 2022',
      end: 'May 2022',
      bullets: [
        {
          lead: 'Trading algorithms',
          text: 'Designed, implemented, and managed market-neutral crypto strategies in Python on Google Kubernetes Engine. Built backtests so the desk could iterate on new ideas against a realistic live environment.',
        },
        {
          lead: 'Move to FiveWest',
          text: 'When the desk’s trading IP was bought, the team moved across to FiveWest and continued as software developers.',
        },
      ],
    },
    {
      company: 'Cape AI',
      title: 'Machine Learning Engineer',
      location: 'Cape Town, South Africa',
      start: 'Oct 2021',
      end: 'Mar 2022',
      bullets: [
        {
          lead: 'On-edge computer vision',
          text: 'Built parts of the AI system behind Moonshop’s autonomous shopping, including Android on-edge camera work with MoveNet pose estimation and YOLOv5 object detection.',
        },
        {
          lead: 'Neo-bank personalisation',
          text: 'Led an ML project for a US neo-bank: framed the problem, engineered features from raw transactions, and validated and backtested the model. Started as Junior Data Scientist from May 2021.',
        },
      ],
    },
  ],

  earlier: [
    {
      company: 'Matogen Applied Insights',
      title: 'Data Science Intern',
      period: '2021',
    },
    {
      company: 'Outlines Art Collective',
      title: 'Founder',
      period: '2018–2020',
    },
    {
      company: 'SmartPrep',
      title: 'Workshop Instructor and Private Tutor',
      period: '2020–2021',
    },
  ],

  toolStack: [
    {
      label: 'Languages',
      items: [
        { name: 'Go', href: 'https://go.dev' },
        { name: 'Python', href: 'https://www.python.org' },
        { name: 'TypeScript', href: 'https://www.typescriptlang.org' },
      ],
    },
    {
      label: 'Product and frontend',
      items: [
        { name: 'React', href: 'https://react.dev' },
        { name: 'Next.js', href: 'https://nextjs.org' },
        { name: 'SvelteKit', href: 'https://svelte.dev' },
        { name: 'Capacitor', href: 'https://capacitorjs.com' },
      ],
    },
    {
      label: 'Backend and data',
      items: [
        { name: 'Postgres', href: 'https://www.postgresql.org' },
        { name: 'FastAPI', href: 'https://fastapi.tiangolo.com' },
        { name: 'gRPC', href: 'https://grpc.io' },
        { name: 'Supabase', href: 'https://supabase.com' },
      ],
    },
    {
      label: 'Infrastructure',
      items: [
        { name: 'Docker', href: 'https://www.docker.com' },
        { name: 'Kubernetes', href: 'https://kubernetes.io' },
        { name: 'Cloud Run', href: 'https://cloud.google.com/run' },
        { name: 'Firebase', href: 'https://firebase.google.com' },
        { name: 'Fly.io', href: 'https://fly.io' },
      ],
    },
    {
      label: 'Instrumentation',
      items: [
        { name: 'Sentry', href: 'https://sentry.io' },
        { name: 'PostHog', href: 'https://posthog.com' },
      ],
    },
    {
      label: 'AI assisted development',
      items: [
        { name: 'Cursor', href: 'https://cursor.com' },
        { name: 'Claude Code', href: 'https://claude.com/product/claude-code' },
      ],
    },
  ],

  education: [
    {
      school: 'Stellenbosch University',
      credential: 'BComHons Mathematical Statistics',
      period: '2020',
    },
    {
      school: 'Stellenbosch University',
      credential: 'BCom Mathematical Sciences, Financial Risk Management',
      period: '2017–2019',
    },
  ],

  awards:
    'Investec Out Of The Ordinary Award · 2017 Young Economist of the Year · Golden Key lifetime member · Capitec and Nedbank quant programmes',
}
