import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Agriturismo from '@/components/organism/Agriturismo';
import Ratings from '@/components/organism/Ratings';
import Rooms from '@/components/organism/Rooms';
import Activities from '@/components/organism/Activities';
import Features from '@/components/organism/Features';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

export default function IndexPage() {
  const { t } = useLocale();

  return (
    <>
      <Header background='bg-home-header' page_type='home' />
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
