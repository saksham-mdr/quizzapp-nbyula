import React, { Fragment, useState, useEffect } from "react";
import "./cart.css";
import CartItemCard from "./CartItemCard";
import LoadingSpinner from "../loadingSpinner";


const Cart = () => {
  const [loadedData, setLoadedData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [Total, setTotal] = useState();

    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData"));
    

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const storedData = JSON.parse(localStorage.getItem("userData"));

        const response = await fetch("http://localhost:5000/user/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer+" + storedData.token,
          },
        });
        const responseData = await response.json();
        console.log(responseData)
        setLoadedData(responseData.cart);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);

  return (
    <div>
      <div class="main">
        <h1>Shopping cart</h1>

        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Details</p>

              <p>Subtotal</p>
            </div>

            <div className="cartContainer">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <div>
                  {loadedData?.map((val, i) => {
                    return (
                      <div>
                        <CartItemCard
                          item={val}
                          deleteCartItems={deleteCartItems}
                        />
                        
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="cartGrossTotal">
              <div></div>

              <div className="cartGrossTotalBox">
                <p>Gross Total</p>
                <p>₹{Total}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={SubmtData}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default Cart;
