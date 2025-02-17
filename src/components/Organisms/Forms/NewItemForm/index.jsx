import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './NewItemForm.module.scss';

import { TextInput } from 'components/Atoms/Inputs';
import { Button } from 'components/Atoms/Buttons';
import { Modal } from 'components/Molecules/Modal';
import { SizeInputField } from 'components/Molecules/FormComponents';
import ImageUploader from 'components/Molecules/ImageUploader';
import Dropdown from 'components/Molecules/Dropdown';

import { useDispatch } from "react-redux";
import { setAddItem } from "@src/slices/userSlice";

export const NewItemForm = ({setIsModalOpen, isModalOpen, userData}) => {
  const initSize = {
    id: uuidv4(),
    name: "Regular", 
    price: "",
    categoryName: "MAIN"
  }
  const dispatch = useDispatch();
  const [itemInput, setItemInput] = useState({});
  const [itemSize, setItemSize] = useState([initSize]);
  const [imageListState, setImageListState] = useState(userData?.images)
  const [selectedCategoryItem, setSelectedCategoryItem] = useState("")

  const formInputChange = (e) => {
    setItemInput({ 
      ...itemInput, 
      [e.target.name] : e.target.value
    })
  };

  const clearInputs = () => {
    setItemInput({})
    setItemSize([initSize])
  };

  const onClickCreateItem = async() => {
    const removeEmptySize = itemSize.filter(size => !!size.name)

    const inputConver = {
      shopName: userData.shopName,
      shopId: userData.shopId,
      owner: userData.owner,
      name: itemInput?.name,
      description: itemInput?.description,
      categoryName: itemInput?.addNewCategoryName?.toUpperCase() ?? selectedCategoryItem,
      images: imageListState,
      sizes: removeEmptySize,
    }
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
    },{
      type: "text",
      name: "ingrediances", 
      label: "ingrediances", 
      placeholder: "ingrediances",
      value: itemInput.ingrediances || ''
    }
  ];

  const dropdownSetting = {
    type: "dropdown",
    name: "categoryName", 
    label: "categoryName", 
    categoryList: userData.categoryList,
    placeholder: "main",
    value: itemInput.categoryName || ''
  }

  const dropdownInput = {
    type: "text",
    name: "addNewCategoryName", 
    label: "Add New Category Name", 
    placeholder: "Optional add new category name",
    value: itemInput.addNewCategoryName || ''
  }

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

            <div>
              <Dropdown 
                items={dropdownSetting?.categoryList} 
                onClick={setSelectedCategoryItem}
                dropdownInput={dropdownInput}
                formInputChange={formInputChange}
              />
            </div>
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
