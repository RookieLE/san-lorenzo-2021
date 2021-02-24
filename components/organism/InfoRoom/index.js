export default function InfoRoom({
  t: {
    homepage: { infoRooms },
  },
}) {
  return (
    <>
      <section className='text-gray-600'>
        <section className='text-gray-600 max-w-screen-xl mx-auto'>
          <div className='container px-5 py-12 md:py24 mx-auto'>
            <div className='flex flex-wrap -m-4 text-center'>
              {infoRooms.features.map((el) => (
                <div className='p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center gap-1'>
                  {el.icon}
                  <p className='leading-relaxed capitalize'>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='container px-5 py-12 lg:py24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <ul className='lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside flex gap-2 flex-col'>
              {infoRooms.bulletList.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className='py-12 lg:py-24 flex flex-col text-center w-full mb-12  bg-gray-50'>
        <h4 className='font-medium text-4xl font-serif text-green-900 pb-5'>
          {infoRooms.additionalInfo.title}
        </h4>
        <div className='pb-6'>
          <h5 className='text-xl my-2 font-light text-gray-600'>
            {infoRooms.additionalInfo.arrivalDeparture.title}
          </h5>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside flex gap-2 flex-col text-gray-600'>
            {infoRooms.additionalInfo.arrivalDeparture.text}
          </p>
        </div>
        <div className='pb-6'>
          <h5 className='text-xl my-2 font-light text-gray-600'>
            {infoRooms.additionalInfo.towels.title}
          </h5>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside flex gap-2 flex-col text-gray-600'>
            {infoRooms.additionalInfo.arrivalDeparture.text}
          </p>
        </div>
      </div>
    </>
  );
}
