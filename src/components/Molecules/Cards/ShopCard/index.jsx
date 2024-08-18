import { useState } from 'react';
import styles from './ShopCard.module.scss';

import { useDispatch } from "react-redux";
import { setDeleteShopSlice } from "@src/slices/userSlice";

import { Button } from 'components/Atoms/Buttons'
import { ItemCard } from 'components/Molecules/Cards/ItemCard';
import { NewItemForm } from 'components/Organisms/Forms';

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
