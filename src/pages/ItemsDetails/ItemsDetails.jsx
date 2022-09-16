import React, { useEffect, useState } from "react";
import products from "../../components/products/ItemProducts";
import { useParams } from "react-router-dom";

//components
// import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetails = () => {
  let { id } = useParams();

  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.id === Number(id)));
      }, 0);
    });
    getData.then((res) => SetProducts(res));
  });

  return (
    <div>
      {Products.map((prod) => {
        return <ItemDetail product={prod} />;
      })}
    </div>
  );
};

export default ItemDetails;
