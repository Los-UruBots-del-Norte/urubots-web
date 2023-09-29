import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

type Story = StoryObj<typeof Header>;
export const Default: Story = {
  args: {
    locales: ['en-us', 'es-uy'],
    navigation: [
      {
        link: {
          url: '/',
          type: 'page',
        },
        label: 'Home',
      },
    ],
  },
};

export default meta;
