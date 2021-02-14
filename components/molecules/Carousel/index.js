import MountainRoomImg from '@/assets/rooms/mountain-room.jpg';
import HarmonyRoomImg from '@/assets/rooms/harmony.png';
import JoyRoomImg from '@/assets/rooms/joy.png';

export default function Carousel() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-10 px-2 md:px-10 justify-center max-w-screen-2xl mx-auto -mt-24 lg:-mt-10'>
      <img
        src={MountainRoomImg}
        className='w-full h-2/3 rounded-md object-cover place-self-end lg:place-self-center'
        alt=''
      />
      <img
        src={HarmonyRoomImg}
        className='w-full h-2/3 rounded-md object-cover place-self-end lg:place-self-center'
        alt=''
      />
      <img
        src={MountainRoomImg}
        className='w-full h-2/3 rounded-md object-cover lg:place-self-center'
        alt=''
      />
      <img
        src={JoyRoomImg}
        className='w-full h-2/3 rounded-md object-cover lg:place-self-center'
        alt=''
      />
    </div>
  );
}
