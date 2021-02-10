import MountainRoomImg from '@/assets/rooms/mountain-room.jpg';

export default function Carousel() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-10 px-2 md:px-10 justify-center max-w-screen-2xl mx-auto'>
      <img src={MountainRoomImg} className='w-full rounded-md' alt='' />
      <img src={MountainRoomImg} className='w-full rounded-md' alt='' />
      <img src={MountainRoomImg} className='w-full rounded-md' alt='' />
      <img src={MountainRoomImg} className='w-full rounded-md' alt='' />
    </div>
  );
}
