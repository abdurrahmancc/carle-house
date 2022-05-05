import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Inventory.css";
import { FaArrowRight } from "react-icons/fa";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const inputQuantityRef = useRef();
  const [dependency, setDependency] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://floating-wildwood-16493.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const findItem = data.find((item) => item._id === id);
        setProduct(findItem);
      });
  }, [dependency]);
  console.log(product);

  if (!product || dependency) {
    return <Loading></Loading>;
  }

  const updateProduct = async (id) => {
    setDependency(true);
    const result = await axios.put(`https://floating-wildwood-16493.herokuapp.com/product/${id}`, {
      quantity: product?.quantity - 1,
    });
    setDependency(false);
    console.log(result);
  };
  const updateAddProduct = async (id) => {
    if (!/^\d*[1-9]\d*$/.test(inputQuantityRef.current.value)) {
      setError(true);
      toast.error("Enter the positive number", { id: "incorrect-number" });
      inputQuantityRef.current.value = "";
      return;
    }
    setError(false);
    setDependency(true);
    const result = await axios.put(`https://floating-wildwood-16493.herokuapp.com/product/${id}`, {
      quantity: parseInt(product?.quantity) + parseInt(inputQuantityRef.current.value),
    });
    setDependency(false);
    toast.success("Update Quantity", { id: "Update-Quantity" });
    inputQuantityRef.current.value = "";
  };
  return (
    <div style={{ minHeight: "100vh" }} className=" my-5 container mx-auto">
      {/* <h1 className="text-center">Inventory {product?._id}</h1> */}
      <div className="d-flex justify-content-center">
        <div className="card  mb-3">
          <div className="row g-0">
            <div className="col-lg-6">
              <img
                src={
                  product?.img ||
                  "https://www.alro-group.com/wp-content/uploads/2014/12/placeholder.jpg"
                }
                className=" responsive-img w-100 mx-auto rounded-start"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="card-body bg-dark h-100 rounded-end">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <td colSpan={3} className="text-center py-2 fs-5">
                        Update Inventory
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>Name: </td>
                      <td colSpan={3}>{product?.name}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Price: </td>
                      <td colSpan={3}>{product?.price}</td>
                    </tr>

                    <tr>
                      <td colSpan={2}>Quantity: </td>
                      <td colSpan={3}>{product?.quantity}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Supplier: </td>
                      <td colSpan={3}>{product?.supplierName}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Description: </td>
                      <td colSpan={3}>{product?.description?.slice(0, 300)}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Product ID: </td>
                      <td colSpan={3}>{product?._id}</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <button
                      onClick={() => updateAddProduct(product._id)}
                      className="deliver-btn fw-bold border-0 me-2  rounded-1 px-4 py-2"
                    >
                      UPDATE
                    </button>
                    <input
                      ref={inputQuantityRef}
                      type="text"
                      name="quantity"
                      placeholder=" Enter the quantity"
                      className={`form-control py-2 ${
                        error ? "border-danger border-3" : "border-0"
                      }`}
                    />
                  </div>
                  <button
                    onClick={() => updateProduct(product._id)}
                    className="deliver-btn fw-bold border-0  rounded-1 px-4 py-2"
                  >
                    DELIVER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <div className="text-center mt-5">
          <strong>
            {" "}
            <Link
              to={"/products"}
              className="btn-color text-decoration-none border-0 px-3 fw text-white rounded-1 px-2 py-3"
            >
              Manage Inventory<FaArrowRight className="ms-3 "></FaArrowRight>
            </Link>
          </strong>
        </div>
      }
    </div>
  );
};

export default Inventory;
