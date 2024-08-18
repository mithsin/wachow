import { configureStore, combineReducers } from "@reduxjs/toolkit";


import userReducer from "@src/slices/userSlice";


const rootReducer = combineReducers({ 
  userState: userReducer
})


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // middleware: [thunk]
});

export const persistor = store

