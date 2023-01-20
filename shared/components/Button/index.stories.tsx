import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';



export default {
  title: 'Elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size:'small',
  label:'Start my career change',
  disabled:false,
};

export const Large = Template.bind({});
Large.args = {
  size:'large',
  label:'Send',
  disabled:false,
};