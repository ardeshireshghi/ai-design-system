// Dialog.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Dialog',
  component: Dialog,
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'danger', 'success'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Close dialog'),
    title: 'Default Dialog',
    children: <p>This is a default dialog content.</p>,
    size: 'medium',
    variant: 'default',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    title: 'Danger Dialog',
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    title: 'Success Dialog',
    variant: 'success',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};
```