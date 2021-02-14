import BeachIcon from 'assets/icons/beach.png';
import BikeIcon from 'assets/icons/bike.png';
import GolfIcon from 'assets/icons/golf.png';
import LakeIcon from 'assets/icons/lake.png';
import MountainIcon from 'assets/icons/mountain.png';
import RiverIcon from 'assets/icons/river.png';
import WellnessIcon from 'assets/icons/wellness.png';

export default function ActivitiesMenu({ state: { activity, setActivity } }) {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-wrap -m-4 text-center'>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              class={`bg-gray-50 hover:shadow-md cursor-pointer px-4 py-6 rounded-lg ${
                activity === 'mountain' && 'shadow-md'
              }`}>
              <img
                src={MountainIcon}
                class='text-indigo-500 w-8 h-8 mb-3 inline-block'
              />
              <p class='leading-relaxed'>Mountain</p>
            </div>
          </div>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div class='bg-gray-50 hover:shadow-md cursor-pointer px-4 py-6 rounded-lg'>
              <img
                src={WellnessIcon}
                class='text-indigo-500 w-8 h-8 mb-3 inline-block'
              />
              <p class='leading-relaxed'>Wellness</p>
            </div>
          </div>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div class='bg-gray-50 hover:shadow-md cursor-pointer px-4 py-6 rounded-lg'>
              <img
                src={BeachIcon}
                class='text-indigo-500 w-8 h-8 mb-3 inline-block'
              />
              <p class='leading-relaxed'>Bike</p>
            </div>
          </div>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div class='bg-gray-50 hover:shadow-md cursor-pointer px-4 py-6 rounded-lg'>
              <img
                src={BikeIcon}
                class='text-indigo-500 w-12 h-8 mb-3 inline-block'
              />
              <p class='leading-relaxed'>Beach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
