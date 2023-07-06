'use client'
import { useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
// import { useRouter } from 'next/navigation'
import styles from './HeaderFooter.module.scss'

import { HeaderDropDown } from "components/Molecules/HeaderDropDown";

export const HeaderFooterTemplate = ({
  children
}) => {
//  const router = useRouter()
 const { user } = useAuthenticator((context) => [context.user]); 

 const [isEditOpen, setIsEditOpen] = useState(false)

 console.log('HeaderFooterTemplate-user------------> ', user)

 return (
    <div className={styles.fullWrap}>
        <div className={styles.headerWrapper}>
          <span 
            className={styles.logo} 
            // onClick={()=> router.push('/')}
            >
            <img src={`${process.env.NEXT_PUBLIC_LOGO}`} alt="WaChow Logo"/>
          </span>
          <span className={styles.headerRightBlock}>
            {!user 
              ? <a href="/s/login" className={styles['btn-signin']}>Sign in</a>
              : <HeaderDropDown setIsEditOpen={setIsEditOpen} isEditOpen={isEditOpen}/>
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
