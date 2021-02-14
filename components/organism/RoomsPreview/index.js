export default function RoomsPreview({ state: { room, setRoom }, locale }) {
  const rooms = locale.homepage.rooms.rooms;

  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-12 mx-auto'>
        <div class='flex flex-col'>
          <div class='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h3 class='font-serif sm:w-2/5 text-green-900 font-medium text-4xl mb-2 sm:mb-0'>
              View other Rooms
            </h3>
            <p class='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div class='flex flex-wrap -m-4'>
          {rooms?.map((el) => {
            if (el.name === room) return;
            return (
              <div
                class='p-4 w-full lg:w-1/3 cursor-pointer'
                onClick={async () => {
                  await setRoom(el.name);
                  await window.scrollTo(0, 0);
                }}>
                <div class='flex rounded-lg h-2/3 bg-gray-100 px-8 flex-col content-center'>
                  <div class='flex items-center'>
                    <div class='mr-3 inline-flex items-center justify-center flex-shrink-0'>
                      <img
                        src={el.img}
                        className='rounded-full w-24 h-24 shadow-md'
                      />
                    </div>
                    <div className='block'>
                      <h2 class='text-gray-900 text-lg title-font font-medium capitalize'>
                        {el.name}
                      </h2>
                      <p>4 guests</p>
                      <div class='flex-grow'>
                        <a class='mt-3 text-green-800 inline-flex items-center'>
                          View More
                          <svg
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            class='w-4 h-4 ml-2'
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
        <div class='h-1 bg-gray-200 mt-12 lg:mt-24 rounded overflow-hidden'>
          <div class='w-24 h-full bg-green-900'></div>
        </div>
      </div>
    </section>
  );
}
