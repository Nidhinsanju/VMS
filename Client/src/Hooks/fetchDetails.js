import axios from "axios";
import { SERVER_URL } from "../Constents/URL";
export default async function Details(PO, DC, Vehiclenum, customerID) {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const res = await axios.put(
    SERVER_URL + "/dashboard/checkin/",
    {
      VehicleNumber: Vehiclenum,
      DC_num: DC,
      PO_num: PO,
      customerID: customerID,
    },
    { headers }
  );
  return res;
}
