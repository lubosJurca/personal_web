import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'cs'],

  // Used when no locale matches
  defaultLocale: 'cs',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      cs: '/o-mne',
    },
    '/projects': {
      en: '/projects',
      cs: '/projekty',
    },
    '/contact': {
      en: '/contact',
      cs: '/kontakt',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
