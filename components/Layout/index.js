import Menu from '../Menu';

export default function Layout({ children }) {
  return (
    <main className='grid'>
      <div>{children}</div>
    </main>
  );
}
