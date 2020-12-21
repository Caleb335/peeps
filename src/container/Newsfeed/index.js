import React from 'react';
import NewsStyle from './style/Newsfeed.module.css';
import {BiSearch} from 'react-icons/bi'


const Newsfeed = () => {
  return (
    <div className={NewsStyle.card}>
<BiSearch />
<input type="text" placeholder="Enter a URL" />
<h4>LOAD</h4>
      
    </div>
  );
};

export default Newsfeed;