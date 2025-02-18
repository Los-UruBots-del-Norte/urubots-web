"use client"
import { useEffect, useState } from 'react';
import TabComponent from "@/components/Tabs";
import {createClient} from "@/prismicio";
import {PrismicRichText} from "@prismicio/react";
import { useParams } from 'next/navigation'

export const AboutContent = ({slice}:any) => {
    const params = useParams()
    const {lang} = params
    const [tabsContent, setTabsContent] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const tabsContent = await client.getAllByType('tabs', { lang: '*' });
            const filteredTabs = tabsContent.filter((tab: any) => tab.lang == lang);
            const tabs = Object.keys(filteredTabs[0].data).map((key, index) => {
                // @ts-ignore
                const tab = filteredTabs[0].data[key];
                return {
                    id: index,
                    value: key,
                    title: key.toLocaleLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()),
                    content: tab
                };
            });
            setTabsContent(tabs);
        };

        fetchData();
    }, [lang]);


    if (!slice) {
        return null;
    }

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
                {tabsContent && <TabComponent tabs={tabsContent}/>}
            </div>
        </div>
    );
}
