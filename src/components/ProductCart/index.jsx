import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../redux/createProductSlice';
import { MdDelete } from "react-icons/md";
import { createBasket } from '../redux/createBasketSlice';

const ProductCart = ({el}) => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { basket } = useSelector((state) => state.bas);
const someBasket = basket.some((item) => item.id == el.id)
  return (
    <div>
      <div className="container">
        <div className="border-2 border-purple-400 w-[300px] max-sm:w-[270px] max-md:w-[280px]  max-lg:w-[242px] h-[330px] rounded-[10px] ">
          <img
            src={el.url}
            alt={el.title}
            className="w-[190px] h-[190px] mx-auto py-[5px]"
          />
          <hr className="mt-7" />

          <div className="px-[20px] py-[15px] flex items-center  justify-between">
            <div className="flex items-start  flex-col gap-2">
              <h1 className="text-white font-bold text-[20px] max-lg:text-[18px]">{el.title}</h1>
              <h1 className="text-white font-bold max-lg:text-[16px]">{el.price} $</h1>
            </div>
            <div className="flex items-end flex-col gap-5">
              <button
                onClick={() => {
                  someBasket ? navigate(`/basket`) : dispatch(createBasket(el));
                }}
                className={`text-[20px] max-lg:text-[18px] ${
                  someBasket ? "text-red-600" : "text-fuchsia-700"
                } font-bold `}>
                {someBasket ? "Go to Basket" : "Add to Cart"}
              </button>
              <a onClick={() => dispatch(deleteProduct(el.id))} className="text-[20px] text-red-600">
                <MdDelete />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;