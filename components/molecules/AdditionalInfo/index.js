export default function AdditionalInfo({ form }) {
  return (
    <div className='lg:w-1/2 md:w-2/3 mx-auto'>
      <div className='flex flex-wrap -m-2'>
        <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
          <a className='text-green-700 underline'>
            info@sanlorenzodipersegno.it
          </a>
          <p className='leading-normal my-5'>
            Via Camerate 39
            <br />
            Toscolano Maderno (BS) 25088
          </p>
          <p className='leading-normal my-5 underline'>Tel. +39 329 310 3384</p>
          <span className='inline-flex'>
            <a className='text-gray-500'>
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

            <a className='ml-4 text-gray-500'>
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
          <p className='pt-10'>{form.info}</p>
        </div>
      </div>
    </div>
  );
}
