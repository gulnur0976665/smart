import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/createProductSlice";
import { FaFileDownload } from "react-icons/fa";

const CreateProduct = () => {
  const { product } = useSelector((s) => s.pro);
  // console.log(product,'pro');
  const dispatch = useDispatch();
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const addCreate = () => {
    if (
      productUrl === "" ||
      productName.trim() === "" ||
      productPrice.trim() === "" ||
      productCategory === ""
    ) {
      alert("404");
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      setProductCategory("");
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        url: productUrl,
        title: productName,
        price: productPrice,
        category: productCategory,
        rating: 0,
      };
      dispatch(createProduct(newProduct));
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      setProductCategory("");
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="mt-[100px] max-sm:mt-[50px] max-md:mt-[55px] max-lg:mt-[50px] max-xl:mt-[40px]">
          <div className="w-[45%] mx-auto flex  flex-col items-center  gap-8">
            <div className="">
              <div class="input__wrapper">
                <input
                  name="file"
                  type="file"
                  id="input__file"
                  className="input input__file"
                  multiple
                  onChange={onChange}
                />
                <label htmlFor="input__file" className="input__file-button">
                  <span className="input__file-icon-wrapper">
                    <a className="" style={{ fontSize: "30px" }}>
                      <FaFileDownload />
                    </a>
                  </span>
                  <span className="input__file-button-text">Выберите файл</span>
                </label>
              </div>
              <select
                className="bg-transparent border-2 border-white text-white text-[25px] max-sm:text-[19px] max-md:text-[21px] font-bold text-center px-[20px] max-sm:px-[14px] py-[4px] max-sm:py-[3px] outline-none rounded-[5px]"
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}>
                <option value="category">CATEGORY</option>
                <option value="earbuds">EARBUDS</option>
                <option value="headphones">HEADPHONES</option>
                <option value="speakers">SPEAKERS</option>
              </select>
            </div>


            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className="bg-transparent w-full border-0 border-b-2 border-white outline-none text-white placeholder:text-white max-md:placeholder:text-[23px] text-[25px] px-1"
            />
            <input
              type="text"
              placeholder="Product Price"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              className="bg-transparent w-full border-0 border-b-2 border-white outline-none text-white placeholder:text-white max-md:placeholder:text-[23px] text-[25px] px-1"
            />

            <button
              onClick={() => addCreate()}
              className="text-white text-[20px] font-bold bg-violet-600 py-[8px] max-md:py-[6px] px-[40px] rounded-[10px]">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
