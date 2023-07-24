import React from 'react';
import { UpdateItemForm } from './index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Organisms/Forms/UpdateItemForm',
  component: UpdateItemForm,
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
        id: "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e", 
        name: "hamburger", 
        ingrediances: "meat and stuff", 
        sizes: [
          {
            "id": "241b2bf9-f693-424c-b711-461bd3f91573",
            "name": "S",
            "price": "3.15"
          },
          {
              "id": "b06f970c-72b4-4bae-8635-44fe9692cd83",
              "name": "M",
              "price": "4.15"
          },
          {
              "id": "8f23bac9-a18c-4f3a-ae18-38c34a329566",
              "name": "L",
              "price": "6.15"
          }
        ]}
  return(
    <UpdateItemForm 
      closeModal={setIsModalOpen}
      isModalOpen={isModalOpen}
      userData={userData}
    />
  )
}

export const Default = Template.bind({})


// {
//   "id": "d41a219a-7b52-48d3-adc6-3b7480f308c4",
//   "shopName": "hbm shop",
//   "shopItemsId": "c13db49d-ae22-4258-9844-878083fdbf81",
//   "images": [],
//   "sizes": [
//       {
//           "id": "241b2bf9-f693-424c-b711-461bd3f91573",
//           "name": "S",
//           "price": "3.15"
//       },
//       {
//           "id": "b06f970c-72b4-4bae-8635-44fe9692cd83",
//           "name": "M",
//           "price": "4.15"
//       },
//       {
//           "id": "8f23bac9-a18c-4f3a-ae18-38c34a329566",
//           "name": "L",
//           "price": "6.15"
//       }
//   ]
// }