import {PrismicImage, PrismicRichText} from "@prismicio/react";
import Link from "next/link";
import {PrismicNextLink} from "@prismicio/next";

export const Team = ({slice}: any) => {
    if (!slice || !slice.primary) {
        console.error("Invalid slice data", slice);
        return null;
    }
    return (
        <section className="pt-20 bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {slice.primary.title}
                    </h2>
                    <div className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        {slice.primary.subtitle}
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap justify-center">
                    {
                        slice.primary.members.map((member: any, index: number) => (
                            <div className="w-full px-4 md:w-1/2 lg:w-1/4" key={member.id}>
                                <div className="group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]">
                                    <div className="relative mb-8 aspect-[360/370] overflow-hidden rounded">
                                        <PrismicImage field={member.image} />
                                        <div
                                            className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="flex items-center justify-center space-x-3">
                                                <PrismicNextLink field={member.linkedin} aria-label="Linkedin"
                                                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                                                            fill="white"></path>
                                                    </svg>
                                                </PrismicNextLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl">
                                            {member.name}
                                        </h3>
                                        <p className="font-heading text-base text-black dark:text-white">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}
