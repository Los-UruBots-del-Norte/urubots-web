"use client";
import React, {useState} from 'react';
import Image from "next/image";
import {PrismicImage, PrismicRichText} from "@prismicio/react";

const ContentSection = ({image, leftContent = false, children}:any) => {
    return (
        <div
            className={`-mx-4 flex w-full flex-wrap items-center pt-[70px]` + (leftContent ? ' flex-row-reverse' : '')}>
            <div className="w-full px-4 lg:w-1/2">
                <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                    <div className="relative h-full">
                        <PrismicImage field={image} />
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
                <div className="lg:ml-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

const TabComponent = ({tabs}:any) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id);
    return (
        <div>
            <div className="tabButtons flex w-full items-center justify-around">
                {tabs.map((tab:any) => (
                    <button
                        key={tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 border-primary text-primary dark:border-primary hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary ${
                            selectedTab === tab.id
                                ? "border-primary text-primary border-blue-950 dark:border-blue-600"
                                : ""
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Contenido de las pestañas */}
            <div className="w-full">
                {selectedTab === 0 && (
                    <ContentSection
                        image={tabs[0].content[0].image}
                        leftContent={false}
                    >
                        <h2 className="mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
                            {tabs[0].content[0].title}
                        </h2>
                        <div className="mb-6 text-xl text-dark-text">
                            <PrismicRichText field={tabs[0].content[0].content}/>
                        </div>
                    </ContentSection>
                )}

                {selectedTab === 1 && (
                    <ContentSection
                        image={tabs[1].content[0].image}
                        leftContent={true}
                    >
                        <h2 className="mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
                            {tabs[1].content[0].title}
                        </h2>
                        <div className="mb-6 text-xl text-dark-text">
                            <PrismicRichText field={tabs[1].content[0].content}/>
                        </div>
                    </ContentSection>
                )}

                {selectedTab === 2 && (
                    <ContentSection
                        image={tabs[2].content[0].image}
                        leftContent={false}
                    >
                        <h2 className="mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
                            {tabs[2].content[0].title}
                        </h2>
                        <div className="mb-6 text-xl text-dark-text">
                            <PrismicRichText field={tabs[2].content[0].content}/>
                        </div>
                    </ContentSection>
                )}
            </div>
        </div>
    );
};

export default TabComponent;
