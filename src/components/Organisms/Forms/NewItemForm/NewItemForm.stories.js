import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";

import { NewItemForm } from './index';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Organisms/Forms/NewItemForm',
  component: NewItemForm,
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
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const userData = {
    "id": "c13db49d-ae22-4258-9844-878083fdbf81",
    "phone": "7894561320",
    "email": null,
    "description": null,
    "shopName": "hbm shop",
    "createdAt": "2023-07-12T15:13:37.736Z",
    "updatedAt": "2023-07-12T15:13:37.736Z",
    "userShopsId": "248894a8-b051-7069-879b-1e98700a5486",
    "owner": "248894a8-b051-7069-879b-1e98700a5486",
    "items": {
        "items": [
            {
                "id": "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e",
                "ingredients": "meat and stuff",
                "description": null,
                "locationItemsId": null,
                "name": "hamburger",
                "orderItemsId": null,
                "owner": "248894a8-b051-7069-879b-1e98700a5486",
                "shopId": "c13db49d-ae22-4258-9844-878083fdbf81",
                "shopName": "hbm shop",
                "sizes": [
                    {
                        "id": "c60930cb-1fa1-4eee-a857-72c5122bf8cb",
                        "name": "Regular",
                        "price": "17.55"
                    }
                ],
                "images": [
                    {
                        "id": "7c601700-c46d-4b74-b91b-3131241ee1cc",
                        "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
                        "name": "image-f8894eb0-3c46-4884-a4eb-64c3921388d5",
                        "shopId": null,
                        "src": "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                    },
                    {
                        "id": "555007c7-c01e-44e1-9dc3-79e3bd56645e",
                        "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
                        "name": "image-d50c91e1-ddfe-4bcb-8519-9a624c3eb60d",
                        "shopId": null,
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSvNZfQIV9FKVAuag9X_dWQfA95pdYQhosQPpnGL_39Br7Jv1Mp6JAIbHZAkYt8jMNlk"
                    }
                ]
            }
        ]
    },
    "isSellerPage": true
  }
  return(
    <NewItemForm 
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      userData={userData}
    />
  )
}

export const Default = Template.bind({})
