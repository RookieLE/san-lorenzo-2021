import useLocale from '@/hooks/useLocale';
import Menu from '@/components/organism/Menu';

export default function Header({ background, page_type }) {
  const { t } = useLocale();
  const title = page_type === 'home' && t.homepage?.welcome;
  const RenderTitle = page_type && (
    <h1 className='absolute bottom-0 left-0 ml-2 text-white text-6xl font-serif lowercase z-50 lg:text-9xl'>
      {title}
    </h1>
  );

  return (
    <header
      className={`h-2/3 md:h-5/6 w-full ${background} bg-cover p-6 relative lg:bg-no-repeat lg:bg-bottom`}
      style={{
        maxHeight: '700px',
      }}>
      <Menu navbar={t.navbar} />
      <div className='h-2/3 md:h-5/6 w-full absolute top-0 left-0 z-0 '>
        <div className='relative h-full flex justify-center blackCarpet z-10'></div>
      </div>
      {RenderTitle}
    </header>
  );
}
