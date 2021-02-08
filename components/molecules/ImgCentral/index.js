import MountainImg from '@/assets/mountain.png';

export default function ImgCentral() {
  return (
    <section class='text-gray-600 bg-gray-100'>
      <div class='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <img
          class='w-4/5 mb-10 object-cover object-center rounded'
          alt='hero'
          src={MountainImg}
        />
        <div class='text-center lg:w-2/3 w-full'>
          <p class='mb-8 leading-relaxed'>
            Benvenuti in Persegno località immersa nella natura del parco Alto
            Garda Bresciano, ai piedi del Monte Pizzocolo. Situato a
            un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e
            dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone
            appartamenti in una tranquilla zona di montagna.
          </p>
          <div class='flex justify-center'>
            <button class='border-2 border-gray-600 inline-flex text-gray-700 bg-gray-100 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg'>
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
