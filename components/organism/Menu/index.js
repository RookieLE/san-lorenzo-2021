import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useLocale from "hooks/useLocale";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import dynamic from "next/dynamic";
import Image from "next/image";
const Flag = dynamic(() => import("react-flagpack"), { ssr: false });

export default function Menu({
  simplified,
  navbar: { home, lodge, apartments, activities, contact },
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

  const isMenuActive = (_menu) =>
    (router.pathname === _menu && !simplified && "navLink_active") ||
    (router.pathname === _menu && simplified && "navLink_active_simpl") ||
    (router.pathname !== _menu && !simplified && "navLink_notActive") ||
    (router.pathname !== _menu && simplified && "navLink_notActive_simpl");

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
      className={`flex justify-between z-50 font-sans max-w-screen-2xl lg:mx-auto ${textColor} ${
        simplified && "p-6 lg:p-0 lg:py-6"
      }`}
    >
      <div className="z-20 grid md:grid-cols-2 md:place-content-center">
        <img
          src={"/black-logo.png"}
          className={`object-container object-center w-20 place-self-center`}
          alt="hero"
          src="/black-logo.png"
          priority
        />
        <h1 className="hidden font-serif text-3xl font-medium tracking-wider md:flex md:flex-col min-w-[200px] md:place-content-center">
          San Lorenzo{" "}
          <span className="block text-lg font-light">di Persegno</span>
        </h1>
      </div>

      <div
        className="z-50 hover:cursor lg:hidden place-self-center"
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
            (isMenuOpen && "rounded-full bg-green-700") || "rounded-md"
          } ${(isMenuOpen || simplified) && "bg-green-900 fill-current "}`}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-900 opacity-50"></div>
      )}

      <ul
        className={`grid absolute lg:border-0 bg-white text-black shadow left-0 top-0 z-20 p-2 w-2/3 sm:w-1/3 lg:w-full m-6 rounded-xl lg:flex lg:relative lg:bg-transparent lg:${textColor} lg:shadow-none lg:justify-end ${
          (isMenuOpen && "block") || "hidden"
        }`}
      >
        <li className={`navLink ${isMenuActive(`/`)}`}>
          <Link href={`/${locale}`}>
            <a>{home}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive(`/agriturismo`)}`}>
          <Link href={`/${locale}/agriturismo`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive("/appartamenti")}`}>
          <Link href={`/${locale}/appartamenti`}>
            <a>{apartments}</a>
          </Link>
        </li>
        {/* <li className={`navLink ${isMenuActive('/attivita')}`}>
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li> */}
        <li className={`navLink ${isMenuActive("/contatti")}`}>
          <a href="#contact">{contact}</a>
        </li>
        <li className="navLink">
          <div className="relative flex w-1/3 px-2 py-3 bg-gray-100 rounded-md lg:w-full place-items-center place-content-center sm:px-2 sm:py-1 hover:bg-gray-50 sm:bg-white">
            {/*  <!-- Dropdown toggle button --> */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative z-10 flex focus:outline-none place-content-center place-items-center"
            >
              <svg
                className={`relative w-5 h-5 text-gray-600 top-1 transform transition-transform mb-1 ${
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
              {parseFlag(locale)}
            </button>

            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
              <div className="absolute z-20 p-2 mt-4 bg-white border border-gray-200 rounded-md shadow-xl lg:top-5 -right-16 -top-5 lg:right-0 w-14 hover:bg-gray-50">
                <button
                  onClick={() => {
                    handleChangeLang(oppositeLocale);
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full py-1 capitalize transition-colors duration-200 transform place-content-center focus:outline-none"
                >
                  {parseFlag(oppositeLocale)}
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
