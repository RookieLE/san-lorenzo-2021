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
    <section class='text-gray-600 body-font relative' id='contact'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-12'>
          <h2 class='title_section'>{title}</h2>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>{desc}</p>
        </div>
        <Form form={form} />
        {!simplified && <AdditionalInfo form={form} />}
      </div>
    </section>
  );
}
