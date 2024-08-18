import { useState, PropsWithChildren, ChangeEvent } from 'react'
import styles from './Toggle.module.scss'

type ToggleProps = {
  labelOn?: string;
  labelOff?: string;
  onClick: ()=>void;
};

export const Toggle = ({
  labelOn,
  labelOff,
  onClick
}: PropsWithChildren<ToggleProps>) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onClick()
  }
  return(
    <label className={styles.labelStyle}>
      <span>{checked ? labelOff : labelOn}</span>
      <input 
        className={styles.inputStyle} 
        checked={checked} 
        type="checkbox" 
        onChange={handleChange} />
      <div className={checked ? styles.switchOnStyle : styles.switchStyle} />
    </label>
  )
}

export default Toggle;