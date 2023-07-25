import { useState } from 'react'
import { API } from 'aws-amplify';
import { updateUser } from 'graphql/mutations'
import styles from './UserForm.module.scss'

import { Button } from 'components/Atoms/Buttons'
import { TextInput } from 'components/Atoms/Inputs'
import ImageUploader from 'components/Molecules/ImageUploader'
import { Modal } from 'components/Molecules/Modal'
import { AddressInputField } from 'components/Molecules/FormComponents'
import { useDispatch } from "react-redux";
import { setUserInfo } from "slices/userSlice";

const inputObject = [
  {name: "firstName", label: "first name", type: "text"},
  {name: "lastName", label: "last name", type: "text"},
  {name: "phone", label: "phone", type: "text"},
  {name: "email", label: "email", type: "text"},
  {name: "images", label: "images", type: "text"},
]

export const UserForm = ({setIsModalOpen, isModalOpen, userData}) => {
  const [inputState, setInputState] = useState({})
  const [address, setAddress] = useState(userData?.address)
  const [imageListState, setImageListState] = useState(userData?.images)

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

  const onClick = async() => {
    // const checkEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputState.email));
    // const checkPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(inputState.phone)
    
    const consolidateInput = {
      ...inputState,
      id: userData.id,
      images: imageListState, 
      address
    }

    await API.graphql({
      query: updateUser,
      variables: {input : consolidateInput}
    }).then(res => {
      // console.log('UserForm-res-->: ', res)
      dispatch(setUserInfo(res.data.updateUser))
    })
    .catch(err=> console.log('err-->: ', err));
  }

  return(
    <Modal
      setIsModalOpen={setIsModalOpen}
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
                    id={userData?.id}
                    imageListState={imageListState}
                    setImageListState={setImageListState}/>
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
        <AddressInputField
          address={address}
          setAddress={setAddress}
        />
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