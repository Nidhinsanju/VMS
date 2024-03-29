import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../Constents/URL";
import axios from "axios";

export function CheckoutButton() {
  const navigate = useNavigate();
  const customerID = localStorage.getItem("CustomerID");
  const token = localStorage.getItem("token");
  const Checkout = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.put(
        SERVER_URL + "/checkout",
        {
          CustomerID: customerID,
        },
        { headers }
      );
      if (res.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("CustomerID");
        alert("Checked out Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="mt-5">
      <button
        onClick={() => {
          Checkout();
        }}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Check-Out
      </button>
    </div>
  );
}
