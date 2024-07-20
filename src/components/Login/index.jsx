import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/createUsertSlice";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { mainPassword } = useSelector((s) => s.login);
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productGmail, setProductGmail] = useState("");
  const [productNom, setProductNom] = useState("+996 ");
  const [productParol, setProductParol] = useState("");

  const [modal, setModal] = useState(false);

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  let count = 4;
  const addToProduct = () => {
    if (productParol === mainPassword) {
      let newProduct = {
        id: 1,
        url: productUrl,
        title: productName,
        gmail: productGmail,
        number: productNom,
        parol: productParol,
      };
      dispatch(createUser(newProduct));
      setProductUrl("");
      setProductName("");
      setProductGmail("");
      setProductNom("+996");
      setProductParol("");
      nav(`/`);
    } else if (mainPassword !== productParol) {
      count--;
      if (count === 3) {
        alert("u vas ostalos 3 papitki");
      } else if (count === 2) {
        alert("u vas ostalos 2 papitki");
      } else if (count === 1) {
        alert("u vas ostalos 1 papitki");
      } else {
        setModal(true);
      }
    } else {
      alert(404);
    }
  };
  const resetPasswordTelegram = () => {
    const my_id = `-1002172754943`;
    const token = `6780539797:AAHL_j701L6aQsn8CzkibXgjXeBwA67_NLc`;
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    let oldPass = {
      chat_id: my_id,
      parse_model: "html",
      text: `
    oldPassword: ${mainPassword}
  `,
    };
    axios.post(api_key, oldPass);
    setModal(false);
    setProductUrl("");
    setProductName("");
    setProductGmail("");
    setProductNom("+996 ");
    setProductParol("");
  };

  return (
    <div>
      <div className="container">
        <div className="mt-[60px]">
          <div className="flex items-center flex-col gap-[30px] relative ">
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
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className="text-white font-bold bg-transparent outline-none border-2  border-white text-xl placeholder:text-white w-[35%] py-[13px] px-[20px] rounded-2xl"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setProductGmail(e.target.value)}
              value={productGmail}
              className="text-white font-bold bg-transparent outline-none border-2  border-white text-xl placeholder:text-white w-[35%] py-[13px] px-[20px] rounded-2xl"
            />
            <input
              type="tel"
              placeholder="Modile No;"
              onChange={(e) => setProductNom(e.target.value)}
              value={productNom}
              className="text-white font-bold bg-transparent outline-none border-2  border-white text-xl placeholder:text-white w-[35%] py-[13px] px-[20px] rounded-2xl"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setProductParol(e.target.value)}
              value={productParol}
              className="text-white font-bold bg-transparent outline-none border-2  border-white text-xl placeholder:text-white w-[35%] py-[13px] px-[20px] rounded-2xl"
            />
            <button
              onClick={() => addToProduct()}
              className="text-[#EB15C6] text-[20px] py-[3px] px-[70px] rounded-xl border-2 border-white">
              Login
            </button>
            {modal ? (
              <div className="absolute top-[15px] right-[28%] bg-white w-[550px] h-[500px] rounded-2xl flex items-center justify-center flex-col gap-7">
                <a
                  onClick={() => setModal(false)}
                  className="absolute top-[15px] right-[15px] text-[30px] font-bold">
                  <MdClose />
                </a>
                <h1 className="text-[35px] font-bold text-center">
                  Ваш пароль отправлен в Telegram
                </h1>
                <button
                  onClick={() => resetPasswordTelegram()}
                  className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-[20px] font-bold py-[10px] px-[30px] bg-black text-white rounded-[5px]">
                  Получить
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
