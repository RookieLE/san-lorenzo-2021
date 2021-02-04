import BookingImg from './booking.png';
import GoogleImg from './google-maps.png';

export default function Ratings() {
  return (
    <section class='mx-auto bg-gray-50'>
      <div class='container px-5 mx-auto lg:px-16'>
        <div class='grid grid-cols-2 gap-16 text-center'>
          <div class='flex justify-center'>
            <img
              src={BookingImg}
              alt='Booking logo'
              class='block object-contain w-4/5 lg:w-2/5'
              style={{ filter: 'grayscale(100%)', opacity: '0.3' }}
            />
          </div>
          <div class='flex justify-center'>
            <img
              src={GoogleImg}
              alt='Google logo'
              class='block object-contain w-4/5 lg:w-2/5'
              style={{ filter: 'grayscale(100%)', opacity: '0.3' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
