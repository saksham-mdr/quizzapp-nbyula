import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./product.css";


// export default function Product() {
//   const [loadedData, setLoadedData] = useState();
//   useEffect(() => {
//     const sendRequest = async () => {
//       const storedData = JSON.parse(localStorage.getItem("userData"));
//       try {
//         const response = await fetch(`http://localhost:5000/myfurniture`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer+" + storedData.token,
//           },
//         });

//         const responseData = await response.json();
//         setLoadedData(responseData);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     sendRequest();
//   }, []);
//   return (
//     <div className="bg-white">
//       <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {loadedData?.map((product) => (
//             <Link
//               key={product._id}
//               to={`/furniture/${product._id}`}
//               className="group"
//             >
//               <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-80 h-80 object-center object-cover group-hover:opacity-75"
//                 />
//               </div>
//               <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//               <p className="mt-1 text-lg font-medium text-gray-900">
//                 {product.price}
//               </p>
//             </Link>
//           )
//           )
//           }
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Product(props) {
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

  // const onEdit = async (id) => {

  //    const newQuestion=prompt("enter new question:");
  //    const newoption1=prompt("enter new option1:");
  //   axios.put('http://localhost:5000/furniture/update',{ newQuestion:newQuestion})
    
   
  // };


 



  return (
    <div>
    {/* <button><a href="addproduct">Add product</a></button> */}
    <div className="container" id="container">
      {loadedData?.map((val, i) => {
        return (
          <div key={i}>
          

            <div>
<div class="bg-gray-300 rounded-lg  m-5 py-5 px-6 mb-4 text-base text-gray-800 mb-3" 	 role="alert">

<div className="col-span-6">
                <label
                  htmlFor="question"
                  className="block text-lg font-medium text-gray-700"
                >
                 Question
                </label>
                <textarea
                 id="question"
                  rows="5"
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >{val.question}</textarea>
              </div>
<br></br>

              <div className="col-span-3">
                <label
                  htmlFor="option1"
                  className="block text-lg font-medium text-gray-700" >
               

                </label>
                <textarea
                 id="option1"
                 rows="1"
                 
                  class="block mt-0.5 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >{val.option1}</textarea>
              </div>
              <br></br>


              <div className="col-span-3">
                <label
                  htmlFor="option2"
                  className="block text-lg font-medium text-gray-700" >
              

                </label>
                <textarea
                 id="option2"
                 rows="1"
                 
                  class="block mt-0.5 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >{val.option2}</textarea>
              </div>
              <br></br>


              <div className="col-span-3">
                <label
                  htmlFor="option3"
                  className="block text-lg font-medium text-gray-700" >
              

                </label>
                <textarea
                 id="option3"
                 rows="1"
                 
                  class="block mt-0.5 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >{val.option3}</textarea>
              </div>
              <br></br>


              

              
             
              <div className="col-span-3">
                <label
                  htmlFor="option4"
                  className="block text-lg font-medium text-gray-700" >
              

                </label>
                <textarea
                 id="option4"
                 rows="1"
                 
                  class="block mt-0.5 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >{val.option4}</textarea>
              </div>
              <br></br>
     
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
                  // onChange={(e) => setAnswer(e.target.value)}
                  class="block py-1 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={val.answer}>current {val.answer}</option>
                  <option value="option1">{val.option1}</option>
                  <option value="option2">{val.option2}</option>
                  <option value="option3">{val.option3}</option>
                  <option value="option4">{val.option4}</option>

                </select>
                <br></br>
          



                <button type="button"
                onClick={() => onDelete(val._id)}
                 class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                
                
               
              </div>
</div>
</div>



          </div>
        );
      })}
    







    
    







  </div>
  </div>
  );
}
