import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Ratings from '@/components/organism/Ratings';
import Rooms from '@/components/organism/Rooms';
import Activities from '@/components/organism/Activities';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';
import Seo from '@/components/Layout/Seo';

export default function IndexPage() {
  const { t } = useLocale();

  const seoAttributes = {
    title: t.seo.homepage,
  };

  const { title, subTitle, text, cta } = t.header.san_lorenzo;
  const headerText = { title, subTitle, text, cta };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header
        background='/assets/home/mountain.jpg'
        {...headerText}
        img_text={t.header.welcome}
      />
      <Rooms t={t} />
      <Activities t={t} />
      <Ratings />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
