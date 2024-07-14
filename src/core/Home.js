import React, { useState, useEffect } from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { ColorRing } from 'react-loader-spinner';

export default function Home() {



  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error)
        console.log(error);
      } else {
        setProducts(data)
        setIsLoading(false)
      }
    })
  }

  useEffect(() => {
    loadAllProduct();
  })

  const spinnerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) ",
    width: "70%",
    height: "70%",
  }

  return (

    <Base title="Home Page" description="welcome to the tshirt store">

      <br />
      <div className="row text-center">
        <div className="row">

          {isLoading ? <center><ColorRing
  visible={true}
  height="180"
  width="180"
  ariaLabel="color-ring-loading"
  wrapperStyle={spinnerStyle}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /> </center> : products.map((product, index) => {
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
