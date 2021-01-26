import Link from 'next/link';
import Header from 'components/Header';
import useLocale from 'hooks/useLocale';
import TwoColumn from 'components/TwoColumn';

export default function IndexPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <TwoColumn />
    </>
  );
}
