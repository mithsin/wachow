import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";

import { AddressInputField } from './index';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/FormComponents/AddressInputField',
  component: AddressInputField,
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
  const addressInit = {
    "street": "4279 Perimeter park E",
    "city": "chamblee",
    "state": "Georgia",
    "zipCode": "30341",
  }

  const [address, setAddress] = useState(addressInit);

  return(
    <AddressInputField
      address={address}
      setAddress={setAddress} />
  )
}

export const Default = Template.bind({})
