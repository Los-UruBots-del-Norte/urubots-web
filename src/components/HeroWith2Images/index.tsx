import {SliceComponentProps} from "@prismicio/react";
import Image from "next/image";

export const HeroWith2Images = ({slice}: SliceComponentProps) => {
    return (
        <section id="home-2" className="relative z-10 overflow-hidden pt-[120px] pb-20 md:pb-24 md:pt-[150px] lg:pb-28 xl:pt-[180px] 2xl:pt-[210px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="mb-10 lg:mb-0"><h1
                            className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">A
                            Complete Next.js Starter Template for SaaS Startups </h1><p
                            className="mb-12 text-base !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">This
                            Next.js starter template is designed for SaaS startup websites, offering essential pages,
                            components, and integrations for modern startup websites. It includes key tech stacks such
                            as authentication, database, and payment integrations, as well as a fully functional blog
                            docs portal and much more.</p>
                            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <a className="rounded-sm bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                                   href="https://nextjstemplates.com/templates/saas-starter-startup">Download Now</a><a
                                className="inline-block rounded-sm bg-black py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                                href="https://github.com/NextJSTemplates/startup-nextjs">Star on GitHub</a></div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="text-center lg:text-right">
                            <div className="relative aspect-[550/500]">
                                <div className="absolute top-0 left-0 aspect-[318/445] w-[55%]">
                                    <Image alt="hero image"
                                         loading="lazy"
                                         decoding="async"
                                         data-nimg="fill"
                                         className="overflow-hidden rounded-sm object-cover object-center"
                                         sizes="100vw"
                                         // srcSet="/_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=3840&amp;q=75 3840w"
                                         src="/_next/image?url=%2Fimages%2Fhero-2%2Fimage-1.jpg&amp;w=3840&amp;q=75"
                                         // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"/>
                                    />

                                </div>
                                <div className="absolute right-0 bottom-0 aspect-[318/445] w-[55%]">
                                    <Image
                                        alt="hero image" loading="lazy" decoding="async" data-nimg="fill"
                                        className="overflow-hidden rounded-sm object-cover object-center" sizes="100vw"
                                        // srcSet="/_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=3840&amp;q=75 3840w"
                                        src="/_next/image?url=%2Fimages%2Fhero-2%2Fimage-2.jpg&amp;w=3840&amp;q=75"
                                        // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" />
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
