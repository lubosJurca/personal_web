import { useTranslations } from 'next-intl';
import NotFoundPageBody from '@/components/NotFoundPageBody';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <NotFoundPageBody title={t('h2')} text={t('p')} buttonText={t('button')} />
  );
}
