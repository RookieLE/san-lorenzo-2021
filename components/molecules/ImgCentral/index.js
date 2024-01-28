import { BsBookHalf } from "react-icons/bs";

export default function ImgCentral({
  videoUrl,
  textImage,
  bgSmoke,
  cta,
  title,
  room,
  locale,
}) {
  const roomId =
    (room === "serenity" && "757948") ||
    (room === "armony" && "757958") ||
    (room === "joy" && "757956") ||
    (room === "silence" && "757954") ||
    (room === "freedom" && "757952");

  return (
    <section className={`text-gray-600 ${bgSmoke && "bg-gray-100"}`}>
      {/* <div className="flex place-content-end">
        <a
          href={`https://booking.hospitable.com/widget/external/${roomId}`}
          target="_blank"
          className="flex w-40 h-12 p-1 mt-8 transition bg-green-900 lg:mt-0 hover:bg-green-900/90 place-contente-center"
        >
          <div className="relative flex w-full text-white place-content-center place-items-center">
            <BsBookHalf className="mr-2 text-xl text-white transition transform group-hover:scale-125" />{" "}
          {locale === "en" && "Book Now" || "Prenota Ora"}
          </div>
        </a>
      </div> */}

      <div className="flex flex-col items-center justify-center px-2 py-12 mx-auto max-w-4xl md:px-5 md:py-24">
        {title && (
          <>
            <h4 className="text-4xl font-medium text-center text-green-900">
              {title}
            </h4>

            <div className="" dangerouslySetInnerHTML={{ __html: textImage }} />
          </>
        )}
        <div className="grid w-full rounded-none place-content-center videoWrapper">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        {cta && (
          <div className="w-full pt-8 text-center lg:w-2/3">
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-gray-700 bg-gray-100 border-2 border-gray-600 rounded focus:outline-none hover:bg-gray-600 hover:text-white">
                {cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
