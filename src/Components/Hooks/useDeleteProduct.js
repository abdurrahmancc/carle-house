import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useDeleteProduct = (id) => {
  const [deleteResult, setDeleteResult] = useState("");
  useEffect(() => {
    (async () => {
      if (id) {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
          const url = `https://floating-wildwood-16493.herokuapp.com/product/${id}`;
          const result = await axios.delete(url);
          setDeleteResult(result);
          toast.success("Delete Success", { id: "deleteSuccess" });
        }
      }
    })();
  }, [id]);
  return [deleteResult];
};

export default useDeleteProduct;
