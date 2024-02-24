import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PriceFormat from "../components/PriceFormat";
import Stars from "../components/Stars";
import AddCart from "../components/AddCart";

const Details = () => {
  const { id } = useParams();
  const { product } = useProductContext();

  const productDetails = product.find((itemsProduct) => itemsProduct.id === id);

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  const {
    id: none,
    company,
    details,
    image,
    name,
    price,
    stars,
    stock,
  } = productDetails;

  return (
    <div className="w-10/12 xs:w-8/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div className="flex justify-center md:justify-end ">
        <figure>
          <img
            src={image}
            alt={name}
            className="h-40 sm:h-44 md:h-60 object-cover"
          />
        </figure>
      </div>
      <div>
        <p className="text-3xl font-mono">{company}</p>
        <p className="text-lg my-3 font-mono">
          Model: <span className="text-md font-serif">{name}</span>
        </p>
        <p className="text-lg font-mono text-red-500">
          Price:{" "}
          <span className="text-md">
            <PriceFormat price={price} />
          </span>
        </p>

        <Stars stars={stars} />

        <hr />
        <p className="my-3 text-sm font-light">{details}</p>
        <hr />
        <p className="my-5">
          ID: <span>{id}</span>
        </p>
        <AddCart product={productDetails} />
      </div>
    </div>
  );
};

export default Details;
