import Header from 'components/Header';
import useLocale from 'hooks/useLocale';
import Agriturismo from 'components/Agriturismo';
import Ratings from 'components/Ratings';
import Rooms from 'components/Rooms';
import Activities from 'components/Activities';
import Features from 'components/Features';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

export default function IndexPage() {
  const { t } = useLocale();

  return (
    <>
      <Header t={t} />
      <Agriturismo t={t} />
      <Ratings />
      <Rooms t={t} />
      <Activities t={t} />
      <Features t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
