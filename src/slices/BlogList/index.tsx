import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {BlogSection} from "@/components/BlogSection";

/**
 * Props for `BlogList`.
 */
export type BlogListProps = SliceComponentProps<Content.BlogListSlice>;

/**
 * Component for "BlogList" Slices.
 */
const BlogList: FC<BlogListProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <BlogSection slice={slice}/>
      </div>
    </section>
  );
};

export default BlogList;
