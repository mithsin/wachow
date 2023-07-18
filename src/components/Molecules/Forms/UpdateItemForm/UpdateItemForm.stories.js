import React from 'react';
import { UpdateItemForm } from './index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "store/store";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/Forms/UpdateItemForm',
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
        sizes: [{
            id: "c60930cb-1fa1-4eee-a857-72c5122bf8cb", 
            name: "Regular", 
            price: "17.55"}
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
