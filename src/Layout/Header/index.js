import React from "react";
import HeadStyle from "./style/Header.module.css";
import { RiPencilFill } from "react-icons/ri";

const Header = () => {
  return (
    <div id={HeadStyle.body} className={HeadStyle.blue}>
      <img src="/static/img/tipcoin.png" alt="tipcoin" />
      <div className={HeadStyle.text}>
        <RiPencilFill size={25} color="white" />
        <h4>LOGIN</h4>
        <button className={HeadStyle.btn}>JOIN US</button>
      </div>
    </div>
  );
};

export default Header;
