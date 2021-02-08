export default function Contact({
  t: {
    homepage: {
      contact: { title, desc, form },
    },
  },
}) {
  return (
    <section class='text-gray-600 body-font relative'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-12'>
          <h2 class='title_section'>{title}</h2>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>{desc}</p>
        </div>
        <div class='lg:w-1/2 md:w-2/3 mx-auto'>
          <div class='flex flex-wrap -m-2'>
            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label for='name' class='leading-7 text-sm text-gray-600'>
                  {form.name}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label for='email' class='leading-7 text-sm text-gray-600'>
                  {form.email}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label for='date' class='leading-7 text-sm text-gray-600'>
                  {form.arrival_date}
                </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label for='date' class='leading-7 text-sm text-gray-600'>
                  {form.departure_date}
                </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div class='p-2 w-full'>
              <div class='relative'>
                <label for='message' class='leading-7 text-sm text-gray-600'>
                  {form.message}
                </label>
                <textarea
                  id='message'
                  name='message'
                  class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
              </div>
            </div>
            <div class='p-2 w-full'>
              <button class='flex mx-auto text-white bg-gray-300 border-0 py-2 px-8 focus:outline-none hover:bg-green-900 rounded text-lg'>
                {form.button}
              </button>
            </div>
            <div class='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
              <a class='text-green-700 underline'>
                info@sanlorenzodipersegno.it
              </a>
              <p class='leading-normal my-5'>
                Via Camerate 39
                <br />
                Toscolano Maderno (BS) 25088
              </p>
              <p class='leading-normal my-5 underline'>Tel. +39 329 310 3384</p>
              <span class='inline-flex'>
                <a class='text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>

                <a class='ml-4 text-gray-500'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
              </span>
              <p className='pt-10'>{form.info}</p>
            </div>
          </div>
        </div>
      </div>
      <img src='' />
    </section>
  );
}
