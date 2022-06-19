import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Product(props) {

  const [answer,setAnswer]=useState("");
  const productID=props.data._id;
  // console.log(productID)
  const addToCart = async () => {
    try {
      const storedData = JSON.parse(localStorage.getItem("userData"));

      const response = await fetch(
        `http://localhost:5000/cart/${productID}/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
          body:JSON.stringify({
            answer:answer,
          })

        }
      );
      const responseData = await response.json();

      if (responseData.status == 200) {
        alert(responseData.message);
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div>

    {/* <Link
      key={props.data._id}
       to={`/furniture/${props.data._id}`}
       className="group"
     > */}
      {/* <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={props.data.img}
          alt={props.data.question}
          className="w-80 h-80 object-center object-cover group-hover:opacity-75"
        />
      </div> */}

 <div>
<div class="bg-gray-300 rounded-lg py-5 px-6 mb-4 text-base text-gray-800 mb-3" role="alert">

<div class="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">
<h3 className="mt-4 text-sm text-gray-700">{props.data.question}</h3>
</div>
<div class="bg-indigo-100 rounded-lg py-1 px-6 mb-4 text-base text-indigo-700 mb-3" role="alert"   id ="option1">
<h4>1.{props.data.option1}</h4>
</div> 
<div class="bg-indigo-100 rounded-lg py-1 px-6 mb-4 text-base text-indigo-700 mb-3" role="alert"  id ="option2">
<h4>2.{props.data.option2}</h4>
</div>
<div class="bg-indigo-100 rounded-lg py-1 px-6 mb-4 text-base text-indigo-700 mb-3" role="alert"   id ="option3">
<h4>3.{props.data.option3}</h4>
</div>

<div class="bg-indigo-100 rounded-lg py-1 px-6 mb-4 text-base text-indigo-700 mb-3" role="alert"    id ="option4">
<h4>4.{props.data.option4}</h4>
</div>
     
<div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700"
                >
                 Answer
                </label>
                <select
                  id="Answer"
                  name="Category"
                   onChange={(e) => setAnswer(e.target.value)}
                  class="block py-1 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0" >Select Answer:</option>
                  <option value="option1">{props.data.option1}</option>
                  <option value="option2">{props.data.option2}</option>
                  <option value="option3">{props.data.option3}</option>
                  <option value="option4">{props.data.option4}</option>

                </select>
                <br></br>
                <button type="button" onClick={addToCart} class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
              </div>
</div>
</div>





     
      
      
      
      <br></br>
    {/* </Link> */}
    </div>
    
  );
}
