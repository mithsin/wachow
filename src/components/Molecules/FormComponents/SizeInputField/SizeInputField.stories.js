import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";

import { SizeInputField } from './index';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/FormComponents/SizeInputField',
  component: SizeInputField,
  tags: ['autodocs'],
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

  const initSize = {
    id: uuidv4(),
    name: "Regular", 
    price: "0"
  }

  const [itemSize, setItemSize] = useState([initSize]);

  return(
    <SizeInputField
      itemSize={itemSize}
      setItemSize={setItemSize} />
  )
}

export const Default = Template.bind({})
