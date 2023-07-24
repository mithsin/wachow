import { useState } from 'react';
import styles from './ShopCard.module.scss';

import { useDispatch } from "react-redux";
import { setDeleteShopSlice } from "slices/userSlice";

import { Button } from 'components/Atoms/Buttons'
import { ItemCard } from 'components/Molecules/Cards/ItemCard';
import { NewItemForm } from 'components/Organisms/Forms/NewItemForm';

export const ShopCard = (props) => {
  // const dispatch = useDispatch();
  const [isItemModalOpen, setIsItemModalOpen] = useState(false)
  const {
    id, 
    shopName,
    description,
    items,
    isSellerPage
  } = props;
  // console.log('ShopCard-props-->: ', props)

  // const onClickDeleteShop = async() => {
  //   dispatch(setDeleteShopSlice(id))
  // }

  return(
    <div className={styles.shopCardWrap}>
      <h2>{shopName}</h2>
      {description && <p>{description}</p>}
      <div className={styles.buttonWrapper}>
        <Button
          label="Add New Item" 
          onClick={()=>setIsItemModalOpen(!isItemModalOpen)}/>
        {/* <Button 
          label="Delete Shop"
          format="delete"
          onClick={onClickDeleteShop}/> */}
      </div>
      <div className={styles.shopCardContainer}>
        {
          items?.items?.length > 0 
           ? items?.items?.map((item, i) =><ItemCard key={`${item.id}--${i}`} {...item} isSellerPage={isSellerPage}/>)
           : null
        }
      </div>

      <NewItemForm
        setIsModalOpen={setIsItemModalOpen}
        isModalOpen={isItemModalOpen}
        userData={props}
      />
      
    </div>
  );
}

export default ShopCard;

// {
//   "data": {
//     "getShop": {
//       "createdAt": "2023-06-22T17:33:40.103Z",
//       "email": null,
//       "id": "shop-e448c4b8-90d1-70fb-c3ce-6d03e7901524",
//       "description": null,
//       "owner": "e448c4b8-90d1-70fb-c3ce-6d03e7901524",
//       "phone": null,
//       "shopName": "2200FirstShop",
//       "items": {
//         "items": []
//       }
//     }
//   }
// }