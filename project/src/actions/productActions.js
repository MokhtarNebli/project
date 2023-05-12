import axios from "axios";
import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  GET_PRODUCT_FAILED,
} from "./productTypes";


export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_LOADING });
    const res = await axios.get("/api/product");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAILED, payload: error });
  }
}
  export const addProduct = (productInfo) => async (dispatch) => {
  try {
    const from= new FormData();
    form.append('file',productInfo.file);
    from.append("upload_prest","decortion")
  const res = await axios.post("https://api.cloudinary.com/v1_1/fatenfayala/upload",from)
productInfo.image = res.data.secure_url

  await axios.post('/api/product', productInfo)
    dispatch(getProducts())
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILED, payload: error });
  }
};

