import Menu from '@/components/organism/Menu';

export default function Header({ t }) {
  return (
    <header
      className='h-2/3 md:h-5/6 w-full bg-home-header bg-cover p-6 relative lg:bg-no-repeat lg:bg-bottom'
      style={{ maxHeight: '700px', minHeight: '80vh' }}>
      <Menu navbar={t.navbar} />
      <div className='h-2/3 md:h-5/6 w-full absolute top-0 left-0 z-0 '>
        <div className='relative h-full flex justify-center blackCarpet z-10'></div>
      </div>
      <h1 className='absolute bottom-0 left-0 ml-2 text-white text-6xl font-serif lowercase z-50 lg:text-9xl'>
        {t.homepage?.welcome}
      </h1>
    </header>
  );
}
