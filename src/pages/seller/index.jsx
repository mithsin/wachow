import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserState, userInfo, toggleUpdateTrigger } from "slices/userSlice";
import styles from './Seller.module.scss';

import { Button } from 'components/Atoms/Buttons'
import { NewShopForm } from 'components/Molecules/Forms/NewShopForm' 
import { ShopCard } from 'components/Molecules/Cards'

export const Seller = (props) => {
  const userState = useSelector(userInfo)
  const [ isNewShop, setIsNewShop ] = useState(false)

  // console.log('Seller-userState--->: ', userState)
  const {
    firstName="",
    lastName="",
    shops
  } = userState
  return (
    <div>
      <h1>Seller page</h1>
      <h1>{firstName ?? ''} {lastName ?? ''}</h1>
      {shops?.items?.length > 0
        ? shops?.items?.map(shop => <ShopCard key={shop.id} {...shop}/>)
        : <div className={styles.addShopButton}><Button onClick={()=>setIsNewShop(!isNewShop)} label="ADD SHOP"/></div>
      }
      {
        isNewShop && <NewShopForm setIsModalOpen={setIsNewShop} isModalOpen={isNewShop}/>
      }
    </div>
  )
}

export default Seller;