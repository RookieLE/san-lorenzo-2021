import Menu from '../Menu';

export default function Layout({ children }) {
  return (
    <main class='grid p-4'>
      <Menu />
      <div>{children}</div>
    </main>
  );
}
