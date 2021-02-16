import Form from 'components/molecules/Form';
import AdditionalInfo from 'components/molecules/AdditionalInfo';
export default function Contact({
  t: {
    homepage: {
      contact: { title, desc, form },
    },
  },
  simplified,
}) {
  return (
    <section className='text-gray-600 body-font relative' id='contact'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h2 className='title_section'>{title}</h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>{desc}</p>
        </div>
        <Form form={form} />
        {!simplified && <AdditionalInfo form={form} />}
      </div>
    </section>
  );
}
