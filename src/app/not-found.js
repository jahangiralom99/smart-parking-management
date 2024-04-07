/* eslint-disable react/no-unescaped-entities */
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-bold text-red-500">404</h1>
          <p className="mb-4 text-3xl font-bold">Oops! Page Not Found.</p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p className="mt-4">
            Let's get you back <br />
            <a href="/" className="text-blue-500">
              Go Back Home
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
