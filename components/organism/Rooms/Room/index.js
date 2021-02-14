import { useRouter } from 'next/router';

export default function Room({ room: { name, img, price } }) {
  const router = useRouter();

  return (
    <div className='lg:w-2/4 sm:w-1/2 p-4'>
      <div
        className='flex flex-col relative place-items-center cursor-pointer hover:bg-gray-50 w-96 rounded-md transform hover:scale-105 duration-100 ease-in-out'
        onClick={() =>
          router.push('/appartamenti').then(() => window.scrollTo(0, 0))
        }>
        <img
          alt='gallery'
          className='inset-0 w-96 h-96 object-cover object-center rounded shadow-md hover:shadow-lg'
          src={img}
        />
        <div className='text-center'>
          <h1 className='text-xl font-medium text-gray-900 mt-2 capitalize underline'>
            {name}
          </h1>
          <p className='leading-relaxed'>{price}€ per Night</p>
        </div>
      </div>
    </div>
  );
}
