/* Content for the four service pages. Edit the text here; the layout is in
   ServiceTemplate.jsx. Everything in [square brackets] is for the client to confirm. */

export const services = [
  {
    slug: 'survey-design',
    cta: 'Planning a survey?',
    path: '/services/survey-designing',
    title: 'Survey design',
    short: 'Questionnaires built around the decision you need to make, tested before they go live.',
    intro:
      'A survey is only as good as its questions. We write questionnaires that are clear to respondents, neutral in tone, and built to answer the exact decision in front of you.',
    whenToUse: [
      'You know what you want to learn, but not how to ask it',
      'Your current survey gets low response rates or unclear answers',
      'You need the same questionnaire in several languages',
      'You are running a study for the first time and want it right',
    ],
    steps: [
      { title: 'Objectives', text: 'We turn your business question into a short list of things the survey must measure.' },
      { title: 'Drafting', text: 'Questions written in plain language, in an order that keeps respondents engaged.' },
      { title: 'Translation', text: 'Translated and back-checked so every language asks the same thing. [Languages offered]' },
      { title: 'Pilot test', text: 'Tried with a small group of real respondents, then refined before launch.' },
    ],
    deliverables: ['Final questionnaire in all required languages', 'Scripted online survey [if required]', 'Pilot test summary', 'Recommended sample plan'],
    quality: ['Every question reviewed for bias and leading wording', 'Logic and routing tested before launch', 'Back-translation for every language version'],
    timeline: '[3 to 7 working days]',
  },
  {
    slug: 'quantitative',
    cta: 'Planning a quantitative study?',
    path: '/services/quantitative-research',
    title: 'Quantitative research',
    short: 'Structured studies at scale, with sampling and weighting that make the numbers hold.',
    intro:
      'When you need numbers you can act on, like market size, brand health, or customer satisfaction, we design and run studies with samples large and representative enough to trust.',
    whenToUse: [
      'Measuring brand awareness, perception, or preference',
      'Sizing a market or an audience',
      'Tracking customer or employee satisfaction over time',
      'Testing concepts, pricing, or advertising before launch',
    ],
    steps: [
      { title: 'Sample design', text: 'Who to survey, how many, and in which cities or regions, so results reflect your real audience.' },
      { title: 'Data collection', text: 'Online, by phone, or face to face, depending on who you need to reach. [Modes offered]' },
      { title: 'Quality checks', text: 'Responses checked for speeding, straight-lining, duplicates, and inconsistencies.' },
      { title: 'Analysis', text: 'Weighted data, cross-tabulations, and a report that answers your original question.' },
    ],
    deliverables: ['Clean, weighted data file', 'Cross-tabulations', 'Report with key findings and charts', 'Presentation to your team'],
    quality: ['Quotas monitored daily during fieldwork', 'Automated and manual checks on every response', 'Full audit trail of removed responses'],
    timeline: '[2 to 4 weeks, depending on sample size]',
  },
  {
    slug: 'cati',
    cta: 'Planning a CATI study?',
    path: '/services/cati-excellence',
    title: 'CATI',
    short: 'Telephone interviews by trained callers, with live supervision on every shift.',
    intro:
      'Computer-assisted telephone interviewing reaches people surveys often miss: business decision-makers, older respondents, and people in smaller towns. Our callers are trained, scripted, and supervised.',
    whenToUse: [
      'Your audience is hard to reach online',
      'You need business-to-business interviews with verified respondents',
      'The questions need a human to explain or probe',
      'You need fast turnaround across many regions',
    ],
    steps: [
      { title: 'Script and training', text: 'Your questionnaire scripted into our calling system, and callers briefed on the study.' },
      { title: 'Calling', text: 'Interviews run from [number] calling seats in [languages], with supervisors on every shift.' },
      { title: 'Back-checks', text: 'A share of completed interviews re-verified with the respondent. [Percentage]' },
      { title: 'Delivery', text: 'Daily progress reports during fieldwork, then clean data at the end.' },
    ],
    deliverables: ['Completed interviews to your quota', 'Daily fieldwork progress reports', 'Clean data file', 'Call outcome report'],
    quality: ['Live supervision and call monitoring', '[Percentage] of interviews back-checked', 'Calls recorded with respondent consent [confirm]'],
    timeline: '[1 to 3 weeks, depending on sample size]',
  },
  {
    slug: 'qualitative',
    cta: 'Planning a qualitative study?',
    path: '/services/qualitative-deep-dives',
    title: 'Qualitative research',
    short: 'Focus groups and in-depth interviews that uncover the reasons behind the numbers.',
    intro:
      'Numbers tell you what is happening. Conversations tell you why. Our moderators run focus groups and one-to-one interviews that get people talking honestly.',
    whenToUse: [
      'You know what people do, but not why they do it',
      'You are exploring a new product or category',
      'You want to hear customers describe a problem in their own words',
      'You need to explain a surprising result from a survey',
    ],
    steps: [
      { title: 'Recruitment', text: 'Participants screened carefully against your criteria, with no repeat respondents.' },
      { title: 'Discussion guide', text: 'A guide that covers what you need while leaving room for surprises.' },
      { title: 'Sessions', text: 'Focus groups or in-depth interviews, in person or online, in [languages].' },
      { title: 'Analysis', text: 'Transcripts, translation, and a report built around themes and real quotes.' },
    ],
    deliverables: ['Recruited and screened participants', 'Discussion guide', 'Recordings and transcripts [with consent]', 'Report with themes and verbatim quotes'],
    quality: ['Strict screening, and no participants from the last [6] months', 'Experienced moderators in each language', 'Clients can observe sessions [confirm]'],
    timeline: '[2 to 3 weeks]',
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
