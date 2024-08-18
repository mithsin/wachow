import React from 'react';
import { TextInput } from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

const Template = (props) => {
  const [value, setValue] = React.useState('');
  
  return(
    <TextInput 
      {...props}
      onChangeValue={setValue}
      value={value}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: "Input Field"
}

