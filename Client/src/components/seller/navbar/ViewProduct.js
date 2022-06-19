// import React from 'react';

// const ViewProduct = () => {
//     return (
//         <div>
//             <p>Hello</p>
//         </div>
//     );
// }

// export default ViewProduct;
import { useState, useEffect, useContext } from "react";
import Footer from "./Footer";

import "./css/product.css";

const myProduct = () => {
  const [loadedData, setLoadedData] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sendRequest = async () => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await fetch(`http://localhost:5000/myfurniture/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer+" + storedData.token,
          },
        });

        const responseData = await response.json();
        setLoadedData(responseData.furnitures);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);

  const onDelete = async (id) => {
    
    const storedData = JSON.parse(localStorage.getItem("userData"));
    
    try {
      const response = await fetch(`http://localhost:5000/furniture/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer+" + storedData.token,
        },
      });

      const responseData = await response.json();

      if (responseData.status == 200) {
        alert(responseData.message);
        window.location.href = "myProduct";
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button><a href="addproduct">Add product</a></button>
      <div className="container" id="container">
        {loadedData?.map((val, i) => {
          return (
            <div key={i}>
              <div id="arrange">
                <div className="boxe">
                  <div className="productCards" >
                    <img src={val.img} alt={val.name} />
                    <p>{val.name}</p>
                    <p>{val._id}</p>
                    <div>{val.desc}</div>
                    <span>{`$${val.price}`}</span>
                  </div>

                  <div className="buy-btn">
                    <a onClick={() => onDelete(val._id)}>Delete</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default myProduct;
