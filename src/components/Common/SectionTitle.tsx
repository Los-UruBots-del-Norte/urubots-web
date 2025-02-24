import {PrismicRichText} from "@prismicio/react";
import {isFilled, RichTextField } from "@prismicio/client";

export const SectionTitle = ({
  title,
  paragraph,
  width = '570px',
  center,
  mb = '100px',
}: {
  title: string;
  paragraph: RichTextField;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full text-black dark:text-white ${center ? 'mx-auto text-center' : ''}`}
        data-wow-delay='.1s'
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className='mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]'>
          {title}
        </h2>
        <div className='text-base !leading-relaxed text-body-color md:text-lg'>
          {
            isFilled.richText(paragraph) && (
              <PrismicRichText field={paragraph} />
            )
          }
        </div>
      </div>
    </>
  );
};
