import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './Item.module.scss';

import { useDispatch } from "react-redux";
import { fetchItemPublicState } from "@src/slices/userSlice";

import { ItemDisplaySection } from 'components/Organisms';

export const ShopItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div>
      <h1>Item Page</h1>
      <ItemDisplaySection {...itemState}/>
    </div>
  )
}