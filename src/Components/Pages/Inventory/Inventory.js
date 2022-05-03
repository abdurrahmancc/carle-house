import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Inventory.css";
const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://floating-wildwood-16493.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const findItem = data.find((itme) => itme._id === id);
        setProduct(findItem);
      });
  }, []);
  console.log(product);

  return (
    <div style={{ minHeight: "100vh" }} className=" mt-5 container mx-auto">
      {/* <h1 className="text-center">Inventory {product?._id}</h1> */}
      <div className="d-flex justify-content-center">
        <div className="card  mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={product?.img}
                className=" responsive-img w-100 mx-auto rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body bg-dark h-100">
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
                      <td colSpan={3}>{product.description}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Product ID: </td>
                      <td colSpan={3}>{product?._id}</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-end">
                  <button className="deliver-btn fw-bold border-0  rounded-1 px-5 py-2">
                    DELIVER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
