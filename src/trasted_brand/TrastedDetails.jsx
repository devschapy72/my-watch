import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import TrastedProduct from "./TrastedProduct";

const TrastedDetails = () => {
  const topParams = useParams().id;
  const { product } = useProductContext();
  const companyData = product.filter(
    (itemsCompany) => itemsCompany.company === topParams
  );
  console.log(companyData);
  return (
    <div className="w-8/12 xs:w-10/12 mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {companyData.map((curItems) => {
        return <TrastedProduct key={curItems.id} {...curItems} />;
      })}
    </div>
  );
};

export default TrastedDetails;
