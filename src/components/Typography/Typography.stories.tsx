// Typography.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { control: 'select', options: ['h1', 'h2', 'h3', 'p', 'span'] },
    className: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<any> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'This is a Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'This is a Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  children: 'This is a Heading 3',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
  children: 'This is a paragraph text.',
};

export const Span = Template.bind({});
Span.args = {
  variant: 'span',
  children: 'This is a span text.',
};