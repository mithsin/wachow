import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchShopState } from "slices/userSlice";



export const Shop = (props) => {
  const dispatch = useDispatch();
  const { shopId } = useParams();
  const [ shopState, setShopState ] = useState({})
  useEffect(()=> {
    dispatch(fetchShopState(shopId))
      .then(res => console.log('shop-res-->: ', res))
      .catch(error => console.log('shop-error-->: ', error))
  },[])

  console.log(props)
  console.log('shopId-->: ', shopId)

  

  return (
    <div>
      <h1>Shop page</h1>
    </div>
  )
}
