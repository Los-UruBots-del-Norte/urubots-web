import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/components/Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
};

type Story = StoryObj<typeof Footer>;
export const Default: Story = {};

export default meta;
