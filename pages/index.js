import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Ratings from '@/components/organism/Ratings';
import Rooms from '@/components/organism/Rooms';
import Activities from '@/components/organism/Activities';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';
import MountainImg from 'assets/home/mountain.jpg';
import Seo from '@/components/Layout/Seo';

export default function IndexPage() {
  const { t } = useLocale();

  const seoAttributes = {
    title: t.seo.homepage,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header background={MountainImg} page_type='home' />
      <Rooms t={t} />
      <Activities t={t} />
      <Ratings />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
