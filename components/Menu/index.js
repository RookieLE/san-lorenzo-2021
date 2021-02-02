import { useState } from 'react';
import Link from 'next/link';
import Logo from 'assets/home/logo.png';
import useLocale from 'hooks/useLocale';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

export default function Menu({
  navbar: { home, apartments, activities, contact },
}) {
  const { locale, handleChangeLang } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamb = () => {
    setTimeout(() => setIsOpen(!isOpen), 300);
  };

  return (
    <nav className='flex justify-between z-50 font-sans text-white '>
      <div className='z-20 lg:flex lg:gap-5'>
        <img src={Logo} className='w-1/4 lg:w-24 lg:h-16' />
        <h1 className='text-3xl tracking-wider font-medium font-serif lg:w-80'>
          San Lorenzo{' '}
          <span className='block text-lg font-light'>di Persegno</span>
        </h1>
      </div>

      <div onClick={handleHamb} className='z-50  hover:cursor lg:hidden'>
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isOpen && { textColor: 'black' }) || { textColor: 'black' }
          }
          reverse={isOpen}
          size={42}
          speed={3}
          strokeColor='white'
          className={` rounded ${isOpen && 'bg-gray-300 fill-current '}`}
        />
      </div>

      <ul
        className={`grid absolute bg-white text-black shadow left-0 top-0 z-20 p-2 w-full lg:flex lg:relative lg:bg-transparent lg:text-white lg:shadow-none lg:justify-end ${
          (isOpen && 'block') || 'hidden'
        }`}>
        <li className='navLink navLink_active'>{home}</li>
        <li className='navLink navLink_notActive'>{apartments}</li>
        <li className='navLink navLink_notActive'>{activities}</li>
        <li className='navLink navLink_notActive'>{contact}</li>
        <li className='navLink navLink_notActive'>
          <select
            onChange={handleChangeLang}
            defaultValue={locale}
            className='text-black rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-900 text-base px-2 cursor-pointer'>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
            <option value='de'>DE</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
