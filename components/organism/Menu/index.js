import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useLocale from 'hooks/useLocale';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Flag = dynamic(() => import('react-flagpack'), { ssr: false });

export default function Menu({
  simplified,
  navbar: { home, lodge, apartments, activities, contact },
}) {
  const router = useRouter();
  const { locale, handleChangeLang } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHamb = () => {
    setTimeout(() => setIsMenuOpen(!isMenuOpen), 300);
  };

  const isMenuActive = (_menu) =>
    (router.pathname === _menu && !simplified && 'navLink_active') ||
    (router.pathname === _menu && simplified && 'navLink_active_simpl') ||
    (router.pathname !== _menu && !simplified && 'navLink_notActive') ||
    (router.pathname !== _menu && simplified && 'navLink_notActive_simpl');

  const simplifiedTextColor =
    (router.pathname === '/appartamenti' && 'lg:text-black') || 'lg:text-white';

  const textColor = (simplified && 'text-gray-800') || 'text-white';

  const parseFlag = (name) => {
    if (name === 'it')
      return (
        <Flag code='ITA' size='M' hasDropShadow gradient='real-circular' />
      );
    if (name === 'en')
      return (
        <Flag code='GB-UKM' size='M' hasDropShadow gradient='real-circular' />
      );
  };

  const oppositeLocale = (locale === 'it' && 'en') || (locale === 'en' && 'it');

  return (
    <nav
      className={`flex justify-between z-50 font-sans ${textColor} ${
        simplified && 'p-6'
      }`}>
      <div className='z-20 grid w-20 gap-2 md:w-96 md:grid-cols-3 lg:gap-5'>
        <Image
          src={'/black-logo.png'}
          className={`object-container object-center col-span-1`}
          alt='hero'
          src='/black-logo.png'
          width={140}
          height={80}
          priority
        />
        <h1 className='hidden col-span-2 font-serif text-3xl font-medium tracking-wider lg:w-80 md:grid'>
          San Lorenzo{' '}
          <span className='block text-lg font-light'>di Persegno</span>
        </h1>
      </div>

      <div
        className='z-50 hover:cursor lg:hidden place-self-center'
        onClick={handleHamb}>
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isMenuOpen && { textColor: 'black' }) || { textColor: 'black' }
          }
          reverse={isMenuOpen}
          size={42}
          speed={3}
          strokeColor='white'
          className={` rounded ${
            (isMenuOpen || simplified) && 'bg-green-900 fill-current '
          }`}
        />
      </div>

      <ul
        className={`grid absolute border-b-8 border-green-900 lg:border-0 bg-white text-black shadow left-0 top-0 z-20 p-2 w-full lg:flex lg:relative lg:bg-transparent lg:${textColor} lg:shadow-none lg:justify-end ${
          (isMenuOpen && 'block') || 'hidden'
        }`}>
        <li className={`navLink ${isMenuActive(`/`)}`}>
          <Link href={`/${locale}`}>
            <a>{home}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive(`/agriturismo`)}`}>
          <Link href={`/${locale}/agriturismo`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive('/appartamenti')}`}>
          <Link href={`/${locale}/appartamenti`}>
            <a>{apartments}</a>
          </Link>
        </li>
        {/* <li className={`navLink ${isMenuActive('/attivita')}`}>
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li> */}
        <li className={`navLink ${isMenuActive('/contatti')}`}>
          <a href='#contact'>{contact}</a>
        </li>
        <li className='navLink'>
          <div class='w-1/3 sm:w-full relative flex place-items-center place-content-center px-2 py-3 sm:px-2 sm:py-1 hover:bg-gray-50 rounded-md bg-gray-100 sm:bg-white'>
            {/*  <!-- Dropdown toggle button --> */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              class='relative z-10 focus:outline-none flex place-content-center place-items-center'>
              <svg
                className={`relative w-5 h-5 text-gray-600 top-1 dark:text-white transform transition-transform ${
                  isDropdownOpen && 'rotate-180'
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
              {parseFlag(locale)}
            </button>

            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
              <div class='absolute sm:top-5 -right-16 -top-5 sm:right-0 z-20 w-14 p-2 mt-4 border-4 border-gray-200 bg-white hover:bg-gray-50 rounded-md shadow-xl'>
                <button
                  onClick={() => {
                    handleChangeLang(oppositeLocale);
                    setIsDropdownOpen(false);
                  }}
                  class='flex place-content-center w-full py-1 capitalize transition-colors duration-200 transform focus:outline-none'>
                  {parseFlag(oppositeLocale)}
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
