import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Contact } from '.';



export default {
  title: 'Blocks/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>;

//
const Template: ComponentStory<typeof Contact> = () => <Contact  />;

export const Form = Template.bind({});
Form.args = {
};