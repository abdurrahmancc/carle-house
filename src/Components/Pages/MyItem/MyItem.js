import axios from "axios";
import React, { useEffect, useState } from "react";
import auth from "../../Hooks/FIrebase/Firebase";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./MyItem.css";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import useDeleteProduct from "../../Hooks/useDeleteProduct";
import axiosPrivet from "../../Hooks/Api";

const MyItem = () => {
  const [user, loading, error] = useState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [deleteResult] = useDeleteProduct(id);

  useEffect(() => {
    (async () => {
      const email = user.currentUser.email;

      try {
        const url = `https://floating-wildwood-16493.herokuapp.com/myitem?email=${email}`;
        const result = await axiosPrivet.get(
          url /* , {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        } */
        );
        setItems(result.data);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [user, deleteResult]);

  //   console.log(user.currentUser.email);
  return (
    <div className="myItem-page">
      <div>
        <div className="row">
          <div style={{ height: "100vh" }} className="col-md-2 sticky-top sideBer-bg">
            <div className="ms-4 mt-5">
              <p className="text-white fs-5 hoverCursor w-100 mx-auto">
                <Link
                  to={"/products"}
                  className="text-white fs-5 text-decoration-none hoverCursor w-100 mx-auto"
                >
                  All Products
                </Link>
              </p>

              <p className="text-white fs-5 hoverCursor w-100 mx-auto">
                My Products{" "}
                {items.length === 0 ? (
                  <div class="spinner-border text-primary  text-white " role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  items.length
                )}
              </p>

              <p>
                <Link
                  to={"/addproducts"}
                  className="text-white fs-5 text-decoration-none hoverCursor w-100 mx-auto"
                >
                  <FaPlus className="iconPlus"></FaPlus> Add Products
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-10 dashBordBody">
            {items.length === 0 ? (
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
                    {items.map((item) => {
                      return (
                        <tr key={item._id} className="tableROw ">
                          <th style={{ maxWidth: "100px" }} className="ps-4" scope="row">
                            {item?.name}
                          </th>
                          <td>{item?.supplierName}</td>
                          <td>{item?.price}</td>

                          <td className="text-center">
                            <img style={{ width: "50px" }} src={item?.img} />
                          </td>
                          <td className="text-center removeProduct">
                            <span onClick={() => setId(item._id)} className="">
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
    </div>
  );
};

export default MyItem;
