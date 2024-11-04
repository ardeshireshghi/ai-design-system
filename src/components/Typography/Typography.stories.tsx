
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headline1: Story = {
  args: {
    variant: 'h1',
    children: 'Headline 1',
  },
};

export const Headline2: Story = {
  args: {
    variant: 'h2',
    children: 'Headline 2',
  },
};

export const Headline3: Story = {
  args: {
    variant: 'h3',
    children: 'Headline 3',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};