import { SERVER_URL } from "../Constents/URL";
import axios from "axios";

export async function status(customerID) {
  const res = await axios.post(SERVER_URL + "/dashboard/status", {
    CustomerID: customerID,
  });
  return res;
}
