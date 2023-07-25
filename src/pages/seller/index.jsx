import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserState, userInfo, toggleUpdateTrigger } from "slices/userSlice";
import styles from './Seller.module.scss';

import { Button } from 'components/Atoms/Buttons'
import { NewShopForm } from 'components/Organisms/Forms/NewShopForm' 
import { ShopCard } from 'components/Molecules/Cards'

export const Seller = (props) => {
  const userState = useSelector(userInfo)
  const [ isNewShop, setIsNewShop ] = useState(false)

  console.log('Seller-userState--->: ', userState)
  const {
    firstName="",
    lastName="",
    shops
  } = userState
  return (
    <div>
      <h1>Seller page</h1>
      <h1>{firstName ?? ''} {lastName ?? ''}</h1>
      {shops?.items?.length > 0
        ? shops?.items?.map(shop => <ShopCard key={shop.id} {...shop} isSellerPage={true}/>)
        : <div className={styles.addShopButton}><Button onClick={()=>setIsNewShop(!isNewShop)} label="ADD SHOP"/></div>
      }
      {
        isNewShop && <NewShopForm setIsModalOpen={setIsNewShop} isModalOpen={isNewShop}/>
      }
    </div>
  )
}

export default Seller;

// const userStateMockData = {
//   "authState": false,
//   "email": "hsinbluemoon@gmail.com",
//   "id": "248894a8-b051-7069-879b-1e98700a5486",
//   "name": "",
//   "image": "",
//   "shops": {
//       "items": [
//           {
//               "id": "c13db49d-ae22-4258-9844-878083fdbf81",
//               "phone": "7894561320",
//               "email": null,
//               "description": null,
//               "shopName": "hbm shop",
//               "createdAt": "2023-07-12T15:13:37.736Z",
//               "updatedAt": "2023-07-12T15:13:37.736Z",
//               "userShopsId": "248894a8-b051-7069-879b-1e98700a5486",
//               "owner": "248894a8-b051-7069-879b-1e98700a5486",
//               "items": {
//                   "items": [
//                       {
//                           "id": "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e",
//                           "ingrediances": "meat and stuff",
//                           "description": null,
//                           "locationItemsId": null,
//                           "name": "hamburger",
//                           "orderItemsId": null,
//                           "owner": "248894a8-b051-7069-879b-1e98700a5486",
//                           "shopItemsId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                           "shopName": "hbm shop",
//                           "sizes": [
//                               {
//                                   "id": "c60930cb-1fa1-4eee-a857-72c5122bf8cb",
//                                   "name": "Regular",
//                                   "price": "17.55"
//                               }
//                           ],
//                           "images": [
//                               {
//                                   "id": "7c601700-c46d-4b74-b91b-3131241ee1cc",
//                                   "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                                   "name": "image-f8894eb0-3c46-4884-a4eb-64c3921388d5",
//                                   "shopId": null,
//                                   "src": "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
//                               },
//                               {
//                                   "id": "555007c7-c01e-44e1-9dc3-79e3bd56645e",
//                                   "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                                   "name": "image-d50c91e1-ddfe-4bcb-8519-9a624c3eb60d",
//                                   "shopId": null,
//                                   "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSvNZfQIV9FKVAuag9X_dWQfA95pdYQhosQPpnGL_39Br7Jv1Mp6JAIbHZAkYt8jMNlk"
//                               }
//                           ]
//                       }
//                   ]
//               }
//           }
//       ],
//       "nextToken": null
//   },
//   "createdDate": null,
//   "firstName": null,
//   "lastName": null,
//   "phone": null,
//   "isSeller": null,
//   "images": null,
//   "address": null,
//   "createdAt": "2023-07-12T15:13:10.918Z",
//   "updatedAt": "2023-07-12T15:13:10.918Z",
//   "owner": "248894a8-b051-7069-879b-1e98700a5486",
//   "updateTrigger": false
// }