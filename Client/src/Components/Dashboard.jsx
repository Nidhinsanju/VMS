import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Details from "../Hooks/fetchDetails";
import axios from "axios";
import { SERVER_URL } from "../Constents/URL";
import { LogoutButton } from "../utis/LogoutButton";
import StatusBar from "./StatusBar";
export default function Dashboard() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [Vehiclenum, setVehiclenum] = useState("");
  const [DC, setDC] = useState("");
  const [PO, setPO] = useState("");
  const [PO_num, setPO_num] = useState("");
  const [checkin, setCheckin] = useState("");
  const [data, setData] = useState("");
  const token = localStorage.getItem("token");
  const customerID = localStorage.getItem("CustomerID");
  const memoizedValues = useMemo(
    () => ({
      image,
      status,
      Vehiclenum,
      DC,
      PO,
      PO_num,
      checkin,
      data,
    }),
    [image, status, Vehiclenum, DC, PO, PO_num, checkin, data]
  );
  useEffect(() => {
    const fetchuser = async () => {
      try {
        const user = await axios.post(SERVER_URL + "/dashboard/status", {
          CustomerID: customerID,
        });
        setCheckin(user.data.check_in);
        setPO_num(user.data.PO_num);
        const percentage = (user.data.Status / 10) * 100;
        setStatus(percentage);
      } catch (error) {
        alert("Something went Wrong");
      }
    };
    fetchuser();
  }, [customerID]);

  if (token) {
    const SubmitData = async () => {
      try {
        if (
          memoizedValues?.PO &&
          memoizedValues?.DC &&
          memoizedValues?.Vehiclenum
        ) {
          const res = await Details(
            memoizedValues?.PO,
            memoizedValues?.DC,
            memoizedValues?.Vehiclenum,
            customerID
          );
          setData(res.data.POnumber);
          return;
        }
        alert("invalid credentials ");
      } catch (error) {
        alert("Something went Wrong");
      }
    };
    const ImageUpload = (e) => {
      const rawimage = e.target.files && e.target.files[0];
      if (rawimage) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(rawimage);
      }
    };
    if (checkin) {
      return (
        <div className=" mt-10 flex w-full flex-col items-center justify-center h-1/2">
          <div className="flex-col w-2/5">
            <StatusBar status={memoizedValues?.status} />
          </div>
          <dd className="text-black  text-lg italic">Puchase Order Number</dd>
          <dt className=" text-3xl font-extrabold">{memoizedValues?.PO_num}</dt>
        </div>
      );
    }
    return (
      <div className="  p-10">
        <form
          className="max-w-md mx-auto mt-10"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mt-1 text-sm text-black ">Upload Photo</div>
          <input
            className="block w-1/2 text-sm text-gray-900  cursor-pointer  focus:outline-none"
            aria-describedby="user_avatar_help"
            accept="image/*"
            type="file"
            onChange={ImageUpload}
          />
          <figure className="mt-10 flex justify-center  max-h-72 max-w-85">
            {memoizedValues.image ? (
              <div className="border  p-1 h-15 overflow-hidden">
                <img
                  src={memoizedValues?.image}
                  alt="image"
                  className="h-52 w-52"
                />
              </div>
            ) : null}
          </figure>
          <div className="relative z-0 w-full mb-5 group  text-black">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setVehiclenum(e.target.value);
              }}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Vehicle Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setDC(e.target.value);
              }}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Delivery Challan Number(D.C)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setPO(e.target.value);
              }}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Purchase Order number(P.O)
            </label>
          </div>
          <div className="flex  items-center justify-between ">
            <button
              type="submit"
              onClick={() => SubmitData()}
              className="focus:outline-none text-white bg-blue-600 hover:bg-blue-600 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <LogoutButton />
          </div>
        </form>
        {data ? <Display data={data} /> : <Display />}
      </div>
    );
  } else {
    alert("Login to Continue");
    useEffect(() => {
      const navigateHome = () => {
        navigate("/");
      };
      navigateHome();
    }, [token]);
  }
}

function Display(props) {
  const data = props.data;
  if (data) {
    return (
      <div className="mt-10 w-full flex-wrap flex flex-col ">
        <h5 className="text-xl font-bold text-black">
          Brand:{data?.Vendor_Name}
        </h5>
        <h6 className="text-lg font-bold dark:text-black">
          {data?.Vendor_company_name}
        </h6>
        {data?.Products && data?.Products.length > 0 ? (
          <div className="w-full flex flex-row  flex-wrap ">
            {data?.Products.map((products, index) => (
              <div key={index} className="flex flex-row ">
                <div className=" rounded-lg shadow dark:bg-gray-800 m-3 flex flex-wrap  dark:border-gray-700">
                  <img
                    className="p-2 rounded-t-lg max-h-48  min-w-80  max-w-full min-h-40 "
                    src={products?.ProductImage}
                    alt="image"
                  />
                  <div className="p-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <span>{products?.Product_Name}</span>
                    </h5>
                    <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <p>Price: {products?.Price}/-</p>
                      <p>Quanity: {products?.Quantity}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )}
      </div>
    );
  }
}
