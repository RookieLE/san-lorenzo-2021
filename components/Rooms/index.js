import Room from './Room';

export default function Rooms({
  t: {
    homepage: {
      rooms: { title, desc, rooms },
    },
  },
}) {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='title_section'>{title}</h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base max-w-prose'>
            {desc}
          </p>
        </div>
        <div className='flex flex-wrap -m-4 max-w-screen-xl mx-auto'>
          {rooms.map((room) => (
            <Room room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
