import Link from 'next/link';

import useLocale from '../../hooks/useLocale';

export default function Menu() {
  const { locale, handleChangeLang } = useLocale();
  return (
    <nav>
      <h1>San Lorenzo</h1>
      <ul>
        <li>Home</li>
        <li>Apartments</li>
        <li>Activities</li>
        <li>Contact</li>
        <li>
          <select onChange={handleChangeLang} defaultValue={locale}>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
            <option value='de'>DE</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
