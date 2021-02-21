import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LogoImg from 'assets/home/logo.png';
import LogoBlackImg from 'assets/black-logo.png';
import useLocale from 'hooks/useLocale';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

export default function Menu({
  simplified,
  navbar: { home, lodge, apartments, activities, contact },
}) {
  const router = useRouter();
  const { locale, handleChangeLang } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamb = () => {
    setTimeout(() => setIsOpen(!isOpen), 300);
  };

  const isMenuActive = (_menu) =>
    (router.pathname === _menu && !simplified && 'navLink_active') ||
    (router.pathname === _menu && simplified && 'navLink_active_simpl') ||
    (router.pathname !== _menu && !simplified && 'navLink_notActive') ||
    (router.pathname !== _menu && simplified && 'navLink_notActive_simpl');

  const textColor = (simplified && 'text-gray-800') || 'text-white';
  const logo = (!simplified && LogoImg) || LogoBlackImg;

  return (
    <nav
      className={`flex justify-between z-50 font-sans ${textColor} ${
        simplified && 'p-6'
      }`}>
      <div className='z-20 lg:flex lg:gap-5'>
        <img src={logo} className='w-1/4 lg:w-24 lg:h-16' />
        <h1 className='text-3xl tracking-wider font-medium font-serif lg:w-80'>
          San Lorenzo{' '}
          <span className='block text-lg font-light'>di Persegno</span>
        </h1>
      </div>

      <div
        onClick={handleHamb}
        className='z-50  hover:cursor lg:hidden place-self-center'>
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isOpen && { textColor: 'black' }) || { textColor: 'black' }
          }
          reverse={isOpen}
          size={42}
          speed={3}
          strokeColor='white'
          className={` rounded ${
            (isOpen || simplified) && 'bg-green-900 fill-current '
          }`}
        />
      </div>

      <ul
        className={`grid absolute border-b-8 border-green-900 lg:border-0 bg-white text-black shadow left-0 top-0 z-20 p-2 w-full lg:flex lg:relative lg:bg-transparent lg:${textColor} lg:shadow-none lg:justify-end ${
          (isOpen && 'block') || 'hidden'
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
        <li className={`navLink ${isMenuActive('/attivita')}`}>
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive('/contatti')}`}>
          <a href='#contact'>{contact}</a>
        </li>
        <li className='navLink navLink_notActive'>
          <select
            onChange={handleChangeLang}
            defaultValue={locale}
            className='text-black rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-900 text-base px-2 cursor-pointer'>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
            {/*  <option value='de'>DE</option> */}
          </select>
        </li>
      </ul>
    </nav>
  );
}
