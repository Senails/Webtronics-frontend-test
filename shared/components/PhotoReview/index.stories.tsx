import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Photo } from '.';



export default {
  title: 'Elements/Photo',
  component: Photo,
} as ComponentMeta<typeof Photo>;

//
const Template: ComponentStory<typeof Photo> = (args) => <Photo {...args} />;

export const Small = Template.bind({});
Small.args = {
    size:"small",
    src:'./previePhotos/man1.jpg',
    transition:true,
    hide:false,
};

export const Large = Template.bind({});
Large.args = {
    size:"large",
    src:'./previePhotos/man1.jpg',
    transition:true,
    hide:false,
};
