import { createSlice } from '@reduxjs/toolkit';
// import { API } from 'aws-amplify';
// import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
// import { getUser, getShop, getItem, listItems, getShopPublic, getItemPublic } from 'graphql/queries';
// import { createShop, deleteShop, createItem, updateItem, deleteItem } from 'graphql/mutations'
import axios from 'axios';
import { mockHomeData, mockItemData } from './mockData';
import { mockFullData } from "@src/slices/mockData/FullMockData";
import { mockShopData } from "@src/slices/mockData/ShopMockData";

const BASE_URL = "https://qg8euoyjgl.execute-api.us-east-1.amazonaws.com/prod";

const initialState = {
  authState: false,
  email: "",
  id: "",
  name: "",
  image: "",
  shops: [],
  createdDate: "",
  firstName: "",
  lastName: "",
  phone: "",
  isSeller: "",
  images: "",
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
  createdAt: "",
  updatedAt: "",
  owner: "",
  updateTrigger: false
}

const replaceContentById = (replaceObject, originalArray) => {
  const index = originalArray.findIndex(originalProduct => originalProduct.id === replaceObject.shop.id);

  if (index !== -1) {
    return originalArray[index] = replaceObject;
  }
  return [replaceObject]
}

export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setLoginUserInfo(state, action) {
          const updateUserData = Object.assign(state, action.payload);
          return updateUserData
        },
        setUserInfo(state, action) {
          const updateUserData = Object.assign(state, action.payload);
          return updateUserData
        },
        setShopUpdate(state, action){
          return {
            ...state, 
            shops: [action.payload]
            // replaceContentById(action.payload, state.shops)
            //   shop: action.payload.shop,
            //   items: [...action.payload.items, ...state.shops.items]
            
          }
        },
        setDeleteShop(state, action){
          return {
            ...state, 
            shops: {
              items: [],
              nextToken: ""
            },
          }
        },
        setUpdateTrigger(state, action){
          return {
            ...state,
            updateTrigger: action.payload
          }
        },
        setClearInfo(){
          return initialState
        }
    }
});
 
export const {
  setLoginUserInfo,
  setUserInfo,
  setShopUpdate,
  setDeleteShop,
  setClearInfo,
  setUpdateTrigger
} = userSlice.actions;


export const fetchUserState = ( userId ) => async(dispatch) => {
  // GRPAH QL VERSION
  // await API.graphql({ 
  //   query: getUser,
  //   variables: { id: userId }
  // }).then(response => {
  //   // console.log('fetchUserState-response-->: ', response.data)
  //   dispatch(setUserInfo(response.data.getUser));
  //   dispatch(setUpdateTrigger(false));
  // })
  // .catch(err => console.log('fetchUserState-err--> ', err))

  // AXIOS VERSION
  // await axios.post(`${BASE_URL}/user`, {
  //   "triggerSource": "SignIn",
  //   "email": "hsinbluemoon@gmail.com",
  //   "password": "!Ski12ljf9sdlfjdF!@#$TGASD"
  // }).then((response)=>{
  //   console.log('dav, response.data: ', response.data)
  //       dispatch(setUserInfo(response.data));
  //       dispatch(setUpdateTrigger(false));
  // }).catch((error)=>{
  //   console.log('get user error')
  // })

  // FOLLOWING IS FOR MOCK
  await dispatch(setUserInfo(mockFullData));
  dispatch(setUpdateTrigger(false));
}

export const fetchShopState = ( shopId ) => async(dispatch) => {
  // const fetchValue = await API.graphql({ 
  //   query: getShop,
  //   variables: { id: shopId }
  // }).then(response => {
  //   console.log('fetchShopState-response-->: ', response.data.getShop)
  //   return response.data.getShop
  // })
  // .catch(err => console.log('fetchShopState-err--> ', err))

  // return fetchValue
}
export const fetchShopPublicState = ( shopId ) => async(dispatch) => {
  // const fetchValue = await API.graphql({ 
  //   query: getShopPublic,
  //   variables: { id: shopId },
  //   authMode: GRAPHQL_AUTH_MODE.API_KEY
  // }).then(response => {
  //   console.log('fetchShopPublicState-response-->: ', response)
  //   return response.data.getShop
  // })
  // .catch(err => console.log('fetchShopState-err--> ', err))
  // return fetchValue


  // AXIOS VERSION
  // await axios.post(`${BASE_URL}/stores`, {
  //   "triggerSource": "GET_SHOP_AND_ALL_ITEMS",
  //   "shopId": shopId
  // }).then((response)=>{
  //   console.log('dav, response.data: ', JSON.parse(response.data.body))
  //   const shopAndItemsData = JSON.parse(response.data.body)
  //   dispatch(setShopUpdate(shopAndItemsData.Responses))
  //   // return shopAndItemsData
  // }).catch((error)=>{
  //   console.log('get user error')
  // })


  // FOLLOWING IS FOR MOCK
    // console.log('dav, shopId-->: ', shopId)
    // console.log('dav, mockShopData.data-->: ', JSON.parse(mockShopData))
    // const shopAndItemsData = JSON.parse(mockShopData)
    // await dispatch(setShopUpdate(shopAndItemsData.Responses))
}

