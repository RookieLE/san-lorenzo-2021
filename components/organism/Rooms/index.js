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
          <section class='bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center'>
            <div class='bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg'>
              <div class='lg:w-1/2'>
                <div
                  class='h-64 bg-cover lg:rounded-lg lg:h-full'
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                  }}></div>
              </div>

              <div class='max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2'>
                <h2 class='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>
                  Build Your New{' '}
                  <span class='text-indigo-600 dark:text-indigo-400'>Idea</span>
                </h2>
                <p class='mt-4 text-gray-600 dark:text-gray-400'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem modi reprehenderit vitae exercitationem aliquid dolores
                  ullam temporibus enim expedita aperiam mollitia iure
                  consectetur dicta tenetur, porro consequuntur saepe
                  accusantium consequatur.
                </p>

                <div class='mt-8'>
                  <a
                    href='#'
                    class='px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded hover:bg-gray-700'>
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </section>
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
