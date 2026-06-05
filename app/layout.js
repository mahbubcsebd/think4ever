import HubSpotRouteTracker from '@/components/globals/HubSpotRouteTracker';
import LiveAgentChat from '@/components/globals/LiveAgentChat';
import { constructMetadata } from '@/lib/metadata';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="//js-na3.hs-scripts.com/343174040.js"
          async
          defer
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <HubSpotRouteTracker />
        {children}
        <LiveAgentChat />
      </body>
    </html>
  );
}
