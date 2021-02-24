import Image from 'next/image';

export default function Carousel({
  t: {
    homepage: { rooms },
  },
  selectedRoom,
}) {
  const RenderRooms = rooms.rooms.map((room) => {
    if (room.name !== selectedRoom) return;
    return room.othersImages.map((el) => (
      <Image
        src={el.url}
        className='w-full h-2/3 rounded-md object-cover lg:place-self-center'
        alt={el.alt}
        width={300}
        height={200}
      />
    ));
  });

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-10 px-2 md:px-10 justify-center max-w-screen-2xl mx-auto -mt-10 lg:-mt-10'>
      {RenderRooms}
    </div>
  );
}
