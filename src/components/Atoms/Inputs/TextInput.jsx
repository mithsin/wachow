
import { useCallback } from "react";
import styles from './Inputs.module.scss';


export const TextInput = ({id, label, onChange, onChangeValue, value, wrapperType='regular', ...props}) => {

  const handleChange = useCallback((e)=>{
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  },[onChange, onChangeValue])

  const wrapperClass = {
    fullWidth: styles.textInputWrapperFull,
    regular: styles.textInputWrapper,
    regularNoMargin: styles.textInputWrapperNoMargin
  }

  return(
    <div id={id} className={wrapperClass[wrapperType]}>
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