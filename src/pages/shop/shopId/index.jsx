import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchShopPublicState } from "@src/slices/userSlice";

import { ShopCard } from 'components/Molecules/Cards';
import styles from './Shop.module.scss'

export const Shop = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shopId } = useParams();
  const [ shopState, setShopState ] = useState({})
  useEffect(()=> {
    getShopData()
  },[])

  const getShopData = async() => {
    await dispatch(fetchShopPublicState(shopId))
      .then(res => setShopState(res))
  }

  return shopState === null ? <div>loading</div> : (
    <div className={styles.shopWrapper}>
      <h2>SHOP ID PAGE</h2>
      <h1>{shopState?.shopName}</h1>
      <ShopCard {...shopState} isSellerPage={false}/>
    </div>
  )
}