// Button.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};