import { useNavigate , Link } from "react-router-dom";
import styles from './HeaderFooter.module.scss'

export const HeaderFooterTemplate = ({
  children
}) => {
const navigate = useNavigate();

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
            <Link to="/login" className={styles['btn-signin']}>Sign in</Link>
          </span>
        </div>


        <main className={styles.mainWrapper}>{children}</main>
        

        <div className={styles.FooterWrapper}>
          <h1>This is Footer</h1>
        </div>
    </div>
  )
}
