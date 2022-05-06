import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../Hooks/FIrebase/Firebase";
import useMyItems from "../../Hooks/useMyItems";
import "./AddProducts.css";

const AddProducts = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [items] = useMyItems(user?.email);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://floating-wildwood-16493.herokuapp.com/products");
      setProducts(result?.data);
    })();
  }, [products]);

  //handle submit Form
  const submitForm = async (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      email: e.target.email.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      img: e.target.img.value,
      description: e.target.description.value,
      supplierName: e.target.supplierName.value,
    };

    const result = await axios.post(
      "https://floating-wildwood-16493.herokuapp.com/products",
      product
    );
    e.target.reset();
    toast.success("success", { id: "add-success" });
  };
  return (
    <div>
      <div style={{ zIndex: 0 }} className="row">
        <div style={{ height: "100vh" }} className="col-md-2 sideBer-bg sticky-top">
          <div className="ms-4 mt-5">
            <p className="text-white fs-5 hoverCursor w-100 mx-auto">
              <Link
                to={"/products"}
                className="text-white fs-5 text-decoration-none hoverCursor w-100 mx-auto"
              >
                All Products{" "}
                {items.length === 0 ? (
                  <div class="spinner-border text-primary  text-white " role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  products.length
                )}
              </Link>
            </p>

            <p className="text-white fs-5 hoverCursor w-100 mx-auto">
              <Link
                to={"/myitem"}
                className="text-white fs-5 text-decoration-none hoverCursor w-100 mx-auto"
              >
                My Products{" "}
                {items.length === 0 ? (
                  <div class="spinner-border text-primary  text-white " role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  items.length
                )}
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-10 dashBordBody">
          <div className="p-5">
            <div style={{ minHeight: "90vh" }} className="container  mb-5">
              <div className=" mx-auto w-50">
                <div className="bg-white p-5">
                  <h3 className="text-center registerTextColor pb-2 fw-bold">ADD YOUR PRODUCT</h3>
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <label htmlFor="productsName " className="form-label mb-0">
                        Products Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder=" Product Name"
                        className="form-control inputFieldBorder"
                        id="productsName"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-0">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder=" Email"
                        className="form-control inputFieldBorder"
                        id="email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productsPrice" className="form-label mb-0">
                        Products Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder=" Product price"
                        className="form-control inputFieldBorder"
                        id="productsPrice"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productQuantity" className="form-label mb-0">
                        Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        placeholder=" Quantity"
                        className="form-control inputFieldBorder"
                        id="productQuantity"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="ProductsURL" className="form-label mb-0">
                        Products URL
                      </label>
                      <input
                        type="text"
                        name="img"
                        className="form-control inputFieldBorder"
                        placeholder=" Product Image URL"
                        id="ProductsURL"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label mb-0">
                        Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        className="form-control inputFieldBorder"
                        placeholder=" Description"
                        id="description"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="supplierName" className="form-label mb-0">
                        Supplier Name
                      </label>
                      <input
                        type="text"
                        name="supplierName"
                        className="form-control inputFieldBorder"
                        placeholder=" Supplier Name"
                        id="supplierName"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className=" w-100 submitProduct text-decoration-none border-0 text-white rounded-1  py-2 "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
