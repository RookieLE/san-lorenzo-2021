export default function ImgCentral({ bgImage, textImage, bgSmoke, text, cta }) {
  return (
    <section className={`text-gray-600 ${bgSmoke && 'bg-gray-100'}`}>
      <div className='container mx-auto flex px-2 py-12 md:px-5 md:py-24 items-center justify-center flex-col'>
        <div className='relative'>
          <img
            className='w-full object-cover object-center rounded-md lg:h-96'
            alt='hero'
            src={bgImage}
          />
          <div
            className='absolute text-center bottom-1/4 left-2/4 text-white w-300px -ml-32'
            dangerouslySetInnerHTML={{ __html: textImage }}></div>
        </div>

        {text && (
          <div className='text-center lg:w-2/3 w-full'>
            <p className='mb-8 leading-relaxed'>{text}</p>
            {cta && (
              <div className='flex justify-center'>
                <button className='border-2 border-gray-600 inline-flex text-gray-700 bg-gray-100 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg'>
                  {cta}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
