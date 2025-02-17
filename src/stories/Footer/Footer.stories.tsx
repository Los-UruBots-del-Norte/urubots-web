import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/components/Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
};

type Story = StoryObj<typeof Footer>;
const navigation = [
        {
            id: 1,
            title: 'Home',
            path: '/en-us',
            newTab: false,
        },
        {
            id: 2,
            title: 'About',
            path: '/en-us/about',
            newTab: false,
        },
        {
            id: 3,
            title: 'Blog',
            path: '/en-us/blog',
            newTab: false,
        },
        {
            id: 4,
            title: 'Awards',
            path: '/en-us/award',
            newTab: false,
        },
        {
            id: 5,
            title: 'Teams',
            newTab: false,
            submenu: [
                {
                    id: 41,
                    title: 'SSL',
                    path: '/en-us/teams/about',
                    newTab: false,
                },
                {
                    id: 42,
                    title: 'VSS',
                    path: '/en-us/teams/vss',
                    newTab: false,
                },
                {
                    id: 43,
                    title: 'UAV',
                    path: '/en-us/teams/blog',
                    newTab: false,
                },
                {
                    id: 44,
                    title: 'Autonomous Cars',
                    path: '/en-us/teams/auc',
                    newTab: false,
                },
            ],
        },
        {
            id: 6,
            title: 'URUCUP',
            newTab: false,
            submenu: [
                {
                    id: 51,
                    title: '2022',
                    path: '/en-us/urucup/2022',
                    newTab: false,
                },
            ],
        },
        {
            id: 7,
            title: 'Contact',
            path: '/en-us/contact',
            newTab: false,
        },
    ];

export const Default: Story = {
   args: {
    navigation: navigation,
   }

};

export default meta;
