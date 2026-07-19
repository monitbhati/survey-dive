export const mockData = {
  company: {
    name: 'Survey Dive',
    tagline: 'Insights That Run Deep',
    description: 'We help organizations move beyond surface-level data through rigorous survey design, robust sampling methodologies, and qualitative research that surfaces the "why" behind every number. From first question to final insight, nothing gets lost beneath the surface.',
    email: "[Add Survey Dive's contact email]",
    address: "[Add Survey Dive's official business address]"
  },

  stats: {
    projectsCompleted: '180',
    industriesServed: '20',
    clientSatisfaction: '96',
    yearsExperience: '8'
  },

  services: [
    {
      id: 1,
      title: 'Survey Design & Deployment',
      description: "We build questionnaires that capture what actually matters — not just what's easy to ask. Every survey is structured around clear behavioral and market objectives, then deployed across the channels your audience actually uses.",
      features: [
        'Custom questionnaire architecture',
        'Multi-channel survey deployment',
        'Live data quality monitoring',
        'Statistical sampling design',
        'Interactive results dashboards'
      ],
      icon: 'ClipboardList'
    },
    {
      id: 2,
      title: 'CATI & Telephone Research',
      description: 'Trained interviewers, structured scripts, and a quality-first process — our CATI operations turn phone conversations into reliable, analyzable data at scale, without losing the human nuance behind each response.',
      features: [
        'Trained interviewer network',
        'Call quality monitoring',
        'Multilingual interviewing support',
        'Structured callback scheduling',
        'Response verification protocols'
      ],
      icon: 'Phone'
    },
    {
      id: 3,
      title: 'Qualitative Deep Dives',
      description: 'When the numbers alone don\'t explain the "why," we go deeper. Our moderators lead in-depth interviews and discussions that surface the motivations, friction points, and context that quantitative data misses.',
      features: [
        'Experienced research moderators',
        'In-depth interview protocols',
        'Thematic analysis & coding',
        'Video and audio documentation',
        'Strategic insight synthesis'
      ],
      icon: 'Users'
    }
  ],

  whyChooseUs: [
    { id: 1, icon: 'TrendingUp', title: 'Data-Driven Precision', description: 'Every insight is grounded in statistically sound methodology, not assumption.' },
    { id: 2, icon: 'ShieldCheck', title: 'Rigorous Quality Control', description: 'Multi-stage validation ensures your data holds up to scrutiny at every level.' },
    { id: 3, icon: 'Award', title: 'Proven Track Record', description: 'Trusted across diverse industries to deliver research that drives real decisions.' },
    { id: 4, icon: 'Target', title: 'Actionable Outcomes', description: 'We translate raw findings into clear, decision-ready recommendations.' }
  ],

  faqs: [
    {
      id: 1,
      question: 'Which industries do you typically work with?',
      answer: "We've run research across healthcare, financial services, technology, consumer goods, education, and B2B sectors. Each project draws on relevant industry context so findings are grounded in the realities of your specific market."
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'It depends on the methodology. Survey-based projects generally run 3-6 weeks, CATI programs 2-8 weeks depending on sample size, and qualitative research is scoped around reaching real insight saturation rather than a fixed calendar.'
    },
    {
      id: 3,
      question: 'How do you ensure the data is actually reliable?',
      answer: "Reliability isn't a final check — it's built into the process from the start. We pilot every methodology before full rollout, calibrate interviewers against a shared standard, and monitor fieldwork as it happens. Nothing goes out the door without a statistical review first."
    },
    {
      id: 4,
      question: 'Can you run research across multiple countries?',
      answer: 'Yes — we work with vetted fieldwork partners in multiple markets to run coordinated multi-country studies, with consistent methodology and quality oversight regardless of where the fieldwork happens.'
    },
    {
      id: 5,
      question: 'What do we actually receive at the end of a project?',
      answer: "A full report with an executive summary, detailed findings, supporting data, and clear recommendations. We can also provide raw datasets, topline summaries, or interactive dashboards depending on what's useful for your team."
    },
    {
      id: 6,
      question: 'How is our data kept secure and confidential?',
      answer: 'All data is handled under encrypted transmission and access-controlled storage, backed by NDAs and standard data protection compliance. Confidentiality is a baseline requirement, not an add-on.'
    }
  ]
};