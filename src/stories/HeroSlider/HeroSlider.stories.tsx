import type { Meta, StoryObj } from '@storybook/react';
import { HeroSlider } from '@/components/HeroSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HeroSlider> = {
  title: 'HeroSlider',
  component: HeroSlider,
};

type Story = StoryObj<typeof HeroSlider>;
export const Default: Story = {};

export default meta;
