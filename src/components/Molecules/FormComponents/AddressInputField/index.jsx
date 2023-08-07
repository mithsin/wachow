import styles from './AddressInputField.module.scss';

import { TextInput } from 'components/Atoms/Inputs';

export const AddressInputField = ({address, setAddress}) => {
  const addressInputObject = [
    {"data-type": "address", name: "street", label: "street", type: "text"},
    {"data-type": "address", name: "city", label: "city", type: "text"},
    {"data-type": "address", name: "state", label: "state", type: "text"},
    {"data-type": "address", name: "zipCode", label: "zip code", type: "text"}
  ]

  const onInputChange = (e) => {
    const updateAddress = {
      ...address,
      [e.target.name]: e.target.value
    }

    setAddress(updateAddress)
  }

  return (
    <div className={styles.addresBlock}>
      <p className={styles.userFormTitle}>ADDRESS</p>
      <div className={styles.addresInputWrap}>
        {
          addressInputObject.map(object => 
            <TextInput 
              {...object}
              key={object.label}
              name={object.name}
              placeholder={address?.[object.name] }
              onChange={onInputChange}
            />
          )
        }
      </div>
    </div>
  )

  
}
