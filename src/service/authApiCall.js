import axios from "axios";
import{ toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom/dist";

export const login = async () => {
    const navigate = useNavigate()
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      userInfo
    );
    toastSuccessNotify("Login islemi basarili")
    console.log(data);
  } catch (error) {
    toastErrorNotify("Login islemi basarisiz oldu")
    console.log(error);
  }
};
