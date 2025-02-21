import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { UpdateItemForm } from 'components/Organisms/Forms';
import styles from './Item.module.scss';
import { Button } from 'components/Atoms/Buttons'
import { useDispatch } from "react-redux";
import { fetchItemPublicState } from "@src/slices/userSlice";
import { Navigation } from "@src/components/Organisms/Navigation";
import { ItemDisplaySection } from 'components/Organisms';

export const ShopItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isItemModalOpen, setIsItemModalOpen] = useState(false)
  const { shopId, itemId } = useParams();
  
  const [ itemState, setItemState ] = useState({})
  
  useEffect(()=> {
    getItemData()
  },[])

  const getItemData = async() => {
    await dispatch(fetchItemPublicState(shopId, itemId))
      .then(res => setItemState(res))
  }

  return itemState  === null ? <div>loading</div> : (
    <div className={styles.shopItemWrapper}>
      <Navigation />
      <Button
          label="Update Item" 
          onClick={()=>setIsItemModalOpen(!isItemModalOpen)}/>
      <h1>Item Page</h1>
      <ItemDisplaySection {...itemState}/>
      {itemState && <UpdateItemForm
        setIsModalOpen={setIsItemModalOpen}
        isModalOpen={isItemModalOpen}
        userData={itemState}
      />}
    </div>
  )
}

