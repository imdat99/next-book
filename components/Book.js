import Link from "next/link";
import React from "react";

const Book = ({ data }) => {
  return (
    <div className="h-96 flex flex-row mx-auto mb-10 items-center">
      <img className="object-cover h-auto w-48 mx-10" src={data.img} alt="" />
      <div className="flex flex-col justify-center py-4 px-10 leading-normal">
        <p className="font-bold text-gray-700 dark:text-white">{data.author}</p>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <p className="mb-5 font-bold text-gray-700 dark:text-white">
          {data.genre}
        </p>
        <p className="my-3 font-normal text-gray-700 dark:text-white">
          {data.overview}
        </p>
        <div className="m-auto mb-3">
          <p className="block">
            Pushlished in: <span className="text-green-500">{data.date}</span>
          </p>
          <p className="block">
            Mentions{" "}
            <span className="text-blue-600 font-bold">{data.places}</span>
          </p>
          <span className="block font-bold text-yellow-600 mb-3">
            <b className="text-red-600">{data.rating}</b>
            &nbsp;out of 5
          </span>
          <span className="w-max text-green-500 border border-green-500 bg-green-100 font-medium rounded py-1 px-2 text-xs text-center">
            Paid
          </span>
        </div>
        <div>
          <Link
            href=".."
            className="mr-3 w-max m-auto inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Back
          </Link>
          <a
            href={data?.url || "#"}
            className="w-max m-auto inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
