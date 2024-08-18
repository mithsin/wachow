import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './NewShopForm.module.scss';

import { useDispatch, useSelector } from "react-redux";
import { setAddShop, userInfo } from "@src/slices/userSlice";

import { TextInput } from 'components/Atoms/Inputs'
import { Button } from 'components/Atoms/Buttons'
import { Modal } from 'components/Molecules/Modal'

export const NewShopForm = ({setIsModalOpen, isModalOpen}) => {
    const dispatch = useDispatch();
    const userState = useSelector(userInfo);
    const [shopInput, setShopInput] = useState({});
    const formInputChange = (e) => {
        setShopInput({ 
            ...shopInput, 
            [e.target.name] : e.target.value
        })
    };


    const clearInputs = () => {
        setShopInput({})
    };

    const onClickCreateShop = async() => {
        const inputConver = {
            id: uuidv4(),
            shopName: shopInput.shopName, 
            phone: shopInput.phone.toString(), 
            memo: shopInput.memo,
            userShopsId: userState.id
        }
        dispatch(setAddShop(inputConver))
        clearInputs()
        setIsModalOpen(!isModalOpen)
    }

    const inputSettings = [
        {
            type: "text",
            name: "shopName", 
            label: "Shop Name", 
            placeholder: "Shop Name",
            value: shopInput.shopName || ''
        },{
            type: "text",
            name: "phone", 
            label: "Phone number", 
            placeholder: "example 9876543210",
            value: shopInput.phone || ''
        },{
            type: "text",
            name: "email", 
            label: "email", 
            placeholder: "example abc@wachow.com",
            value: shopInput.email || ''
        },{
            type: "text",
            name: "description", 
            label: "description", 
            placeholder: "description",
            value: shopInput.description|| ''
        }
    ];

    return(
        <Modal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            modalTitle="SHOP FORM">
            <div className={styles['outter-block']}> 
                <div className={styles['inner-block']}>
                    <div className={styles['formWrapper']}>
                        <div>NEW SHOP FORM</div>
                            {
                                inputSettings.map((inputSetting)=>
                                    <TextInput 
                                        key={inputSetting.name} 
                                        { ...inputSetting } 
                                        onChange={ formInputChange } />
                                )
                            }
                            <div className={styles['formButtonWrapper']}>
                                <Button
                                    label="SUBMIT" 
                                    onClick={ onClickCreateShop }
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

export default NewShopForm;


// parantId: User @belongsTo
// phone: String
// email: String
// description: String
// shopName: String! 
// pickUpLocation: [PickUpLocation]
// images: [Images]
// menu: Menu
// items: [Item] @hasMany