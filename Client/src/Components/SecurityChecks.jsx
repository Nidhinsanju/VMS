export default function SecurityCheck() {
  return (
    <div>
      <fieldset className="text-black">
        <legend className="sr-only text-black">Checkbox variants</legend>
        <div className="flex items-center mb-4">
          <input
            checked
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checkbox-1"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="checkbox-2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checkbox-2"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            I want to get promotional offers
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="checkbox-3"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checkbox-3"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            I am 18 years or older
          </label>
        </div>

        <div className="flex mb-4">
          <div className="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="ms-2 text-sm">
            <label
              for="helper-checkbox"
              className="font-medium text-gray-900  dark:text-black"
            >
              Free shipping via Flowbite
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="international-shipping-disabled"
            type="checkbox"
            value=""
            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
          <label
            for="international-shipping-disabled"
            className="ms-2 text-sm font-medium text-gray-400  dark:text-black"
          >
            Eligible for international shipping
          </label>
        </div>
      </fieldset>
    </div>
  );
}
