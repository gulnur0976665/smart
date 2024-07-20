import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketProduct from "../BasketProduct";
import CountUp from "react-countup";
import { removeItem } from "../redux/createBasketSlice";
const Basket = () => {
  const { basket } = useSelector((state) => state.bas);
  const dispatch = useDispatch()
  console.log(basket, "basket");
  const totalPrice = basket.reduce((acc, el, idx, arr) => {
    return acc + el.price * el.quentity;
  }, 0);
 
  return (
    <div>
      <div className="container">
        <div className="mt-[50px]">
          {basket && basket.length ? (
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                  <thead className="text-[20px] text-black uppercase bg-black dark:bg-white dark:text-black">
                    <tr>
                      <th scope="col" className="px-16 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-16 py-3">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket.map((el) => (
                      <BasketProduct el={el} key={el.id} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-[30px]">
                <h1 className="text-[40px] font-semibold text-white">
                  Total Price:
                  <CountUp
                    start={0}
                    end={totalPrice}
                    duration={2.75}
                    separator=""
                    decimals={0}
                    decimal=","></CountUp> c
                </h1>
                <button onClick={() => dispatch(removeItem())} className ="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className ="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-violet-600 rounded-md group-hover:bg-opacity-0">
                    Remove
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <h1 className="text-[50px] font-bold text-white text-center mt-[15%]">
              YOUR CART IS EMPTY
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
