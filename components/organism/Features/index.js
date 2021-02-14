import Feature from './feature';

export default function Features({
  t: {
    homepage: {
      features: { title, items },
    },
  },
}) {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='text-center mb-20'>
          <h2 class='title_section'>{title}</h2>
        </div>
        <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
          {items.map((item) => (
            <Feature name={item.name} text={item.text} icon={item.icon} />
          ))}
        </div>
        {/*  <div className='pt-14 hidden flex-wrap max-w-screen-xl mx-auto justify-center lg:flex'>
          <img src='https://dummyimage.com/400x360' />
          <img src='https://dummyimage.com/400x360' />
          <img src='https://dummyimage.com/400x360' />
        </div> */}
        {/*  <div className='hidden flex-wrap max-w-screen-xl mx-auto justify-center lg:flex'>
          <img src='https://dummyimage.com/600x360' />
          <img src='https://dummyimage.com/600x360' />
        </div> */}
      </div>
    </section>
  );
}
