import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './NewItemForm.module.scss';

import { TextInput } from 'components/Atoms/Inputs';
import { Button } from 'components/Atoms/Buttons';
import { Modal } from 'components/Molecules/Modal';
import ImageUploader from 'components/Molecules/ImageUploader';

import { useDispatch } from "react-redux";
import { setAddItem } from "slices/userSlice";

export const NewItemForm = ({setIsModalOpen, isModalOpen, userData}) => {
    const dispatch = useDispatch();
    const [imageURL, setImageURL] = useState('');
    const [imageInfo, setImageInfo] = useState();
    const [itemInput, setItemInput] = useState({});
    const [itemSize, setItemSize] = useState([{
        id: uuidv4(),
        name: "Regular", 
        price: "0"
    }]);

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

    const formInputSizeChange = (e) => {
        const checkDollar = /^\$?[0-9]+\.?[0-9]?[0-9]?$/;
        const dollar = (e.target.name === "price") && !e.target.value ? 0 : e.target.value;
        if((e.target.name === "price" && checkDollar.test(dollar)) || e.target.name === "name"){
            const updateSizeInput = (
                itemSize.map((item)=> {
                    return {...item, [e.target.name] : e.target.value}
                })
            )
    
            setItemSize(updateSizeInput)
        }
    };

    const clearInputs = () => {
        setItemInput({})
        setItemSize([{
            id: uuidv4(),
            name: "Regular", 
            price: "0"
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

        const inputConver = {
            id: newId,
            shopName: userData.shopName,
            shopItemsId: userData.id,
            name: itemInput?.name,
            ingrediances: itemInput?.ingrediances,
            images: addItemIdIntoImage,
            sizes: itemSize
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
            name: "ingrediances", 
            label: "ingrediances", 
            placeholder: "ingrediances",
            value: itemInput.ingrediances || ''
        }
    ];

    const inputSizeSettings = [
        {
            type: "text",
            name: "name", 
            label: "size", 
            placeholder: "size"
        },{
            type: "text",
            name: "price", 
            label: "price", 
            placeholder: "price"
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
                                {
                                    inputSizeSettings.map((inputSizeSetting, i)=>{
                                        const current = i%2 > 0 ? i - 1 : i;
                                        return (
                                            <TextInput 
                                                key={inputSizeSetting.name} 
                                                { ...inputSizeSetting }
                                                value={itemSize[current][`${inputSizeSetting.name}`] ?? ''}
                                                onChange={ formInputSizeChange } />
                                    )})
                                }
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

