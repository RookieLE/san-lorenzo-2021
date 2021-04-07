import Image from 'next/image';
import { IoPlayCircle } from 'react-icons/io5';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ImgCentral({
  image,
  videoUrl,
  textImage,
  bgSmoke,
  text,
  cta,
  heightImg,
  title,
  priorityImg,
}) {
  return (
    <section className={`text-gray-600 ${bgSmoke && 'bg-gray-100'} `}>
      <div className='flex flex-col items-center justify-center px-2 py-12 mx-auto max-w-screen-2xl md:px-5 md:py-24'>
        {title && (
          <>
            <h4 className='font-serif text-4xl font-medium text-center text-green-900'>
              {title}
            </h4>

            <div className='' dangerouslySetInnerHTML={{ __html: textImage }} />
          </>
        )}

        <Popup
          trigger={
            <button className='focus:outline-none group'>
              <div className='relative w-full'>
                <IoPlayCircle className='absolute z-10 mr-2 text-5xl text-white transition transform top-4 left-4 sm:top-10 sm:text-8xl sm:left-10 group-hover:scale-125' />
                <Image
                  className={`w-full object-cover object-center rounded-lg hover:shadow-md`}
                  alt='hero'
                  src={image}
                  width={1225}
                  height={575}
                  priority={priorityImg}
                />
              </div>
            </button>
          }
          modal
          nested
          position='center center'>
          <div className='bg-transparent videoWrapper'>
            <iframe
              width='560'
              height='315'
              src={videoUrl}
              title='YouTube video player'
              frameBorder='0'
              allowFullScreen
            />
          </div>
        </Popup>

        {cta && (
          <div className='w-full pt-8 text-center lg:w-2/3'>
            <div className='flex justify-center'>
              <button className='inline-flex px-6 py-2 text-lg text-gray-700 bg-gray-100 border-2 border-gray-600 rounded focus:outline-none hover:bg-gray-600 hover:text-white'>
                {cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
