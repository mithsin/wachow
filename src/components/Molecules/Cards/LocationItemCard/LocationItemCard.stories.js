import { BrowserRouter } from 'react-router-dom'
import { LocationItemCard } from './index.jsx';
import { Provider } from 'react-redux';
import { store } from "store/store";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/Cards/LocationItemCard',
  component: LocationItemCard,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

const Template = (props) => {
  const userData = {
    "id": "78ef7e21-b6e9-4a77-b4f1-85261a444d4f",
    "shopName": "2200FirstShop",
    "name": "test",
    "ingredients": "pie",
    "createdAt": "2023-06-23T20:03:00.382Z",
    "updatedAt": "2023-06-23T20:03:00.382Z",
    "shopId": "shop-e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "owner": "e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "sizes": [{
      id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkj22",
      name: "small",
      price: "12.55",
    },{
      id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl",
      name: "medium",
      price: "14.55",
    },{
      id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl",
      name: "large",
      price: "16.55",
    }],
    "images": [{
      id: "image-id-ko2kjofkjsodfijio2ajsodkfjslfj2",
      name: "sea food fried rice",
      itemId: "item-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo1kds",
      src: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/gpqxcsio/346b0ca2-d43f-4b21-ae6d-004c51b6bc8e"
    },{
      id: "image-id-ko2kjofkjsodfijio2djsodkfjslfj2",
      name: "chicken food fried rice",
      itemId: "item-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo11",
      src: "https://urbanblisslife.com/wp-content/uploads/2021/06/Filipino-Pork-BBQ-FEATURE.jpg"
    },{
      id: "image-id-ko2kjofkjsodfijio2jbsodkfjslfj2",
      name: "house fried rice",
      src: "https://littlesunnykitchen.com/wp-content/uploads/2021/07/Grilled-BBQ-Chicken-Recipe-1.jpg"
    },{
      id: "image-id-ko2kjofkjsodfijio2jwsodkfjslfj2",
      name: "beef fried rice",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2M5z7bwh4MD222SynTaONmpFsLtMvdNwf3fi7Ki2BQ&usqp=CAU&ec=48665698"
    }]
}
  return(
    <BrowserRouter>
      <Provider store={store}>
        <LocationItemCard {...userData}/>
      </Provider>
    </BrowserRouter>
  )
}

export const Default = Template.bind({})