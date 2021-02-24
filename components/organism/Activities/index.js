import { useRouter } from 'next/router';
import Button from 'components/atoms/Button';
import CaneImg from 'assets/activities/cane.png';
import FiumeImg from 'assets/activities/fiume.png';
import PizzoccoloImg from 'assets/activities/pizzoccolo.png';
import Pizzoccolo2Img from 'assets/activities/pizzoccolo2.png';
import LimoneImg from 'assets/activities/limoni.png';
import FormaggiImg from 'assets/activities/formaggi.png';
import LagoImg from 'assets/activities/lago.png';
import Image from 'next/image';

export default function Activities({ t }) {
  const {
    homepage: {
      activities: { title, desc, cta },
    },
  } = t;
  const router = useRouter();
  return (
    <section className='text-gray-600 bg-gray-100 py-10 md:py-28'>
      <div className='container px-5 py-6 mx-auto flex flex-wrap'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='title_section'>
            <span className='block text-gray-700'>{title}</span>
          </h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base max-w-prose'>
            {desc}
          </p>
          <div className='flex justify-center pt-5 md:pt-10'>
            <Button
              text={cta}
              ctaStyle='underline'
              onClick={() =>
                router.push('/attivita').then(() => window.scrollTo(0, 0))
              }
            />
          </div>
        </div>
        <div className='flex flex-wrap md:-m-2 -m-1'>
          <div className='flex flex-wrap w-1/2'>
            <div className='md:p-2 p-1 w-1/2'>
              <Image
                alt='A white mountain after snowing and a black dog'
                className='w-full rounded object-cover h-full object-center block'
                src={CaneImg}
                width={475}
                height={475}
              />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <Image
                alt='the river inside valle camerate valley, near agriturismo'
                className='w-full rounded object-cover h-full object-center block'
                src={FiumeImg}
                width={475}
                height={475}
              />
            </div>
            <div className='md:p-2 p-1 w-full'>
              <Image
                alt='The monte pizzoccolo from the Salo village'
                className='w-full rounded h-full object-cover object-center block'
                src={PizzoccoloImg}
                width={775}
                height={1225}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/2'>
            <div className='md:p-2 p-1 w-full'>
              <Image
                alt='gallery'
                className='w-full rounded h-full object-cover object-center block'
                src={Pizzoccolo2Img}
                width={875}
                height={675}
              />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <Image
                alt='A lemon plant in Limone del Garda'
                className='w-full rounded object-cover h-full object-center block'
                src={LimoneImg}
                width={475}
                height={475}
              />
            </div>
            <div className='md:p-2 p-1 w-1/2'>
              <Image
                alt='A selection of mountain cheese on a table'
                className='w-full rounded object-cover h-full object-center block'
                src={FormaggiImg}
                width={475}
                height={475}
              />
            </div>
            <div className='md:p-2 p-1 w-full'>
              <Image
                alt='The Toscolano Maderno square with a view of the so called "golfo", a porto with a lot of boats.'
                className='w-full rounded object-cover h-full object-center block'
                src={LagoImg}
                width={775}
                height={595}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
