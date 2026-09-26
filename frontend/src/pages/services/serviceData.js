/* Content for the three service pages. Edit the text here; the layout is in
   ServiceTemplate.jsx. */

export const services = [
  {
    slug: 'quantitative',
    path: '/services/quantitative-research',
    title: 'Quantitative',
    highlight: 'Research',
    intro:
      'Our quantitative research solutions help businesses measure opinions, behaviors, preferences, and market trends at scale. Through targeted surveys and structured data collection, we provide reliable, measurable insights across consumer, B2B, and healthcare audiences, supporting informed decisions across products, brands, markets, and customer experiences.',
    offer: {
      title: 'What We Offer',
      items: [
        'Online Surveys',
        'Concept & Product Testing',
        'Brand & Awareness Studies',
        'Customer Satisfaction Surveys',
        'Usage & Attitude (U&A) Studies',
        'Market Segmentation',
        'Ad & Campaign Effectiveness',
        'Tracking & Omnibus Studies',
      ],
    },
    detail: {
      title: 'What You Get',
      items: [
        'Profiled Respondents',
        'Country and region-specific targeting',
        'Demographic & behavioral profiling',
        'Rigorous quality checks',
        'Flexible sample sizes',
      ],
    },
  },
  {
    slug: 'qualitative',
    path: '/services/qualitative-deep-dives',
    title: 'Qualitative',
    highlight: 'Research',
    intro:
      'Our qualitative research services explore the motivations, perceptions, experiences, and needs behind consumer and professional decisions. Through in-depth interviews, focus groups, online communities, and other methodologies, we help uncover deeper perspectives and actionable insights that structured data alone may not reveal.',
    offer: {
      title: 'What We Offer',
      items: [
        'In-Depth Interviews (IDIs)',
        'Focus Groups',
        'Online Communities',
        'Online Focus Groups',
        'Consumer Diaries',
        'Product & Experience Research',
      ],
    },
    detail: {
      title: 'What We Help Uncover',
      items: [
        'Consumer motivations',
        'Needs & pain points',
        'Attitudes & perceptions',
        'Purchase drivers',
        'Product experiences',
        'Brand perceptions',
        'Emerging trends',
      ],
    },
  },
  {
    slug: 'cati',
    path: '/services/cati-excellence',
    title: '',
    highlight: 'CATI',
    intro:
      'Our CATI services combine structured telephone interviewing with targeted respondent recruitment to deliver reliable research data efficiently. We support consumer, B2B, and healthcare studies across diverse markets, with trained interviewers, controlled processes, and rigorous quality checks to ensure consistent and dependable responses.',
    offer: {
      title: 'Our Calling Capabilities',
      items: [
        'Structured telephone interviews',
        'Multi-market calling',
        'Targeted respondent recruitment',
        'Local-language interviewing',
        'Flexible sample requirements',
        'Script-based interviewing',
      ],
    },
    detail: {
      title: 'Quality Controls',
      items: [
        'Interviewer training',
        'Script adherence',
        'Call monitoring',
        'Respondent validation',
        'Duplicate prevention',
        'Quality audits',
      ],
    },
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
