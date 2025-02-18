import type { Meta, StoryObj } from '@storybook/react';
import { BlogList } from '@/components/BlogList';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BlogList> = {
    title: 'BlogList',
    component: BlogList,
};

type Story = StoryObj<typeof BlogList>;


export const Default: Story = {
    args: {
        data: [
            {
                id: 1,
                title: 'Blog Title 1',
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                image: 'https://via.placeholder.com/300',
                date: '2021-12-12',
                author: "Sebastian",
                tags: ['tag1', 'tag2'],
                publishDate: '2021-12-12',
            },
            {
                id: 2,
                title: 'Blog Title 2',
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                image: 'https://via.placeholder.com/300',
                date: '2021-12-12',
                author: "Sebastian",
                tags: ['tag1', 'tag2'],
                publishDate: '2021-12-12',
            }]
    }
}

export default meta;
