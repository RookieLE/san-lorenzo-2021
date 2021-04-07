import { IoPlayCircle } from 'react-icons/io5';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Title({ title, desc, cta, margin, t, locale }) {
  const room = t.rooms.rooms.filter((room) => room.name === title)[0];

  const watchText =
    (locale === 'it' && 'Guarda il Video') ||
    (locale === 'en' && 'Watch the Video');

  return (
    <div className={`flex flex-col text-center w-full ${margin}`}>
      {title && (
        <h1 className='mb-4 font-serif text-5xl font-bold text-green-800 capitalize sm:text-6xl'>
          {title}
        </h1>
      )}

      {/*   <Popup
        trigger={
          <button className='focus:outline-none'>
            <p className='flex mx-auto text-2xl font-bold leading-relaxed text-gray-500 cursor-pointer lg:w-2/3 max-w-prose place-content-center place-items-center hover:underline'>
              <IoPlayCircle className='mr-2' /> {watchText}
            </p>
          </button>
        }
        modal
        nested
        position='center center'>
        <div className='bg-transparent videoWrapper'>
          <iframe
            width='560'
            height='315'
            src={room.videoUrl}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
      </Popup> */}

      {desc && (
        <p className='mx-auto text-base leading-relaxed lg:w-2/3 max-w-prose'>
          {desc}
        </p>
      )}

      {cta && (
        <div className='flex justify-center pt-5 md:pt-10'>
          <Button text={cta} ctaStyle='underline' />
        </div>
      )}
    </div>
  );
}
