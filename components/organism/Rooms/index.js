import Room from "./Room";
import Button from "components/atoms/Button";
export default function Rooms({
  t: {
    rooms: { title, desc, rooms },
  },
}) {
  return (
    <section className="bg-gray-50">
      <div className="container px-5 py-12 lg:py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2 className="my-4 text-5xl text-center text-gray-900 lg:text-6xl font-heading sm:text-6xl">
            {title}
          </h2>
          {/* <p className="mx-auto leading-6 max-w-prose">{desc}</p> */}
          <p className="max-w-screen-lg text-lg text-gray-800 lg:mx-auto sm:leading-8">
            {desc}
          </p>
        </div>
        <div className="grid gap-8 mx-auto xl:grid-cols-3 place-content-center">
          {rooms.map((room, index) => (
            <Room room={room} index={index} key={index} />
          ))}
        </div>
        {/*  <div className='flex justify-center pt-12'>
          <Button text='View Rooms' ctaStyle='primary' />
        </div> */}
      </div>
    </section>
  );
}

/* flex flex-wrap -m-4 max-w-screen-lg mx-auto place-content-center md:gap-4 lg:gap-12' */
