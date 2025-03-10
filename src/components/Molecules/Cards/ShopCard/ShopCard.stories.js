import { BrowserRouter } from 'react-router-dom'
import { ShopCard } from './index.jsx';
import { Provider } from 'react-redux';
import { store } from "store/store";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/Cards/ShopCard',
  component: ShopCard,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

const Template = (props) => {
  const userData = {
    "id": "shop-e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "phone": null,
    "email": null,
    "description": null,
    "shopName": "2200FirstShop",
    "createdAt": "2023-06-22T17:33:40.103Z",
    "updatedAt": "2023-06-22T17:33:40.103Z",
    "userShopsId": "e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "owner": "e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "items": {
        "items": [
            {
                "id": "78ef7e21-b6e9-4a77-b4f1-85261a444d4f",
                "shopName": "2200FirstShop",
                "name": "test",
                "ingredients": "pie",
                "createdAt": "2023-06-23T20:03:00.382Z",
                "updatedAt": "2023-06-23T20:03:00.382Z",
                "shopId": "shop-e448c4b8-90d1-70fb-c3ce-6d03e7901524",
                "owner": "e448c4b8-90d1-70fb-c3ce-6d03e7901524"
            },
            {
                "id": "9d62dbb6-202a-4dbf-a9e1-9a55f345f32e",
                "shopName": "2200FirstShop",
                "name": "pie",
                "ingredients": "chart",
                "createdAt": "2023-06-23T20:18:33.816Z",
                "updatedAt": "2023-06-23T20:18:33.816Z",
                "shopId": "shop-e448c4b8-90d1-70fb-c3ce-6d03e7901524",
                "owner": "e448c4b8-90d1-70fb-c3ce-6d03e7901524"
            }
        ],
        "nextToken": null
    }
}
  return(
    <BrowserRouter>
      <Provider store={store}>
        <ShopCard {...userData}/>
      </Provider>
    </BrowserRouter>
  )
}

export const Default = Template.bind({})