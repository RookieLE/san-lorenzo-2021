import Agri1 from '@/assets/agriturismo/agri1.png';
import Agri2 from '@/assets/agriturismo/agri2.png';
import Agri3 from '@/assets/agriturismo/agri3.png';
import Agri4 from '@/assets/agriturismo/agri4.png';
import Agri5 from '@/assets/agriturismo/agri5.png';

export default function ImgMosaic() {
  return (
    <section className='overflow-hidden text-gray-700 body-font py-20'>
      <div className='container px-5 py-6 mx-auto lg:px-10'>
        <div className='carousel flex flex-wrap -m-4 gap-12 justify-center max-w-screen-xl'>
          <div className='flex flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full rounded object-cover h-full object-center block'
                  src={Agri1}
                />
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full rounded object-cover h-full object-center block'
                  src={Agri2}
                />
              </div>
              <div className='md:p-2 p-1 w-full'>
                <img
                  alt='gallery'
                  className='w-full rounded h-full object-cover object-center block'
                  src={Agri3}
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-full'>
                <img
                  alt='gallery'
                  className='w-full rounded h-full object-cover object-center block'
                  src={Agri4}
                />
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full rounded object-cover h-full object-center block'
                  src={Agri5}
                />
              </div>
            </div>
          </div>

          <div className='text-center lg:w-2/3 w-full'>
            <p className='mb-8 leading-relaxed'>
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className='flex justify-center'>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
