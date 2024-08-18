import React, { ComponentPropsWithRef, PropsWithChildren } from 'react'
import { SortDown } from '../Icons'
import styles from './Button.module.scss'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  label: string;
  format: string;
  bgColor: string;
  width: string;
}

export const Button = ({
  label = "",
  onClick,
  className,
  type = "button",
  format,
  bgColor = '',
  width = '',
  ...rest
}: PropsWithChildren<ButtonProps>) => {

  const inlineStyle: React.CSSProperties = {
    [bgColor]: bgColor,
    [width]: width
  }

  const buttonType = 
    format === "delete" && "deleteStyle" ||
    format === "reset" && "resetStyle" ||
    format === "submit" && "buttonStyle" || "buttonStyle"

  return(
    <button 
      type={type} 
      onClick={onClick} 
      className={`${styles?.[buttonType]} ${className}`}
      style={inlineStyle}
      {...rest}>
        {label}
        {
          format == "dropdown" && <SortDown className={styles.dropdown}/>
        }
    </button>
  )
}

export default Button;