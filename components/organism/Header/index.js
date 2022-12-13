import Image from "next/image";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";
import Menu from "@/components/organism/Menu";
import { useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export default function Header({
  background,
  simplified = false,
  img_text,
  title,
  subTitle,
  notification,
  text,
  cta,
}) {
  const [showNotification, setShowNotification] = useLocalStorage(
    "showNotification",
    true
  );
  const { t, locale } = useLocale();
  const renderImgText = img_text && (
    <h1 className="absolute bottom-0 left-0 z-10 ml-2 text-4xl text-white lowercase sm:bottom-0 md:bottom-0 lg:-bottom-4 sm:-left-1 lg:text-9xl">
      {img_text}
    </h1>
  );

  return (
    <>
      <Menu navbar={t.navbar} bookNow={t.book_now} simplified={simplified} />
      <header className={`w-full bg-cover mx-auto grid`}>
        {title && (
          <div className="flex flex-col items-center order-2 max-w-screen-xl my-5 text-center lg:my-20 lg:mx-auto lg:text-center lg:flex-grow md:items-center md:text-left md:pl-2">
            {/* {showNotification && notification && (
            <div class="alert text-white shadow-lg mb-10 px-2 z-50 max-w-xl bg-gray-800">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-info flex-shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <h3 class="font-bold">
                    {(locale === "en" && "New message!") || "Nuovo messaggio!"}
                  </h3>
                  <div class="text-sm">{notification}</div>
                </div>
              </div>
              <div class="flex-none">
                <button
                  onClick={() => setShowNotification(false)}
                  class="btn btn-sm bg-gray-600 border-none text-gray-100 hover:bg-gray-700 capitalize"
                >
                  Ok
                </button>
              </div>
            </div>
          )} */}
            <h1 className="mb-4 text-5xl text-center text-gray-900 lg:text-6xl font-heading sm:text-6xl title_section">
              {title} <span className="text-green-900">{subTitle}</span>
            </h1>

            <p className="max-w-screen-lg mb-10 text-lg text-gray-800 lg:mx-auto sm:leading-8 sm:mb-11">
              {text}
            </p>

            {cta && (
              <Link href="/agriturismo">
                <a className="flex-none w-auto px-4 py-2 text-md leading-6 text-white transition-colors duration-200 bg-green-900 border border-transparent lg:mx-auto hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none">
                  {cta}
                </a>
              </Link>
            )}

            <img src="/assets/agriturismo/lodge-2.png" class="my-20 px-2" />
          </div>
        )}
        {background && (
          <div className="relative max-w-[1920px] mx-auto order-1 gradient-effect">
            <img
              alt="Mountains"
              src={background}
              quality={100}
              layout="fill"
              priority
            />{" "}
            {renderImgText}{" "}
          </div>
        )}
      </header>{" "}
    </>
  );
}
