import Link from 'next/link';

export default function Footer() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <footer className="w-full bg-white border-t border-zinc-200 py-6 md:py-8 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Left Side: Navigation Links */}
        <div className="flex flex-wrap justify-center xl:justify-start items-center gap-x-6 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] md:text-[14px] font-medium text-zinc-500 hover:text-brand-blue transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Copyright & Icon */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-6 md:gap-8">
          <div className="text-[12px] md:text-[13px] font-medium text-zinc-400 text-center sm:text-right">
            &copy; 2026 Think4ever&trade;. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
