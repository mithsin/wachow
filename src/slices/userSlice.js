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
  const convertShop = {
    ...replaceObject.shop,
    categories: replaceObject.categories
  }
  const index = originalArray.findIndex(originalProduct => originalProduct.id === convertShop.id);
  if (index !== -1) {
    return originalArray[index] = convertShop;
  }
  return [convertShop]
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
            shops: replaceContentById(action.payload, state.shops)  
          }
        },
        setDeleteShop(state, action){
          console.log('action.payload-->: ', action.payload)
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
  console.log('dav, shopId-fetchUserState->: ', userId)

  await dispatch(setUserInfo(mockFullData));
  dispatch(setUpdateTrigger(false));
}

export const fetchShopState = ( shopId ) => async(dispatch) => {
  return
}
export const fetchShopPublicState = ( shopId ) => async(dispatch) => {

  // await axios.post(`${BASE_URL}/stores`, {
  //   "triggerSource": "GET_SHOP_AND_ALL_ITEMS",
  //   "shopId": "405bccfe-9d11-4db3-b4c1-4b287897e9b7"
  // }).then((response)=>{
  //   const shopAndItemsData = JSON.parse(response.data.body)
  //   console.log('dav, shopAndItemsData: ', shopAndItemsData)
  //   dispatch(setShopUpdate(shopAndItemsData.Responses))
  //   // return shopAndItemsData
  // }).catch((error)=>{
  //   console.log('get user error')
  // })

  // FOLLOWING IS FOR MOCK
      // console.log('dav, shopId-fetchShopPublicState->: ', shopId, mockShopData)
    const shopAndItemsData = mockShopData.Responses
      // console.log('dav, mockShopData.data-shopAndItemsData->: ', shopAndItemsData)
    await dispatch(setShopUpdate(shopAndItemsData))
}

export const setAddShop = ( inputConver ) => async(dispatch) => {
  return
}

export const setDeleteShopSlice = ( id ) => async(dispatch) => {
  return
}

export const fetchItemState = ( itemId ) => async(dispatch) => {
  return
}

export const fetchItemPublicState = ( shopId, itemId ) => async(dispatch) => {
  return
}

export const setAddItem = ( inputConver ) => async(dispatch) => {
  console.log('setAddItem-inputConver-->: ', inputConver)
}

export const setUpdateItem = ( inputConver ) => async(dispatch) => {
  console.log('setUpdateItem-inputConver-->: ', inputConver)
}

export const setDeleteItem = ( id ) => async(dispatch) => {
  console.log('setDeleteItem-id-->: ', id)
}

export const fetchMultipleItemsState = (limit) => async(dispatch) => {
  return mockHomeData
}

export const userInfo = state => state.userState;
export const userShops = state => state.userState.shops;
export const toggleUpdateTrigger = state => state.userState.updateTrigger;

export default userSlice.reducer;
