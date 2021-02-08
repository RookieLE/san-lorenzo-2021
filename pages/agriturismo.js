import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import ColumnSection from '@/components/organism/ColumnSection';
import ImgMosaic from '@/components/molecules/ImgMosaic';
import ImgCentral from '@/components/molecules/ImgCentral';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

import Agri from 'assets/home/agri.png';
import Fauna from 'assets/fauna.png';
import Flora from 'assets/flora.png';

export default function Agriturismo() {
  const { t } = useLocale();

  const agri = t.homepage.san_lorenzo;
  const agriturismo = {
    title: agri.title,
    sub_title: agri.subTitle,
    text: agri.text,
    cta: null,
    img: {
      url: Agri,
      alt: 'agriturismo san lorenzo photo',
    },
  };

  const flora = {
    title: 'Flora',
    sub_title: null,
    text:
      'Benvenuti in Persegno località immersa nella natura del parco Alto Garda Bresciano, ai piedi del Monte Pizzocolo. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.',
    cta: null,
    img: {
      url: Flora,
      alt: 'flower',
    },
  };

  const fauna = {
    title: 'Fauna',
    sub_title: null,
    text:
      'Benvenuti in Persegno località immersa nella natura del parco Alto Garda Bresciano, ai piedi del Monte Pizzocolo. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.',
    cta: null,
    img: {
      url: Fauna,
      alt: 'animal',
    },
  };

  return (
    <>
      <Header page_type='agriturismo' background='bg-agriturismo' />
      <ColumnSection data={agriturismo} />
      {/*  <ImgMosaic /> */}
      <ImgCentral />
      <ColumnSection data={flora} />
      <ColumnSection data={fauna} inverted bgSmoke />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
