import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import {HeroInternal} from "@/components/HeroInternal";

/**
 * Props for `InternalHero`.
 */
export type InternalHeroProps = SliceComponentProps<Content.InternalHeroSlice>;

/**
 * Component for "InternalHero" Slices.
 */
const InternalHero = ({ slice }: InternalHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroInternal />
    </section>
  );
};

export default InternalHero;
