import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import ColumnSection from '@/components/organism/ColumnSection';
import Ratings from '@/components/organism/Ratings';
import Rooms from '@/components/organism/Rooms';
import Activities from '@/components/organism/Activities';
import Features from '@/components/organism/Features';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';
import Agri from 'assets/home/agri.png';

export default function IndexPage() {
  const { t } = useLocale();

  const agri = t.homepage.san_lorenzo;
  const agriturismo = {
    title: agri.title,
    sub_title: agri.subTitle,
    text: agri.text,
    cta: agri.cta,
    img: {
      url: Agri,
      alt: 'agriturismo san lorenzo photo',
    },
  };

  return (
    <>
      <Header background='bg-home-header' page_type='home' />
      <ColumnSection data={agriturismo} bgSmoke ctaStyle='underline' />
      <Ratings />
      <Rooms t={t} />
      <Activities t={t} />
      <Features t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
