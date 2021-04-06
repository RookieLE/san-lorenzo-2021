import Feature from './feature';

export default function Features({
  t: {
    homepage: {
      features: { title, items },
    },
  },
}) {
  return (
    <section className='text-gray-600 bg-gray-100 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='mb-20 text-center'>
          <h2 className='title_section'>{title}</h2>
        </div>
        <div className='flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0'>
          {items.map((item) => (
            <Feature name={item.name} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
