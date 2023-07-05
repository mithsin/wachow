'use client'

import { useRouter } from 'next/navigation'
import styles from './HeaderFooter.module.scss'

export const HeaderFooterTemplate = ({
  children
}) => {
 const router = useRouter()
  return (
    <div className={styles.fullWrap}>
        <div className={styles.headerWrapper}>
          <span className={styles.logo} onClick={()=> router.push('/')}>
            <img src={`${process.env.NEXT_PUBLIC_LOGO}`} alt="WaChow Logo"/>
          </span>
          <span className={styles.headerRightBlock}>
            Sign in
          </span>
        </div>


        <main className={styles.mainWrapper}>{children}</main>
        

        <div className={styles.FooterWrapper}>
          <h1>This is Footer</h1>
        </div>
    </div>
  )
}
