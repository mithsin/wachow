import { useState } from 'react'
import { API } from 'aws-amplify';
import { updateUser } from 'graphql/mutations'
import styles from './UserForm.module.scss'

import { Button } from 'components/Atoms/Buttons'
import { TextInput } from 'components/Atoms/Inputs'
import ImageUploader from 'components/Molecules/ImageUploader'
import { Modal } from 'components/Molecules/Modal'
import { useDispatch } from "react-redux";
import { setUserInfo } from "slices/userSlice";

const inputObject = [
  {name: "firstName", label: "first name", type: "text"},
  {name: "lastName", label: "last name", type: "text"},
  {name: "phone", label: "phone", type: "text"},
  {name: "email", label: "email", type: "text"},
  {name: "images", label: "images", type: "text"},
]

const addressInputObject = [
  {"data-type": "address", name: "street", label: "street", type: "text"},
  {"data-type": "address", name: "city", label: "city", type: "text"},
  {"data-type": "address", name: "state", label: "state", type: "text"},
  {"data-type": "address", name: "zipCode", label: "zip code", type: "text"}
]

export const UserForm = ({closeModal, isModalOpen, userData}) => {
  const [inputState, setInputState] = useState({})
  // console.log('UserForm-userData--> ', userData)
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    if(e.target.getAttribute('data-type') === "address"){
      setInputState({
        ...inputState,
        address: {
          ...inputState.address,
          [e.target.name]: e.target.value
        }
      })
    } else {
      setInputState({
        ...inputState,
        [e.target.name]: e.target.value
      })
    }
  }

  const onItemChange = (obj) => {
    if( obj?.name === "state"){
      setInputState({
        ...inputState,
        address: {
          ...inputState.address,
          'state': obj.value
        }
      })
    }
    if( obj?.name === "images"){
      setInputState({
        ...inputState,
        'images': inputState?.images ? inputState?.images.concat(obj.value) : [obj.value]
      })
    }
  }

  const onClick = async() => {
    // const checkEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputState.email));
    // const checkPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(inputState.phone)
    
    await API.graphql({
      query: updateUser,
      variables: {input : {id: userData.id, ...inputState}}
    }).then(res => {
      // console.log('UserForm-res-->: ', res)
      dispatch(setUserInfo(res.data.updateUser))
    })
    .catch(err=> console.log('err-->: ', err));
  }

  return(
    <Modal
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      modalTitle="User Form">
      <div className={styles.userFormWrap}>
        <div className={styles.initInputWrap}>
          {
            inputObject.map(object =>
              object.name === "images"
              ? (
                <div className={styles.imageUploadBlock} key="image">
                  <p>add image</p>
                  <ImageUploader 
                    onImageChange={onItemChange}
                    // setImageURL={setImageURL}
                  />
                </div>
              )
              : <TextInput 
                  key={object.label}
                  label={object.label}
                  name={object.name}
                  type={object.type}
                  placeholder={userData[object.name]? userData[object.name] : inputState[object.name]}
                  onChange={onInputChange}
                />
            )
          }
        </div>
        <div className={styles.addresBlock}>
          <p className={styles.userFormTitle}>ADDRESS</p>
          <div className={styles.addresInputWrap}>
            {
              addressInputObject.map(object => 
                <TextInput 
                  {...object}
                  key={object.label}
                  name={object.name}
                  placeholder={userData?.['address']?.[object.name] ?? inputState?.['address']?.[object.name]}
                  onChange={onInputChange}
                />
              )
            }
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button 
            onClick={onClick}
            label="SUBMIT"
          />
        </div>
      </div>
    </Modal>
  )
}

export default UserForm;