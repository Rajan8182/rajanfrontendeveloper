import React from "react";

const NewsletterSignUp = () => {
  return (
    <div className=" p-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Keep up to date with us
          </h2>
          <p className="text-md text-gray-600">
            Sign up to be the first to receive special offers and event updates from us.
          </p>
        </div>

        <form className="w-full lg:w-auto flex items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border border-black rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-900 text-yellow-300 font-semibold rounded-full px-4 py-3 hover:bg-green-800 transition duration-300"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
