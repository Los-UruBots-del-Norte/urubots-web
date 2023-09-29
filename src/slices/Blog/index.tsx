import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { SectionTitle } from '@/components/Common/SectionTitle';
import { SingleBlog } from '@/components/SingleBlog';
/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = ({ slice }: BlogProps): JSX.Element => {
  const blogData: [] = [
    {
      id: 1,
      title: 'Best UI components for modern websites',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
      image: '/images/blog/blog-01.jpg',
      author: {
        name: 'Samuyl Joshi',
        image: '/images/blog/author-01.png',
        designation: 'Graphic Designer',
      },
      tags: ['creative'],
      publishDate: '2025',
    },
    {
      id: 2,
      title: '9 simple ways to improve your design skills',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
      image: '/images/blog/blog-02.jpg',
      author: {
        name: 'Musharof Chy',
        image: '/images/blog/author-02.png',
        designation: 'Content Writer',
      },
      tags: ['computer'],
      publishDate: '2025',
    },
    {
      id: 3,
      title: 'Tips to quickly improve your coding speed.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
      image: '/images/blog/blog-03.jpg',
      author: {
        name: 'Lethium Deo',
        image: '/images/blog/author-03.png',
        designation: 'Graphic Designer',
      },
      tags: ['design'],
      publishDate: '2025',
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section id='blog' className='bg-primary/5 py-16 md:py-20 lg:py-28'>
        <div className='w-full'>
          <SectionTitle
            title='Our Latest Blogs'
            paragraph='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'
            center
          />

          <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3'>
            {blogData.map((blog) => (
              <div key={blog.id} className='w-full'>
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
