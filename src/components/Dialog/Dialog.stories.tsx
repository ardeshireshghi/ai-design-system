import { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogProps } from './Dialog';

const meta: Meta<DialogProps> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['default', 'danger', 'info'],
      },
    },
    onClose: { action: 'closed' },
  },
};

export default meta;

export const Default: StoryObj<DialogProps> = {
  args: {
    isOpen: true,
    title: 'Default Dialog',
    variant: 'default',
    children: <p>This is a default dialog.</p>,
  },
};

export const Danger: StoryObj<DialogProps> = {
  args: {
    isOpen: true,
    title: 'Danger Dialog',
    variant: 'danger',
    children: <p>This is a danger dialog.</p>,
  },
};

export const Info: StoryObj<DialogProps> = {
  args: {
    isOpen: true,
    title: 'Info Dialog',
    variant: 'info',
    children: <p>This is an info dialog.</p>,
  },
};