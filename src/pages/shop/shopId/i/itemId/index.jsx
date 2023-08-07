import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './Item.module.scss';

import { useDispatch } from "react-redux";
import { fetchItemPublicState } from "slices/userSlice";

import { ItemDisplaySection } from 'components/Organisms';



export const ShopItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { itemId } = useParams();
  const [ itemState, setItemState ] = useState({})
  useEffect(()=> {
    getItemData()
  },[])

  const getItemData = async() => {
    await dispatch(fetchItemPublicState(itemId))
      .then(res => setItemState(res))
  }

  // console.log('shopId-->: ', itemId)
  console.log('itemState-->: ', itemState)

  return itemState  === null ? <div>loading</div> : (
    <div>
      <h1>Item Page</h1>
      <ItemDisplaySection {...itemState}/>
    </div>
  )
}


// const mockData = {
//   "id": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
//   "shopName": "Wacho Shop",
//   "name": "dragon fire",
//   "images": [
//       {
//           "id": "febba186-4a58-4479-8159-17e01fb50a1c",
//           "name": "logo192.png",
//           "src": "https://res.cloudinary.com/paf1david/image/upload/c_scale,w_780,ar_1:1,c_fill/v1688997527/pafpay/drmygkceorxjojksmf5u.png",
//           "shopId": null,
//           "itemId": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
//           "__typename": "Images"
//       }
//   ],
//   "sizes": [
//       {
//           "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67",
//           "name": "Regular",
//           "price": "12.55",
//           "__typename": "Size"
//       }
//   ],
//   "ingrediances": "a slice of dragon fire",
//   "shopItemsId": "ac43b063-299a-4301-b1ed-918658c42d3a",
//   "orderItemsId": null,
//   "locationItemsId": null,
//   "__typename": "Item"
// }