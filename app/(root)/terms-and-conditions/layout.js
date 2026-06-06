import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Terms and Conditions | Think4Ever',
  description:
    'Read the terms and conditions for using the Think4Ever platform and services.',
  canonicalUrl: 'https://www.think4ever.com/terms-and-conditions/',
});

export default function TermsAndConditionsLayout({ children }) {
  return <>{children}</>;
}
