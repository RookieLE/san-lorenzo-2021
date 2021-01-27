import Agri from 'assets/home/agri.png';

export default function Agriturismo() {
  return (
    <section className='text-gray-600 body-font bg-gray-100'>
      <div className='container mx-auto flex px-5 py-14 md:py-28 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img
            className='object-cover object-center rounded'
            alt='agriturismo'
            src={Agri}
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title_section'>
            A hidden paradise
            <span className='block text-gray-700'>behind a mountain </span>
          </h1>
          <p className='mb-8 leading-relaxed max-w-prose'>
            Welcome in Persegno, a wonderful location surrounded by nature in
            the Alto Garda Bresciano natural park, at the foot of Mount
            Pizzocolo. Located at an altitude of 400 meters and situated at 7 km
            from Toscolano Maderno and from the shores of Lake Garda, the San
            Lorenzo Farm Holiday Accommodation offers a set of nice apartments
            in a quiet mountain area.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg shadow hover:shadow-md'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
