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
  const { activitiesList } = t.activities;

  return (
    <section className='grid max-w-screen-xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4 lg:pt-24 place-items-center lg:mx-auto'>
      {activitiesList?.map(({ icon, name }) => {
        const isActive = activity === name;
        return (
          <div
            className={`bg-gray-50 mx-8 p-4 w-32 h-32 lg:w-2/3 grid place-content-center place-items-center hover:bg-gray-100 cursor-pointer rounded-lg ${
              isActive && 'scale-102 bg-gray-200'
            }`}
            onClick={() => setActivity(name)}>
            <img src={icon} className={`w-8 mb-3 inline-block`} />
            <p className='leading-relaxed capitalize'>{name}</p>
          </div>
        );
      })}
    </section>
  );
}
