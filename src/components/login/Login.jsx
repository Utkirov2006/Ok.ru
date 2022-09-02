import React, { useState } from 'react';

import "./login.css"
const Login = ({lang, login, auth }) => {




   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');


   const check = {
      login: username.trim().length === 0,
      password: password.trim().length === 0,
   };



   return (
      <>
         <div className="card_login mx-auto p-4 border-1 ">

            <div className="card mx-auto mt-5">
               <h6 className=' py-3 text-center'>Login</h6>
               <input style={{ width: '60%' }} type="text" placeholder='Enter username' value={username} onChange={(e) => setUserName(e.target.value)} className="mx-auto p-2 form-control m-2 bg-light " />


               <input style={{ width: '60%' }} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' className="mx-auto p-2 form-control m-2 bg-light  " />

               <button style={{ width: "60%" }} className="btn btn-warning m-2 mx-auto" onClick={() => auth(username, password, check)}>
                  Log in to Ok
               </button>

               <div className="card-brand mx-auto py-3">
                  <i className="fab fa-vk text-primary mx-3" />
                  <i class=" fa-brands fa-google mx-3"></i>
                  <i class=" fa-solid fa-at text-warning mx-3"></i>
                  <i class="fa-brands fa-yandex text-danger mx-3"></i>
                  <i class="fa-brands fa-apple mx-3"></i>
                  <i class="fa-brands fa-facebook mx-2 text-primary mx-3"></i>

               </div>

            </div>
         </div>
      </>
   );
};

export default Login;