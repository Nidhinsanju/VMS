import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../Constents/URL";
import { useEffect } from "react";
export default async function Details(PO, DC, Vehiclenum, customerID) {
  const res = await axios.put(SERVER_URL + "/dashboard/checkin/", {
    VehicleNumber: Vehiclenum,
    DC_num: DC,
    PO_num: PO,
    customerID: customerID,
  });
  return res;
}
