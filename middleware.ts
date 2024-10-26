import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'cs',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
