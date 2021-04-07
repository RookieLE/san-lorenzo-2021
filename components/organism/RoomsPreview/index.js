import Image from 'next/image';
import { useRouter } from 'next/router';

export default function RoomsPreview({ locale, room }) {
  const router = useRouter();
  const rooms = locale.rooms.rooms;
  const { title, text } = locale.rooms.viewOtherRooms;
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-12 mx-auto'>
        <div className='flex flex-col'>
          <div className='flex flex-col flex-wrap py-6 mb-12 sm:flex-row'>
            <h3 className='mb-2 font-serif text-4xl font-bold text-green-900 sm:w-2/5 sm:mb-0'>
              {title}
            </h3>
            <p className='pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10'>
              {text}
            </p>
          </div>
        </div>
        <div className='flex flex-wrap -m-4'>
          {rooms?.map((el) => {
            if (el.name === room) return;
            return (
              <div
                className='w-full p-4 transition transform cursor-pointer lg:w-1/3 group hover:scale-105 active:scale-105'
                onClick={async () => {
                  await router.replace('/appartamenti' + '/?room=' + el.name);
                  await window.scrollTo(0, 0);
                }}>
                <div className='flex flex-col content-center px-8 rounded-lg bg-gray-50 h-2/3 group-hover:bg-gray-100'>
                  <div className='flex items-center'>
                    <div className='inline-flex items-center justify-center flex-shrink-0 mr-3'>
                      <Image
                        src={el.othersImages[0].url}
                        className='object-cover rounded-full shadow-md w-44 h-44'
                        width={140}
                        height={140}
                        lazy
                      />
                    </div>
                    <div className='block'>
                      <h2 className='text-lg font-semibold text-green-900 capitalize title-font'>
                        {el.name}
                      </h2>
                      <p>4 guests</p>
                      <div className='flex-grow'>
                        <a className='inline-flex items-center mt-3 text-green-800 group-hover:underline group-hover:active:underline'>
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
        <div className='h-1 mt-12 overflow-hidden bg-gray-200 rounded lg:mt-24'>
          <div className='w-24 h-full bg-green-900'></div>
        </div>
      </div>
    </section>
  );
}
