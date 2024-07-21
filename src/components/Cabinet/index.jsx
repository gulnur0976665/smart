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
    <div className="py-[100px] max-sm:py-[50px] max-2xl:py-[100px]">
      <div className="container">
        
        <div className="w-[730px] max-sm:w-[550px] max-md:w-[650px] h-[320px] max-sm:h-[290px] max-lg:w-[750px] bg-purple-800 mx-auto rounded-2xl">
          <div className=" flex justify-between items-center p-[30px] gap-9   ">
            <img src={user.url} alt="" className="w-[250px] max-sm:w-[210px] max-lg:w-[270px] rounded-[50%]" />
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-white text-[20px] max-sm:text-[16px] font-bold">{user.title}</h1>
              <h1 className="text-white text-[20px] max-sm:text-[15px] max-md:text-[18px] font-bold">{user.gmail}</h1>
              <h1 className="text-white text-[20px] max-sm:text-[17px] max-md:text-[19px] font-bold">
                {user.number}
              </h1>
              <div className="flex flex-col items-start gap-5 max-sm:gap-3">
                <input 
                onChange={(e) => setOldPro(e.target.value)}
                value={oldPro}
                  type="text"
                  className="border-0 border-b-2 border-white bg-transparent outline-none text-white px-[4px] text-[19px] placeholder:text-white max-sm:placeholder:text-[18px]"
                  placeholder="old"
                />
                <input 
                onChange={(e) => setNews(e.target.value)}
                value={news}
                  type="text"
                  className="border-0 border-b-2 border-white bg-transparent outline-none text-white px-[4px] text-[19px] placeholder:text-white  max-sm:placeholder:text-[18px]"
                  placeholder="new"
                />
                <div className="flex items-center gap-48 max-sm:gap-10 max-md:gap-14 max-lg:gap-36">
                  <button onClick={() => addChange()} className="bg-violet-800 px-[30px]  py-[10px] max-sm:py-[5px] max-md:py-[6px] rounded-[7px] text-white text-[18px] max-sm:text-[16px] max-md:text-[16px] font-bold">
                    Change
                  </button>
                  <a
                    onClick={() => {
                      dispatch(removeItem())
                      nav("/")
                    }}
                    className="text-white text-[30px] max-sm:text-[24px] max-md:text-[26px]">
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
