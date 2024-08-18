import { BrowserRouter } from 'react-router-dom'
import { ItemDisplaySection } from './index.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Organisms/ItemDisplaySection',
  component: ItemDisplaySection,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
};
const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";
export default meta;

const Template = (props) => {
  const userData = {
    // check user like IDs for heart icon trigger
  }

  const itemData = {
    "id": "78ef7e21-b6e9-4a77-b4f1-85261a444d4f",
    "shopName": "2200FirstShop",
    "name": "test",
    "ingrediances": "pie",
    "createdAt": "2023-06-23T20:03:00.382Z",
    "updatedAt": "2023-06-23T20:03:00.382Z",
    "shopItemsId": "shop-e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "owner": "e448c4b8-90d1-70fb-c3ce-6d03e7901524",
    "sizes": [
      {
        "id": "241b2bf9-f693-424c-b711-461bd3f91573",
        "name": "Small",
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
    ],
    description: 'barbecue, an outdoor meal, usually a form of social entertainment, at which meats, fish, or fowl, along with vegetables, are roasted over a wood or charcoal fire. The term also denotes the grill or stone-lined pit for cooking such a meal, or the food itself, particularly the strips of meat.',
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
  return( <ItemDisplaySection {...itemData}/> )
}

export const Default = Template.bind({})