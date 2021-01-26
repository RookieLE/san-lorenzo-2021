import Link from 'next/link';
import Header from 'components/Header';
import useLocale from 'hooks/useLocale';

export default function IndexPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
    </>
  );
}
