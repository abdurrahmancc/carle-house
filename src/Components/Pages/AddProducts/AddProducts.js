import { async } from "@firebase/util";
import axios from "axios";
import React from "react";

const AddProducts = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      email: e.target.email.value,
      price: e.target.price.value,
      img: e.target.img.value,
      description: e.target.description.value,
      supplierName: e.target.supplierName.value,
    };

    const result = await axios.post(
      "https://floating-wildwood-16493.herokuapp.com/products",
      product
    );
    console.log(result);
    e.target.reset();
  };
  return (
    <div style={{ minHeight: "90vh" }} className="container mt-5">
      <div className=" mx-auto w-50">
        <div className="bg-white p-5">
          <h3 className="text-center pb-2">Add Your Products</h3>
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="productsName" className="form-label">
                Products Name
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Product Name"
                className="form-control"
                id="productsName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder=" Email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productsPrice" className="form-label">
                Products Price
              </label>
              <input
                type="text"
                name="price"
                placeholder=" Product price"
                className="form-control"
                id="productsPrice"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ProductsURL" className="form-label">
                Products URL
              </label>
              <input
                type="text"
                name="img"
                className="form-control"
                placeholder=" Product Image URL"
                id="ProductsURL"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder=" Description"
                id="description"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="supplierName" className="form-label">
                Supplier Name
              </label>
              <input
                type="text"
                name="supplierName"
                className="form-control"
                placeholder=" Supplier Name"
                id="supplierName"
              />
            </div>

            <button type="submit" className="btn w-100 btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
