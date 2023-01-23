import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Gallery } from '.';



export default {
  title: 'Blocks/HomePage/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

//
const Template: ComponentStory<typeof Gallery> = () => <Gallery  />;

export const show = Template.bind({});
show.args = {
};