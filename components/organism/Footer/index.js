import useLocale from 'hooks/useLocale';
import Link from 'next/link';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import Image from 'next/image';
export default function Footer({
  t: {
    navbar: { home, lodge, apartments, activities, contact },
  },
}) {
  const { locale } = useLocale();
  return (
    <footer className='relative z-50 flex flex-col justify-end w-full py-10 text-gray-800 bg-bottom bg-gray-50 max-h-800'>
      <div className='z-50 flex justify-center w-full pb-4 md:pb-10'>
        <Image
          src={'/black-logo.png'}
          className={`object-container object-center`}
          alt='hero'
          src='/black-logo.png'
          width={120}
          height={80}
          lazy
        />
      </div>

      <ul className='z-50 grid max-w-screen-sm gap-3 pb-16 mx-auto text-center place-content-center md:grid-cols-4'>
        <li className='font-sans text-lg font-light tracking-wider text-gray-800 cursor-pointer lg:hover:border-white md:text-xl'>
          <Link href={`/${locale}`}>
            <a>{home}</a>
          </Link>
        </li>
        <li className='font-sans text-lg font-light tracking-wider text-gray-800 cursor-pointer lg:hover:border-white md:text-xl'>
          <Link href={`/${locale}/agriturismo`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li className='font-sans text-lg font-light tracking-wider text-gray-800 cursor-pointer lg:hover:border-white md:text-xl'>
          <Link href={`/${locale}/appartamenti`}>
            <a>{apartments}</a>
          </Link>
        </li>
        <li className='font-sans text-lg font-light tracking-wider text-gray-800 cursor-pointer lg:hover:border-white md:text-xl'>
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li>
      </ul>

      <div className='z-50 grid font-light text-center place-content-center'>
        <span className='flex justify-center pb-16'>
          <a
            href='https://www.facebook.com/AgriturismoSanLorenzoDiPersegno'
            target='_blank'
            className='text-gray-800 transition transform hover:scale-110'>
            <SiFacebook className='text-2xl' />
          </a>

          <a
            href='https://www.instagram.com/sanlorenzo.dipersegno/'
            target='_blank'
            className='ml-4 text-gray-800 transition transform hover:scale-110'>
            <SiInstagram className='text-2xl' />
          </a>
        </span>
        <p className='leading-normal text-gray-800'>
          Via Camerate 39
          <br />
          Toscolano Maderno (BS) - 25088
        </p>
        <div className='grid gap-2 mt-6 mb-8 text-gray-800 underline'>
          <a href='mailto:info@sanlorenzodipersegno.it'>
            info@sanlorenzodipersegno.it
          </a>
          <a href='tel:00393293103384'>Tel. +39 329 310 3384</a>
        </div>

        <a
          className='text-gray-800'
          href='https://leonardotononi.com'
          target='_blank'
          title='Web Developer Website'>
          © 2021 powered by Leonardo Tononi
        </a>
      </div>
    </footer>
  );
}
