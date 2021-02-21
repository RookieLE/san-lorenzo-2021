import { useRouter } from 'next/router';

export default function Room({ room: { name, img, price }, index }) {
  const router = useRouter();
  return (
    <section class='lg:py-12 lg:flex lg:justify-center'>
      <div class='lg:mx-8 lg:flex lg:max-w-5xl rounded-lg'>
        <div class={`lg:w-1/2`}>
          <div
            class='h-64 bg-cover rounded-lg lg:h-full'
            style={{
              backgroundImage: `url(${img})`,
            }}></div>
        </div>

        <div class='max-w-xl px-6 py-6 lg:py-12 lg:max-w-5xl lg:w-1/2'>
          <h2 class='text-2xl font-semilbold font-serif text-green-900 dark:text-white md:text-3xl capitalize'>
            {name}
            <span class='text-xl text-gray-500 dark:text-indigo-400 grid font-semibold'>
              4 guest
            </span>
          </h2>
          <p class='mt-4 text-gray-600 dark:text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit.
          </p>
          <div class='mt-8'>
            <button
              onClick={() =>
                router
                  .push({ pathname: '/appartamenti', query: { room: name } })
                  .then(() => window.scrollTo(0, 0))
              }
              class='px-5 py-2 font-semibold text-gray-700 transition-colors duration-200 transform rounded border border-gray-700 hover:bg-gray-700 hover:text-gray-100'>
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
/* 
<div className='p-4'>
<div
  className='flex flex-col relative place-items-center cursor-pointer w-96 rounded-md transform hover:scale-105 hover:underline duration-100 ease-in-out'
  onClick={() =>
    router
      .push({ pathname: '/appartamenti', query: { room: name } })
      .then(() => window.scrollTo(0, 0))
  }>
  <img
    alt='gallery'
    className='inset-0 w-full h-80 object-cover object-center rounded-md shadow-md hover:shadow-lg'
    src={img}
  />
  <div className='text-center'>
    <h1 className='text-xl font-bold text-green-900 mt-2 capitalize font-serif '>
      {name}
    </h1>
    <p className='leading-relaxed'>{price}€ per Night</p>
  </div>
</div>

${(index + 1) % 2 === 0 && 'order-2  md:order-1'}
</div> */
