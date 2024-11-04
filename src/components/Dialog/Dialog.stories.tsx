src/stories/Dialog.stories.tsx
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Dialog from '../components/Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    title: 'Default Dialog',
    children: 'This is a dialog content area.',
    isOpen: true,
    size: 'md',
    variant: 'default',
  },
  argTypes: {
    onClose: { action: 'closed' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'radio', options: ['default', 'danger', 'success'] },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={() => {
          args.onClose();
          setIsOpen(false);
        }}
      />
    );
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger Dialog',
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    title: 'Success Dialog',
    variant: 'success',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={() => {
          args.onClose();
          setIsOpen(false);
        }}
      />
    );
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
};
```