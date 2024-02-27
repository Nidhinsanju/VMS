import { SERVER_URL } from "../Constents/URL";

export async function CheckoutButton() {
  const customerID = localStorage.getItem("customerID");
  return (
    <div>
      <button
        onClick={() => {
          const res = axios.put(SERVER_URL + "/checkout", {
            CustomerID: customerID,
          });
          if (res.status === 200) {
            alert("Checked out Successfully");
          }
        }}
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Check-Out
      </button>
    </div>
  );
}
