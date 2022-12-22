import Header from "@/components/organism/Header";
import useLocale from "hooks/useLocale";
import Seo from "@/components/Layout/Seo";
import ColumnSection from "@/components/organism/ColumnSection";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";

export default function Posizione() {
  const { t } = useLocale();

  const { title, subTitle, text, cta, sections } = t.activities_page;
  const headerText = { title, subTitle, text };

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>
      <Seo {...seoAttributes} />

      <Header />
      <section className={`w-full bg-cover mx-auto grid`}>
        <div className="flex flex-col items-center order-2 max-w-screen-xl mt-10 text-center lg:mx-auto lg:text-center lg:flex-grow md:items-center md:text-left md:pl-2">
          <h1 className="text-4xl font-extrabold leading-none text-center text-gray-900 sm:text-6xl lg:text-7xl">
            {sections[0].title}
          </h1>

          {/* <p className="max-w-screen-lg mb-10 text-lg text-gray-500 lg:mx-auto sm:text-2xl sm:leading-10 sm:mb-11">
            {sections[0].text}
          </p> */}
        </div>
      </section>
      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/map.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671662412966" class="mb-20 px-2" />
      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/activities.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671662437495" class="mb-20 px-2" />

      <section className={`w-full bg-cover mx-auto grid`}>
        <div className="flex flex-col items-center order-2 max-w-screen-xl my-5 text-center lg:my-20 lg:mx-auto lg:text-center lg:flex-grow md:items-center md:text-left md:pl-2">
          <h1 className="mb-8 text-4xl font-extrabold leading-none text-center text-gray-900 sm:text-6xl lg:text-7xl sm:mb-10">
            {sections[1].title}
          </h1>

          <p className="max-w-screen-lg mb-10 text-lg text-gray-500 lg:mx-auto sm:text-2xl sm:leading-10 sm:mb-11">
            {sections[1].text}
          </p>
        </div>
      </section>

      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/gargnano.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671662413179" class="mb-20 px-2" />
      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/activities-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671662435332" class="mb-20 px-2" />
      <section className={`w-full bg-cover mx-auto grid`}>
        <div className="flex flex-col items-center order-2 max-w-screen-xl my-5 text-center lg:my-20 lg:mx-auto lg:text-center lg:flex-grow md:items-center md:text-left md:pl-2">
          <h1 className="mb-8 text-4xl font-extrabold leading-none text-center text-gray-900 sm:text-6xl lg:text-7xl sm:mb-10">
            {sections[2].title}
          </h1>

          <p className="max-w-screen-lg mb-10 text-lg text-gray-500 lg:mx-auto sm:text-2xl sm:leading-10 sm:mb-11">
            {sections[2].text}
          </p>
        </div>
      </section>
      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/toscolano-maderno.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671662415304" class="mb-20 px-2" />
      <img src="https://ik.imagekit.io/dcwkdo37k/tr:w-1800/activities-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671662437045" class="mb-20 px-2" />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
