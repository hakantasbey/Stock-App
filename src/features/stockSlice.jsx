// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//    firms:"",
//    loading:false,
//    error:false,
// }

// const stockSlice = createSlice({
//   name: "stock",
//   initialState,
//   reducers: {
//     fetchStart: (state)=>{
//       state.loading=true
//     },
//     firms:(state, {payload})=>{
//       state.loading=false
//       state.firms=payload
//     },
//     fetchFail:(state)=>{
//       state.loading=false
//       state.error=true
//     }
//   }
// });

// export const {fetchFail, fetchStart, firms} = stockSlice.actions

// export default stockSlice.reducer


import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  loading:false,
  error:false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    firmsSuccess:(state,{payload})=>{
      state.loading=false
      state.firms=payload.data
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
})

export const {fetchStart,fetchFail,firmsSuccess} = stockSlice.actions

export default stockSlice.reducer