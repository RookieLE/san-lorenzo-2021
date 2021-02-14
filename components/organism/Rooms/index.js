import Room from './Room';
import Button from 'components/atoms/Button';
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
        <div className='flex flex-wrap -m-4 max-w-screen-lg mx-auto place-content-center md:gap-4 lg:gap-12'>
          {rooms.map((room) => (
            <Room room={room} />
          ))}
        </div>
        {/*  <div className='flex justify-center pt-12'>
          <Button text='View Rooms' ctaStyle='primary' />
        </div> */}
      </div>
    </section>
  );
}
