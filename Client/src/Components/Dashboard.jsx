import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Details from "../Hooks/fetchDetails";

export default function Dashboard() {
  const [image, setImage] = useState("");
  const [Vehiclenum, setVehiclenum] = useState("");
  const [DC, setDC] = useState("");
  const [PO, setPO] = useState("");
  const [data, setData] = useState("");

  const SubmitData = async () => {
    try {
      const res = await Details(PO, DC, Vehiclenum);
      setData(res.data.POnumber);
      console.log(data);
    } catch (error) {
      console.log(error);
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

  return (
    <div>
      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="block w-1/2 text-sm text-gray-900     cursor-pointer  focus:outline-none "
          aria-describedby="user_avatar_help"
          accept="image/*"
          type="file"
          onChange={ImageUpload}
        />
        <div className="mt-1 text-sm text-black">Vehicle Photo</div>
        <figure className="mt-10 flex border max-h-72 max-w-85">
          {image ? (
            <div className="border  p-2 h-15 overflow-hidden">
              <img src={image} alt="image" className="h-32 w-32" />
            </div>
          ) : null}
        </figure>
        <div className="relative z-0 w-full mb-5 group mt-8 text-black">
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

        <button
          type="submit"
          onClick={() => SubmitData()}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {data ? <Display data={data} /> : <Display />}
    </div>
  );
}

function Display(props) {
  const data = props.data;
  if (data) {
    return (
      <div>
        <p>Vendor Name: {data?.Vendor_Name}</p>
        <p>Purchase Order: {data?.Purchase_Order}</p>
        <p>Company Name: {data?.Vendor_company_name}</p>
        <p>Product List: {data?.Vehicle_Number}</p>
        <div>
          <p>Processing....</p>
        </div>
      </div>
    );
  }
}
