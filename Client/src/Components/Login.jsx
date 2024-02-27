import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SERVER_URL } from "../Constents/URL";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-w-2/4 max-w-lg mx-auto  mt-28 bg-white border border-blue-300 rounded-lg flex flex-col shadow items-center justify-center  p-12 ">
      <form className="space-y-5 w-full" onSubmit={(e) => e.preventDefault()}>
        <p className="flex font-semibold text-xl ">Welcome back</p>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-black "
          >
            Your email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="user@gmail.com"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-black"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="123456"
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            submitData(e, username, password);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <p>
          New User...?<a href="/signup">Sign-Up</a>
        </p>
      </form>
    </div>
  );

  async function submitData(e, username, password) {
    e.preventDefault();
    if (username !== undefined && password !== undefined) {
      const res = await axios.post(SERVER_URL + "/login/", {
        username: username,
        password: password,
      });
      if (res.status !== 200) {
        alert("Invalid username or password");
        return;
      }
      const token = res.data.token;
      const CustomerID = res.data.user.CustomerID;
      localStorage.setItem("token", token);
      localStorage.setItem("CustomerID", CustomerID);
      navigate("/dashboard");
    } else {
      alert("username or passowrd not found");
    }
  }
}
export default Login;
