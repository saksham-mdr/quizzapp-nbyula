import React, { useState } from "react";

import "./login.css";

const Signup = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [role,  setRole]  = useState("");

  const SubmitData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          phoneNumber: phone,
          role: role,
          username: fname + " " + lname,
        }),
      });

      const responseData = await response.json();
      if (responseData.status == 200) {
        setEmail("");
        setPassword("");
        setFname("");
        setLname("");
        setPhone("");
        setRole("");
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
      <div className="wrapper">
        <form className="form-signup">
          <h2 className="form-signup-heading">Please Register</h2>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={fname}
            placeholder="Firstname"
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={lname}
            name="lastname"
            placeholder="Lastname"
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-control"
            id="Id"
            name="email"
            value={email}
            placeholder="Gmail ID"
            pattern=".+@gmail\.com"
            size="30"
            onChange={(e) => setEmail(e.target.value)}
            required
          />



        



          <input
            type="number"
            className="form-control"
            id="number"
            value={phone}
            name="phone"
            placeholder="Contact Number"
            maxlength="10"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            name="password"
            placeholder="Set A Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />



              {/* <input
            type="text"
            className="form-control"
            id="role"
            value={role}
            name="role"
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
            required
          /> */}



<div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="User Type"
                  className="block text-md font-medium text-gray-700"
                >
                  User Type
                </label>
                <select
                  id="role"
                  name="role"
                  autoComplete="role"
                  className="mt-1 block border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option>Select</option>
                  <option>Student</option>
                  <option>Teacher</option>
                </select >
              </div>




        


<button onClick={SubmitData} type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
