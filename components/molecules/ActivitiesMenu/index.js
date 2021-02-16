import useLocale from 'hooks/useLocale';
import BeachIcon from 'assets/icons/beach.png';
import BikeIcon from 'assets/icons/bike.png';
import GolfIcon from 'assets/icons/golf.png';
import LakeIcon from 'assets/icons/lake.png';
import MountainIcon from 'assets/icons/mountain.png';
import RiverIcon from 'assets/icons/river.png';
import WellnessIcon from 'assets/icons/wellness.png';

export default function ActivitiesMenu({ state: { activity, setActivity } }) {
  const { t } = useLocale();
  const { activitiesList } = t.homepage.activities;

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4 text-center'>
          {activitiesList?.map(({ icon, name }) => {
            const isActive = activity === name;
            return (
              <div
                className='p-4 md:w-1/4 sm:w-1/2 w-full'
                onClick={() => setActivity(name)}>
                <div
                  className={`bg-gray-50 hover:shadow-md cursor-pointer p-4 rounded-lg h-full ${
                    isActive && 'shadow-md scale-102'
                  }`}>
                  <img
                    src={icon}
                    className={`text-indigo-500 w-8 mb-3 inline-block`}
                  />
                  <p className='leading-relaxed capitalize'>{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
