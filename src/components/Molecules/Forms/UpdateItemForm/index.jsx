import { useState, useEffect } from 'react';
import styles from './UpdateItemForm.module.scss';
import { v4 as uuidv4 } from 'uuid';

import { TextInput } from 'components/Atoms/Inputs';
import { Button } from 'components/Atoms/Buttons';
import { Modal } from 'components/Molecules/Modal';
import ImageUploader from 'components/Molecules/ImageUploader';

import { useDispatch } from "react-redux";
import { setUpdateItem } from "slices/userSlice";

export const UpdateItemForm = ({
    setIsModalOpen, isModalOpen, userData
}) => {
    const {
        id, 
        name,
        images, 
        sizes, 
        ingrediances, 
        reviews = [],
        shopItemsId
    } = userData;

    // console.log('UpdateItemForm-userData--->: ', userData)

    const dispatch = useDispatch();
    const [imageURL, setImageURL] = useState('');
    const [imageInfo, setImageInfo] = useState();
    const [itemInput, setItemInput] = useState({
        id: id, 
        name: name,
        images: images, 
        sizes: sizes, 
        ingrediances: ingrediances, 
        reviews: reviews,
        shopItemsId: shopItemsId
    });
    const [itemSize, setItemSize] = useState(sizes);

    useEffect(()=>{
        if(imageURL){
            const newImage = {
                id: uuidv4(), 
                itemId: shopItemsId, 
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
        const checkDollar = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
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
            name: "Regular", 
            price: "0"
        }])
        setImageURL('')
        setImageInfo({
            name: "images",
            value: ""
        })
    };

    const onClickUpdateItem = async() => {
        
        const addItemIdIntoImage = itemInput?.images 
            ? itemInput?.images.map(image => {
                return {...image}
            }) 
            : [];

        const inputConver = {
            id: userData.id,
            name: itemInput?.name,
            ingrediances: itemInput?.ingrediances,
            images: addItemIdIntoImage,
            sizes: itemSize
        }

        dispatch(setUpdateItem(inputConver))
        setIsModalOpen(!isModalOpen)
        // clearInputs()
    }

    const onImageDelete = (e) => {
        console.log('e-->: ', e.target)
        // itemInput, setItemInput

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
                                    onClick={ onClickUpdateItem }
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

export default UpdateItemForm;

// const mockData = {
//     "id": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
//     "ingrediances": "a slice of dragon fire",
//     "locationItemsId": null,
//     "name": "dragon fire",
//     "orderItemsId": null,
//     "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
//     "shopItemsId": "ac43b063-299a-4301-b1ed-918658c42d3a",
//     "shopName": "Wacho Shop",
//     "sizes": [
//         {
//             "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67",
//             "name": "Regular",
//             "price": "12.55"
//         }
//     ],
//     "images": [
//         {
//             "id": "febba186-4a58-4479-8159-17e01fb50a1c",
//             "itemId": "1349c927-62a6-40bf-a2c7-dda93ffb4ac1",
//             "name": "logo192.png",
//             "shopId": null,
//             "src": "https://res.cloudinary.com/paf1david/image/upload/c_scale,w_780,ar_1:1,c_fill/v1688997527/pafpay/drmygkceorxjojksmf5u.png"
//         }
//     ]
// }

// const mockData2 = {
//     "id": "c65f35c8-46c6-4c1b-b91f-152408fb22b1",
//     "ingrediances": "test2 ingrediances",
//     "locationItemsId": null,
//     "name": "test2",
//     "orderItemsId": null,
//     "owner": "8458d4f8-1031-707d-4dab-602361fe05f2",
//     "shopItemsId": "ac43b063-299a-4301-b1ed-918658c42d3a",
//     "shopName": "Wacho Shop",
//     "sizes": [
//         {
//             "id": "794e2b7c-e653-43bf-8058-daf11f9b3502",
//             "name": "Regular",
//             "price": "12341.11"
//         }
//     ],
//     "images": []
// }


// const updateMock = {
//     id: "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e",
//     name: "hamburger",
//     ingrediances: "meat and stuff",
//     images: [
//         {
//             name: "image-3a589525-3597-40dc-87b2-b53d7bc11309",
//             src: "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
//         }
//     ],
//     sizes: [
//         {
//             id: "c60930cb-1fa1-4eee-a857-72c5122bf8cb",
//             name: "Regular",
//             price: "17.55"
//         }
//     ]
// }

// const updateWorkingMock = {
//     id: "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e", 
//     name: "hamburger", 
//     ingrediances: "meat and stuff", 
//     sizes: [{
//         id: "c60930cb-1fa1-4eee-a857-72c5122bf8cb", 
//         name: "Regular", 
//         price: "17.55"}
//     ]}