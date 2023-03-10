import React from "react";
import Product from "../../components/Product";
import { products } from "../../data";

const Products = () => {
  return (
    <div className="mt-6 md:mt-4 gap-x-6 gap-y-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 grid-flow-row-dense">
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
};

export default Products;
