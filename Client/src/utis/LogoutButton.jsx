import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("CustomerID");
          navigate("/");
        }}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Log-out
      </button>
    </div>
  );
}
