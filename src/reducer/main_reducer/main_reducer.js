import { configureStore } from '@reduxjs/toolkit'
import  RegisterReducer  from '../registration_reducer/registration_reducer'
import HomeReducer from '../home_reduser/home_reduser'
export default configureStore({
    reducer: {
      registration : RegisterReducer,
      home : HomeReducer
    }
  })