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
    locales: [
      {
        lang: 'en',
        url: '/',
        lang_name: 'English',
      },
      {
        lang: 'es',
        url: '/',
        lang_name: 'Español',
      }
    ],
    navigation: [
      {
        id: 1,
        title: 'Home',
        path: '/',
        newTab: false,
        submenu: [],
      },
      {
        id: 2,
        title: 'About',
        path: '/about',
        newTab: false,
        submenu: [],
      },
        {
            id: 3,
            title: 'Blog',
          path: '/blog',
          newTab: false,
          submenu: [],
      },
    ],
  },
};

export default meta;
