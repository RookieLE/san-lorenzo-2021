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

export default function Menu({ simplified = false, navbar, bookNow }) {
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

  const handleScroll = () => {
    window?.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };

  // const isMenuActive = (_menu) =>
  //     (router.pathname === _menu && !simplified && "h-8 border-l-4 lg:border-b-2 border-white lg:border-l-0 lg:text-gray-800") ||
  //     (router.pathname === _menu && simplified && "h-8 border-l-4 border-green-900 lg:border-b-2 lg:border-gray-800 lg:border-l-0") ||
  //     (router.pathname !== _menu && !simplified && "h-8 border-l-4 border-white lg:border-transparent lg:border-l-0 lg:border-b-2 lg:hover:border-gray-200 opacity-60 lg:hover:opacity-95 lg:text-gray-800") ||
  //     (router.pathname !== _menu && simplified && "h-8 border-l-4 border-white lg:border-transparent lg:border-l-0 lg:border-b-2 lg:hover:border-gray-400 opacity-60 lg:hover:opacity-95");

  const isActive = (href) =>
    router.pathname.includes(href) && "transition font-bold";

  const textColor = (simplified && "text-gray-700") || "text-gray-700";

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
      className={`flex w-full justify-between z-50 sticky top-0 py-2 bg-white max-w-[1920px] lg:mx-auto px-4 ${textColor} ${
        simplified && "px-4 lg:p-0 lg:py-2 bg-gray-800"
      }`}
    >
      <div className="z-20 grid md:grid-cols-4 justify-content-start md:place-content-center lg:mr-10 lg:min-w-[280px]">
        <img
          className={`object-container object-center w-14 lg:place-self-center hidden xl:flex`}
          alt="hero"
          src="/black-logo.webp"
          width="60"
          priority
        />
        <h1 className="col-span-3 text-xl lg:text-3xl text-gray-800 font-medium justify-self-start tracking-wider xl:flex md:flex-col md:place-content-center">
          San Lorenzo{" "}
          <span className="block text-lg font-light relative bottom-2 italic">
            di Persegno
          </span>
        </h1>
      </div>

      <div className="flex gap-2 place-content-end place-items-center">
        <a
          class="lg:hidden px-4 h-12 place-self-center flex place-content-center rounded place-items-center text-white bg-green-900 hover:bg-green-800 capitalize"
          href={bookNow.href}
          target="_blank"
        >
          {bookNow.name}
        </a>

        <div
          className="z-50 hover:cursor-pointer lg:hidden place-self-center w-12 h-12 border-2 border-gray-700 flex place-content-center place-items-center rounded-md"
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
            strokeColor="black"
            className={`transform transition rounded ${
              (isMenuOpen && "bg-green-700") || ""
            } ${(isMenuOpen || simplified) && "bg-gray-700 fill-current "}`}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-900 opacity-50"></div>
      )}

      <ul
        className={`grid absolute lg:border-0 bg-white rounded text-black shadow left-0 top-0 z-20 p-2 w-2/3 sm:w-1/3 lg:w-full m-6 lg:flex lg:relative lg:bg-transparent lg:${textColor} lg:shadow-none lg:justify-end ${
          (isMenuOpen && "block") || "hidden"
        }`}
      >
        {navbar.map((link) => (
          <li class="mr-8 my-2 lg:my-0 lg:place-self-center">
            {(link.href.includes("contact") && (
              <a
                href={`${link.href}`}
                aria-current="page"
                class={`inline-block capitalize hover:text-gray-900 ${isActive(
                  link.href
                )}`}
              >
                {link.name}
              </a>
            )) || (
              <Link href={`/${locale}${link.href}`}>
                <a
                  class={`inline-block capitalize hover:text-gray-900 ${isActive(
                    link.href
                  )}`}
                >
                  {link.name}
                </a>
              </Link>
            )}
          </li>
        ))}
        <div class="grid gap-4 mt-6 lg:mt-0 lg:flex lg:place-content-center ml-auto w-full lg:w-max">
          {/* <div className="flex place-content-center place-items-center text-lg tracking-wider text-gray-800 capitalize cursor-pointer">
            <a
              href="https://www.instagram.com/sanlorenzo.dipersegno/"
              target="_blank"
              className="flex text-gray-800 transition transform hover:scale-110 place-content-center"
            >
              <SiInstagram className="text-2xl text-gray-800" />
            </a>
          </div> */}
          <div className="text-lg tracking-wider text-gray-800 capitalize cursor-pointer bg-gray-50 rounded h-12 place-content-center place-items-center flex">
            <div className="relative flex w-1/3 px-2 py-3 transition rounded-md lg:w-full place-items-center place-content-center sm:px-2 sm:py-1">
              {/*  <!-- Dropdown toggle button --> */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative z-10 flex text-sm text-gray-800 uppercase focus:outline-none place-content-center place-items-center"
              >
                <img src={`/assets/flag/${locale}.png`} className="w-5 mr-2" />
                {locale}
                {/* <svg
                  className={`relative w-5 h-5 text-gray-800 transform transition-transform ${
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
                </svg> */}
              </button>

              {/* <!-- Dropdown menu --> */}
              {isDropdownOpen && (
                <div className="absolute z-20 p-1 mt-4 border border-gray-200 shadow-xl rounded bg-gray-50/70 lg:top-5 -right-16 -top-5 lg:right-0 w-14 hover:bg-gray-50/80">
                  <button
                    onClick={() => {
                      handleChangeLang(oppositeLocale);
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full py-1 text-sm text-gray-800 uppercase transition-colors duration-200 transform place-content-center focus:outline-none"
                  >
                    <img
                      src={`/assets/flag/${oppositeLocale}.png`}
                      className="w-5 mr-2"
                    />
                    {oppositeLocale}
                  </button>
                </div>
              )}
            </div>
          </div>

          <a
            class="px-8 h-12 flex place-content-center rounded place-items-center text-white font-semibold bg-green-900 hover:bg-green-800 capitalize"
            href={bookNow.href}
            target="_blank"
          >
            {bookNow.name}
          </a>
        </div>
      </ul>
    </nav>
  );
}
