import { useState } from 'react';
import Link from 'next/link';
import Logo from 'assets/home/logo.png';
import useLocale from 'hooks/useLocale';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

export default function Menu() {
  const { locale, handleChangeLang } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamb = () => {
    setTimeout(() => setIsOpen(!isOpen), 300);
  };

  return (
    <nav class='flex justify-between z-50 font-sans text-white '>
      <div class='z-20 lg:flex lg:gap-5'>
        <img src={Logo} class='w-1/4 lg:w-24 lg:h-16' />
        <h1 class='text-3xl tracking-wider font-medium font-serif lg:w-80'>
          San Lorenzo <span class='block text-lg font-light'>di Persegno</span>
        </h1>
      </div>

      <div onClick={handleHamb} class='z-50  hover:cursor lg:hidden'>
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isOpen && { textColor: 'black' }) || { textColor: 'black' }
          }
          reverse={isOpen}
          size={42}
          speed={3}
          strokeColor='white'
          class={` rounded ${isOpen && 'bg-yellow-900 fill-current '}`}
        />
      </div>

      <ul
        class={`grid absolute bg-white text-black shadow left-0 top-0 z-20 p-2 w-full lg:flex lg:relative lg:bg-transparent lg:text-white lg:shadow-none lg:justify-end ${
          (isOpen && 'block') || 'hidden'
        }`}>
        <li class='navLink navLink_active'>Home</li>
        <li class='navLink navLink_notActive'>Apartments</li>
        <li class='navLink navLink_notActive'>Activities</li>
        <li class='navLink navLink_notActive'>Contact</li>
        <li class='navLink navLink_notActive'>
          <select
            onChange={handleChangeLang}
            defaultValue={locale}
            class='text-black rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-900 text-base px-2 cursor-pointer'>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
            <option value='de'>DE</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
