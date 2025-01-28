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
    categories,
    categoryList,
    isSellerPage
  } = props;

  const CategoryComponent = ({categoryArray}) => {
    return Object.entries(categoryArray).map(([key, value]) => {
          return <>
            <div key={key} className={styles.shopCardWrap}>
                <h1>{key}</h1>
                <div className={styles.shopCardContainer}>
                  {
                    value?.length > 0 
                      ? value?.map((item, i) => <ItemCard key={`${item.id}--${i}`} {...item} isSellerPage={isSellerPage}/>)
                      : null
                  }
                </div>
            </div>
          </>
      })

  }
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
      <div >
        {
          categories && <CategoryComponent categoryArray={categories} />
        }
      </div>

      <NewItemForm
        setIsModalOpen={setIsItemModalOpen}
        isModalOpen={isItemModalOpen}
        userData={{...props, shopId: id}}
      />
      
    </div>
  );
}

export default ShopCard;
