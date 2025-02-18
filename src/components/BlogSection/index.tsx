import {createClient} from "@/prismicio";
import {PrismicImage, PrismicRichText} from "@prismicio/react";
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
