import TabComponent from "@/components/Tabs";
import {createClient} from "@/prismicio";
import {PrismicRichText} from "@prismicio/react";

export const AboutContent = async ({slice}:any) => {
    const client = createClient();
    const tabsContent = await client.getSingle("tabs");

    if (!slice || !tabsContent) {
        return null;
    }

    const tabs = Object.keys(tabsContent.data).map((key, index) => {
        // @ts-ignore
        const tab = tabsContent.data[key];
        return {
            id: index,
            value: key,
            title: key.toLocaleLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()),
            content: tab
        };
    });

    return (
        <div className="relative bg-light dark:bg-dark dark:text-white">
            <div className="relative mx-12 pt-6 text-center md:mb-20 lg:pt-16">
                <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    {slice.primary.title}
                </h2>
                <div className="text-2xl text-dark-text mt-5">
                    <PrismicRichText field={slice.primary.subtitle}/>
                </div>
            </div>
            <div
                className=" relative z-10 overflow-hidden rounded px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
                <div
                    className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
                <TabComponent tabs={tabs}/>
            </div>
        </div>
    );
}
