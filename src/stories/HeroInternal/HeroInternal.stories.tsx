import type { Meta, StoryObj } from '@storybook/react';
import { HeroInternal } from '@/components/HeroInternal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HeroInternal> = {
  title: 'HeroInternal',
  component: HeroInternal,
};

type Story = StoryObj<typeof HeroInternal>;
export const Default: Story = {};

export default meta;
