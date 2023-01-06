import useLocale from "hooks/useLocale";
import Link from "next/link";
import { SiInstagram, SiFacebook } from "react-icons/si";
import Image from "next/image";
export default function Footer({
  t: {
    navbar: { home, lodge, apartments, activities, contact },
  },
}) {
  const { locale } = useLocale();
  let year = new Date().getFullYear();
  return (
    <footer className="relative flex flex-col justify-end w-full pt-10 text-gray-800 bg-bottom bg-gray-50 max-h-800">
      <div className="flex justify-center w-full mb-8">
        <img
          src={"/black-logo.webp"}
          className={`object-container object-center w-20`}
          alt="hero"
          lazy
        />
      </div>

      {/* <ul className="grid max-w-screen-sm gap-3 mx-auto text-center place-content-center md:grid-cols-4">
        <li className="text-lg tracking-wider text-gray-800 cursor-pointer md:text-xl">
          <Link href={`/${locale}`}>
            <a class="text-gray-800">{home}</a>
          </Link>
        </li>
        <li className="text-lg tracking-wider text-gray-800 cursor-pointer md:text-xl">
          <Link href={`/${locale}/agriturismo`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li className="text-lg tracking-wider text-gray-800 cursor-pointer md:text-xl">
          <Link href={`/${locale}/appartamenti`}>
            <a>{apartments}</a>
          </Link>
        </li>
        <li className="text-lg tracking-wider text-gray-800 cursor-pointer md:text-xl">
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li>
      </ul> */}

      <div className="grid font-light text-center place-content-center">
        <span className="flex justify-center pb-16">
          <a
            href="https://www.facebook.com/AgriturismoSanLorenzoDiPersegno"
            target="_blank"
            className="text-gray-800 transition transform hover:scale-110"
          >
            <SiFacebook className="text-2xl" />
          </a>

          <a
            href="https://www.instagram.com/sanlorenzo.dipersegno/"
            target="_blank"
            className="ml-4 text-gray-800 transition transform hover:scale-110"
          >
            <SiInstagram className="text-2xl" />
          </a>
        </span>
        <p className="leading-normal text-gray-800">
          Via Camerate 39
          <br />
          Toscolano Maderno (BS) - 25088
        </p>
        <div className="grid gap-2 mt-2 mb-8 text-gray-800 underline">
          <a href="mailto:info@sanlorenzodipersegno.it">
            info@sanlorenzodipersegno.it
          </a>
          <a href="tel:00393882432306">Tel. +39 388 243 2306</a>
        </div>
      </div>

      <div className="grid font-light text-center place-content-center bg-black text-gray-100 pb-6">
        <div className="grid mt-6 mb-8  text-sm">
          <p className="leading-normal ">P.iva 01558810980</p>
          <p className="leading-normal ">
            Codice Regione 017187-AGR-00007
          </p>
          <p className="leading-normal ">
            Ragione sociale - Agriturismo San Lorenzo di persegno
          </p>
          <p className="leading-normal ">Tononi Luca Antonio</p>
        </div>

        <a
          className=""
          href="https://leonardotononi.com"
          target="_blank"
          title="Web Developer Website"
        >
          © {year} powered by Leonardo Tononi
        </a>
      </div>
    </footer>
  );
}
