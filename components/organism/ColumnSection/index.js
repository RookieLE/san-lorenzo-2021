import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from 'components/atoms/Button';

export default function ColumnSection({
  data: { title, sub_title, text, cta, img },
  inverted,
  bgSmoke,
  ctaStyle,
  routerTo,
}) {
  const router = useRouter();
  const CTA = cta && (
    <div className='flex justify-center'>
      <Button
        text={cta}
        ctaStyle={ctaStyle}
        onClick={() => router.push(routerTo).then(() => window.scrollTo(0, 0))}
      />
    </div>
  );
  return (
    <section className={`text-gray-600 body-font ${bgSmoke && 'bg-gray-100'}`}>
      <div className='container mx-auto flex px-5 py-14 md:py-28 md:flex-row flex-col items-center justify-center max-w-screen-xl'>
        <div
          className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ${
            inverted && 'lg:order-last'
          }`}>
          <Image
            className='object-cover object-center rounded'
            objectFit='cover'
            alt={img.alt}
            src={img.url}
            width={700}
            height={475}
          />
        </div>
        <div
          className={`lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center  ${
            (inverted && 'md:pl-0 lg:pl-0  md:pr-16') || 'md:pl-16 lg:pl-24'
          }`}>
          <h1 className='title_section'>
            {title}
            <span className='block text-gray-700'>{sub_title}</span>
          </h1>

          <p className='mb-8 leading-relaxed max-w-prose'>{text}</p>
          {CTA}
        </div>
      </div>
    </section>
  );
}
