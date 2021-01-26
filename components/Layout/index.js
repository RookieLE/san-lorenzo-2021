import Menu from '../Menu';

export default function Layout({ children }) {
  return (
    <main class='grid'>
      <div>{children}</div>
    </main>
  );
}
