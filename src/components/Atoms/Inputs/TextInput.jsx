
import { useCallback } from "react";
import styles from './Inputs.module.scss';


export const TextInput = ({id, label, onChange, onChangeValue, value, fullWidth=false, ...props}) => {

  const handleChange = useCallback((e)=>{
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  },[onChange, onChangeValue])

  return(
    <div id={id} className={fullWidth ? styles.textInputWrapperFull : styles.textInputWrapper}>
      {
        label && <span className={styles.textInputLabel}>{label}</span>
      }
      <span className={styles.textInput}>
        <input 
          {...props}
          onChange={handleChange}
          value={value}
        />
      </span>
    </div>
  )
}

export default TextInput;