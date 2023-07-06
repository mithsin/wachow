import { useState } from 'react';
import { Auth } from 'aws-amplify';
import styles from './HeaderDropDown.module.scss'
import { UserIcon } from "components/Atoms/Icons";

export const HeaderDropDown = ({setIsEditOpen, isEditOpen}) => {
  const [isDropDown, setIsDropDown] = useState(false)

  const handleSignout = async(e) => {
    e.preventDefault()
    try {
      await Auth.signOut();
      console.log('logout successfully')
      dropDownTrigger()
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const dropDownTrigger = () => setIsDropDown(!isDropDown);
  return(
    <div className={styles['userListWrap']}>
      <span onClick={dropDownTrigger}><UserIcon size="2x"/></span>
      { isDropDown &&
        <ul className={styles['ulWrap']}>
          <li>
            <a href="/seller" onClick={dropDownTrigger}>
              Seller page
            </a>
          </li>
          <li>
            <span onClick={()=>{
              setIsEditOpen(!isEditOpen)
              dropDownTrigger()
            }}>
              Edit profile
            </span>
          </li>
          <li>
            <span onClick={handleSignout}>
              Sign out
            </span>
          </li>
        </ul>
      }
    </div>

  )
}

export default HeaderDropDown