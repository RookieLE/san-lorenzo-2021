import Room from './Room';
import Button from 'components/atoms/Button';
export default function Rooms({
  t: {
    rooms: { title, desc, rooms },
  },
}) {
  return (
    <section className='text-gray-600 bg-gray-100 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col w-full mb-20 text-center'>
          <h2 className='title_section'>{title}</h2>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3 max-w-prose'>
            {desc}
          </p>
        </div>
        <div className='grid gap-8 mx-auto xl:grid-cols-2 place-content-center'>
          {rooms.map((room, index) => (
            <Room room={room} index={index} key={index} />
          ))}
        </div>
        {/*  <div className='flex justify-center pt-12'>
          <Button text='View Rooms' ctaStyle='primary' />
        </div> */}
      </div>
    </section>
  );
}

/* flex flex-wrap -m-4 max-w-screen-lg mx-auto place-content-center md:gap-4 lg:gap-12' */
