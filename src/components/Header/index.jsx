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
        <div className="flex items-center justify-evenly mx-auto">
          <div className=""></div>
          {search1 ? (
            <div className="flex items-center gap-[200px] border-2 border-white py-[10px] px-[40px] rounded-[20px]">
              <div className="flex items-center gap-[60px] text-[30px] text-white font-medium">
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
                <a className="">Help Centre</a>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-[25px] text-white font-medium">
                  {user.title}
                </h1>
                {user.url ? (
                  <img
                    onClick={() => navgite(`/cabinet`)}
                    src={user.url}
                    alt=""
                    width={40}
                    className="rounded-[50%]"
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
          <div className="flex items-center gap-7 text-[30px] text-white relative">
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
                  className="w-[60pc] h-[45px] outline-none rounded-[5px] text-black text-[25px] px-2 placeholder:text-black"
                  placeholder="Product Name"
                />
              </div>
            ) : null}
              {basket.length ? (
              <h1
                style={{
                  position: "absolute",
                  top:"-10px",
                  right:"40px",
                  background: "red",
                  color: "white",
                  fontSize:"17px",
                  borderRadius: "50%",
                  textAlign: "center",
                  width: "23px",
                  height: "23px",
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
