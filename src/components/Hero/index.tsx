import Link from 'next/link';
import nao from '../../../public/images/nao.png';

export const Hero = () => {
  const generateText = (text = "URUBOTS") => {
    return (
        <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
          {text}
        </span>
    )
  }

  return (
    <>
      <section
        id='hero'
        className='relative z-10 overflow-hidden pt-20 md:pt-40 pb-16 md:pb-[120px] xl:pb-[160px] 2xl:pb-[200px] dark:bg-gray-900'
      >
        <div className='bg-white relative pt-10 pb-10 md:pt-20 md:pb-20 lg:pt-20 dark:bg-gray-900'>
          <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
            <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white'>
              Somos{' '} {generateText()}.
            </h1>
            <div className='lg:flex'>
              <div className='relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
                <p className='sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12'>
                  DailyBot takes chat and collaboration to the next level: daily
                  standups, team check-ins, surveys, kudos, best companion bot
                  for your virtual watercooler, 1:1 intros, motivation tracking
                  and more.
                </p>
                <div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
                  <Link
                    href='/'
                    className='rounded-full bg-blue-900 dark:bg-blue-500 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-blue-500 dark:hover:bg-blue-900'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className='mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12 top-[-120px] overflow-x-visible'>
                <div className='relative w-full'>
                  <div
                    aria-hidden='true'
                    className='absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl'
                  />
                  <img
                    src={nao.src}
                    className='relative w-full'
                    alt='wath illustration'
                    loading='lazy'
                    width='320'
                    height='280'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
