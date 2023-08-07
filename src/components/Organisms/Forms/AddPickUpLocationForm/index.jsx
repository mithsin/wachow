import { useState } from 'react'
import { API } from 'aws-amplify';
import { updateUser } from 'graphql/mutations'
import styles from './AddPickUpLocationForm.module.scss'

import { Button } from 'components/Atoms/Buttons'
import { TextInput } from 'components/Atoms/Inputs'
import { AddressInputField } from 'components/Molecules/FormComponents'
import LocationItemCard from 'components/Molecules/Cards/LocationItemCard'
import { useDispatch } from "react-redux";

const inputObject = [
  {name: "title", label: "title", type: "text"}
]

export const AddPickUpLocationForm = ({userData}) => {
  const [inputState, setInputState] = useState({})
  const [address, setAddress] = useState()
  const shopItems = userData?.shops?.items?.[0]?.items?.items;
  console.log('AddPickUpLocationForm-shopItems-->: ', shopItems)
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
    
    // const consolidateInput = {
    //   ...inputState,
    //   id: userData.id,
    //   images: imageListState, 
    //   address
    // }

    // await API.graphql({
    //   query: updateUser,
    //   variables: {input : consolidateInput}
    // }).then(res => {
    //   dispatch(setUserInfo(res.data.updateUser))
    // })
    // .catch(err=> console.log('err-->: ', err));
  }

  return(

      <div className={styles.userFormWrap}>
        <div className={styles.initInputWrap}>
          {inputObject && 
            inputObject.map(object =>
              <TextInput 
                  key={object?.label}
                  label={object?.label}
                  name={object?.name}
                  type={object?.type}
                  placeholder={''}
                  onChange={onInputChange} />
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
  )
}

export default AddPickUpLocationForm;

// const userStateMockData = {
//   "authState": false,
//   "email": "hsinbluemoon@gmail.com",
//   "id": "248894a8-b051-7069-879b-1e98700a5486",
//   "name": "",
//   "image": "",
//   "shops": {
//       "items": [
//           {
//               "id": "c13db49d-ae22-4258-9844-878083fdbf81",
//               "phone": "7894561320",
//               "email": null,
//               "description": null,
//               "shopName": "hbm shop",
//               "createdAt": "2023-07-12T15:13:37.736Z",
//               "updatedAt": "2023-07-12T15:13:37.736Z",
//               "userShopsId": "248894a8-b051-7069-879b-1e98700a5486",
//               "owner": "248894a8-b051-7069-879b-1e98700a5486",
//               "items": {
//                   "items": [
//                       {
//                           "id": "1b43f4a2-4eb1-4d38-93ea-df0675dbf04e",
//                           "ingrediances": "meat and stuff",
//                           "description": null,
//                           "locationItemsId": null,
//                           "name": "hamburger",
//                           "orderItemsId": null,
//                           "owner": "248894a8-b051-7069-879b-1e98700a5486",
//                           "shopItemsId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                           "shopName": "hbm shop",
//                           "sizes": [
//                               {
//                                   "id": "c60930cb-1fa1-4eee-a857-72c5122bf8cb",
//                                   "name": "Regular",
//                                   "price": "17.55"
//                               }
//                           ],
//                           "images": [
//                               {
//                                   "id": "7c601700-c46d-4b74-b91b-3131241ee1cc",
//                                   "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                                   "name": "image-f8894eb0-3c46-4884-a4eb-64c3921388d5",
//                                   "shopId": null,
//                                   "src": "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
//                               },
//                               {
//                                   "id": "555007c7-c01e-44e1-9dc3-79e3bd56645e",
//                                   "itemId": "c13db49d-ae22-4258-9844-878083fdbf81",
//                                   "name": "image-d50c91e1-ddfe-4bcb-8519-9a624c3eb60d",
//                                   "shopId": null,
//                                   "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSvNZfQIV9FKVAuag9X_dWQfA95pdYQhosQPpnGL_39Br7Jv1Mp6JAIbHZAkYt8jMNlk"
//                               }
//                           ]
//                       }
//                   ]
//               }
//           }
//       ],
//       "nextToken": null
//   },
//   "createdDate": null,
//   "firstName": null,
//   "lastName": null,
//   "phone": null,
//   "isSeller": null,
//   "images": null,
//   "address": null,
//   "createdAt": "2023-07-12T15:13:10.918Z",
//   "updatedAt": "2023-07-12T15:13:10.918Z",
//   "owner": "248894a8-b051-7069-879b-1e98700a5486",
//   "updateTrigger": false
// }