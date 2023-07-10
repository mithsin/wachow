import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchShopState } from "slices/userSlice";



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

  console.log('shopId-->: ', shopId)
  console.log('shopState->: ', shopState)

  

  return shopState === null ? <div>loading</div> : (
    <div>
      <h1>{shopState.shopName}</h1>

    </div>
  )
}
