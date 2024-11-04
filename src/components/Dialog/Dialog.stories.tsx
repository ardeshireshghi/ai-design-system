
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
    variant: { 
      control: {
        type: 'select', 
        options: ['default', 'success', 'warning', 'danger'],
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Dialog> = {
  args: {
    isOpen: true,
    title: 'Default Dialog',
    children: <p>This is a default dialog.</p>,
    variant: 'default',
  },
};

export const Success: StoryObj<typeof Dialog> = {
  args: {
    isOpen: true,
    title: 'Success Dialog',
    children: <p>This is a success dialog.</p>,
    variant: 'success',
  },
};

export const Warning: StoryObj<typeof Dialog> = {
  args: {
    isOpen: true,
    title: 'Warning Dialog',
    children: <p>This is a warning dialog.</p>,
    variant: 'warning',
  },
};

export const Danger: StoryObj<typeof Dialog> = {
  args: {
    isOpen: true,
    title: 'Danger Dialog',
    children: <p>This is a danger dialog.</p>,
    variant: 'danger',
  },
};