import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Hero as HeroComponent } from '@/components/Hero';
import { HeroSlider } from '@/components/HeroSlider';
import { HeroVideo } from '@/components/HeroVideo';
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'default' && <HeroComponent />}
      {slice.variation === 'slider' && <HeroSlider />}
      {slice.variation === 'video' && <HeroVideo />}
    </section>
  );
};

export default Hero;
