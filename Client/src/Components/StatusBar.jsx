import { LogoutButton } from "../utis/LogoutButton";
export default function StatusBar(props) {
  const status = props.status;
  const commonContent = (
    <div className="mt-3 justify-center  ">
      <a className="flex-col block w-full p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Please wait as our security team carefully analyzes your vehicle."
          </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          After the analysis is completed, you are welcome to check out your
          vehicle. Thank you for choosing our service. Your satisfaction is our
          priority, and we appreciate your trust in our expertise. Security Team
          will update Your status here.
        </p>
      </a>
      <div class="flex justify-between mb-1 mt-5">
        <span class="text-base font-medium text-orange-600">Loading...</span>
      </div>
      <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${status}%` }}
        >
          {status}%
        </div>
      </div>
      <div className="mt-3 ">
        <LogoutButton />
      </div>
    </div>
  );
  if (status === 100) {
    return (
      <div className="mt-5 justify-center">
        <a className="flex-col block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Thanks for waiting! The analysis is now completed.</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            You are welcome to check out your vehicle. Thank you for choosing
            our service. Your satisfaction is our priority, and we appreciate
            your trust in our expertise.
          </p>
        </a>
        <div class="flex mt-3 justify-between mb-1">
          <span class="text-base font-medium  text-green-700">Completed!</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${status}%` }}
          >
            {status}%
          </div>
        </div>
        <a href="/">
          <button
            type="button"
            className="text-white mt-3 bg-blue-700 : focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Check-out
          </button>
        </a>
      </div>
    );
  }
  if (status >= 0 && status < 30) {
    return commonContent;
  }
  if (status >= 30 && status <= 70) {
    return commonContent;
  }
  if (status > 70 && status < 100) {
    return commonContent;
  }
  return <div>Something Broken</div>;
}