import {createClient} from "@/prismicio";
import {PrismicImage, PrismicRichText} from "@prismicio/react";
import {PrismicNextLink} from "@prismicio/next";
import Link from "next/link";


export const BlogSection = async ({slice}: any) => {
    const client = createClient();
    const posts = await client.getAllByType("blogpost", {
        orderings: [
            // {field: "my.blog_post.publication_date", direction: "desc"},
            {field: "document.first_publication_date", direction: "desc"},
        ],
    });

    return (
        <section className="pb-[120px] pt-[120px]">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    {
                        posts.map((post: any, index: number) => (
                            <div key={post.id}>
                                <Link href={`/blog/${post.uid}`}>
                                    <div
                                        className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-gray-900 dark:hover:shadow-gray-dark">
                                        <div className="relative block aspect-[37/22] w-full overflow-hidden">
                                            <PrismicImage field={post.data.image} />
                                        </div>
                                        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                                            <h3 className="mb-4 block text-xl font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary sm:text-[22px]">
                                                { post.data.title }
                                            </h3>
                                            <div className="mb-6 border-b border-body-color/10 pb-6 text-base text-body-color dark:border-white/10 dark:text-neutral-100">
                                                <PrismicRichText field={post.data.paragraph}/>
                                            </div>
                                            {/*<div className="flex items-center">*/}
                                            {/*    <div*/}
                                            {/*        className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">*/}
                                            {/*        <div className="mr-4">*/}
                                            {/*            <div*/}
                                            {/*                className="relative h-10 w-10 overflow-hidden rounded-full">*/}
                                            {/*                <a*/}
                                            {/*                    href="/blogs/author/amrin">*/}
                                            {/*                    <img alt="Amrin" loading="lazy" decoding="async"*/}
                                            {/*                         data-nimg="fill" sizes="100vw"*/}
                                            {/*                         srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=3840&amp;q=75 3840w"*/}
                                            {/*                         src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftwjhlmkd%2Fproduction%2Fc4470595573783031b281a74e922f704b7dc9419-40x40.png&amp;w=3840&amp;q=75"*/}
                                            {/*                         className="absolute inset-0 object-cover w-full h-full rounded-full bg-transparent"*/}
                                            {/*                    /></a>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="w-full"><h4*/}
                                            {/*            className="mb-1 text-sm font-medium text-dark dark:text-white">*/}
                                            {/*            <a*/}
                                            {/*                href="/blogs/author/amrin">By Amrin</a></h4>*/}
                                            {/*            <div className="text-xs text-body-color"><p>Developer and*/}
                                            {/*                Content Writer</p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="inline-block"><h4*/}
                                            {/*        className="mb-1 text-sm font-medium text-dark dark:text-white">Date</h4>*/}
                                            {/*        <p*/}
                                            {/*            className="text-xs text-body-color dark:text-body-color-dark">Mar*/}
                                            {/*            02 2026</p></div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
