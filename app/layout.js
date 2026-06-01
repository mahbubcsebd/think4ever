import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Think4Ever | Creative Digital Branding & Strategy Agency',
  description:
    'We are creative strategists with really great taste and analytical minds. We build stunning, highly interactive digital branding solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Navigation Header */}
        <Header />
        {children}
        {/* Main Footer */}
        <Footer />
      </body>
    </html>
  );
}
