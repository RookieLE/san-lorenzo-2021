import { useRouter } from 'next/router';

import en from '../locales/en';
import it from '../locales/it';
import de from '../locales/de';

export default function useLocale() {
  const router = useRouter();
  const { locale } = router;
  const t =
    (locale === 'it' && it) ||
    (locale === 'de' && de) ||
    (locale === 'en' && en);

  const handleChangeLang = (locale) => {
    router.push('/', '/', { locale });
  };

  return { t, locale, handleChangeLang };
}
