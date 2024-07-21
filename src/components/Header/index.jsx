import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import { FaUserPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { searchProduct } from "../redux/createProductSlice";

const Header = () => {
  const { user } = useSelector((s) => s.login);
  const { basket } = useSelector((s) => s.bas);
  const navgite = useNavigate();
  const [search1, setSearch1] = useState(true);
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const dispatch = useDispatch();
  return (
    <div className="mt-[30px]">
      <div className="container">
        <div className="flex max-xl:flex items-center max-xl:items-center justify-between max-xl:justify-between max-xl:gap-[20px] max-sm:gap-[3px]   mx-auto">
          <div className=""></div>
          {search1 ? (
            <div className=" flex items-center gap-[200px] max-sm:gap-[40px] max-md:gap-[30px] max-xl:gap-[100px] max-lg:gap-[50px] border-2 border-white py-[10px] max-md:py-[10px] max-sm:py-[5px] px-[40px] max-sm:px-[16px] max-md:px-[90px] max-lg:px-[18px] rounded-[20px]">
              <div className="flex items-center gap-[60px] max-md:gap-[30px] max-lg:gap-[25px]  max-sm:gap-[14px]  text-[30px] max-md:text-[22px] max-lg:text-[24px]  max-sm:text-[20px]  text-white font-medium">
                <Link to={`/`} className="">
                  Home
                </Link>
                <a
                  onClick={() => {
                    if (!user.title) {
                      alert("404");
                    } else {
                      navgite(`/product`);
                    }
                  }}
                  className="cursor-pointer">
                  Products
                </a>
                <a className="text-[30px] max-md:text-[22px] max-sm:text-[20px] max-lg:text-[24px] flex items-center ">Help <span>Centre</span></a>
              </div>
              <div className="flex items-center  gap-5 max-sm:gap-4 max-md:gap-2 ">
                <h1 className="text-[25px] max-md:text-[22px] max-sm:text-[19px] text-white font-medium">
                  {user.title}
                </h1>
                {user.url ? (
                  <img
                    onClick={() => navgite(`/cabinet`)}
                    src={user.url}
                    alt=""
                    width={40}
                    className="rounded-[50%] w-[40px] max-md:w-[35px] h-[40px]  max-md:h-[35px]"
                  />
                ) : (
                  <a
                    onClick={() => navgite(`/login`)}
                    className="text-[30px] text-white">
                    <FaRegUserCircle />
                  </a>
                )}
              </div>
            </div>
          ) : null}

          <div className="flex items-center gap-7 max-sm:gap-4 text-[30px] max-sm:ml-[8px] max-md:ml-[10px] text-white relative">
            {search1 ? (
              <a
                onClick={() => {
                  setSearch(true);
                  setSearch1(false);
                }}
                className="">
                <IoSearch />
              </a>
            ) : null}
            {search ? (
              <div className="relative">
                <a
                  onClick={() => {
                    setSearch(false);
                    setSearch1(true);
                    navgite(`/`);
                    setInputValue("");
                  }}
                  className="absolute text-black top-2 right-2 cursor-pointer  ">
                  <IoClose />
                </a>
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(searchProduct(inputValue));
                      navgite(`/search`);
                    }
                  }}
                  onInput={() => {
                    dispatch(searchProduct(inputValue));
                    navgite(`/search`);
                  }}
                  value={inputValue}
                  type="text"
                  className="w-[60pc] max-sm:w-[30pc] max-md:w-[40pc]  max-lg:w-[45pc] h-[45px] max-sm:h-[40px] bg-transparent border-2 border-black  outline-none rounded-[5px] text-black text-[25px] px-2 placeholder:text-black"
                  placeholder="Product Name"
                />
              </div>
            ) : null}
            {basket.length ? (
              <h1
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "40px",
                  background: "red",
                  color: "white",
                  fontSize: "15px",
                  borderRadius: "50%",
                  textAlign: "center",
                  width: "20px",
                  height: "20px",
                
                }}>
                {basket.length}
              </h1>
            ) : null}
            <a onClick={() => navgite(`/basket`)} className="">
              <BsCart3 />
            </a>
            {user.title ? (
              <a onClick={() => navgite(`/create`)} className="">
                <FaUserPlus />
              </a>
            ) : null}
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
