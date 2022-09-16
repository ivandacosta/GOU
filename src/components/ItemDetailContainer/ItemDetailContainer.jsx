import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
//style
import "./ItemDetailContainer.css";

//components
import products from "../products/ItemProducts";
import ItemDetail from "../ItemList/ItemList";

function ItemDetailContainer() {
  const [Products, SetProducts] = useState([]);
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
        SetLoading(false);
      }, 2000);
    });
    getData.then((res) => SetProducts(res));
  }, []);

  if (Loading) {
    return (
      <div className="CircularProgress">
        <CircularProgress />;
      </div>
    );
  } else {
  }

  return (
    <div className="ItemDetailContainer">
      {Products.map((product) => {
        return (
          <div className="ItemDetailContainer" key={product.id}>
            {/* <Link className="Link" to={`/detail/${product.id}`}> */}
            <ItemDetail product={product} />
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetailContainer;
