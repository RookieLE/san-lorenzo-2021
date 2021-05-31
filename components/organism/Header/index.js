import Image from 'next/image';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import Menu from '@/components/organism/Menu';

export default function Header({
  background,
  simplified,
  img_text,
  title,
  subTitle,
  notification,
  text,
  cta,
}) {
  const { t } = useLocale();
  const renderImgText = img_text && (
    <h1 className='absolute bottom-0 left-0 z-10 ml-2 font-serif text-4xl text-white lowercase sm:bottom-0 md:bottom-0 lg:-bottom-4 sm:-left-1 lg:text-9xl'>
      {img_text}
    </h1>
  );

  if (simplified) {
    return <Menu navbar={t.navbar} simplified />;
  }

  return (
    <>
      <Menu navbar={t.navbar} simplified />
      <header
        className={`w-full bg-cover p-4 relative max-w-screen-xl mx-auto`}>
        <div
          className={`mt-10 sm:mt-14 lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center md:pl-2
            `}>
          <p className='grid px-4 py-2 my-4 text-xl leading-none text-white bg-red-400 rounded-md sm:grid-flow-col place-items-center'>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 w-7 h-7'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg> */}
            😔 {notification}
          </p>
          <h1 className='mb-8 font-serif text-4xl font-extrabold leading-none text-gray-900 sm:text-6xl lg:text-7xl sm:mb-10'>
            {title} <span className='text-green-900'>{subTitle}</span>
          </h1>

          <p className='max-w-screen-lg mb-10 text-lg text-gray-500 sm:text-2xl sm:leading-10 sm:mb-11'>
            {text}
          </p>

          {cta && (
            <Link href='/agriturismo'>
              <a className='flex-none w-auto px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 bg-green-900 border border-transparent hover:bg-green-800 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none'>
                {cta}
              </a>
            </Link>
          )}
        </div>
        <div className='relative mx-auto my-10 md:my-20 max-w-screen-2xl'>
          <Image
            alt='Mountains'
            src={background}
            objectFit='cover'
            quality={100}
            width={1200}
            height={600}
            className='rounded-lg'
            priority
          />
          {renderImgText}
        </div>
      </header>
    </>
  );
}
