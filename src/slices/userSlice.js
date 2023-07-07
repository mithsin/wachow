import { createSlice } from '@reduxjs/toolkit';
import { API } from 'aws-amplify';
import { getUser } from 'graphql/queries';
import { createShop, createItem, deleteItem } from 'graphql/mutations'

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
          return {
            ...state, 
            shops: {
              items: [...state.shops.items, ...action.payload]
            }
          }
        },
        setDeleteShop(state, action){
          return {
            ...state, 
            shops: {
              items: [...state.shops.items, ...action.payload]
            }
          }
        },
        setUpdateTrigger(state, action){
          return state.updateTrigger === action.payload
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
  dispatch(setShopUpdate(inputConver))
  

  await API.graphql({ 
    query: createShop,
    variables: {input : inputConver}
  }).then(response => {
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
