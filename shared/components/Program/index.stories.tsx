import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Program } from '.';



export default {
  title: 'Elements/Program',
  component: Program,
} as ComponentMeta<typeof Program>;

//
const Template: ComponentStory<typeof Program> = (args) => <Program {...args} />;

export const Angular = Template.bind({});
Angular.args = {
  image:'./angular.png',
  name:"Angular",
};

export const Vue = Template.bind({});
Vue.args = {
  image:'./vue.png',
  name:"Vue",
};

export const Reactjs = Template.bind({});
Reactjs.args = {
  image:'./react.png',
  name:"React",
};

export const Js = Template.bind({});
Js.args = {
  image:'./js.png',
  name:"JavaScript",
};

