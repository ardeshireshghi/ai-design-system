// Button.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('Button clicked'),
  disabled: true,
};