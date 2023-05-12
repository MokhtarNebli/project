import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct as addNewProduct } from "../actions/productActions";

function ProductModal() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [file, setFile] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewProduct = (data) => {};

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(addNewProduct)}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" {...register("title")} required />
          <br />
          <label htmlFor="description">Description</label>
          <input id="description" type="text" {...register("desc")} required />
          <br />
          <label htmlFor="price">Price</label>
          <input id="price" type="number" {...register("price")} required />
          <br />
          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" {...register("qty")} required />
          <br />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <Button>ADD</Button>
        </form>
      </Modal>
    </>
    )
  
}

export default ProductModal;
