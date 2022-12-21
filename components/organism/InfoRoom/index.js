export default function InfoRoom({ t }) {
  const {
    book_now,
    rooms: { infoRooms },
  } = t;

  return (
    <>
      <section className="text-gray-600 bg-gray-50">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col w-full my-12 text-center">
            <h4 className="pb-5 text-4xl font-medium text-gray-900">
              {infoRooms.bulletList.title}
            </h4>
            <div className="flex flex-col gap-2 mx-auto text-base leading-relaxed list-disc list-inside lg:w-2/3">
              {infoRooms.bulletList.list.map((el) => el + " ")}
            </div>
          </div>
        </div>

        <section className="max-w-screen-xl mx-auto text-gray-600">
          <div className="container px-5 py-2 mx-auto sm:py-6">
            <div className="flex flex-wrap text-center">
              {infoRooms.features.map((el) => (
                <div className="flex flex-col items-center justify-center w-1/2 gap-1 p-4 sm:w-1/4">
                  {el.icon}
                  <p className="leading-relaxed capitalize">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <div className="flex flex-col w-full py-12 mb-12 text-center lg:py-24">
        <h4 className="pb-5 text-4xl font-medium text-gray-900">
          {infoRooms.additionalInfo.title}
        </h4>
        <div className="pb-6">
          <h5 className="my-2 text-xl font-light text-gray-600">
            {infoRooms.additionalInfo.arrivalDeparture.title}
          </h5>
          <p className="flex flex-col gap-2 mx-auto text-base leading-relaxed text-gray-600 list-disc list-inside lg:w-2/3">
            {infoRooms.additionalInfo.arrivalDeparture.text}
          </p>
        </div>
        <div className="pb-6">
          <h5 className="my-2 text-xl font-light text-gray-600">
            {infoRooms.additionalInfo.towels.title}
          </h5>
          <p className="flex flex-col gap-2 mx-auto text-base leading-relaxed text-gray-600 list-disc list-inside lg:w-2/3">
            {infoRooms.additionalInfo.towels.text}
          </p>
        </div>
        <div className="pb-6">
          <h5 className="my-2 text-xl font-light text-gray-600">
            {infoRooms.additionalInfo.conditions.title}
          </h5>
          <p className="flex flex-col gap-2 mx-auto text-base leading-relaxed text-gray-600 list-disc list-inside lg:w-2/3">
            {infoRooms.additionalInfo.conditions.text}
          </p>
        </div>
      </div>

      {/* <a
        class="px-8 h-12 bottom-4 left-4 z-50 fixed flex place-content-center rounded place-items-center text-white font-semibold bg-green-900 hover:bg-green-800 capitalize"
        href={book_now.href}
        target="_blank"
      >
        {book_now.name}
      </a> */}
    </>
  );
}
