export default function AdditionalInfo({ form }) {
  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-green-700 underline">
            info@sanlorenzodipersegno.it
          </a>
          <p className="leading-normal my-5">
            Via Camerate 39
            <br />
            Toscolano Maderno (BS) 25088
          </p>
          <p className="leading-normal my-5 underline">Tel. +39 329 310 3384</p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a className="ml-4 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>

          {/*   <div className='w-full text-white bg-blue-500 rounded'>
            <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
              <div className='flex'>
                <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
                  <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z'></path>
                </svg>

                <p className='mx-3'>{form.info}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
