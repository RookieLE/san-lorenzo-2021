import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Room({
  room: { name, img, price, alt, text, guest },
  index,
}) {
  const router = useRouter();
  return (
    <section class='lg:py-12 lg:flex lg:justify-center'>
      <div class='lg:mx-8 lg:flex lg:max-w-5xl rounded-lg'>
        <div class={`lg:w-1/2`}>
          <div class='rounded-lg lg:h-full'>
            <Image
              className='w-full h-full rounded-lg'
              alt={alt}
              objectFit='cover'
              src={img}
              width={475}
              height={475}
            />
          </div>
        </div>

        <div class='max-w-xl px-6 py-6 lg:py-12 lg:max-w-5xl lg:w-1/2'>
          <h2 class='text-2xl font-semilbold font-serif text-green-900 dark:text-white md:text-3xl capitalize'>
            {name}
            <span class='text-xl text-gray-500 dark:text-indigo-400 grid font-semibold'>
              {guest} guest
            </span>
          </h2>
          <p class='mt-4 text-gray-600 dark:text-gray-400'>{text}</p>
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
