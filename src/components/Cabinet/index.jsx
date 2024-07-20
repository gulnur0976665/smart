import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPass, removeItem } from "../redux/createUsertSlice";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Cabinet = () => {
  const { user,mainPassword } = useSelector((s) => s.login);
  const dispatch = useDispatch();
  const nav = useNavigate()
  const [oldPro, setOldPro] = useState("");
  const [news, setNews] = useState("")
  let count = 4
  const addChange = () => {
  if (oldPro === mainPassword) {
    dispatch(newPass(news))
  } else  {
    alert("404")
    setNews("")
    setOld("")
  }
  }
  return (
    <div className="pt-[70px]">
      <div className="container">
        
        <div className="w-[730px] h-[350px] bg-purple-800 mx-auto rounded-2xl">
          <div className=" flex justify-between items-center p-[30px] gap-9 ">
            <img src={user.url} alt="" className="w-[300px] rounded-[50%]" />
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-white text-[20px] font-bold">{user.title}</h1>
              <h1 className="text-white text-[20px] font-bold">{user.gmail}</h1>
              <h1 className="text-white text-[20px] font-bold">
                {user.number}
              </h1>
              <div className="flex flex-col items-start gap-5">
                <input 
                onChange={(e) => setOldPro(e.target.value)}
                value={oldPro}
                  type="text"
                  className="border-0 border-b-2 border-white bg-transparent outline-none text-white px-[4px] text-[19px] placeholder:text-white"
                  placeholder="old"
                />
                <input 
                onChange={(e) => setNews(e.target.value)}
                value={news}
                  type="text"
                  className="border-0 border-b-2 border-white bg-transparent outline-none text-white px-[4px] text-[19px] placeholder:text-white"
                  placeholder="new"
                />
                <div className="flex items-center gap-48">
                  <button onClick={() => addChange()} className="bg-violet-800 px-[30px] py-[10px] rounded-[10px] text-white text-20px font-bold">
                    Change
                  </button>
                  <a
                    onClick={() => {
                      dispatch(removeItem())
                      nav("/")
                    }}
                    className="text-white text-[30px]">
                    <HiMiniArrowRightStartOnRectangle />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cabinet;
