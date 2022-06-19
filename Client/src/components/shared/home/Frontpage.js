import React from 'react';
// import './Frontpage.css'
import { BrowserRouter as Router,Routes,Outlet, Link } from "react-router-dom";
const Frontpage = () => {
    return (
        <div >

                        <div className="text-center bg-gray-50 text-red-500 py-20 px-6">
                            <h1 className="text-5xl font-bold mt-0 mb-6">Quiz</h1>
                            {/* <h3 class="text-3xl font-bold mb-8">Subeading</h3> */}
                            
                        </div>

                        <div className=" bg-gray-300 rounded-lg p-20  mx-40 flex flex-wrap items-center justify-center  text-base text-gray-800 " role="alert">
                        
                        <Link
                    className=" w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
                    to="/login"
                  >
                    Login
                  </Link>

                        </div>




        </div>
     
    );
}

export default Frontpage;