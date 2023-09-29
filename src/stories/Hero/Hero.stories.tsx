import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '@/components/Hero';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Hero> = {
  title: 'Hero',
  component: Hero,
};

type Story = StoryObj<typeof Hero>;
export const Default: Story = {};

export default meta;
