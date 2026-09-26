import React from 'react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';

/* Temporary page: the client will decide the panel page content later. */

export const JoinUsPage = () => (
  <SiteLayout>
    <PageBanner
      label="Join our panel"
      title="Under"
      highlight="maintenance."
      intro="We are updating this page. Please check back soon."
    />
  </SiteLayout>
);