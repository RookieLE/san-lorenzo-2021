import { useRouter } from "next/router";
import Image from "next/image";

export default function Room({
  room: { name, othersImages, price, alt, text, guest, viewMore },
  index,
}) {
  const router = useRouter();
  return (
    <section
      onClick={() =>
        router
          .push({ pathname: "/appartamenti", query: { room: name } })
          .then(() => window.scrollTo(0, 0))
      }
      className="transition transform cursor-pointer lg:py-12 lg:flex lg:justify-center rounded-2xl hover:scale-105 group"
    >
      <div className="rounded-lg lg:mx-8 lg:max-w-5xl">
        <div className={``}>
          <div className="rounded-lg lg:h-full">
            <Image
              className="w-full h-full rounded-lg"
              alt={othersImages[0].alt}
              objectFit="cover"
              src={othersImages[0].url}
              width={600}
              height={400}
              lazy
            />
          </div>
        </div>

        <div className="flex max-w-xl px-6 py-2 lg:max-w-5xl place-content-between place-items-center">
          <h2 className="font-serif text-2xl font-bold text-green-900 capitalize md:text-3xl">
            {name}
            <span className="grid text-xl font-normal text-gray-500">
              {guest}
            </span>
          </h2>

          <button className="px-5 py-2 font-semibold text-gray-700 transition-colors duration-200 transform border-2 border-gray-700 group-hover:bg-gray-700 group-hover:text-gray-100 rounded-xl hover:bg-gray-700 hover:text-gray-100">
            {viewMore}
          </button>
        </div>
      </div>
    </section>
  );
}
