import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Programs } from '.';



export default {
  title: 'Blocks/HomePage/Programs',
  component: Programs,
} as ComponentMeta<typeof Programs>;

//
const Template: ComponentStory<typeof Programs> = () => <Programs />;

export const show = Template.bind({});
show.args = {
};