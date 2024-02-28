import { SERVER_URL } from "../Constents/URL";
import axios from "axios";

export async function status(customerID) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const token = localStorage.getItem("token");
  const res = await axios.post(
    SERVER_URL + "/dashboard/status",
    {
      CustomerID: customerID,
    },
    { headers }
  );
  return res;
}
