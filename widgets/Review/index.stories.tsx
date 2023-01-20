import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Revie } from '.';



export default {
  title: 'Blocks/HomePage/Review',
  component: Revie,
} as ComponentMeta<typeof Revie>;

//
const Template: ComponentStory<typeof Revie> = (args) => <Revie {...args} />;

export const show = Template.bind({});
show.args = {
};