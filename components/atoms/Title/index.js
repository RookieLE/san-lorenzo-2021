export default function Title({ title, desc, cta, margin }) {
  return (
    <div className={`flex flex-col text-center w-full ${margin}`}>
      {title && (
        <h1 className='font-serif sm:text-6xl text-5xl mb-4 font-bold text-green-800'>
          {title}
        </h1>
      )}

      {desc && (
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base max-w-prose'>
          {desc}
        </p>
      )}

      {cta && (
        <div className='flex justify-center pt-5 md:pt-10'>
          <Button text={cta} ctaStyle='underline' />
        </div>
      )}
    </div>
  );
}
