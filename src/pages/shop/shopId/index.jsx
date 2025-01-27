import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userInfo, userShops, fetchShopPublicState } from "@src/slices/userSlice";

import { ShopCard } from 'components/Molecules/Cards';
import styles from './Shop.module.scss'

export const Shop = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userShopsState = useSelector(userShops);
  const userInfoState = useSelector(userInfo);
  const { shopId } = useParams();
  const [ shopState, setShopState ] = useState({})

  useEffect(()=> {
    dispatch(fetchShopPublicState("fetchShopPublicState123"))
  },[shopId])
  
  useEffect(() => {
    if(userShopsState.length > 0 && shopId){
      setShopState(userShopsState.find((item) => item?.id === shopId))
    }

  },[userShopsState, shopId])

  return shopState === null ? <div>loading</div> : (
    <div className={styles.shopWrapper}>
      <h1>{shopState?.shopName}</h1>
      <ShopCard {...shopState} isSellerPage={false} id={shopId}/>
    </div>
  )
}