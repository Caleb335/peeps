import React from 'react';
import CardStyle from './style/Card.module.css';

import propTypes from "prop-types"

const Card = ({children}) => {
  return (
    <div className={CardStyle.card}>
      {children}
    </div>
  );
};


Card.PropTypes = {
  children: propTypes.node.isRequired
}

export default Card;