import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'warning', 'error'],
    },
  },
} as Meta<typeof Dialog>;

const Template: Story<React.ComponentProps<typeof Dialog>> = (args) => (
  <Dialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Default Dialog',
  children: 'This is a default dialog',
  onClose: () => alert('Closing Dialog'),
  variant: 'default',
};

export const Info = Template.bind({});
Info.args = {
  isOpen: true,
  title: 'Info Dialog',
  children: 'This is an informational dialog',
  onClose: () => alert('Closing Dialog'),
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  isOpen: true,
  title: 'Warning Dialog',
  children: 'This is a warning dialog',
  onClose: () => alert('Closing Dialog'),
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  isOpen: true,
  title: 'Error Dialog',
  children: 'This is an error dialog',
  onClose: () => alert('Closing Dialog'),
  variant: 'error',
};