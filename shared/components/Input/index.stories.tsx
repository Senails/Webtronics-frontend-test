import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';


export default {
  title: 'Elements/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

//
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  placholder:'Name',
  disabled:false
};

export const Error = Template.bind({});
Error.args = {
  placholder:'Name',
  error:'error',
  disabled:false
};

export const Disabled = Template.bind({});
Disabled.args = {
  placholder:'Name',
  disabled:true
};
