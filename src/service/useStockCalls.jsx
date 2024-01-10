// import { useDispatch } from "react-redux"
// import useAxios from "./useAxios"
// import { firms } from "../features/stockSlice"

// const useStockCalls = () => {
//   const dispatch = useDispatch()
//   const {axiosWithToken} = useAxios()


//   const getFirms = async ()=>{
//     try {
//       const {data} = await axiosWithToken.get("/firms")
//       console.log(data);
//       dispatch(firms(data.data))
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return {getFirms}
// }

// export default useStockCalls


import { useDispatch } from 'react-redux'
import { fetchStart, firmsSuccess } from '../features/stockSlice'
import useAxios from './useAxios'

const useStockCalls = () => {
const dispatch = useDispatch()
const {axiosWithToken}= useAxios()
const getFirms= async()=>{
    dispatch(fetchStart())
    try {
        const {data}= await axiosWithToken("/firms/")
        dispatch(firmsSuccess(data))
        console.log(data);
    } catch (error) {
        
    }
}
  return {getFirms}

}

export default useStockCalls