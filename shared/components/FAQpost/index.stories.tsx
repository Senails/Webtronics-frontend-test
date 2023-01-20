import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FAQpost } from '.';



export default {
  title: 'Elements/FAQpost',
  component: FAQpost,
} as ComponentMeta<typeof FAQpost>;

//
const Template: ComponentStory<typeof FAQpost> = (args) => <FAQpost {...args} />;

export const Open = Template.bind({});
Open.args = {
  text:"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  title:"What is the price?",
  openOnStart:true
};

export const Close = Template.bind({});
Close.args = {
  text:"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  title:"What is the price?",
  openOnStart:false
};