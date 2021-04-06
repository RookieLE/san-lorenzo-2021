import BookingImg from './booking.png';
import GoogleImg from './google-maps.png';
import Image from 'next/image';

export default function Ratings() {
  return (
    <section className='mx-auto bg-gray-100'>
      <div className='container px-5 mx-auto lg:px-16'>
        <div className='grid grid-cols-2 gap-16 text-center'>
          <div className='flex justify-center'>
            <Image
              src={BookingImg}
              alt='The Booking platform logo'
              className='block object-contain w-4/5 lg:w-2/5 opacity-30 grayScale'
              width={275}
              height={180}
            />
          </div>
          <div className='flex justify-center'>
            <Image
              src={GoogleImg}
              alt='The google logo'
              className='block object-contain w-4/5 lg:w-2/5 opacity-30 grayScale'
              width={275}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
