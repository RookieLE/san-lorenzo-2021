import { useState, useEffect } from 'react';
import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Title from 'components/atoms/Title';
import RoomsPreview from 'components/organism/RoomsPreview';
import ImgCentral from '@/components/molecules/ImgCentral';
import Carousel from 'components/molecules/Carousel';
import InfoRoom from 'components/organism/InfoRoom';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';
import Seo from '@/components/Layout/Seo';

import MountainRoomImg from '@/assets/rooms/mountain-room.jpg';

export default function Appartamenti({ roomFrom }) {
  const { t } = useLocale();
  const [room, setRoom] = useState('serenity');

  useEffect(() => {
    if (roomFrom) {
      setRoom(roomFrom);
    }
  }, []);

  const textImage = `<h4 class='text-center font-extralight text-white text-5xl mb-2 capitalize'>${room} Suite</h4><p class="text-xl font-extralight">4 guests</p>`;

  const seoAttributes = {
    title: t.seo.apartments,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header simplified />
      <Title title='Rooms & Views' margin='mt-10' />
      <ImgCentral bgImage={MountainRoomImg} textImage={textImage} priorityImg />
      <Carousel t={t} selectedRoom={room} />
      <InfoRoom t={t} />
      <RoomsPreview state={{ room, setRoom }} locale={t} />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}

Appartamenti.getInitialProps = async ({ query }) => {
  const { room } = query;
  return { roomFrom: room };
};
