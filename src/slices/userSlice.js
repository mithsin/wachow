import { createSlice } from '@reduxjs/toolkit';
import { API } from 'aws-amplify';
import { getUser } from 'graphql/queries';
import { createShop, deleteShop, createItem, deleteItem } from 'graphql/mutations'

const initialState = {
  authState: false,
  email: "",
  id: "",
  name: "",
  image: "",
  shops: {
      items: [],
      nextToken: ""
  },
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
          console.log('action.payload-->: ', action.payload)
          return {
            ...state, 
            shops: {
              items: [action.payload, ...state.shops.items]
            }
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
  await API.graphql({ 
    query: getUser,
    variables: { id: userId }
  }).then(response => {
    console.log('fetchUserState-response-->: ', response.data)
    dispatch(setUserInfo(response.data.getUser));
    dispatch(setUpdateTrigger(false));
  })
  .catch(err => console.log('fetchUserState-err--> ', err))
}

export const setAddShop = ( inputConver ) => async(dispatch) => {
  // dispatch(setShopUpdate(inputConver))
  console.log('setAddShop-inputConver--->: ', inputConver)
  

  await API.graphql({ 
    query: createShop,
    variables: {input : inputConver}
  }).then(response => {
    console.log('setAddShop-response--->: ', response)
    dispatch(setUserInfo({
      shops: {
        items : {
          response,
          ...userShops
        }
      }
    }));
    dispatch(setUpdateTrigger(true));
  })
  .catch(err => console.log('Seller-err--> ', err))
}

export const setDeleteShopSlice = ( id ) => async(dispatch) => {
  console.log('setDeleteItem-id-->: ', id)

  await API.graphql({
    query: deleteShop,
    variables: {input : {id: id}}
  }).then(res => {
    console.log('deleteShop-res-->: ', res)
    dispatch(setDeleteShop())
    dispatch(setUpdateTrigger(true));
  })
  .catch(err=> console.log('err-->: ', err));
}

export const setAddItem = ( inputConver ) => async(dispatch) => {
  console.log('setAddItem-inputConver-->: ', inputConver)
 
  await API.graphql({ 
    query: createItem,
    variables: {input : inputConver}
  }).then(response => {
    console.log('setAddItem-response-->: ', response.data.createItem)
    dispatch(setUpdateTrigger(true));
    return response.data.createItem
  })
  .catch(err => console.log('Seller-err--> ', err))
}

export const setDeleteItem = ( id ) => async(dispatch) => {
  console.log('setDeleteItem-id-->: ', id)

  await API.graphql({ 
    query: deleteItem,
    variables: {input : { id: id }}
  }).then(response => {
    console.log('setAddItem-response-->: ', response.data.deleteItem)
    dispatch(setUpdateTrigger(true));
    return response.data.deleteItem
  })
  .catch(err => console.log('Seller-err--> ', err))
}

export const userInfo = state => state.userState;
export const userShops = state => state.userState.shops;
export const toggleUpdateTrigger = state => state.userState.updateTrigger;

export default userSlice.reducer;
