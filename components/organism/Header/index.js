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
          <div className="grid 2xl:grid-cols-2 order-2 px-4 mb-12 lg:my-20">
            <div className="flex px-4 flex-col items-start place-content-center max-w-screen-md my-5 text-left lg:my-20 lg:flex-grow md:pl-2">
              <h1 className="my-4 text-5xl text-left text-gray-900 lg:text-6xl sm:text-6xl">
                {title} <span className="text-green-900">{subTitle}</span>
              </h1>

              <p className="text-lg text-gray-800 sm:leading-8">
                {text}
              </p>

              {cta && (
                <Link href="/agriturismo">
                  <a className="flex-none w-auto rounded place-self-start my-6 px-4 py-2 text-md leading-6 text-white transition-colors duration-200 bg-green-900 border border-transparent hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none">
                    {cta}
                  </a>
                </Link>
              )}
            </div>
            <img src="/assets/agriturismo/lodge-2.png" class="px-2 place-self-center" />
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
