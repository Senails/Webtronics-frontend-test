import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mentor } from '.';



export default {
  title: 'Elements/Mentor',
  component: Mentor,
} as ComponentMeta<typeof Mentor>;

//
const Template: ComponentStory<typeof Mentor> = (args) => <Mentor {...args} />;

export const Card = Template.bind({});
Card.args = {
  image:'./photos/photo3.jpg',
  name:"Robert Fox",
  job:"Front-end engineers work closely with designers",
};
