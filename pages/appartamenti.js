import { useState, useEffect } from "react";
import Header from "@/components/organism/Header";
import useLocale from "hooks/useLocale";
import Title from "components/atoms/Title";
import RoomsPreview from "components/organism/RoomsPreview";
import ImgCentral from "@/components/molecules/ImgCentral";
import Carousel from "components/molecules/Carousel";
import InfoRoom from "components/organism/InfoRoom";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";
import Seo from "@/components/Layout/Seo";
export default function Appartamenti({ roomFrom }) {
  const { t, locale } = useLocale();
  const [room, setRoom] = useState("serenity");
  const filteredRoom = t.rooms.rooms.filter(
    (room) => room.name === roomFrom
  )[0];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (roomFrom) {
      setRoom(roomFrom);
      setIsLoading(false);
    }
  }, []);

  const textImage = `<h4 className='mb-2 text-5xl text-center text-white capitalize font-extralight'>${room} Suite</h4><p className="text-xl font-extralight">4 guests</p>`;

  const seoAttributes = {
    title: t.seo.apartments,
  };

  if (isLoading) return <div>....</div>;

  return (
    <>
      <Seo {...seoAttributes} />
      <Header simplified />
      {/*  <Title title={roomFrom} t={t} locale={locale} margin='mt-10' /> */}
      <ImgCentral
        image={filteredRoom.img}
        textImage={textImage}
        videoUrl={filteredRoom.videoUrl}
        priorityImg
      />
      {/* <Carousel t={t} selectedRoom={roomFrom} /> */}
      <InfoRoom t={t} />
      <RoomsPreview locale={t} room={roomFrom} />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}

Appartamenti.getInitialProps = async ({ query }) => {
  const { room } = query;
  return { roomFrom: room || "joy" };
};
