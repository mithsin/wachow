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

  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState('');
  const [imageInfo, setImageInfo] = useState();
  const [itemInput, setItemInput] = useState({});
  const [itemSize, setItemSize] = useState([initSize]);


  useEffect(()=>{
      if(imageURL){
          const newImage = {
              id: uuidv4(), 
              itemId: userData?.shopItemsId ?? null, 
              name: imageInfo?.value ? imageInfo?.value : `image-${uuidv4()}`, 
              src: imageURL
          }
          setItemInput({
              ...itemInput,
              images: itemInput?.images ? itemInput.images.concat([newImage]) : [newImage]
          })
      }
  },[imageURL])

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
      setImageURL('')
      setImageInfo({
          name: "images",
          value: ""
      })
  };

  const onClickCreateItem = async() => {
      const newId = uuidv4();
      const addItemIdIntoImage = itemInput?.images 
          ? itemInput?.images.map(image => {
              return {...image, itemId: newId}
          }) 
          : [];

      const removeEmptySize = itemSize.filter(size => !!size.name)

      const inputConver = {
          id: newId,
          shopName: userData.shopName,
          shopItemsId: userData.id,
          name: itemInput?.name,
          description: itemInput?.description,
          images: addItemIdIntoImage,
          sizes: removeEmptySize
      }
    //   console.log('inputConver-->: ', inputConver)
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
                        setImageURL={setImageURL}
                        setImageInfo={setImageInfo}
                        inputState={itemInput}
                        setInputState={setItemInput}/>
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
                                onClick={ onClickCreateItem }
                            />
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

