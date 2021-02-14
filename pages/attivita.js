import { useState } from 'react';
import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import ImgCentral from '@/components/molecules/ImgCentral';
import ColumnSection from '@/components/organism/ColumnSection';
import ActivitiesMenu from '@/components/molecules/ActivitiesMenu';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';
import Agri from 'assets/home/agri.png';

import FiumeImg from 'assets/activities/fiume.png';
import PizzoccoloImg from 'assets/activities/pizzoccolo.png';
import Pizzoccolo2Img from 'assets/activities/pizzoccolo2.png';
import LimoneImg from 'assets/activities/limoni.png';
import FormaggiImg from 'assets/activities/formaggi.png';
import LagoImg from 'assets/activities/lago.png';

export default function Attività() {
  const { t } = useLocale();
  const [activity, setActivity] = useState('mountain');

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

  const columnSectionData = {
    data: {
      img: {
        url: Pizzoccolo2Img,
        alt: 'mountain pizzoccolo',
      },
      title: 'Mountain Pizzoccolo',
      text:
        'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
    },
  };

  const centralImg2 = {
    title: 'An amazing walk',
    bgSmoke: true,
    bgImage: PizzoccoloImg,
    text:
      'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
  };

  return (
    <>
      <Header background='bg-pizzoccolo' page_type='activities' />
      <ActivitiesMenu state={{ activity, setActivity }} />
      <ColumnSection {...columnSectionData} inverted />
      <ImgCentral {...centralImg2} />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
