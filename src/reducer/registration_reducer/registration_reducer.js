import { createSlice } from '@reduxjs/toolkit'

export const RegisterReducer = createSlice({
  name: 'registration',
  initialState: {
    phone: [],
    adreses: ['adres 1','adres 2'],
    carrentAdres: 'adres 1',
    signIn: false
  },
  reducers: {
    setPhone: (state,action) => {
        
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.phone = action.payload
    },
    setCarrentAdres: (state, action)=>{
        state.carrentAdres = action.payload },
    addAdres: (state,action)=>{
        state.adreses = [action.payload,...state.adreses]
    },
    setSignIn: (state, action)=>{
      state.signIn = action.payload
    },
    setAdreses: (state, action) => {
      state.action = action.payload
    }
    
    
  }
})

// Action creators are generated for each case reducer function
export const { setPhone, addAdres, setCarrentAdres, setSignIn, setAdreses } = RegisterReducer.actions

export default RegisterReducer.reducer