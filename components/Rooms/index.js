import Room from './Room';

export default function Rooms() {
  const roomsArray = [
    {
      name: 'serenity',
      price: '70',
      img: 'https://dummyimage.com/600x360',
    },
    {
      name: 'freedom',
      price: '80',
      img: 'https://dummyimage.com/600x360',
    },
    {
      name: 'harmony',
      price: '50',
      img: 'https://dummyimage.com/600x360',
    },
    {
      name: 'joy',
      price: '80',
      img: 'https://dummyimage.com/600x360',
    },
  ];
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='title_section'>Rooms & Views</h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base max-w-prose'>
            At our Lodge, there is a variety of rooms to choose from. Whether
            you are a casual traveler or a person demanding luxury wherever you
            go, you won’t be disappointed.
          </p>
        </div>
        <div className='flex flex-wrap -m-4 max-w-screen-xl mx-auto'>
          {roomsArray.map((room) => (
            <Room room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
