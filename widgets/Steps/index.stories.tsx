import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Steps } from '.';



export default {
  title: 'Blocks/HomePage/Steps',
  component: Steps,
} as ComponentMeta<typeof Steps>;

//
const Template: ComponentStory<typeof Steps> = () => <Steps />;

export const show = Template.bind({});
show.args = {
};