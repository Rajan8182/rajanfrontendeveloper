import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 md:px-0">
      <div className="text-center">
        <p className="text-sm font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-4xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-black px-6 py-3 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Go back
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
