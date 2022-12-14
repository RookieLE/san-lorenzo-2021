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
      className="transition bg-gray-50 rounded-md transform cursor-pointer py-6 lg:flex lg:justify-center hover:scale-105 group"
    >
      <div className="mx-6 lg:max-w-5xl">
        <div className={``}>
          <div className="lg:h-full">
            <Image
              className="w-full h-full rounded"
              alt={othersImages[0].alt}
              objectFit="cover"
              src={othersImages[0].url}
              width={600}
              height={400}
              lazy
            />
          </div>
        </div>

        <div className="grid max-w-xl py-2 lg:max-w-5xl">
          <h2 className="text-2xl text-left font-bold text-green-900 capitalize md:text-3xl">
            {name}
          </h2>
          <p className="flex place-items-center text-md font-normal text-gray-700 mt-1 font-sans">
            {" "}
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              {guest}
           
          </p>

          <button className="px-4 py-2 mt-8 place-content-center w-full flex rounded text-gray-800 transition-colors duration-200 transform bg-gray-100 capitalize hover:border-green-800 group-hover:border-green-800 group-hover:bg-green-800 group-hover:text-white hover:bg-green-800 hover:text-white">
            {viewMore}
          </button>
        </div>
      </div>
    </section>
  );
}
