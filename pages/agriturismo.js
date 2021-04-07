import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Seo from '@/components/Layout/Seo';
import ColumnSection from '@/components/organism/ColumnSection';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

export default function Agriturismo() {
  const { t } = useLocale();

  const { title, subTitle, text, cta } = t.lodge;
  const headerText = { title, subTitle, text };

  const flora = {
    title: 'Flora',
    sub_title: null,
    text:
      'Benvenuti in Persegno località immersa nella natura del parco Alto Garda Bresciano, ai piedi del Monte Pizzocolo. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.',
    cta: null,
    img: {
      url: '/assets/agriturismo/flora.jpeg',
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
      url: '/assets/agriturismo/fauna.jpeg',
      alt: 'animal',
    },
  };

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header
        background='/assets/agriturismo/agriturismo-three.jpg'
        {...headerText}
      />

      {/*  <ImgMosaic /> */}
      {/*  <ImgCentral bgImage={MountainImg} bgSmoke /> */}
      <ColumnSection data={flora} inverted bgSmoke />
      <ColumnSection data={fauna} bgSmoke />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
