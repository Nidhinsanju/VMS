import axios from "axios";
import { useEffect, useState } from "react";
import { Admin_URL } from "../Constents/AdminUrl";
import { LogoutButton } from "../utis/LogoutButton";
import Error from "./Errorpage";
export default function SecurityCheck() {
  const token = localStorage.getItem("token");
  const [PO_number, setPO_number] = useState("");
  const [count, setCount] = useState(0);
  const handleCheckboxClick = (isChecked) => {
    setCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  if (token) {
    return (
      <div className="p-1">
        <div className="m-5 p-5  text-xl	">
          Entry Purchase Order Number
          <input
            type="text"
            id="email"
            className="bg-gray-50 border  border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5"
            placeholder="123"
            onChange={(e) => {
              setPO_number(e.target.value);
            }}
            required
          />
          <fieldset className="text-black flex flex-wrap m-5">
            <legend className="sr-only text-black ">Checkbox variants</legend>
            <div className="flex p-2 items-center mb-4 ">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Tires Good
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Engine Oil
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Wiper Fluid Refilled
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Suspensions Good
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Water Wash
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Break Oil Refilled
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Replacements Done
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                General check-up
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Customer complaints checked
              </label>
            </div>
            <div className="flex p-2 items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                onChange={(e) => handleCheckboxClick(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Ready for Delivery
              </label>
            </div>
          </fieldset>
          <button
            className="border border-black rounded p-1 m-1 mb-4"
            onClick={() => {
              const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              };
              const res = axios.put(
                Admin_URL + "/update",
                {
                  PO_num: PO_number,
                  data: count,
                },
                { headers }
              );

              alert("Updated Successfully");
            }}
          >
            Submit
          </button>
          <a href="/adminlogin">
            <LogoutButton className="border border-black rounded p-1 flex mt-10">
              Log-out
            </LogoutButton>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Error />
    </div>
  );
}
