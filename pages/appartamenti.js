import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Title from 'components/atoms/Title';
import ImgCentral from '@/components/molecules/ImgCentral';
import Carousel from 'components/molecules/Carousel';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

import MountainRoomImg from '@/assets/rooms/mountain-room.jpg';

export default function Appartamenti() {
  const { t } = useLocale();

  const textImage = `<h4 class='text-center font-extralight text-white text-5xl mb-2 '>Serenity Suite</h4><p class="text-xl font-extralight">4 guests</p>`;

  return (
    <>
      <Header simplified />
      <Title title='Rooms & Views' margin='mt-10' />
      <ImgCentral bgImage={MountainRoomImg} textImage={textImage} />
      <Carousel />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
