import React, { useEffect, useState } from "react";
import "./Products.css";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { async } from "@firebase/util";
import axios from "axios";
import { Link } from "react-router-dom";
import useDeleteProduct from "../../Hooks/useDeleteProduct";
import useMyItems from "../../Hooks/useMyItems";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/FIrebase/Firebase";
import Loading from "../Loading/Loading";

const Products = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [deleteResult] = useDeleteProduct(id);
  const [items] = useMyItems(user?.email);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://floating-wildwood-16493.herokuapp.com/products");
      setProducts(result?.data);
    })();
  }, [deleteResult]);

  /*   //handle Delete
  const handleDelete = async (_id) => {
    console.log(_id);
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `https://floating-wildwood-16493.herokuapp.com/product/${_id}`;
      const result = await axios.delete(url);
      console.log(result);
    }
  }; */
  // console.log(products);
  return (
    <div>
      <div className="row">
        <div style={{ height: "100vh" }} className="col-md-2 sticky-top sideBer-bg">
          <div className="ms-4 mt-5">
            <p className="text-white fs-5 hoverCursor w-100 mx-auto">
              All Products{" "}
              {products.length === 0 ? (
                <div class="spinner-border text-primary text-white " role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                products.length
              )}
            </p>
            <p className="text-white fs-5 hoverCursor w-100 mx-auto">
              <Link
                to={"/myitem"}
                className="text-white fs-5 text-decoration-none hoverCursor w-100 mx-auto"
              >
                My Products{" "}
                {items.length === 0 ? (
                  <div class="spinner-border text-primary text-white " role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  items.length
                )}
              </Link>
            </p>
            <Link
              to={"/addproducts"}
              className="text-white fs-5 text-decoration-none hoverCursor w-100 mx-auto"
            >
              <FaPlus className="iconPlus"></FaPlus> Add Products
            </Link>
          </div>
        </div>
        <div className="col-md-10 dashBordBody">
          {products.length === 0 ? (
            <div className="dashBoard-Spinner d-flex justify-content-center align-items-center">
              <div class="spinner-border text-primary mt-5 text-white" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="p-5">
              <table className="table  table-bg text-white">
                <thead>
                  <tr className="">
                    <th className="pt-4 ps-4" scope="col">
                      Name
                    </th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Price</th>
                    <th className="text-center" scope="col">
                      Img
                    </th>
                    <th className="text-center" scope="col">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product._id} className="tableROw ">
                        <th style={{ maxWidth: "100px" }} className="ps-4" scope="row">
                          {product?.name}
                        </th>
                        <td>{product?.supplierName}</td>
                        <td>{product?.price}</td>

                        <td className="text-center">
                          <img style={{ width: "50px" }} src={product?.img} />
                        </td>
                        <td className="text-center removeProduct">
                          <span onClick={() => setId(product._id)} className="">
                            {" "}
                            <FaTrashAlt />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* <p className="pb-2 border-top-0"></p> */}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
