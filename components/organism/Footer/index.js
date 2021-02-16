import BlackLogo from 'assets/black-logo.png';
import Forest from 'assets/footer.png';

export default function Footer({
  t: {
    navbar: { home, lodge, apartments, activities, contact },
  },
}) {
  return (
    <footer className='flex flex-col justify-end py-10 z-50  w-full bg-bottom bg-gray-50 text-gray-800 relative max-h-800'>
      {/*    <div className='flex mt-6 justify-center pb-10'>
        <div className='w-16 h-1 rounded-full bg-green-900 inline-flex'></div>
      </div> */}
      {/*  <img
        src={Forest}
        className='z-10 w-full h-full absolute'
        style={{ maxHeight: '600px' }}
      /> */}
      {/* <div className='h-full w-full absolute bottom-0 left-0 z-0 '>
        <div className='relative h-full w-full flex justify-center whiteCarpet z-10'></div>
      </div> */}

      <div className='z-50 w-full flex justify-center pb-4 md:pb-10'>
        <img src={BlackLogo} />
      </div>

      <ul className='z-50 grid place-content-center text-center gap-3 pb-20 md:grid-cols-5 max-w-screen-sm mx-auto'>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          {home}
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          {lodge}
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          {apartments}
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          {activities}
        </li>
        <li className='text-lg tracking-wider font-sans cursor-pointer font-light lg:hover:border-white md:text-xl'>
          {contact}
        </li>
      </ul>

      <div className='z-50 grid place-content-center text-center font-light'>
        <a className='text-gray-800 underline'>info@sanlorenzodipersegno.it</a>
        <p className='leading-normal my-5 underline'>Tel. +39 329 310 3384</p>
        <span className='flex justify-center pb-4'>
          <a className='text-gray-800'>
            <svg
              fill='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'>
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </a>

          <a className='ml-4 text-gray-800'>
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'>
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
        </span>
        <a
          href='https://leonardotononi.com'
          target='_blank'
          title='Web Developer Website'>
          © 2021 powered by Leonardo Tononi
        </a>
      </div>
    </footer>
  );
}
