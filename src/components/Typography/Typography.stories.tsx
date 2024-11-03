
// Typography.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { 
      control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'] },
    },
    children: { control: 'text' },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'Heading 2',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
  children: 'This is body text.',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
  children: 'This is secondary body text.',
};