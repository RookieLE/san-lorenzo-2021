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
      <div className='container flex flex-col items-center justify-center max-w-screen-xl px-6 mx-auto py-14 md:py-20 md:flex-row'>
        <div
          className={`lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 ${
            inverted && 'md:order-last'
          }`}>
          <Image
            className='object-cover object-center rounded-lg'
            /*             alt={img.alt} */
            src={img}
            width={875}
            height={675}
            lazy
          />
        </div>
        <div
          className={`lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center  ${
            (inverted && 'md:pl-0 lg:pl-0 md:pr-16') || 'md:pl-16'
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
