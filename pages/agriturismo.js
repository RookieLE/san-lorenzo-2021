import Header from "@/components/organism/Header";
import useLocale from "hooks/useLocale";
import Seo from "@/components/Layout/Seo";
import ColumnSection from "@/components/organism/ColumnSection";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";

export default function Agriturismo() {
  const { t } = useLocale();

  const { title, subTitle, text, cta, sections } = t.lodge;
  const headerText = { title, subTitle, text };

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header background="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/lodge.png?ik-sdk-version=javascript-1.4.3&updatedAt=16716615929077" {...headerText} />
      <section
        className={`w-full mx-auto grid 2xl:grid-cols-2 bg-gray-50 px-4`}
      >
        <img
          src="https://ik.imagekit.io/dcwkdo37k/Agriturismo/tr:w-850/lodge-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671664739769"
          class="my-10 2xl:my-20  order-2 2xl:order-1"
        />
        <div className="flex px-4 flex-col items-end place-content-center mt-10 mb-16 text-left lg:my-20 lg:flex-grow  order-1 2xl:order-2">
          <h1 className="my-4 text-5xl text-left text-gray-900 lg:text-6xl sm:text-6xl">
            {sections[0].title}
          </h1>

          <p
            className="text-lg text-right text-gray-800 sm:leading-8 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: sections[0].text }}
          />
        </div>
      </section>

      <section className={`w-full bg-cover mx-auto grid px-4`}>
        <div className="flex flex-col items-center order-2 max-w-screen-xl my-5 text-center lg:my-20 lg:mx-auto lg:text-center lg:flex-grow md:items-center md:text-left md:pl-2">
          <h1 className="my-4 text-5xl text-left text-gray-900 lg:text-6xl sm:text-6xl">
            {sections[1].title}
          </h1>

          <p className="text-lg text-gray-800 sm:leading-8 max-w-2xl">
            {sections[1].text}
          </p>
        </div>
      </section>
      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/massage.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671665046624" class="mb-20 px-2" />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
