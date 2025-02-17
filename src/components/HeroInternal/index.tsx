import Image from "next/image";
import {PrismicImage, PrismicRichText} from "@prismicio/react";

export const HeroInternal = ({slice}:any) => {
    if (!slice || !slice.primary) {
        console.error("Invalid slice data", slice);
        return null;
    }

    const {title, subtitle, image} = slice.primary;

    const generateText = (text = "URUBOTS") => {
        return (
            <strong
                className='block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
                {text}
            </strong>
        )
    }

    return (
        <section className='relative bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-transparent from-white/70 to-white/60 bg-gradient-to-r rtl:sm:bg-gradient-to-l'>
                <PrismicImage field={image} className='w-full h-full object-cover mix-blend-overlay absolute bg-transparent'/>
            </div>
            <div
                className='relative flex mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center'>
                <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
                    <h1 className='text-3xl font-extrabold sm:text-8xl drop-shadow-lg shadow-black'>
                        {title} {generateText()}
                    </h1>

                    <div className='mt-4 sm:text-4xl font-bold text-indigo-950'>
                        <PrismicRichText field={subtitle}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
