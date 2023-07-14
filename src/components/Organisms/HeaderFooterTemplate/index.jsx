import { useState, useEffect } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate , Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserState, userInfo, toggleUpdateTrigger } from "slices/userSlice";
import styles from './HeaderFooter.module.scss'

import { HeaderDropDown } from "components/Molecules/HeaderDropDown";
import UserForm from "components/Molecules/Forms/UserForm";


export const HeaderFooterTemplate = ({
  children
}) => {
//  const router = useRouter()
 const { user } = useAuthenticator((context) => [context.user]); 
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const userState = useSelector(userInfo)
 const isUpdated = useSelector(toggleUpdateTrigger)

 const [isEditOpen, setIsEditOpen] = useState(false)
// console.log('HeaderFooterTemplate-userState-->: ', userState)

useEffect(()=>{
  // console.log('HeaderFooterTemplate-user-->: ', user)
  // console.log('HeaderFooterTemplate-user.username-->: ', user?.username)
  // console.log('useEffect-isUpdated---> ', isUpdated)
  if(isUpdated){
    // console.log('fetch info')
    dispatch(fetchUserState(user.username))
  }
},[isUpdated])


 return (
    <div className={styles.fullWrap}>
        <div className={styles.headerWrapper}>
          <span 
            className={styles.logo} 
            onClick={()=> navigate('/')}
            >
            <img src={`${process.env.REACT_APP_LOGO}`} alt="WaChow Logo"/>
          </span>
          <span className={styles.headerRightBlock}>
            {!user 
              ? <Link to="/login" className={styles['btn-signin']}>Sign in</Link>
              : <HeaderDropDown setIsEditOpen={setIsEditOpen} isEditOpen={isEditOpen}/>
            } 
          </span>
        </div>


        <main className={styles.mainWrapper}>{children}</main>
        

        <div className={styles.FooterWrapper}>
          <h1>This is Footer</h1>
        </div>
        {isEditOpen && 
          <UserForm 
            setIsModalOpen={setIsEditOpen} 
            isModalOpen={isEditOpen}
            userData={userState}
          />}
    </div>
  )
}
