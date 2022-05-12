import Header from "@/components/organism/Header";
import useLocale from "hooks/useLocale";
import Ratings from "@/components/organism/Ratings";
import Rooms from "@/components/organism/Rooms";
import Activities from "@/components/organism/Activities";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";
import Seo from "@/components/Layout/Seo";
import Head from "next/head";

export default function IndexPage() {
  const { t } = useLocale();

  const seoAttributes = {
    title: t.seo.homepage,
  };

  const { title, subTitle, text, cta, notification } = t.header.san_lorenzo;
  const headerText = { title, subTitle, text, cta, notification };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header
        background="/assets/home/mountain.jpg"
        {...headerText}
        img_text={t.header.welcome}
        simplified={false}
      />
      <Rooms t={t} />
      {/* <Activities t={t} /> */}

      <Contact t={t} />
      <Ratings />
      <section class="py-24">
        <div class="container px-4 mx-auto">
          <h4 class="leading-8 text-gray-800 text-center mb-12 text-4xl font-serif">
            We also accept cryptocurrencies.
          </h4>
          <div class="flex flex-wrap -mx-4 items-center">
            <div class="w-full w-1/2 lg:w-1/4 px-4 text-center mb-10 lg:mb-0">
              <div class="p-4 h-40 flex items-center justify-center bg-orange-100">
                <img src="/assets/crypto/bitcoin.png" alt="" class="w-10" />
              </div>
            </div>
            <div class="w-full w-1/2 lg:w-1/4 px-4 text-center mb-10 lg:mb-0">
              <div class="p-4 h-40 flex items-center justify-center bg-gray-100">
                <img src="/assets/crypto/ethereum.png" alt="" class="w-10" />
              </div>
            </div>
            <div class="w-full w-1/2 lg:w-1/4 px-4 text-center mb-10 md:mb-0">
              <div class="p-4 h-40 flex items-center justify-center bg-blue-100">
                <img src="/assets/crypto/terra-usd.png" alt="" class="w-10" />
              </div>
            </div>
            <div class="w-full w-1/2 lg:w-1/4 px-4 text-center mb-10 md:mb-0">
              <div class="p-4 h-40 flex items-center justify-center bg-yellow-100">
                <img src="/assets/crypto/busd.png" alt="" class="w-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </>
  );
}
