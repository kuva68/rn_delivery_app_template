import { createSlice } from '@reduxjs/toolkit'

export const HomeReducer = createSlice({
  name: 'home',
  initialState: {
    dishes : [1, 2, 3, 4, 5],
    recommendations : ['recommendations', 'recommendations', 'recommendations', 'recommendations', 'recommendations'],
    water :['water','water','water','water','water'],
    discount : ['discount','discount','discount','discount','discount']
  },
  reducers: {
    
      setWater : (state,actions)=>{
          state.water = actions.payload
      } , 
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      setRecomendations : (state,actions)=>{
          state.recommendations = actions.payload
      },
      setDiscount : (state,actions) => {
          state.discount = actions.payload
      }
    
   
    
  }
})

// Action creators are generated for each case reducer function
export const { setWater, setDiscount, setRecomendations } = HomeReducer.actions

export default HomeReducer.reducer