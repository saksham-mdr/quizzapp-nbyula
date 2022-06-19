import React, { useState } from "react";



export default function AddProduct() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");


  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [point, setPoint] = useState("");

  // const answer="option1";
  const [answer, setAnswer] = useState("");
  const [price, setPrice] = useState("");
  const SubmtData = async (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData"));
    try {
      const response = await fetch("http://localhost:5000/addFurniture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer+" + storedData.token,
        },
        body: JSON.stringify({
        //  name: name,
          question:question,
          answer:answer,
          // desc: description,
          catagory: category,
          // location: location,
          option1:option1,
          option2:option2,
          option3:option3,
          option4:option4,
          point:point,
          
          // img: image,
          // price: price,
          creatorID: storedData.userId,
        }),
      });

      const responseData = await response.json();

      if (responseData.status == 200) {
        alert(responseData.message);
        // window.location.href = Add;
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="m-auto bg-white py-10 px-32">
        <form action="#" method="POST">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              {/* <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="Name"
                  className="block text-xl font-medium text-gray-700"
                >
                  Furniture Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xl pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div> */}


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
                  onChange={(e) => setQuestion(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>




              <div className="col-span-3">
                <label
                  htmlFor="option1"
                  className="block text-lg font-medium text-gray-700"
                >
                 Option 1

          




                </label>
                <textarea
                 id="option1"
                 rows="2"
                  onChange={(e) => setOption1(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>


              <div className="col-span-3">
                <label
                  htmlFor="option2"
                  className="block text-lg font-medium text-gray-700"
                >
                 Option 2




                </label>
                <textarea
                 id="option2"
                 rows="2"
                  onChange={(e) => setOption2(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>




              <div className="col-span-3">
                <label
                  htmlFor="option3"
                  className="block text-lg font-medium text-gray-700"
                >
                 Option 3



                </label>
                <textarea
                 id="option3"
                 rows="2"
                  onChange={(e) => setOption3(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>




              <div className="col-span-3">
                <label
                  htmlFor="option4"
                  className="block text-lg font-medium text-gray-700"
                >
                 Option 4

                 
                 
                </label>
                <textarea
                 id="option4"
                  rows="2"
                  onChange={(e) => setOption4(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                
                ></textarea>
              </div>
                


              <div className="col-span-3">
                <label
                  htmlFor="Point"
                  className="block text-lg font-medium text-gray-700"
                >
                Point

                 
                 
                </label>
                <textarea
                 id="Point"
                  rows="2"
                  onChange={(e) => setPoint(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                
                ></textarea>
              </div>




              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="Category"
                  name="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  class="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Select Category:</option>
                  <option value="Computer">Computer</option>
                  <option value="Physics">Physics</option>
                  <option value="Maths">Maths</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                </select>
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
                  class="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Select Answer:</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>

                </select>
              </div>

            </div>
          </div> 

          <div className="px-4 py-3  text-right sm:px-6">
            <button
              
              onClick={SubmtData}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
