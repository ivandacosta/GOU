import React from "react";
import { Link } from "react-router-dom";
//style
import "./ItemList.css";

function ItemDetail({ product }) {
  return (
    <div className="Item">
      <img src={product.images} alt="product" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="AddToCart">
        <Link to={`detail/${product.id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
