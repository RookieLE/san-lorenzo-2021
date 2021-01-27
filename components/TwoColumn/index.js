import Agri from 'assets/home/agri.png';

export default function TwoColumn() {
  return (
    <section class='text-gray-600 body-font bg-gray-100'>
      <div class='container mx-auto flex px-5 py-14 md:pt-28 md:flex-row flex-col items-center'>
        <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img
            class='object-cover object-center rounded'
            alt='agriturismo'
            src={Agri}
          />
        </div>
        <div class='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 class='font-serif title-font sm:text-4xl text-3xl mb-4 font-bold text-green-800'>
            A hidden paradise
            <span class='block text-gray-700'>behind a mountain </span>
          </h1>
          <p class='mb-8 leading-relaxed max-w-prose'>
            Welcome in Persegno, a wonderful location surrounded by nature in
            the Alto Garda Bresciano natural park, at the foot of Mount
            Pizzocolo. Located at an altitude of 400 meters and situated at 7 km
            from Toscolano Maderno and from the shores of Lake Garda, the San
            Lorenzo Farm Holiday Accommodation offers a set of nice apartments
            in a quiet mountain area.
          </p>
          <div class='flex justify-center'>
            <button class='inline-flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg shadow hover:shadow-md'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
