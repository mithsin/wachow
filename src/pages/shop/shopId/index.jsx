import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchShopState } from "slices/userSlice";

import { ShopCard } from 'components/Molecules/Cards'


export const Shop = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shopId } = useParams();
  const [ shopState, setShopState ] = useState({})
  useEffect(()=> {
    getShopData()
  },[])

  const getShopData = async() => {
    await dispatch(fetchShopState(shopId))
      .then(res => 
        res 
          ? setShopState(res)
          : navigate('/')
        )
  }

  // console.log('shopId-->: ', shopId)
  // console.log('shopState->: ', shopState)

  

  return shopState === null ? <div>loading</div> : (
    <div>
      <h1>{shopState.shopName}</h1>
      <ShopCard {...shopState} isSellerPage={false}/>
    </div>
  )
}


// const mockData = {
//   "id": "ac43b063-299a-4301-b1ed-918658c42d3a",
//   "parantId": {
//       "id": "8458d4f8-1031-707d-4dab-602361fe05f2",
//       "shops": {
//           "nextToken": null,
//           "__typename": "ModelShopConnection"
//       },
//       "createdDate": null,
//       "firstName": "Hsin",
//       "lastName": "Chen",
//       "phone": "1234567890",
//       "email": "paf2200@gmail.com",
//       "isSeller": null,
//       "images": null,
//       "address": {
//           "street": "4279 Perimeter park E",
//           "city": "chamblee",
//           "state": "Georgia",
//           "zipCode": "30341",
//           "__typename": "Address"
//       },
//       "createdAt": "2023-07-07T23:19:30.862Z",
//       "updatedAt": "2023-07-08T11:13:57.330Z",
//       "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
//       "__typename": "User"
//   },
//   "phone": "1231231234",
//   "email": null,
//   "description": null,
//   "shopName": "Wacho Shop",
//   "pickUpLocation": null,
//   "images": null,
//   "menu": null,
//   "items": {
//       "items": [
//           {
//               "id": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
//               "shopName": "Wacho Shop",
//               "name": "dragon fire",
//               "ingrediances": "a slice of dragon fire",
//               "createdAt": "2023-07-10T13:59:06.046Z",
//               "updatedAt": "2023-07-10T13:59:06.046Z",
//               "shopItemsId": "ac43b063-299a-4301-b1ed-918658c42d3a",
//               "orderItemsId": null,
//               "locationItemsId": null,
//               "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
//               "__typename": "Item"
//           },
//           {
//               "id": "c65f35c8-46c6-4c1b-b91f-152408fb22b1",
//               "shopName": "Wacho Shop",
//               "name": "test3",
//               "ingrediances": "test3 ingrediances",
//               "createdAt": "2023-07-11T14:35:50.849Z",
//               "updatedAt": "2023-07-11T16:43:42.371Z",
//               "shopItemsId": "ac43b063-299a-4301-b1ed-918658c42d3a",
//               "orderItemsId": null,
//               "locationItemsId": null,
//               "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
//               "__typename": "Item"
//           }
//       ],
//       "nextToken": null,
//       "__typename": "ModelItemConnection"
//   },
//   "createdAt": "2023-07-10T13:53:27.495Z",
//   "updatedAt": "2023-07-10T13:53:27.495Z",
//   "userShopsId": "8458d4f8-1031-707d-4dab-602361fe05f2",
//   "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
//   "__typename": "Shop"
// }