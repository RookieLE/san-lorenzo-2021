import Image from "next/image";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";
import Menu from "@/components/organism/Menu";
import { useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import Announcement from "@/components/atoms/Announcement";

export default function Header({
  background,
  simplified = false,
  img_text,
  title,
  subTitle,
  notification,
  customSrcSet = "",
  text,
  cta,
  noMenu = false
}) {
  const [showNotification, setShowNotification] = useLocalStorage(
    "showNotification",
    true
  );
  const { t, locale } = useLocale();
  const renderImgText = img_text && (
    <h1 className="absolute left-3 z-10 ml-2 text-4xl text-white lowercase bottom-2 sm:left-2 lg:text-7xl">
      {img_text}
    </h1>
  );

  return (
    <>
      {!noMenu && <Menu navbar={t.navbar} bookNow={t.book_now} simplified={simplified} />}
      <header className={`w-full mx-auto grid pattern-leaf-green-500/5`}>
        {title && (
          <div className="grid lg:grid-cols-2 px-4 mb-12 lg:my-20 max-w-[1920px] mx-auto">
            <div className="flex px-4 flex-col items-start place-content-center max-w-screen-sm my-5 text-left lg:my-20 lg:flex-grow lg:place-self-end lg:mr-14">
              {renderImgText && <Announcement />}
              <h1 className="my-4 text-5xl text-left text-gray-900 lg:text-7xl sm:text-6xl font-semibold">
                {title}, <span className="text-green-900">{subTitle}</span>
              </h1>

              <p className="text-md text-gray-700 leading-5 sm:leading-6">{text}</p>

              {cta && (
                <Link href="/agriturismo">
                  <a className="flex-none w-auto rounded-lg place-self-start my-6 px-4 py-2 text-md leading-6 text-green-900 transition-colors duration-200 bg-transparent border-2 font-bold border-green-900 hover:bg-green-800 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none">
                    {cta}
                  </a>
                </Link>
              )}
            </div>
            {/* <img
              src="https://ik.imagekit.io/dcwkdo37k/tr:w-850/lodge-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671661530113"
              class="px-2 place-self-center"
            /> */}

            {background && (
              <div className="relative mx-auto place-self-center">
                <img
                  className="rounded-[2rem] lg:rounded-[3rem] lg:w-4/5 lg:max-w-3xl bg-cover bg-center"
                  alt="Mountains"
                  src={background}
                  srcSet={customSrcSet}
                  quality={100}
                  layout="fill"
                  priority
                />{" "}
                {renderImgText}{" "}
              </div>
            )}
          </div>
        )}

      </header>{" "}
    </>
  );
}
