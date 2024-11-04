
import type { Meta, StoryObj } from '@storybook/react';  
import Typography from './Typography';  

const meta: Meta<typeof Typography> = {  
  title: 'DesignSystem/Typography',  
  component: Typography,  
  tags: ['autodocs'],  
  argTypes: {  
    variant: {  
      control: {  
        type: 'select',  
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],  
      },  
    },  
    children: {  
      control: 'text',  
    },  
  },  
};  

export default meta;  

type Story = StoryObj<typeof Typography>;

export const Default: Story = {  
  args: {  
    variant: 'body1',  
    children: 'Example Text',  
  },  
};  

export const Headings: Story = {  
  render: () => (  
    <>  
      <Typography variant="h1">Heading 1</Typography>  
      <Typography variant="h2">Heading 2</Typography>  
      <Typography variant="h3">Heading 3</Typography>  
      <Typography variant="h4">Heading 4</Typography>  
      <Typography variant="h5">Heading 5</Typography>  
      <Typography variant="h6">Heading 6</Typography>  
    </>  
  ),
};  

export const Bodies: Story = {  
  render: () => (  
    <>  
      <Typography variant="body1">Body 1</Typography>  
      <Typography variant="body2">Body 2</Typography>  
    </>  
  ),  
};  

export const Others: Story = {  
  render: () => (  
    <>  
      <Typography variant="caption">Caption</Typography>  
      <Typography variant="overline">Overline</Typography>  
    </>  
  ),  
};  