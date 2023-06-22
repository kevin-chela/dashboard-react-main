import React, { useEffect } from 'react';

import {
  
  MDBIcon,

}
from 'mdb-react-ui-kit';

import PropTypes from "prop-types";

const Alert = ({ type, msg, icon, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  
  return <h5 className={`alert alert-${type} `}
   style={{letterSpacing: '1px', borderRadius: 4, fontSize: 'small'}}>
   <MDBIcon fas icon={`${icon}`}/> &nbsp;&nbsp;{msg}
   </h5>
};

// Typechecking props for AuthContextProvider
    
Alert.propTypes = {
    
  type: PropTypes.node.isRequired,
  msg: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  removeAlert: PropTypes.node.isRequired,

};

export default Alert;
