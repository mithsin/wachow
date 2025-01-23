import { useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import styles from './HeaderFooter.module.scss'
import { fetchUserState, userInfo, toggleUpdateTrigger } from "@src/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";


export const HeaderFooterTemplate = ({
  children
}) => {
const navigate = useNavigate();
const userStateData = useSelector(userInfo)
const dispatch = useDispatch();

useEffect(()=> { 
  if(!userStateData?.isSeller) {
    console.log('dav, fetching mock data though user state dispatch')
    dispatch(fetchUserState('mock123'))
  };
},[])
return (
    <div className={styles.fullWrap}>
        <div className={styles.headerWrapper}>
          <span 
            className={styles.logo} 
            onClick={()=> navigate('/')}
            >
            <img src={`${import.meta.env.REACT_APP_LOGO}`} alt="WaChow Logo"/>
          </span>
          <span className={styles.headerRightBlock}>
            {
              userStateData.isSeller
                ? <p>Sign Out</p>
                : <Link to="/login" className={styles['btn-signin']}>Sign In</Link>
            }
            
          </span>
        </div>


        <main className={styles.mainWrapper}>{children}</main>
        

        <div className={styles.FooterWrapper}>
          <h1>This is Footer</h1>
        </div>
    </div>
  )
}
