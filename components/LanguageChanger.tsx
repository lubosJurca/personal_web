'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { GlobeIcon } from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (value: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${value};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + value + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${value}`));
    }

    router.refresh();
  };

  return (
    <div className='flex gap-2 items-center'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='flex gap-2'>
            <GlobeIcon className='h-8 w-8' />
            {currentLocale.toUpperCase()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-secondary' side='bottom'>
          <DropdownMenuRadioGroup
            value={currentLocale}
            onValueChange={handleChange}
          >
            <DropdownMenuRadioItem value='en'>English</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='cs'>Čeština</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
