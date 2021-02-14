import { useRouter } from 'next/router';

export default function Room({ room: { name, img, price } }) {
  const router = useRouter();

  return (
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
    </div>
  );
}
