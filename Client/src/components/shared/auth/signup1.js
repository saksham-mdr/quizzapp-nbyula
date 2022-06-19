export default function SignUp() {
  return (
    <figure className="h-screen flex bg-gray-100 items-center	">
      <div className="m-auto bg-white rounded-3xl border border-primaryBorder shadow-default py-10 px-1">
        <form action="#" method="POST">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-md font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Gender"
                  className="block text-md font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="role"
                  name="role"
                  autoComplete="role"
                  className="mt-1 block border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="User Type"
                  className="block text-md font-medium text-gray-700"
                >
                  User Type
                </label>
                <select
                  id="role"
                  name="role"
                  autoComplete="role"
                  className="mt-1 block border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Buyer</option>
                  <option>Seller</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-md font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="w-36 text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-md font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  id="message"
                  rows="2"
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-4 py-3  text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    </figure>
  );
}
