import useLocale from 'hooks/useLocale';

export default function Header() {
  const { t } = useLocale();
  return (
    <header class='bg-home-header bg-cover h-2/3 w-full absolute top-0 left-0 z-0'>
      <div class='relative h-full flex justify-center blackCarpet z-10'>
        <h1 class='absolute bottom-0 left-0 ml-2 text-white text-6xl font-serif lowercase z-50'>
          {t.homepage?.welcome}
        </h1>
      </div>
    </header>
  );
}
