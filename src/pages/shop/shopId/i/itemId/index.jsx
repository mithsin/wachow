import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchItemState } from "slices/userSlice";

import { ItemCard } from 'components/Molecules/Cards/ItemCard';


export const ShopItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { itemId } = useParams();
  const [ itemState, setItemState ] = useState({})
  useEffect(()=> {
    getItemData()
  },[])

  const getItemData = async() => {
    await dispatch(fetchItemState(itemId))
      .then(res => 
        res 
          ? setItemState(res)
          : navigate('/')
        )
  }

  // console.log('shopId-->: ', itemId)
  console.log('itemState-->: ', itemState)

  return (
    <div>
      <h1>Item Page</h1>
      <ItemCard {...itemState}/>
    </div>
  )
}


