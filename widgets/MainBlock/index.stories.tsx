import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainBlock } from '.';



export default {
  title: 'Blocks/HomePage/MainBlock',
  component: MainBlock,
} as ComponentMeta<typeof MainBlock>;

//
const Template: ComponentStory<typeof MainBlock> = (args) => <MainBlock {...args} />;

export const show = Template.bind({});
show.args = {
};