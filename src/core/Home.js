import React, { useState, useEffect } from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {



  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error)
        console.log(error);
      } else {
        setProducts(data)
      }
    })
  }

  useEffect(() => {
    loadAllProduct();
  })


  return (
    <Base title="Home Page" description="welcome to the tshirt store">

      <br />
      <div className="row text-center">
        <div className="row">

          {products.map((product, index) => {
            return (
              <div key={index} className="col-md-4 mb-4">
                <Card product={product} />

              </div>
            )

          })}


        </div>
      </div>
    </Base>
  );
}
