// Dialog.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Default Dialog',
    size: 'medium',
    children: <p>This is a default dialog.</p>,
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: 'Small Dialog',
    size: 'small',
    children: <p>This is a small dialog.</p>,
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: 'Large Dialog',
    size: 'large',
    children: <p>This is a large dialog.</p>,
  },
};
```