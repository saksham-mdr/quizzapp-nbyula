import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth-context";

import logo from "../../../image/furnitureland.png";

import { Link } from "react-router-dom";
import "./Navbar";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const Logout = () => {
    auth.logout();
  };
  return (
    <nav class="bg-white shadow dark:bg-gray-800 pt-4">
      <div class="container px-6 py-3 mx-auto">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <Link
              //   class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              //  to="/"
              // >
              //   <img
              //     class="inline"
              //     width="250px"
              //     src={logo}
              //     alt="FurnitureLand"
               >
                
                <div class="text-center bg-gray-10 text-red-500 py-0 px-20 mr-40">
                            <h1 class="text-5xl font-bold mt-0 mb-6">Quiz</h1>
                            {/* <h3 class="text-3xl font-bold mb-8">Subeading</h3> */}
                            
                        </div>
              </Link>

              {/* <div class="hidden mx-10 md:block">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <input
                    type="text"
                    class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Search"
                    size="75"
                  />
                </div>
              </div> */}
            </div>

            <div class="flex md:hidden">
              <button
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="items-center md:flex">
            <div class="flex flex-col text-center lg:flex-row lg:mx-6">
               
             
             
              {/* <Link
                class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0 "
                to="/shop"
              >
                Shop
              </Link>*/}


{auth.isLoggedIn && auth.role === "Buyer"  && (
               <span>
                 <Link
                    class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                    to="/shop"
                  >
                    Questions
                  </Link> 
               </span>
              )}

              {auth.isLoggedIn && (
                <span>
                  <Link
                    class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                    to="/MyProfile"
                  >
                    Profile
                  </Link>
                  
               
                 <Link
                   class="w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-red-900	 md:mx-2 md:w-auto"
                   onClick={Logout}
                   to="/"
                 >
                   Logout
                 </Link>
               </span>
              )}



            

               {!auth.isLoggedIn && (
                <span>
                  {/* <Link
                    class=" w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    class=" w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                    to="/signup"
                  >
                    Register
                  </Link> */}

                  <Link
              
              class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
              to="/"
            >
              Home
            </Link> 
                </span>
              )} 






            </div>
{/* 
            <div class="mt-3 md:hidden">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>
            </div> */}
          </div>
        </div>
        {/** 
        <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden text-center">
          <a
            class="mx-4 text-base leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
          >
            Bedroom
          </a>
          <a
            class="mx-4 text-base leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
          >
            Living Room
          </a>
          <a
            class="mx-4 text-base leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
          >
            Office
          </a>
          <a
            class="mx-4 text-base leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
          >
            Dining
          </a>
          <a
            class="mx-4 text-base leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
          >
            Kitchen
          </a>
        </div>
         */}
      </div>
    </nav>
  );
};

export default Navbar;
