import {SectionTitle} from "@/components/Common/SectionTitle";
import {PrismicImage} from "@prismicio/react";

export const ColumnImageLeft = ({slice}: any) => {
    return (
        <section id="column-image-left" className="py-16 md:py-20 lg:py-15">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <PrismicImage field={slice.image} className="mx-auto max-w-full lg:mr-0"/>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                            <SectionTitle
                                title={slice.title}
                                paragraph={slice.content}
                                mb="44px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
