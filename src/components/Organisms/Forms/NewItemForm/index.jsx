import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './NewItemForm.module.scss';

import { TextInput } from 'components/Atoms/Inputs';
import { Button } from 'components/Atoms/Buttons';
import { Modal } from 'components/Molecules/Modal';
import { SizeInputField } from 'components/Molecules/FormComponents';
import ImageUploader from 'components/Molecules/ImageUploader';

import { useDispatch } from "react-redux";
import { setAddItem } from "slices/userSlice";

export const NewItemForm = ({setIsModalOpen, isModalOpen, userData}) => {
  const initSize = {
    id: uuidv4(),
    name: "Regular", 
    price: ""
  }
  console.log('userData--> ', userData)
  const dispatch = useDispatch();
  const [itemInput, setItemInput] = useState({});
  const [itemSize, setItemSize] = useState([initSize]);
  const [imageListState, setImageListState] = useState(userData?.images)

  const formInputChange = (e) => {
    setItemInput({ 
      ...itemInput, 
      [e.target.name] : e.target.value
    })
  };

  const clearInputs = () => {
    setItemInput({})
    setItemSize([{
      id: uuidv4(),
      name: "Regular", 
      price: ""
    }])
  };

  const onClickCreateItem = async() => {
    const removeEmptySize = itemSize.filter(size => !!size.name)

    const inputConver = {
      id: uuidv4(),
      shopName: userData.shopName,
      shopItemsId: userData.id,
      name: itemInput?.name,
      description: itemInput?.description,
      images: imageListState,
      sizes: removeEmptySize
    }
    // console.log('inputConver-->: ', inputConver)
    dispatch(setAddItem(inputConver))
    setIsModalOpen(!isModalOpen)
    clearInputs()
  }

  const inputSettings = [
    {
      type: "text",
      name: "name", 
      label: "Item Name", 
      placeholder: "Item Name",
      value: itemInput.name || ''
    },{
      type: "text",
      name: "description", 
      label: "description", 
      placeholder: "description",
      value: itemInput.description || ''
    }
  ];

  return(
    <Modal
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      modalTitle="ITEM FORM">
      <div className={styles['outter-block']}> 
        <div className={styles['inner-block']}>
          <div className={styles['formWrapper']}>
        <ImageUploader 
            id={userData?.id}
            imageListState={imageListState}
            setImageListState={setImageListState}/>
            {
              inputSettings.map((inputSetting)=>
                <TextInput 
                  key={inputSetting.name} 
                  { ...inputSetting } 
                  onChange={ formInputChange } />
              )
            }
            <div className={styles['sizeWrapper']}>
              <SizeInputField
                itemSize={itemSize}
                setItemSize={setItemSize} />
            </div>
            
            <div className={styles['formButtonWrapper']}>
              <Button
                label="SUBMIT" 
                onClick={ onClickCreateItem } />
              <Button 
                format="reset"
                label="CLEAR" 
                onClick={ clearInputs }/>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default NewItemForm;

// const mockUserData = {
//   "id": "c13db49d-ae22-4258-9844-878083fdbf81",
//   "phone": "7894561320",
//   "email": null,
//   "description": null,
//   "shopName": "hbm shop",
//   "createdAt": "2023-07-12T15:13:37.736Z",
//   "updatedAt": "2023-07-12T15:13:37.736Z",
//   "userShopsId": "248894a8-b051-7069-879b-1e98700a5486",
//   "owner": "248894a8-b051-7069-879b-1e98700a5486",
//   "items": {
//       "items": [
//           {
//               "id": "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e",
//               "ingrediances": "meat and stuff",
//               "description": null,
//               "locationItemsId": null,
//               "name": "hamburger",
//               "orderItemsId": null,
//               "owner": "248894a8-b051-7069-879b-1e98700a5486",
//               "shopItemsId": "c13db49d-ae22-4258-9844-878083fdbf81",
//               "shopName": "hbm shop",
//               "sizes": [
//                   {
//                       "id": "c60930cb-1fa1-4eee-a857-72c5122bf8cb",
//                       "name": "Regular",
//                       "price": "17.55"
//                   }
//               ],
//               "images": [
//                   {
//                       "id": "7c601700-c46d-4b74-b91b-3131241ee1cc",
//                       "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                       "name": "image-f8894eb0-3c46-4884-a4eb-64c3921388d5",
//                       "shopId": null,
//                       "src": "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
//                   },
//                   {
//                       "id": "555007c7-c01e-44e1-9dc3-79e3bd56645e",
//                       "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                       "name": "image-d50c91e1-ddfe-4bcb-8519-9a624c3eb60d",
//                       "shopId": null,
//                       "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSvNZfQIV9FKVAuag9X_dWQfA95pdYQhosQPpnGL_39Br7Jv1Mp6JAIbHZAkYt8jMNlk"
//                   }
//               ]
//           }
//       ]
//   },
//   "isSellerPage": true
// }