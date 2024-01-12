import {
  fetchStart,
  fetchFail,
  // getFirmsSuccess,
  // getSalesSuccess,
  getStocksSuccess,
} from "../features/stockSlice"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useDispatch } from "react-redux"

const useStockCalls = () => {
  const { axiosWithToken } = useAxios()
  const dispatch = useDispatch()

  //   const getFirms = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axiosWithToken("/firms/")
  //       dispatch(getFirmsSuccess(data.data))
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       toastErrorNotify("Firm bilgileri çekilemedi.")
  //     }
  //   }

  //   const getSales = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axiosWithToken("/sales/")
  //       dispatch(getSalesSuccess(data.data))
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       toastErrorNotify("Sales bilgileri çekilemedi.")
  //     }
  //   }

  const getStocks = async (url = "firms") => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/${url}/`)
      const apiData = data.data
      dispatch(getStocksSuccess({ apiData, url}))
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} bilgileri çekilemedi.`)
    }
  }

  const deleteStocks = async (url = "firms", id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/${url}/${id}/`)
      toastSuccessNotify(`${url} bilgisi silinmistir.`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} silinemedi.`)
    }
  }

  const postStocks = async (url = "firms", info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/${url}`, info)
      toastSuccessNotify(`${url} kayidi eklenmistir.`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} kaydi eklenememistir.`)
    }
  }

  const putStocks = async (url = "firms", id, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/${url}/${id}`, info)
      toastSuccessNotify(`${url} kaydi guncellenmistir`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} kaydi guncellenememistir.`)
    }
  }


  return { getStocks, deleteStocks, postStocks, putStocks }
}

export default useStockCalls