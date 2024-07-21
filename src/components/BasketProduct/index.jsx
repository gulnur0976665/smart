import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteBasket,
  desCrement,
  inCrement,
} from "../redux/createBasketSlice";

const BasketProduct = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bgwhite dark:hover:bg-white">
      <td className="p-4">
        <img
          src={el.url}
          className="w-16 md:w-32 max-w-full max-h-full"
          alt="Apple Watch"
        />
      </td>
      <td className="px-6 max-sm:px-8 py-4 font-semibold text-[20px] text-black dark:text-black">
        {el.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(desCrement(el.id))}
            className="inline-flex items-center justify-center p-1 me-3 text-smfont-medium h-6 max-lg:h-4.5 max-sm:h-5 max-lg:w-4.5 w-6 max-sm:w-5 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-red-100 max-sm:hover:bg-red-600 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button">
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 max-sm:w-2 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <h1 className="bg-gray-50 w-14 max-sm:w-11 max-lg:w-12 max-sm:h-6 max-lg:h-6 text-center  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5  py-1 max-sm:py-0.5 max-lg:py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {el.quentity}
            </h1>
          </div>
          <button
            onClick={() => dispatch(inCrement(el.id))}
            className="inline-flex items-center justify-center h-6 max-sm:h-5 max-lg:h-4.5 w-6 max-sm:w-5 max-lg:w-4.5 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button">
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 max-sm:w-2  h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-black dark:text-black text-[20px] max-sm:text-[18px] max-lg:text-[21px]">
        {el.price * el.quentity} $
      </td>
      <td className="px-6 py-4">
        <a
          onClick={() => dispatch(deleteBasket(el.id))}
          className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline text-[20px] max-lg:text-[24px] max-sm:text-[18px]">
          delete
        </a>
      </td>
    </tr>
  );
};

export default BasketProduct;
