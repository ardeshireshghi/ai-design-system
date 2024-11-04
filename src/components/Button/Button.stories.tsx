import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'danger', 'success'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};