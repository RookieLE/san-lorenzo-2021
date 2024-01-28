import Header from "@/components/organism/Header";
import useLocale from "hooks/useLocale";
import Seo from "@/components/Layout/Seo";
import Footer from "@/components/organism/Footer";

export default function HowToArrive() {
  const { t } = useLocale();

  const { title, youtube, cta, pdf_url, pdf_name } = t.come_arrivare;

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>

      <Header noMenu={true}/>
      <div className="grid lg:grid-cols-2 items-center justify-center px-2 max-w-5xl mx-auto py-24 lg:py-48">
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
          <h5 className="text-4xl font-semibold text-center text-gray-900">
            {title}
          </h5>

          <div className="w-full mx-auto">
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
    </>
  );
}
