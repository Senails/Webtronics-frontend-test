import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '.';



export default {
  title: 'Blocks/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

//
const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const show = Template.bind({});

