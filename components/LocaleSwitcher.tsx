// import { useLocale, useTranslations } from 'next-intl';
// import LocaleSwitcherSelect from './LocaleSwitcherSelect';
// import { locales } from '@/config';

// export default function LocaleSwitcher() {
//   const t = useTranslations('LocaleSwitcher');
//   const locale = useLocale();

//   return (
//     <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
//       {locales.map((curr) => (
//         <option key={curr} value={curr}>
//           {curr}
//         </option>
//       ))}
//     </LocaleSwitcherSelect>
//   );
// }

// 'use client';

// import { useLocale } from 'next-intl';
// import { usePathname, useRouter } from 'next/navigation';
// import { ChangeEvent, useTransition } from 'react';

// export default function LocalSwitcher() {
//   const pathname = usePathname();
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localActive = useLocale();

//   const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     console.log(pathname);
//     const nextLocale = e.target.value;
//     startTransition(() => {
//       router.replace(`/${nextLocale}`);
//     });
//   };
//   return (
//     <label className='border-2 rounded'>
//       <p className='sr-only'>change language</p>
//       <select
//         defaultValue={localActive}
//         className='bg-transparent py-2'
//         onChange={onSelectChange}
//         disabled={isPending}
//       >
//         <option value='en'>English</option>
//         <option value='cs'>Čeština</option>
//       </select>
//     </label>
//   );
// }

import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
