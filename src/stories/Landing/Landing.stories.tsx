import type { Meta, StoryObj } from '@storybook/react';
import { Landing } from '@/components/Landing';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Landing> = {
  title: 'Landing',
  component: Landing,
};

type Story = StoryObj<typeof Landing>;
export const Default: Story = {
  args: {
    slice: {
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Landing',
            spans: [],
          },
        ],
        logo: {
          alt: 'Logo',
          dimensions: {
            width: 500,
            height: 300,
          },
          url: 'https://urubots.uy/_next/image?url=%2Furubots.jpeg&w=1080&q=75',
        },
        social_instagram: {
          url: 'https://www.instagram.com/',
        },
        social_youtube: {
          url: 'https://www.youtube.com/',
        },
        social_linkedin: {
          url: 'https://www.linkedin.com/',
        },
      },
    },
  },
};

export default meta;
