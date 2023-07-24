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
    "ingrediances": "a slice of dragon fire",
    "locationItemsId": null,
    "name": "dragon fire",
    "orderItemsId": null,
    "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
    "shopItemsId": "ac43b063-299a-4301-b1ed-918658c42d3a",
    "shopName": "Wacho Shop",
    "sizes": [
        {
            "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67",
            "name": "Regular",
            "price": "12.55"
        }
    ],
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