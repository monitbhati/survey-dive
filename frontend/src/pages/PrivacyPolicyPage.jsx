import React from 'react';
import { LegalLayout, LegalList, B } from '../components/site/LegalLayout';
import { company, isReal } from '../components/site/siteContent';

/* Same wording as the Factum Research policy, with Survey Dive's details.
   [Bracketed] items are for the client and their lawyers to confirm. */

const Email = () =>
  isReal(company.email) ? <a href={`mailto:${company.email}`} className="text-[#E69B57] hover:underline">{company.email}</a> : <>{company.email}</>;

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <p>
        Welcome to Survey Dive. We respect your privacy and are committed to protecting your personal data. This
        privacy policy explains how we collect, use, and safeguard your information when you register as a panelist
        or interact with our services.
      </p>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    content: (
      <>
        <p>When you register as a panelist, we collect:</p>
        <LegalList
          items={[
            <><B>Personal information:</B> Name, email address, age, gender, city, and country</>,
            <><B>Technical data:</B> IP address, browser type, device information</>,
            <><B>Survey responses:</B> Your opinions and answers to research questions</>,
            <><B>Usage data:</B> How you interact with our platform</>,
          ]}
        />
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    content: (
      <>
        <p>We use your personal information to:</p>
        <LegalList
          items={[
            'Match you with relevant research surveys',
            'Communicate survey invitations and opportunities',
            'Process rewards and incentives',
            'Improve our services and user experience',
            'Comply with legal obligations',
            'Conduct market research analysis (anonymized data)',
          ]}
        />
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Data sharing and disclosure',
    content: (
      <>
        <p>We do not sell your personal information. We may share your data with:</p>
        <LegalList
          items={[
            <><B>Research clients:</B> Only aggregated, anonymized data</>,
            <><B>Service providers:</B> Trusted partners who assist in platform operations</>,
            <><B>Legal authorities:</B> When required by law or to protect rights</>,
          ]}
        />
        <p>
          Your personally identifiable information (PII) is never shared with research clients. Only anonymized,
          aggregated data is used in research reports.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Data security',
    content: (
      <>
        <p>We implement industry-standard security measures to protect your data:</p>
        <LegalList
          items={[
            'Encrypted data transmission (SSL/TLS)',
            'Secure password storage using industry-standard hashing',
            'Regular security audits and updates',
            'Access controls and authentication systems',
          ]}
        />
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    content: (
      <p>
        You have the right to access, correct, delete, or port your data, as well as object to processing. To
        exercise these rights, contact us at: <Email />
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and tracking',
    content: (
      <p>
        We use cookies and similar technologies to enhance your experience and analyze platform usage. You can control
        cookie settings through your browser preferences.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention',
    content: (
      <p>
        We retain your personal data for as long as your account is active. Survey response data may be retained in
        anonymized form for research purposes even after account deletion.
      </p>
    ),
  },
  {
    id: 'transfers',
    title: 'International data transfers',
    content: (
      <p>
        Your data may be processed in countries other than your country of residence. We ensure appropriate
        safeguards are in place to protect your information.
      </p>
    ),
  },
];

export const PrivacyPolicyPage = () => (
  <LegalLayout
    title="Privacy policy"
    updated="[Month Year]"
    intro="How Survey Dive collects, uses, and protects your personal information."
    sections={sections}
    note="This privacy policy is part of our commitment to transparency. By using our services, you acknowledge that you have read and understood this policy."
  />
);
