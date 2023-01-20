import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';



export default {
  title: 'Blocks/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

//
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const show = Template.bind({});
show.args = {
};
