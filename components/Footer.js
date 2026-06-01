import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 py-6 md:py-8 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Links */}
        <div className="flex items-center">
          <Link
            href="/privacy-policy"
            className="text-[12px] md:text-[13px] font-medium text-zinc-500 hover:text-brand-blue transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-[12px] md:text-[13px] font-medium text-zinc-400 text-center md:text-right">
          Copyright &copy; 2025 Think4Ever Global Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
