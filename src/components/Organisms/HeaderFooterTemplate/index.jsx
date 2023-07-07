import { useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "react-router-dom";
import styles from './HeaderFooter.module.scss'

import { HeaderDropDown } from "components/Molecules/HeaderDropDown";

export const HeaderFooterTemplate = ({
  children
}) => {
//  const router = useRouter()
 const { user } = useAuthenticator((context) => [context.user]); 

 const [isEditOpen, setIsEditOpen] = useState(false)


 return (
    <div className={styles.fullWrap}>
        <div className={styles.headerWrapper}>
          <span 
            className={styles.logo} 
            onClick={()=> redirect('/')}
            >
            <img src={`${process.env.REACT_APP_LOGO}`} alt="WaChow Logo"/>
          </span>
          <span className={styles.headerRightBlock}>
            {!user 
              ? <a href="/login" className={styles['btn-signin']}>Sign in</a>
              : 
              <div>already sign in</div>
              //<HeaderDropDown setIsEditOpen={setIsEditOpen} isEditOpen={isEditOpen}/>
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
