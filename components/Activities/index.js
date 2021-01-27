import CaneImg from 'assets/activities/cane.png';
import FiumeImg from 'assets/activities/fiume.png';
import PizzoccoloImg from 'assets/activities/pizzoccolo.png';
import Pizzoccolo2Img from 'assets/activities/pizzoccolo2.png';
import LimoneImg from 'assets/activities/limoni.png';
import FormaggiImg from 'assets/activities/formaggi.png';
import LagoImg from 'assets/activities/lago.png';

export default function Activities() {
  return (
    <section className='text-gray-600 bg-gray-100 py-10 md:py-28'>
      <div className='container px-5 py-6 mx-auto flex flex-wrap'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='title_section'>
            <span className='block text-gray-700'>Activities</span>
          </h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base max-w-prose'>
            At our Lodge, there is a variety of rooms to choose from. Whether
            you are a casual traveler or a person demanding luxury wherever you
            go, you won’t be disappointed.
          </p>
        </div>
        <div className='flex flex-wrap md:-m-2 -m-1'>
          <div className='flex flex-wrap w-1/2'>
            <div className='md:p-2 p-1 w-1/2'>
              <img
                alt='gallery'
                className='w-full rounded object-cover h-full object-center block'
                src={CaneImg}
              />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <img
                alt='gallery'
                className='w-full rounded object-cover h-full object-center block'
                src={FiumeImg}
              />
            </div>
            <div className='md:p-2 p-1 w-full'>
              <img
                alt='gallery'
                className='w-full rounded h-full object-cover object-center block'
                src={PizzoccoloImg}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/2'>
            <div className='md:p-2 p-1 w-full'>
              <img
                alt='gallery'
                className='w-full rounded h-full object-cover object-center block'
                src={Pizzoccolo2Img}
              />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <img
                alt='gallery'
                className='w-full rounded object-cover h-full object-center block'
                src={LimoneImg}
              />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <img
                alt='gallery'
                className='w-full rounded object-cover h-full object-center block'
                src={FormaggiImg}
              />
            </div>
            <div className='md:p-2 p-1 w-full'>
              <img
                alt='gallery'
                className='w-full rounded object-cover h-full object-center block'
                src={LagoImg}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-5 md:pt-10'>
        <button className='inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg shadow hover:shadow-md'>
          Learn More
        </button>
      </div>
    </section>
  );
}
