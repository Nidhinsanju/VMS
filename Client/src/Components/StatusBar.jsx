import { LogoutButton } from "../utis/LogoutButton";
export default function StatusBar(props) {
  const status = props.status;
  const commonContent = (
    <div className="mt-5 justify-center">
      <div className="w-2/4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${status}%` }}
        >
          {status}
        </div>
      </div>
      <LogoutButton />
    </div>
  );
  if (status === 100) {
    return (
      <dvi>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${status}%` }}
          >
            {status}
          </div>
        </div>
        <a href="/">
          <button>Check-out</button>
        </a>
      </dvi>
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
