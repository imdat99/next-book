import React, { Fragment, useCallback } from "react";
import { useRouter } from "next/router";
const Books = ({ data }) => {
  const route = useRouter();
  const handleNavigate = useCallback((e) => {
    const title = e.currentTarget.dataset.navigate;
    route.push("/book/" + title);
  }, []);

  return (
    <div className="mt-5">
      {data.length ? (
        data.map((item, index) => (
          <Fragment key={index}>
            <div
              onClick={handleNavigate}
              data-navigate={encodeURI(item.title)}
              className="flex mx-auto mb-10 flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={item.img}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  {item.author}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.overview}
                </p>
                <span
                  type="button"
                  className="w-max text-green-500 border border-green-500 bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded py-1 px-2 text-xs text-center mr-2 mb-2"
                >
                  Paid
                </span>

                <a
                  href={item?.url || "#"}
                  className="w-max inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </Fragment>
        ))
      ) : (
        <span className="block text-center">No Data</span>
      )}
    </div>
  );
};

export default Books;
