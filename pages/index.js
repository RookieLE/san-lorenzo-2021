import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../locales/en';
import it from '../locales/it';

import Layout from '../components/Layout';

export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = locale === 'it' ? it : en;

  const handleChangeLang = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <Layout>
      <h1>Index page</h1>
      <p>Current locale: {t.homepage.welcome}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <select onChange={handleChangeLang} defaultValue={locale}>
        <option value='en'>EN</option>
        <option value='it'>IT</option>
        <option value='de'>DE</option>
      </select>
      <br />
    </Layout>
  );
}
