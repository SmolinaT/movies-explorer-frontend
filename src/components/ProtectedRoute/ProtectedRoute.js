import React from 'react';
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader';

const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
    !props.isTokenChecked ? <Preloader /> :
    props.loggIn ? <Component {...props} /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement; 