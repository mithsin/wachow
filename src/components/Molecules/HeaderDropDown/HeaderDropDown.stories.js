import React from 'react';
import { HeaderDropDown } from './index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/HeaderDropDown',
  component: HeaderDropDown,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    )
  ]
};

export default meta;


const Template = (props) => {

  return(
    <HeaderDropDown>
      <h1>
        this is storybook for header and footer
      </h1>
    </HeaderDropDown>
  )
}

export const Default = Template.bind({})
