import type { Meta, StoryObj } from '@storybook/react';
import { HeroVideo } from '@/components/HeroVideo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HeroVideo> = {
  title: 'HeroVideo',
  component: HeroVideo,
};

type Story = StoryObj<typeof HeroVideo>;
export const Default: Story = {};

export default meta;
