import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Arrow } from '.';

export default {
  title: 'Elements/Arrow',
  component: Arrow,
} as ComponentMeta<typeof Arrow>;

//
const Template: ComponentStory<typeof Arrow> = (args) => <Arrow {...args} />;

export const Left = Template.bind({});
Left.args = {
    direction:"left"
};

export const Right = Template.bind({});
Right.args = {
    direction:"right"
};