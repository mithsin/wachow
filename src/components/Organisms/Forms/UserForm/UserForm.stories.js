import React from 'react';
import { UserForm } from './index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Organisms/Forms/UserForm',
  component: UserForm,
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

const mockData = {
    "id": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
    "firstName": "david",
    "lastName": "chen",
    "phone": "1231231234",
    "email": "test@wachow.com",
    "address": {
      "street": "4279 Perimeter park E",
      "city": "chamblee",
      "state": "Georgia",
      "zipCode": "30341",
    },
    "images": [
        {
            "id": "febba186-4a58-4479-8159-17e01fb50a1c",
            "itemId": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
            "name": "logo192.png",
            "shopId": null,
            "src": "https://res.cloudinary.com/paf1david/image/upload/c_scale,w_780,ar_1:1,c_fill/v1688997527/pafpay/drmygkceorxjojksmf5u.png"
        }
    ]
}

export default meta;
const Template = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  return(
    <UserForm 
      closeModal={setIsModalOpen}
      isModalOpen={isModalOpen}
      userData={mockData}
    />
  )
}

export const Default = Template.bind({})