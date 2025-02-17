import Image from "next/image";
import {SectionTitle} from "@/components/Common/SectionTitle";
import {SectionImageLeftProps} from "@/slices/SectionImageLeft";

export const ColumnImageLeft = ({ slice }: any) => {
    return (
        <section id="column-image-left" className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <Image
                                src="https://startup-pro.nextjstemplates.com/images/about/about-image-dark.svg"
                                alt="about image"
                                fill
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                            <SectionTitle
                                title="Crafted for Startup, SaaS and Business Sites."
                                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                                mb="44px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
