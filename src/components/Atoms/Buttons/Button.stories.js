import React from 'react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;


export const Default = {
  args: {
    primary: true,
    label: 'Button',
    onClick: () => console.log('click trigger')
  },
};

export const Delete = {
  args: {
    format: "delete",
    label: 'Button',
    onClick: () => console.log('click trigger')
  },
};

export const Reset = {
  args: {
    type: "reset",
    format: "reset",
    label: 'Button',
    onClick: () => console.log('click trigger')
  },
};

export const DropDown = {
  args: {
    format: "dropdown",
    label: 'Drop Down',
    onClick: () => console.log('click trigger')
  },
};
