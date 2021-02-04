import Menu from 'components/organism/Menu';

export default function Layout({ children }) {
  return (
    <main className='grid'>
      <div>{children}</div>
    </main>
  );
}
