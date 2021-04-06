import Image from 'next/image';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import Menu from '@/components/organism/Menu';

export default function Header({ background, page_type, simplified }) {
  const { t } = useLocale();
  const img_text =
    (page_type === 'home' && t.homepage?.welcome) ||
    (page_type === 'activities' && 'Activities');
  const renderImgText = page_type && (
    <h1 className='absolute bottom-0 left-0 z-50 ml-2 font-serif text-6xl text-white lowercase sm:bottom-0 md:bottom-0 lg:-bottom-4 sm:-left-1 lg:text-9xl'>
      {img_text}
    </h1>
  );

  if (simplified) {
    return <Menu navbar={t.navbar} simplified />;
  }

  const { title, subTitle, text, cta } = t.homepage.san_lorenzo;

  return (
    <>
      <Menu navbar={t.navbar} simplified />
      <header
        className={`w-full bg-cover p-6 relative max-w-screen-xl mx-auto`}>
        <div
          className={`lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center md:pl-16
            `}>
          <h1 className='mt-10 mb-8 font-serif text-4xl font-extrabold leading-none text-gray-900 sm:text-6xl lg:text-7xl sm:mt-14 sm:mb-10'>
            {title} <span className='text-green-900'>{subTitle}</span>
          </h1>

          <p className='max-w-screen-lg mb-10 text-lg text-gray-500 sm:text-2xl sm:leading-10 sm:mb-11'>
            {text}
          </p>

          <Link href='/agriturismo'>
            <a className='flex-none w-auto px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 bg-green-900 border border-transparent hover:bg-green-800 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none'>
              {cta}
            </a>
          </Link>
        </div>
        <div className='relative mx-auto my-10 md:my-20 max-w-screen-2xl'>
          <Image
            alt='Mountains'
            src={background}
            objectFit='cover'
            quality={100}
            width={1200}
            height={500}
            className='rounded-lg'
            priority
          />
          {renderImgText}
        </div>
      </header>
    </>
  );
}