export const setAddShop = ( inputConver ) => async(dispatch) => {
  // dispatch(setShopUpdate(inputConver))
  // console.log('setAddShop-inputConver--->: ', inputConver)
  

  // await API.graphql({ 
  //   query: createShop,
  //   variables: {input : inputConver}
  // }).then(response => {
  //   console.log('setAddShop-response--->: ', response)
  //   dispatch(setUserInfo({
  //     shops: {
  //       items : {
  //         response,
  //         ...userShops
  //       }
  //     }
  //   }));
  //   dispatch(setUpdateTrigger(true));
  // })
  // .catch(err => console.log('createShop-err--> ', err))
}

export const setDeleteShopSlice = ( id ) => async(dispatch) => {
  console.log('setDeleteItem-id-->: ', id)

  // await API.graphql({
  //   query: deleteShop,
  //   variables: {input : {id: id}}
  // }).then(res => {
  //   console.log('deleteShop-res-->: ', res)
  //   dispatch(setDeleteShop())
  //   dispatch(setUpdateTrigger(true));
  // })
  // .catch(err=> console.log('deleteShop-err-->: ', err));
}

export const fetchItemState = ( itemId ) => async(dispatch) => {
  // const fetchValue = await API.graphql({ 
  //   query: getItem,
  //   variables: { id: itemId }
  // }).then(response => {
  //   console.log('fetchItemState-response-->: ', response)
  //   return response.data.getItem
  // })
  // .catch(err => console.log('fetchItemState-err--> ', err))

  // return fetchValue
}

export const fetchItemPublicState = ( shopId, itemId ) => async(dispatch) => {
  // const fetchValue = await API.graphql({ 
  //   query: getItemPublic,
  //   variables: { id: itemId },
  //   authMode: GRAPHQL_AUTH_MODE.API_KEY
  // }).then(response => {
  //   console.log('fetchItemPublicState-response-->: ', response)
  //   return response.data.getItem
  // })
  // .catch(err => console.log('fetchItemPublicState-err--> ', err))

  // return fetchValue
  return mockItemData
}

export const setAddItem = ( inputConver ) => async(dispatch) => {
  console.log('setAddItem-inputConver-->: ', inputConver)
 
  // await API.graphql({ 
  //   query: createItem,
  //   variables: {input : inputConver}
  // }).then(response => {
  //   console.log('setAddItem-response-->: ', response.data.createItem)
  //   dispatch(setUpdateTrigger(true));
  //   return response.data.createItem
  // })
  // .catch(err => console.log('setAddItem-err--> ', err))
}

export const setUpdateItem = ( inputConver ) => async(dispatch) => {
  console.log('setUpdateItem-inputConver-->: ', inputConver)

  // await API.graphql({ 
  //   query: updateItem,
  //   variables: {input : inputConver}
  // }).then(response => {
  //   console.log('setUpdateItem-response-->: ', response.data.createItem)
  //   dispatch(setUpdateTrigger(true));
  //   return response.data.updateItem
  // })
  // .catch(err => console.log('setUpdateItem-err--> ', err))
}

export const setDeleteItem = ( id ) => async(dispatch) => {
  console.log('setDeleteItem-id-->: ', id)

  // await API.graphql({ 
  //   query: deleteItem,
  //   variables: {input : { id: id }}
  // }).then(response => {
  //   console.log('setAddItem-response-->: ', response.data.deleteItem)
  //   dispatch(setUpdateTrigger(true));
  //   return response.data.deleteItem
  // })
  // .catch(err => console.log('setAddItem-err--> ', err))
}

export const fetchMultipleItemsState = (limit) => async(dispatch) => {
  // const fetchValue = await API.graphql({ 
  //   query: listItems,
  //   variables: {limit: limit},
  //   authMode: GRAPHQL_AUTH_MODE.API_KEY
  // }).then(response => {
  //   return response.data.listItems.items
  // })
  // .catch(err => console.log('fetchMultipleItemsState-err--> ', err))

  // return fetchValue
  return mockHomeData
}

export const userInfo = state => state.userState;
export const userShops = state => state.userState.shops;
export const toggleUpdateTrigger = state => state.userState.updateTrigger;

export default userSlice.reducer;
