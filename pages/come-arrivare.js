import Header from "@/components/organism/Header";
import useLocale from "hooks/useLocale";
import Seo from "@/components/Layout/Seo";
import Footer from "@/components/organism/Footer";

export default function ComeArrivare() {
  const { t } = useLocale();

  const { title, youtube, cta, pdf_url, pdf_name } = t.come_arrivare;

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>
      <Seo {...seoAttributes} />

      <Header />
      <div className="grid lg:grid-cols-2 items-center justify-center px-2 py-12 mx-auto max-w-screen-2xl md:px-5 md:py-24">
        <div>
          {" "}
          <div className="grid w-full rounded-none place-content-center videoWrapper">
            <iframe
              width="560"
              height="315"
              src={youtube}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div>
          <h5 className="text-4xl mt-8 font-semibold text-center text-gray-900">
            {title}
          </h5>

          <div className="w-full pt-8 mx-auto">
            <div className="grid place-content-center gap-4 place-items-center">
              <img src="/assets/pdf.png" class="w-16" />
              <a
                href={pdf_url}
                download={pdf_name}
                className="btn w-40 border-none text-center flex place-content-center place-items-center h-12 text-lg text-white bg-red-400 rounded-md focus:outline-none hover:bg-red-800 hover:text-white"
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer t={t} />
    </>
  );
}
