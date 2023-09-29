import first from '../../../public/images/first.jpeg';
export const HeroInternal = () => {
  return (
    <section className='relative bg-cover bg-center bg-no-repeat'>
      <img
        src={first.src}
        className='w-full h-full object-cover mix-blend-overlay absolute'
        alt='image'
      />
      <div className='absolute inset-0 bg-transparent from-white/95 to-white/45 bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='relative flex mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center'>
        <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
          <h1 className='text-3xl font-extrabold sm:text-8xl drop-shadow-lg shadow-black'>
            Somos
            <strong className='block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
              URUBOTS.
            </strong>
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl/relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'></div>
        </div>
      </div>
    </section>
  );
};