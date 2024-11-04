import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  args: {
    variant: 'body',
    children: 'Sample text',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Typography> = {
  args: {
    variant: 'body',
    children: 'Sample body text',
  },
};

export const Headings: StoryObj<typeof Typography> = {
  render: (args) => (
    <div className="space-y-4">
      <Typography {...args} variant="h1">Heading 1</Typography>
      <Typography {...args} variant="h2">Heading 2</Typography>
      <Typography {...args} variant="h3">Heading 3</Typography>
      <Typography {...args} variant="h4">Heading 4</Typography>
      <Typography {...args} variant="h5">Heading 5</Typography>
      <Typography {...args} variant="h6">Heading 6</Typography>
    </div>
  ),
  args: {
    children: '',
  },
};

export const Caption: StoryObj<typeof Typography> = {
  args: {
    variant: 'caption',
    children: 'This is a caption text',
  },
};