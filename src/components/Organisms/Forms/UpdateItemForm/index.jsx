import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './UpdateItemForm.module.scss';

import { TextInput } from 'components/Atoms/Inputs';
import { Button } from 'components/Atoms/Buttons';
import { Modal } from 'components/Molecules/Modal';
import { SizeInputField } from 'components/Molecules/FormComponents';
import ImageUploader from 'components/Molecules/ImageUploader';
import Dropdown from 'components/Molecules/Dropdown';

import { useDispatch } from "react-redux";
import { setUpdateItem } from "@src/slices/userSlice";

export const UpdateItemForm = ({setIsModalOpen, isModalOpen, userData}) => {
  const dispatch = useDispatch();
  const [itemInput, setItemInput] = useState({});
  const [itemSize, setItemSize] = useState([]);
  const [imageListState, setImageListState] = useState([])
  const [selectedCategoryItem, setSelectedCategoryItem] = useState("")

  useEffect(() => {
    setItemInput(userData)
    setItemSize(userData?.sizes)
    setImageListState(userData?.images)
  },[userData])

  const formInputChange = (e) => {
    setItemInput({ 
      ...userData,
      ...itemInput,
      [e.target.name] : e.target.value
    })
  };

  const clearInputs = () => {
    setItemInput({})
  };

  const onClickCreateItem = async() => {
    const removeEmptySize = itemSize.filter(size => !!size.name);
    const inputConver = {
      ...itemInput,
      images: imageListState,
      sizes: removeEmptySize,
    }
    console.log('dav, inputConver: ', inputConver)
    console.log('dav, setUpdateItem(inputConver)-->: ', {...userData, ...inputConver})
    // dispatch(setUpdateItem(inputConver))
    // setIsModalOpen(!isModalOpen)
    // clearInputs()
  }

  const inputSettings = [
    {
      type: "text",
      name: "name", 
      label: "Item Name", 
      placeholder: "Item Name",
      value: itemInput.name
    },{
      type: "text",
      name: "description", 
      label: "description", 
      placeholder: "description",
      value: itemInput.description
    },{
      type: "text",
      name: "ingredients", 
      label: "ingredients", 
      placeholder: "ingredients",
      value: itemInput.ingredients
    }
  ];

  const dropdownSetting = {
    type: "dropdown",
    name: "categoryName", 
    label: "categoryName", 
    categoryList: userData.categoryList,
    placeholder: "main",
    value: itemInput.categoryName
  }

  const dropdownInput = {
    type: "text",
    name: "addNewCategoryName", 
    label: "Add New Category Name", 
    placeholder: "Optional add new category name",
    value: itemInput.addNewCategoryName
  }

  return userData && (
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

export default UpdateItemForm;
