import Logo from 'assets/home/logo.png';
import Forest from 'assets/footer.png';

export default function Footer() {
  return (
    <footer
      className='flex flex-col justify-end pb-10 z-50 bg-footer object-cover h-full w-full bg-bottom text-white relative'
      style={{ maxHeight: '800px' }}>
      {/*  <img
        src={Forest}
        className='z-10 w-full h-full absolute'
        style={{ maxHeight: '600px' }}
      /> */}
      <div className='h-full w-full absolute bottom-0 left-0 z-0 '>
        <div className='relative h-full w-full flex justify-center whiteCarpet z-10'></div>
      </div>

      <div className='z-50 w-full flex justify-center pb-4 md:pb-10'>
        <img src={Logo} />
      </div>

      <ul className='z-50 grid place-content-center text-center gap-3 pb-20 md:grid-cols-4 max-w-screen-sm mx-auto'>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          Home
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          Apartments
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          Activities
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          Contact
        </li>
      </ul>

      <div className='z-50 grid place-content-center text-center font-light'>
        <a class='text-white underline'>info@sanlorenzodipersegno.it</a>
        <p class='leading-normal my-5 underline'>Tel. +39 329 310 3384</p>
        <span class='flex justify-center pb-4'>
          <a class='text-white'>
            <svg
              fill='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-5 h-5'
              viewBox='0 0 24 24'>
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </a>

          <a class='ml-4 text-white'>
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-5 h-5'
              viewBox='0 0 24 24'>
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
        </span>
        <p> © 2021 powered by Leonardo Tononi</p>
      </div>
    </footer>
  );
}
