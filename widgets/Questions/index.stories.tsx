import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Questions } from '.';



export default {
  title: 'Blocks/HomePage/Questions',
  component: Questions,
} as ComponentMeta<typeof Questions>;

//
const Template: ComponentStory<typeof Questions> = () => <Questions />;

export const show = Template.bind({});
show.args = {
};