export default function InfoRoom() {
  return (
    <>
      <section class='text-gray-600'>
        <div class='container px-5 py-12 lg:py24 mx-auto'>
          <div class='flex flex-col text-center w-full mb-12'>
            <ul class='lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside flex gap-2 flex-col'>
              <li>
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep.
              </li>
              <li>
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </li>
              <li>Franzen you probably haven't heard of them man bun deep.</li>
            </ul>
          </div>
          <section class='text-gray-600 max-w-screen-xl mx-auto'>
            <div class='container px-5 py-12 md:py24 mx-auto'>
              <div class='flex flex-wrap -m-4 text-center'>
                <div class='p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-8'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                    />
                  </svg>
                  <p class='leading-relaxed'>Kitchen</p>
                </div>

                <div class='p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-8'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  <p class='leading-relaxed'>Parking</p>
                </div>

                <div class='p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center gap-1'>
                  <svg
                    className='w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
                    />
                  </svg>
                  <p class='leading-relaxed'>Wi-Fi</p>
                </div>

                <div class='p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-8'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
                    />
                  </svg>
                  <p class='leading-relaxed'>Private WC</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div class='py-12 lg:py-24 flex flex-col text-center w-full mb-12  bg-gray-50'>
        <h4 className='font-medium text-4xl font-serif text-green-900'>
          Additional Information
        </h4>
        <div className='pb-6'>
          <h5 className='text-xl my-2 font-light text-gray-600 underline'>
            Check-in / Check-out
          </h5>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside flex gap-2 flex-col text-gray-600'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className='pb-6'>
          <h5 className='text-xl my-2 font-light text-gray-600 underline'>
            Lenzuola e Asciugamani
          </h5>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside flex gap-2 flex-col text-gray-600'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
      </div>
    </>
  );
}
