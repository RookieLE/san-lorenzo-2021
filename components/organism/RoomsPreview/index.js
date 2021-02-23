import Image from 'next/image';

export default function RoomsPreview({ state: { room, setRoom }, locale }) {
  const rooms = locale.homepage.rooms.rooms;

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-12 mx-auto'>
        <div className='flex flex-col'>
          <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h3 className='font-serif sm:w-2/5 text-green-900 font-medium text-4xl mb-2 sm:mb-0'>
              View other Rooms
            </h3>
            <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap -m-4'>
          {rooms?.map((el) => {
            if (el.name === room) return;
            return (
              <div
                className='p-4 w-full lg:w-1/3 cursor-pointer'
                onClick={async () => {
                  await setRoom(el.name);
                  await window.scrollTo(0, 0);
                }}>
                <div className='flex rounded-lg h-2/3 bg-gray-100 px-8 flex-col content-center'>
                  <div className='flex items-center'>
                    <div className='mr-3 inline-flex items-center justify-center flex-shrink-0'>
                      <Image
                        src={el.img}
                        className='rounded-full w-24 h-24 shadow-md'
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className='block'>
                      <h2 className='text-gray-900 text-lg title-font font-medium capitalize'>
                        {el.name}
                      </h2>
                      <p>4 guests</p>
                      <div className='flex-grow'>
                        <a className='mt-3 text-green-800 inline-flex items-center'>
                          View More
                          <svg
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            className='w-4 h-4 ml-2'
                            viewBox='0 0 24 24'>
                            <path d='M5 12h14M12 5l7 7-7 7'></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='h-1 bg-gray-200 mt-12 lg:mt-24 rounded overflow-hidden'>
          <div className='w-24 h-full bg-green-900'></div>
        </div>
      </div>
    </section>
  );
}
