import Link from 'next/link';

import useLocale from '../hooks/useLocale';

export default function IndexPage() {
  const { t } = useLocale();

  return (
    <>
      <h1>{t.homepage?.welcome}</h1>
    </>
  );
}
