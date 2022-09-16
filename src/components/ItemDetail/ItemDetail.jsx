import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//style
import "./ItemDetail.css";
import Button from "@mui/material/Button";

//components
import ItemCount from "../ItemCount/ItemCount";

//context
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [Counter, SetCounter] = useState([1]);
  const [Compra, SetCompra] = useState(false);

  const { addProduct } = useCartContext();

  function onAdd(quantity) {
    SetCompra(true);
    addProduct(product, quantity);
  }

  return (
    <div className="ContainerDescription">
      <div className="Item">
        <img src={product.images} alt="product" />

        <h3>{product.name}</h3>
        {/* <p>{product.description}</p> */}
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        {!Compra ? (
          <ItemCount
            initial={1}
            stock={product.stock}
            onAdd={onAdd}
            Counter={Counter}
            SetCounter={SetCounter}
          />
        ) : (
          <Link className="Link" to="/cart">
            <Button className="ButtonMUI" variant="contained">
              Finalizar Compra
            </Button>
          </Link>
        )}
      </div>

      <div className="Description">
        <div className="MoreDetail">
          <h3>Detalles</h3>
          <h5>Stock disponible:</h5>
          <p>
            {product.stock} <strong>Unidades</strong>
          </p>

          <h5>Estado:</h5>
          <p>
            <strong>{product.status}</strong>
          </p>

          <h5>Envio:</h5>
          <p>
            <strong>{product.shippment}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
