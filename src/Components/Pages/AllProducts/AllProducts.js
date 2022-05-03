import React from "react";

import { FaPlus } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";

const AllProducts = () => {
  return (
    <div>
      <div className="dashBordBody">
        <div className="p-5">
          <table className="table  table-bg text-white">
            <thead>
              <tr className="">
                <th className="pt-4" scope="col">
                  #
                </th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Img</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tableROw">
                <th scope="row">1</th>
                <td>Otto</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>
            </tbody>
            <p className="pb-2 border-top-0"></p>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
