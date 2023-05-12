import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../actions/productActions";
import ProductModal  from "../components/ProductModal"




const AdminDashbord = () => {
  const dispatch = useDispatch();
  const { productList, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  return (
    <div>
      <ProductModal />
      {loading && <p>loading...</p>}
      {productList.map((el) => (
        <>
          <h4>{el.title}</h4>
          <h6>{el.desc}</h6>
          <img src={el.image} width="200" alt="product img" />
          <h6>{el.price}</h6>
          <button onClick={() => HandleDeletePrduct(el._ID)}>delete</button>
        </>
      ))}
    </div>
  );
};

export default AdminDashbord;
