import React from 'react';
import { Outlet } from "react-router-dom"
import Login from '../login/Login';



const Private = ({isAuth, auth}) => {

   console.log(auth);
   

   return (
      <>
         {
            isAuth ? <Outlet /> : <Login auth={auth}  />
         }
      </>
   );
};

export default Private;