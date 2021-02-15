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

  const { title, desc, img } = t.activities[activity];

  const columnSectionData = {
    data: {
      img: {
        url: img,
      },
      title,
      text: desc,
    },
  };

  const RenderSections = t.activities[activity].sections.map((el, index) => {
    const isSmoke = index % 2 === 0 ? false : true;
    const content = {
      title: el.title,
      bgSmoke: isSmoke,
      bgImage: el.img,
      text: el.desc,
    };
    return <ImgCentral {...content} />;
  });

  return (
    <>
      <Header background='bg-pizzoccolo' page_type='activities' />
      <ActivitiesMenu state={{ activity, setActivity }} />
      <ColumnSection {...columnSectionData} inverted bgSmoke />
      {RenderSections}
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
