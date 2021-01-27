import Rooms from '..';

export default function Room({ room: { name, img, price } }) {
  return (
    <div className='lg:w-2/4 sm:w-1/2 p-4'>
      <div className='flex flex-col relative'>
        <img
          alt='gallery'
          className='inset-0 w-full h-full object-cover object-center rounded shadow'
          src={img}
        />
        <div className='text-center'>
          <h1 className='text-lg font-medium text-gray-900 mt-2 capitalize'>
            {name}
          </h1>
          <p className='leading-relaxed'>{price}€ per Night</p>
        </div>
      </div>
    </div>
  );
}
