'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  ChevronDown,
  Code,
  HelpCircle,
  Palette,
  PlayCircle,
  Rocket,
  Settings,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '../public/images/logo.png';
import Button from './Button';

const RESOURCES_DATA = [
  {
    title: 'Blog',
    desc: 'Insights, updates, and deep dives into agentic development.',
    href: '/blog',
    icon: BookOpen,
  },
  {
    title: 'FAQ',
    desc: 'Frequently asked questions and detailed answers.',
    href: '/faq',
    icon: HelpCircle,
  },
];

const DOCS_DATA = [
  {
    title: 'Customer Onboarding',
    desc: 'Get started with Think4Ever and set up your environment.',
    href: 'https://think4ever.com/docs/onboarding.html',
    icon: Rocket,
  },
  {
    title: 'Think4ever Designer',
    desc: 'Learn how to use the Designer to map your systems.',
    href: 'https://think4ever.com/docs/manual_introduction.html',
    icon: Palette,
  },
  {
    title: 'Think4ever Developer',
    desc: 'Technical guide for developers building with Think4Ever.',
    href: 'https://think4ever.com/docs/dev/start_new_project.html',
    icon: Code,
  },
  {
    title: 'Think4ever Portal',
    desc: 'Learn how to use the Think4ever Portal.',
    href: 'https://think4ever.com/docs/portal/dashboard.html',
    icon: Users,
  },
  {
    title: 'Reverse Engineering',
    desc: 'Learn how to reverse engineer with Think4Ever.',
    href: 'https://think4ever.com/docs/reverse_engineering.html',
    icon: Settings,
  },
  {
    title: 'Video Tutorials',
    desc: 'Watch step-by-step guides on how to use Think4Ever.',
    href: 'https://think4ever.com/docs/tutorials/user_manual.html',
    icon: PlayCircle,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (prev) setOpenSubmenu(null);
      return !prev;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { label: 'How it Works', href: '/how-it-works', ids: ['how-it-works'] },
    { label: 'VS Code Plugin', href: '/vscode-plugin', ids: ['vscode-plugin'] },
    {
      label: 'Docs',
      href: '#',
      ids: ['docs'],
      submenu: DOCS_DATA,
    },
    { label: 'Pricing', href: '/#pricing', ids: ['pricing'] },
    {
      label: 'Resources',
      href: '#',
      ids: ['resources'],
      submenu: RESOURCES_DATA,
    },
    { label: 'Contact Us', href: '/contact-us', ids: ['contact'] },
  ];

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.38, ease: 'easeOut' },
    },
  };

  const isActive = (item) => {
    if (item.href === '/#pricing') {
      return (
        pathname === '/' &&
        typeof window !== 'undefined' &&
        window.location.hash === '#pricing'
      );
    }
    return pathname === item.href;
  };

  return (
    <>
      {/* ── Fixed Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isOpen
            ? 'h-[100dvh] overflow-hidden bg-white shadow-lg py-5'
            : scrolled
              ? 'h-[72px] py-2.5 bg-white/98 shadow-[0_1px_24px_rgba(0,0,0,0.07)] backdrop-blur-md'
              : 'h-[80px] py-5 bg-transparent'
        }`}
      >
        {/* Inner container — keeps content aligned with rest of page */}
        <div className="container mx-auto px-4 md:px-12 max-w-[1400px] flex justify-between items-center shrink-0">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => isOpen && toggleMenu()}
            className="flex items-center gap-1.5 group shrink-0"
          >
            <Image
              src={Logo}
              alt="Logo"
              className="w-[120px] md:w-[150px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
            {menuItems.map((item) => {
              const hasSubmenu = !!item.submenu;
              const active = isActive(item);
              return (
                <div key={item.label} className="relative group">
                  {hasSubmenu ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-2',
                        active
                          ? 'text-[#093cad]'
                          : 'text-zinc-600 hover:text-[#093cad]',
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-zinc-400 group-hover:text-[#093cad]" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'text-sm font-semibold transition-colors py-2 block',
                        active
                          ? 'text-[#093cad]'
                          : 'text-zinc-600 hover:text-[#093cad]',
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu (on hover) */}
                  {hasSubmenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-white border border-zinc-150 rounded-2xl shadow-xl p-4 flex flex-col gap-2 min-w-[320px] max-w-[420px]">
                        <ul className="grid gap-2 outline-none">
                          {item.submenu.map((subItem) => {
                            const Icon = subItem.icon;
                            const isExternal = subItem.href.startsWith('http');
                            const LinkComponent = isExternal ? 'a' : Link;
                            const linkProps = isExternal
                              ? { href: subItem.href, target: '_blank', rel: 'noopener noreferrer' }
                              : { href: subItem.href };

                            return (
                              <li key={subItem.title}>
                                <LinkComponent
                                  {...linkProps}
                                  className="block select-none space-y-1 rounded-xl p-2.5 no-underline outline-none transition-all hover:bg-zinc-50 group/sub"
                                >
                                  <div className="flex items-center gap-3">
                                    {Icon && (
                                      <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-zinc-50 border border-zinc-100 group-hover/sub:bg-white group-hover/sub:shadow-sm transition-all aspect-square">
                                        <Icon className="h-4.5 w-4.5 text-zinc-400 group-hover/sub:text-[#093cad]" />
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[13px] font-bold leading-tight text-zinc-800 group-hover/sub:text-[#093cad] transition-colors mb-0.5">
                                        {subItem.title}
                                      </div>
                                      <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
                                        {subItem.desc}
                                      </p>
                                    </div>
                                  </div>
                                </LinkComponent>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Right */}
          <div className="flex items-center gap-3">
            <Button
              href="https://portal.think4ever.com"
              variant="primary"
              onClick={() => isOpen && toggleMenu()}
            >
              Get Early Access
            </Button>

            {/* Hamburger Toggle */}
            <button
              id="menu-toggle"
              onClick={toggleMenu}
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-sm flex flex-col justify-center items-center gap-[5px] hover:bg-zinc-50 transition-all duration-300 relative z-[55] cursor-pointer lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`w-4 h-0.5 rounded-full bg-zinc-800 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`w-4 h-0.5 rounded-full bg-zinc-800 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-4 h-0.5 rounded-full bg-zinc-800 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
        {/* end inner container */}

        {/* ── Expanding Menu Content (Mobile) ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    when: 'beforeChildren',
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.2 },
                },
              }}
              className="flex-1 container mx-auto px-4 md:px-12 max-w-[1400px] w-full flex flex-col justify-center pb-20 overflow-y-auto no-scrollbar"
            >
              {/* Menu Content Links */}
              <div className="flex flex-col gap-5 md:gap-7 justify-center items-start mt-12 md:mt-0">
                {menuItems.map((item) => {
                  const isActiveItem = activeSection === item.ids[0];
                  const hasSubmenu = !!item.submenu;
                  const isSubmenuOpen = openSubmenu === item.label;

                  return (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      className="flex flex-col w-full"
                    >
                      <div
                        className="flex items-center"
                        onClick={(e) => {
                          if (hasSubmenu) {
                            e.preventDefault();
                            setOpenSubmenu(isSubmenuOpen ? null : item.label);
                          }
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (!hasSubmenu) {
                              toggleMenu();
                            } else {
                              e.preventDefault();
                            }
                          }}
                          className={cn(
                            'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight inline-flex items-center group transition-colors duration-300 w-full cursor-pointer',
                            isActiveItem && !hasSubmenu
                              ? 'bg-gradient-to-r from-[#07A7E1] to-[#093cad] bg-clip-text text-transparent'
                              : 'text-zinc-950 hover:text-[#093cad]',
                          )}
                        >
                          <span
                            className={cn(
                              'h-[3px] md:h-[4px] bg-gradient-to-r from-[#07A7E1] to-[#093cad] rounded-full transition-all duration-300 flex-shrink-0',
                              isActiveItem && !hasSubmenu
                                ? 'w-6 md:w-8 opacity-100 mr-4'
                                : 'w-0 opacity-0 mr-0 group-hover:w-6 group-hover:md:w-8 group-hover:opacity-100 group-hover:mr-4',
                            )}
                          />
                          <span
                            className={
                              isActiveItem && !hasSubmenu
                                ? ''
                                : 'transition-colors duration-300 group-hover:text-[#093cad]'
                            }
                          >
                            {item.label}
                          </span>
                          {hasSubmenu && (
                            <span
                              className="ml-4 transition-transform duration-300 text-zinc-400 group-hover:text-[#093cad]"
                              style={{
                                transform: isSubmenuOpen
                                  ? 'rotate(180deg)'
                                  : 'rotate(0deg)',
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </span>
                          )}
                        </Link>
                      </div>

                      {/* Submenu Accordion */}
                      <AnimatePresence>
                        {hasSubmenu && isSubmenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 pl-8 md:pl-12 pt-4 pb-2">
                              {item.submenu.map((subItem, idx) => {
                                return (
                                  <Link
                                    key={idx}
                                    href={subItem.href}
                                    onClick={toggleMenu}
                                    className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight inline-flex items-center group transition-colors duration-300 w-full cursor-pointer text-zinc-950 hover:text-[#093cad]"
                                  >
                                    <span className="w-0 opacity-0 mr-0 group-hover:w-5 group-hover:md:w-6 group-hover:opacity-100 group-hover:mr-4 h-[3px] md:h-[4px] bg-gradient-to-r from-[#07A7E1] to-[#093cad] rounded-full transition-all duration-300 flex-shrink-0" />
                                    <span className="transition-colors duration-300 group-hover:text-[#093cad]">
                                      {subItem.title}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
