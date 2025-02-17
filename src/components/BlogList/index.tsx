import {SectionTitle} from "@/components/Common/SectionTitle";
import {SingleBlog} from "@/components/SingleBlog";
import {createClient} from "@/prismicio";

export const BlogList = async ({slice}: any) => {
    const client = createClient();
    const posts = await client.getAllByType("blogpost", {
        orderings: [
            {field: "document.first_publication_date", direction: "desc"},
        ],
    });
    console.log("BlogList slice", posts)
    return (
        <section id='blog' className='bg-primary/5 py-16 md:py-20 lg:py-28 dark:bg-gray-900'>
            <div className='container mx-auto'>
                <SectionTitle
                    title={slice.primary.title}
                    paragraph={slice.primary.subtitle}
                    center
                />

                <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3'>
                    {posts.slice(0, 3).map((item) => (
                        <div key={item.id} className='w-full'>
                            <SingleBlog blog={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
