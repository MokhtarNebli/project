import { GET_PRODUCT_FAILED, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../actions/productTypes";

const initState ={
    productList:[],
    loading:false,
    errors:null
}

const productReducers = (state = initState, { type, payload }) => {
  switch (type) {
  case GET_PRODUCT_LOADING:
    return {...state, loading:true}
    case GET_PRODUCT_SUCCESS:
return { ...state, productList: payload, loading: false, errors: false };
case GET_PRODUCT_FAILED:
return { ...state, loading: false, errors: payload };
    default:
      return state;
  }
};
export default productReducers;