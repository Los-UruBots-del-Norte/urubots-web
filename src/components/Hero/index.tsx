import {PrismicNextLink} from "@prismicio/next";
import {PrismicImage, PrismicRichText} from "@prismicio/react";
import {isFilled} from "@prismicio/client";

export const Hero = ({slice}: any) => {
  if (!slice || !slice.primary) {
    console.error("Invalid slice data", slice);
    return null;
  }

  const generateText = (text = "URUBOTS") => {
    return (
        <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
          {text}
        </span>
    )
  }
  const {title, subtitle, image, button} = slice.primary;

  return (
    <>
      <section
        id='hero'
        className='relative z-10 overflow-hidden pt-20 md:pt-40 pb-16 md:pb-[120px] xl:pb-[160px] 2xl:pb-[200px] dark:bg-gray-900'
      >
        <div className='bg-white relative pt-10 pb-10 md:pt-20 md:pb-20 lg:pt-20 dark:bg-gray-900'>
          <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
            <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white'>
              {title} {generateText()}
            </h1>
            <div className='lg:flex'>
              <div className='relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
                <div className='sm:text-3xl text-gray-700 dark:text-gray-300 lg:w-11/12'>
                  {isFilled.richText(subtitle) && (
                      <PrismicRichText field={subtitle} />
                  )}
                </div>
                <div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
                  <PrismicNextLink field={button}
                    className='rounded-full bg-blue-900 dark:bg-blue-500 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-blue-500 dark:hover:bg-blue-900'
                  >
                    {button.text}
                  </PrismicNextLink>
                </div>
              </div>
              <div className='mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12 top-[-120px] overflow-x-visible'>
                <div className='relative w-full'>
                  <div
                    aria-hidden='true'
                    className='absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl'
                  />
                  <PrismicImage field={image} className='relative w-full'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
