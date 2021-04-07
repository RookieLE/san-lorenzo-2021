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
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col w-full mb-12 text-center'>
          <h2 className='title_section'>{title}</h2>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3'>{desc}</p>
        </div>
        <Form form={form} />
        {/*  {!simplified && <AdditionalInfo form={form} />} */}
      </div>
    </section>
  );
}
