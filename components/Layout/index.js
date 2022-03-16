import ScrollTopBtn from "components/molecules/ScrollTopBtn";

export default function Layout({ children }) {
  return (
    <main className="grid">
      <div>{children}</div>
      <ScrollTopBtn />
    </main>
  );
}
