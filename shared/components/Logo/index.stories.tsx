import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '.';



export default {
  title: 'Elements/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

//
const Template: ComponentStory<typeof Logo> = () => <Logo  />;

export const Show = Template.bind({});
Show.args = {
};
