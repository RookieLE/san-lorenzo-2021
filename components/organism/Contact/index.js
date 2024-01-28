import Form from 'components/molecules/Form';
import AdditionalInfo from 'components/molecules/AdditionalInfo';
export default function Contact({
  t: {
    contact: { title, desc, form },
  },
  simplified,
}) {
  return (
    <section className='relative text-gray-600 body-font' id='contact'>
      <div className='container px-5 py-12 lg:py-24 mx-auto'>
        <div className='flex flex-col w-full mb-6 lg:mb-12 text-center max-w-3xl mx-auto'>
          <h2 className="my-4 text-5xl text-center text-gray-900 lg:text-6xl font-heading sm:text-6xl">{title}</h2>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3'>{desc}</p>
        </div>
        <Form form={form} />
        {/*  {!simplified && <AdditionalInfo form={form} />} */}
      </div>
    </section>
  );
}
