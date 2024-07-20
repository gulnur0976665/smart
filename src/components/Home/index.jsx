import React from "react";
import enjoi from "../../assets/naushnik.png";
import muz from "../../assets/m1.png";
import muz1 from "../../assets/m2.png";
import line1 from "../../assets/Line 1.png";
import line2 from "../../assets/Line 2.png";

const Home = () => {
  return (
    <div className="p-[30px]">
      <div className="container">
        <div className="mt-[40px] ">
          <div className="flex items-center flex-col">
            <div className=" relative">
              <div className="absolute top-[100px] flex items-start flex-col">
                <img src={muz} alt="" className="w-[80%] " />
              <div className="ml-24 flex flex-col items-start  gap-[20px] mt-5">
              <img src={line1} alt="" className="w-[80%]" />
                <div className="">
                  <h1 className="text-[20px] font-bold text-white">20 hour</h1>
                  <p className="text-white text-[12px]">battery life</p>
                </div>
                <img src={line2} alt="" width={130}/>
                <div className="">
                  <h1 className="text-[20px] font-bold text-white">8 level</h1>
                  <p className="text-white text-[12px]">noise cancellation</p>
                </div>
                <img src={line2} alt="" width={130}/>
                <div className="">
                  <p className="text-white text-[12px]">Rs. 15,999</p>
                  <h1 className="text-[20px] font-bold text-white">Rs. 9,999</h1>
                </div>
              </div>
              </div>{" "}
              <img src={enjoi} alt="Headphone Image" className="w-[900px]" />
              <div className="absolute right-[-10%] top-[100px] flex items-start flex-col">
                <img src={muz} alt="" className="w-[80%] " />
              <div className="ml-[-30px] flex flex-col items-end  gap-[20px] mt-5">
              <img src={line1} alt="" className="w-[80%]" />
                <div className="">
                  <h1 className="text-[20px] font-bold text-white">5-mode</h1>
                  <p className="text-white text-[12px]">touch control</p>
                </div>
                <img src={line2} alt="" width={130}/>
                <div className="">
                  <h1 className="text-[20px] font-bold text-white">20 min</h1>
                  <p className="text-white text-[12px]">fast charge</p>
                </div>
                <img src={line2} alt="" width={130}/>
                <div className="">
                  <p className="text-white text-[12px]">1 year</p>
                  <h1 className="text-[20px] font-bold text-white">warranty</h1>
                </div>
              </div>
              </div>
            </div>
            <div className="flex items-center gap-[90px]">
              <button className="border-2 border-white py-[5px] px-[35px] text-[18px] font-medium text-[#EB15C6]">
                Buy Now
              </button>
              <button className="border-2 border-white py-[5px] px-[35px] text-[18px] font-medium text-white">
                Explore More
              </button>
            </div>
          </div>

          <hr className="mt-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
