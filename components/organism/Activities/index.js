import { useRouter } from 'next/router';
import Button from 'components/atoms/Button';
import CaneImg from 'assets/activities/cane.png';
import FiumeImg from 'assets/activities/fiume.png';
import PizzoccoloImg from 'assets/activities/pizzoccolo-verticale.jpg';
import Pizzoccolo2Img from 'assets/activities/pizzoccolo2.png';
import LimoneImg from 'assets/activities/limoni.jpg';
import FormaggiImg from 'assets/activities/formaggi.png';
import LagoImg from 'assets/activities/lago.jpg';
import Image from 'next/image';

export default function Activities({ t }) {
  const {
    homepage: {
      activities: { title, desc, cta },
    },
  } = t;
  const router = useRouter();
  return (
    <section className='flex flex-wrap max-w-screen-lg px-5 py-10 mx-auto text-gray-600 place-content-center md:py-28'>
      <div className='flex flex-col w-full mb-20 text-center'>
        <h2 className='title_section'>
          <span className='block text-gray-700'>{title}</span>
        </h2>
        <p className='mx-auto text-base leading-relaxed lg:w-2/3 max-w-prose'>
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

      <div className='flex flex-wrap w-1/2'>
        <div className='w-1/2 p-1 md:p-2'>
          <Image
            alt='A white mountain after snowing and a black dog'
            className='block object-cover object-center w-full h-full rounded'
            src={CaneImg}
            width={475}
            height={475}
          />
        </div>
        <div className='w-1/2 p-1 md:p-2'>
          <Image
            alt='the river inside valle camerate valley, near agriturismo'
            className='block object-cover object-center w-full h-full rounded'
            src={FiumeImg}
            width={475}
            height={475}
          />
        </div>
        <div className='w-full p-1 md:p-2'>
          <Image
            alt='The monte pizzoccolo from the Salo village'
            className='block object-cover object-center w-full h-full rounded'
            src={PizzoccoloImg}
            width={775}
            height={1225}
          />
        </div>
      </div>
      <div className='flex flex-wrap w-1/2'>
        <div className='w-full p-1 md:p-2'>
          <Image
            alt='gallery'
            className='block object-cover object-center w-full h-full rounded'
            src={Pizzoccolo2Img}
            width={875}
            height={675}
          />
        </div>
        <div className='w-1/2 p-1 md:p-2'>
          <Image
            alt='A lemon plant in Limone del Garda'
            className='block object-cover object-center w-full h-full rounded'
            src={LimoneImg}
            width={475}
            height={475}
          />
        </div>
        <div className='w-1/2 p-1 md:p-2'>
          <Image
            alt='A selection of mountain cheese on a table'
            className='block object-cover object-center w-full h-full rounded'
            src={FormaggiImg}
            width={475}
            height={475}
          />
        </div>
        <div className='w-full p-1 md:p-2'>
          <Image
            alt='The Toscolano Maderno square with a view of the so called "golfo", a porto with a lot of boats.'
            className='block object-cover object-center w-full h-full rounded'
            src={LagoImg}
            width={775}
            height={595}
          />
        </div>
      </div>
    </section>
  );
}
