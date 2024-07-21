import React from "react";
import enjoi from "../../assets/naushnik.png";
import muz from "../../assets/m1.png";
import line1 from "../../assets/Line 1.png";
import line2 from "../../assets/Line 2.png";

const Home = () => {
  return (
    <div className="p-[30px] max-2xl:p-[20px]">
      <div className="container">
        <div className="mt-[40px] ">
          <div className="flex items-center flex-col">
            <div className=" relative">
              <div className="absolute max-sm:absolute max-md:absolute top-[100px]  max-sm:top-[50px] max-md:top-[60px] max-lg:left-[-10px] flex max-sm:flex items-start max-sm:items-start flex-col max-sm:flex-col">
                <img src={muz} alt="" className="w-[80%] max-sm:w-[45%] max-md:w-[60%] max-lg:w-[70%]" />
                <div className="ml-24 max-sm:ml-14 max-md:ml-11 flex max-sm:flex flex-col max-sm:flex-col items-start max-sm:items-start  gap-[20px] max-sm:gap-[10px] max-md:gap-[10px] max-lg:gap-[12px] mt-5 max-sm:mt-4 max-md:mt-3.5 max-lg:mt-3">
                  <img src={line1} alt="" className="w-[80%] max-sm:w-[40%] max-md:w-[70%] max-lg:w-[60%]" />
                  <div className="">
                    <h1 className="text-[20px] max-sm:text-[13px] max-md:text-[16px] font-bold text-white ">
                      20 hour
                    </h1>
                    <p className="text-white text-[12px] max-sm:text-[10px]">
                      battery life
                    </p>
                  </div>
                  <img src={line2} alt="" className="w-[50%] max-sm:w-[30%]" />
                  <div className="">
                    <h1 className="text-[20px] max-sm:text-[13px] max-md:text-[16px] font-bold text-white">
                      8 level
                    </h1>
                    <p className="text-white text-[12px] max-sm:text-[10px]">
                      noise cancellation
                    </p>
                  </div>
                  <img src={line2} alt="" className="w-[50%] max-sm:w-[30%]" />
                  <div className="">
                    <p className="text-white text-[12px] max-sm:text-[10px]">
                      Rs. 15,999
                    </p>
                    <h1 className="text-[20px] max-sm:text-[15px] max-md:text-[16px] font-bold text-white ">
                      Rs. 9,999
                    </h1>
                  </div>
                </div>
              </div>{" "}
              <img src={enjoi} alt="Headphone Image" className="w-[900px]" />
              <div className="absolute right-[-10%] max-sm:right-[-3%] max-md:right-[-23%] max-lg:right-[-16%] max-lg:top-[99px]  top-[100px] max-sm:top-[50px] max-md:top-[60px] flex max-sm:flex items-start max-sm:items-end flex-col max-sm:flex-col">
                <img src={muz} alt="" className="w-[80%] max-sm:w-[45%]  max-md:w-[60%] max-lg:w-[69%]" />
                <div className="flex flex-col items-end max-md:ml-[-34px] gap-[20px] max-sm:gap-[10px] max-md:gap-[10px] max-lg:gap-[12px] mt-5 max-sm:mt-3 max-md:mt-3 max-lg:mt-2.5  max-sm:mr-8 max-lg:ml-[-50px]">
                  <img src={line1} alt="" className="w-[80%] max-sm:w-[50%]  max-md:w-[70%] max-lg:w-[65%]" />
                  <div className="">
                    <h1 className="text-[20px] max-sm:text-[13px] max-md:text-[16px] font-bold text-white">
                      5-mode
                    </h1>
                    <p className="text-white text-[12px]">touch control</p>
                  </div>
                  <img src={line2} alt="" className="w-[50%] max-sm:w-[30%]" />
                  <div className="">
                    <h1 className="text-[20px] max-sm:text-[13px] max-md:text-[16px] font-bold text-white">20 min</h1>
                    <p className="text-white text-[12px]">fast charge</p>
                  </div>
                  <img src={line2} alt="" className="w-[50%] max-sm:w-[30%]"/>
                  <div className="flex max-sm:flex items-end max-sm:items-end flex-col max-sm:flex-col ">
                    <p className="text-white text-[12px] max-sm:text-[10px]">1 year</p>
                    <h1 className="text-[20px] font-bold text-white max-sm:text-[13px] max-md:text-[16px]">
                      warranty
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[90px]">
              <button className="border-2 border-white py-[5px] px-[35px] text-[18px] rounded-xl max-sm:rounded-xl font-medium text-[#EB15C6]">
                Buy Now
              </button>
              <button className="border-2 border-white py-[5px] px-[35px] text-[18px] rounded-xl max-sm:rounded-xl font-medium text-white">
                Explore More
              </button>
            </div>
          </div>

          <hr className="mt-[35px] max-sm:mt-[36px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
