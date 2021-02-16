import BookingImg from './booking.png';
import GoogleImg from './google-maps.png';

export default function Ratings() {
  return (
    <section className='mx-auto bg-gray-50'>
      <div className='container px-5 mx-auto lg:px-16'>
        <div className='grid grid-cols-2 gap-16 text-center'>
          <div className='flex justify-center'>
            <img
              src={BookingImg}
              alt='Booking logo'
              className='block object-contain w-4/5 lg:w-2/5'
              style={{
                filter: 'grayscale(100%)',
                opacity: '0.3',
                maxHeight: '150px',
              }}
            />
          </div>
          <div className='flex justify-center'>
            <img
              src={GoogleImg}
              alt='Google logo'
              className='block object-contain w-4/5 lg:w-2/5'
              style={{
                filter: 'grayscale(100%)',
                opacity: '0.3',
                maxHeight: '150px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
