import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Step } from '.';



export default {
  title: 'Elements/Step',
  component: Step,
} as ComponentMeta<typeof Step>;

//
const Template: ComponentStory<typeof Step> = (args) => <Step {...args} />;

export const Left = Template.bind({});
Left.args = {
  text:'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  title:"Introduction to Front-End ",
  miniTitile:"Step 1",
  direction:"left"
};

export const Right = Template.bind({});
Right.args = {
  text:'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  title:"Overview of Development",
  miniTitile:"Step 2",
  direction:"right"
};
