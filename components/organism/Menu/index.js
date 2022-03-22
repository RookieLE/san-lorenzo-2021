import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useLocale from "hooks/useLocale";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import dynamic from "next/dynamic";
import Image from "next/image";
import { SiInstagram } from "react-icons/si";
const Flag = dynamic(() => import("react-flagpack"), { ssr: false });

export default function Menu({
  simplified = false,
  navbar: { home, lodge, apartments, activities, contact, position },
}) {
  const router = useRouter();

  const { locale, handleChangeLang } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;

      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [isMenuOpen]);

  const handleHamb = () => {
    setTimeout(() => setIsMenuOpen(!isMenuOpen), 300);
  };

  // const isMenuActive = (_menu) =>
  //     (router.pathname === _menu && !simplified && "h-8 border-l-4 lg:border-b-2 border-white lg:border-l-0 lg:text-white") ||
  //     (router.pathname === _menu && simplified && "h-8 border-l-4 border-green-900 lg:border-b-2 lg:border-gray-800 lg:border-l-0") ||
  //     (router.pathname !== _menu && !simplified && "h-8 border-l-4 border-white lg:border-transparent lg:border-l-0 lg:border-b-2 lg:hover:border-gray-200 opacity-60 lg:hover:opacity-95 lg:text-white") ||
  //     (router.pathname !== _menu && simplified && "h-8 border-l-4 border-white lg:border-transparent lg:border-l-0 lg:border-b-2 lg:hover:border-gray-400 opacity-60 lg:hover:opacity-95");

  const simplifiedTextColor =
    (router.pathname === "/appartamenti" && "lg:text-black") || "lg:text-white";

  const textColor = (simplified && "text-gray-800") || "text-white";

  const parseFlag = (name) => {
    if (name === "it")
      return (
        <img
          className="w-6"
          src="/assets/flag/italy.png"
          alt="bandiera italia"
        />
      );
    if (name === "en")
      return (
        <img className="w-6" src="/assets/flag/uk.png" alt="bandiera uk" />
      );
  };

  const oppositeLocale = (locale === "it" && "en") || (locale === "en" && "it");

  return (
    <nav
      className={`flex absolute w-full justify-between z-50 font-sans max-w-[1920px] lg:mx-auto ${textColor} ${
        simplified && "px-4 lg:p-0 lg:py-2 bg-gray-800"
      }`}
    >
      <div className="z-20 grid grid-cols-2 pt-4 lg:pt-0 justify-content-start md:place-content-center max-w-[200px] lg:max-w-[280px]">
        <img 
          className={`object-container object-center w-20 lg:place-self-center`}
          alt="hero"
          src="/white-logo.png"
          priority
        />
        <h1 className="font-serif text-3xl text-white font-medium justify-self-start tracking-wider md:flex md:flex-col min-w-[200px] md:place-content-center">
          San Lorenzo{" "}
          <span className="block text-lg font-light">di Persegno</span>
        </h1>
      </div>

      <div
        className="z-50 hover:cursor-pointer lg:hidden place-self-center"
        onClick={handleHamb}
      >
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isMenuOpen && { textColor: "black" }) || { textColor: "black" }
          }
          reverse={isMenuOpen}
          size={42}
          speed={3}
          strokeColor="white"
          className={`transform transition ${
            (isMenuOpen && "bg-green-700") || ""
          } ${(isMenuOpen || simplified) && "bg-gray-700 fill-current "}`}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-900 opacity-50"></div>
      )}

      <ul
        className={`grid absolute lg:border-0 bg-white text-black lg:text-white shadow left-0 top-0 z-20 p-2 w-2/3 sm:w-1/3 lg:w-full m-6 lg:flex lg:relative lg:bg-transparent lg:${textColor} lg:shadow-none lg:justify-end ${
          (isMenuOpen && "block") || "hidden"
        }`}
      >
        <li
          className={`pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:pl-0 lg:text-white `}
        >
          <Link href={`/${locale}`}>
            <a>{home}</a>
          </Link>
        </li>
        <li
          className={`pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:pl-0 lg:text-white`}
        >
          <Link href={`/${locale}/agriturismo`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li
          className={`pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:pl-0 lg:text-white`}
        >
          <Link href={`/${locale}/appartamenti`}>
            <a>{apartments}</a>
          </Link>
        </li>
        <li
          className={`pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:pl-0 lg:text-white`}
        >
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li>
        <li
          className={`pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:pl-0 lg:text-white`}
        >
          <Link href={`/${locale}/posizione`}>
            <a>{position}</a>
          </Link>
        </li>
        <li
          className={`pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:pl-0 lg:text-white`}
        >
          <a href="#contact">{contact}</a>
        </li>
        <li className="pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:text-white lg:pl-0">
          <div className="relative flex w-1/3 px-2 py-3 transition rounded-md lg:w-full place-items-center place-content-center sm:px-2 sm:py-1 hover:bg-gray-50/30 bg-gray-200/60 lg:bg-gray-50/10">
            {/*  <!-- Dropdown toggle button --> */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative z-10 flex text-sm uppercase lg:text-white focus:outline-none place-content-center place-items-center"
            >
              <svg
                className={`relative w-5 h-5 lg:text-white top-1 transform transition-transform mb-1 ${
                  isDropdownOpen && "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {locale}
            </button>

            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
              <div className="absolute z-20 p-1 mt-4 border border-gray-200 rounded-md shadow-xl bg-gray-50/70 lg:top-5 -right-16 -top-5 lg:right-0 w-14 hover:bg-gray-50/80">
                <button
                  onClick={() => {
                    handleChangeLang(oppositeLocale);
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full py-1 text-sm text-gray-800 uppercase transition-colors duration-200 transform place-content-center focus:outline-none"
                >
                  {oppositeLocale}
                </button>
              </div>
            )}
          </div>
        </li>
        <li className="flex pl-2 m-2 font-sans text-lg tracking-wider capitalize cursor-pointer lg:text-white lg:pl-0">
          <a
            href="https://www.instagram.com/sanlorenzo.dipersegno/"
            target="_blank"
            className="flex text-gray-800 transition transform hover:scale-110 place-content-center"
          >
            <SiInstagram className="text-3xl lg:text-white" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
