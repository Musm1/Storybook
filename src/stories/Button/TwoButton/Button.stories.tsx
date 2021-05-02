import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { SecondaryButton, SecondryProps } from './SecondaryButton'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const TemplateSec: Story<SecondryProps> = (args) => <SecondaryButton {...args} />;

export const OptionButton = Template.bind({});
OptionButton.args = {
  selected: true,
  button_text: 'Option Button',
  loading: true,
  onClick: () => {
    alert('test option called')
  },
};

export const SecButton = TemplateSec.bind({});
SecButton.args = {
  button_text: 'Secondary Button',
  loading: true,
  onClick: () => {
    alert('test secondary called')
  },
};