import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const useDeleteProduct = async ({ _id }) => {
  const proceed = window.confirm("Are you sure want to delete");
  if (proceed) {
    const url = `https://floating-wildwood-16493.herokuapp.com/product/${_id}`;
    const result = await axios.delete(url);
    return toast.success("delete", { id: "deleteProduct" });
  }
};

export default useDeleteProduct;
