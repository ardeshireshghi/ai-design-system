// Dialog.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dialog, { DialogProps } from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    onClose: { action: 'closed' }
  }
} as Meta;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Dialog Title',
  children: 'This is the content of the dialog.',
};

export const NotOpen = Template.bind({});
NotOpen.args = {
  isOpen: false,
  title: 'Dialog Title',
  children: 'This is the content of the dialog.',
};