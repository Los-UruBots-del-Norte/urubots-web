import Image from "next/image";
import {SectionTitle} from "@/components/Common/SectionTitle";

export const ColumnImageRight = ({ slice }: any) => {
    return (
        <section id="column-image-left" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                title="Crafted for Startup, SaaS and Business Sites."
                                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                                mb="44px"
                            />
                        </div>

                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                                data-wow-delay=".2s"
                            >
                                <Image
                                    src="https://startup-pro.nextjstemplates.com/images/about/about-image-dark.svg"
                                    alt="about-image"
                                    fill
                                    className="mx-auto max-w-full lg:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
