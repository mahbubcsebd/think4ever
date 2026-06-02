import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Privacy Policy | Think4Ever',
  description:
    'Learn how Think4Ever collects, uses, and protects your personal information.',
  canonicalUrl: 'https://www.think4ever.com/privacy-policy/',
});

export default function PrivacyPolicyLayout({ children }) {
  return <>{children}</>;
}
