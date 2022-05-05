import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OurProducts.css";
import Loading from "../../Loading/Loading";
import { FaArrowRight } from "react-icons/fa";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  products.length = 6;
  useEffect(() => {
    fetch("https://floating-wildwood-16493.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length <= 0) {
    return <Loading></Loading>;
  }
  console.log(products);
  return (
    <div style={{ maxWidth: "930px" }} className="my-5 mx-auto container">
      <h2 className="text-center mb-3 fw-bold blue-color text-decoration-underline">
        OUR <span className="orangeColor text-decoration-underline">PRODUCTS</span>{" "}
      </h2>
      <div>
        <div className="row row-cols-1 productsItem mx-auto row-cols-lg-3 row-cols-sm-2 g-4">
          {products &&
            products.map((product) => {
              return (
                <div key={product._id} className="col ">
                  <div style={{ width: "17rem" }} className="card rounded-Card shadow-sm ">
                    <img src={product?.img} className="productsImg" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <div className="d-flex justify-content-between">
                        <p>
                          <strong>
                            price: <span className="orangeColor ">${product.price}</span>
                          </strong>
                        </p>
                        <p>
                          <strong>quantity: {product.quantity}</strong>
                        </p>
                      </div>
                      <p className="card-text">
                        {product?.description.length >= 65
                          ? `${product?.description?.slice(0, 65)}...`
                          : product?.description}
                      </p>
                      <div className="d-flex justify-content-between">
                        <span>Supplier: {product?.supplierName}</span>
                        <Link
                          to={"/inventory/" + product._id}
                          className="btn-color text-decoration-none border-0 text-white rounded-1 px-3 py-2"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
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
    </div>
  );
};

export default OurProducts;
