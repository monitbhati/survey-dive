import React from 'react';
import { LegalLayout, LegalList } from '../components/site/LegalLayout';

/* Same wording as the Factum Research terms, with Survey Dive's details.
   [Bracketed] items are for the client and their lawyers to confirm. */

const sections = [
  {
    id: 'agreement',
    title: 'Agreement to terms',
    content: (
      <p>
        By registering as a panelist with Survey Dive, you agree to be bound by these Terms and Conditions. If you do
        not agree with any part of these terms, please do not register or use our services.
      </p>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    content: (
      <>
        <p>To participate as a panelist, you must:</p>
        <LegalList
          items={[
            'Be at least 18 years of age',
            'Provide accurate and truthful information during registration',
            'Have legal capacity to enter into binding agreements',
            'Not be prohibited from using our services under applicable laws',
          ]}
        />
      </>
    ),
  },
  {
    id: 'registration',
    title: 'Account registration',
    content: (
      <>
        <p>When creating an account, you agree to:</p>
        <LegalList
          items={[
            'Provide accurate, current, and complete information',
            'Maintain and update your information to keep it accurate',
            'Maintain the security and confidentiality of your password',
            'Accept responsibility for all activities under your account',
          ]}
        />
      </>
    ),
  },
  {
    id: 'responsibilities',
    title: 'Panelist responsibilities',
    content: (
      <>
        <p>As a panelist, you agree to:</p>
        <LegalList
          items={[
            'Provide honest and thoughtful responses',
            'Not use automated tools, bots, or scripts',
            'Not share survey links or discuss survey content',
            'Complete surveys personally',
          ]}
        />
      </>
    ),
  },
  {
    id: 'rewards',
    title: 'Rewards and incentives',
    content: (
      <p>
        Participation in research surveys may be rewarded with incentives at our discretion. Rewards are provided for
        complete and quality responses only. We reserve the right to withhold rewards for fraudulent or low-quality
        activity.
      </p>
    ),
  },
  {
    id: 'quality',
    title: 'Quality control',
    content: (
      <p>
        We employ multi-layered validation systems to ensure data integrity. Responses failing consistency checks, or
        displaying suspicious patterns, may be rejected. Repeated violations may lead to account termination.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    content: (
      <p>
        All content, trademarks, and materials are the property of Survey Dive. By participating, you grant us the
        right to use your anonymized responses for research and client reporting.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    content: (
      <p>
        These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive
        jurisdiction of courts in [City, State].
      </p>
    ),
  },
];

export const TermsConditionsPage = () => (
  <LegalLayout
    title="Terms and conditions"
    updated="[Month Year]"
    intro="The terms that apply when you join and take part in the Survey Dive panel."
    sections={sections}
    note='By clicking "Join the panel", you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.'
  />
);
