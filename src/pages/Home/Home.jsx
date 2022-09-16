import React from "react";
import "./Home.css";
//components
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import TheCarousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <TheCarousel />
      <div class="contenedor">
        <h1>
          Productos destacados..<span>&#160;</span>
        </h1>
      </div>
      <ItemDetailContainer />
    </div>
  );
}

export default Home;
