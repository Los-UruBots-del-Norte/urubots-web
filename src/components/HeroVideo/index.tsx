import {VideoPlayer} from "@/components/VideoEmbed";

export const HeroVideo = ({slice}:any) => {
    const generateText = (text = "URUBOTS") => {
        return (
            <strong className='block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
                URUBOTS
            </strong>
        )
    }
  return (
    <section className='relative bg-cover bg-center bg-no-repeat'>
        <VideoPlayer src={slice.primary.video.url} />
      <div className='absolute inset-0 bg-transparent bg-gradient-to-r from-blue-700 via-blue-30 to-white/40 rtl:bg-gradient-to-l'></div>

      <div className='relative flex mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center'>
        <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
          <h1 className='text-3xl font-extrabold sm:text-8xl drop-shadow-lg shadow-black'>
              {slice.primary.title} {generateText()}
          </h1>

          {/*<p className='mt-4 max-w-lg sm:text-6xl text-gray-300 '>*/}
          {/*    {slice.primary.subtitle}*/}
          {/*</p>*/}

          <div className='mt-8 flex flex-wrap gap-4 text-center'></div>
        </div>
      </div>
    </section>
  );
};
