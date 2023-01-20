import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AboutUs } from '.';



export default {
  title: 'Blocks/HomePage/AboutUs',
  component: AboutUs,
} as ComponentMeta<typeof AboutUs>;

//
const Template: ComponentStory<typeof AboutUs> = (args) => <AboutUs {...args} />;

export const show = Template.bind({});
show.args = {
};