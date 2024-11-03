// Dialog.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: Story = (args) => <Dialog {...args}>This is dialog content.</Dialog>;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Dialog',
  isOpen: true,
};