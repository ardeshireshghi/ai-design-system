
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'overline'],
      },
    },
    as: {
      control: {
        type: 'select',
        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
      },
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'body',
    children: 'This is a typography component',
  },
};