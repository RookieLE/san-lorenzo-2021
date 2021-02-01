import Header from 'components/Header';
import useLocale from 'hooks/useLocale';
import Agriturismo from 'components/Agriturismo';
import Rooms from 'components/Rooms';
import Activities from 'components/Activities';
import Features from 'components/Features';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

export default function IndexPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <Agriturismo />
      <Rooms />
      <Activities />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}
