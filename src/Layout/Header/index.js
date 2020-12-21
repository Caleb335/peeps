import React from 'react';
import HeadStyle from "./style/Header.module.css";
import {RiPencilFill} from 'react-icons/ri';

const Header = () => {
    return(

        <div id={HeadStyle.body}>
            <div className={HeadStyle.blue}>
                <img src="/static/img/tipcoin.png" alt="tipcoin" />
                 <RiPencilFill size={25} color="white"/>  
                 <div className={HeadStyle.text}>
                 <h4>LOGIN</h4>
                <button>JOIN US</button>
                </div>
            </div>
        </div>
     
    );
  }
  
  export default Header;  