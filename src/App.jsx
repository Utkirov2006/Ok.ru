import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarFluid from "./components/NavbarFluid/NavbarFluid";
import Navbar from "./components/Navbar/Navbar";
import content from "./lang/lang";
import Envelope from "./components/Envelope/Envelope";
import Comments from "./components/Comments/Comments";
import Bell from "./components/Bell/Bell";
import Events from "./components/Events/Events";
import Video from "./components/Video/Video";
import Music from "./components/Music/Music";
import Error from "./components/404/Error";
import Login from "./components/login/Login";
import Private from "./components/private/Private";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";

import Cloud from "./components/SidebarComponents/Cloud.jsx"


const App = () => {
  const [langs, setLangs] = useState("en");
  const [auth, setAuth] = useState(false);


  const user = {
    username: "1",
    password: "2",
  };


  const useAuth = (username, password, check) => {

    if (check.login && check.password) {
      toast.error('please fill input form', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {

    }

    if (user.username === username && user.password === password) {
      setAuth(true);
      console.log(auth);
      toast.success('logined', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      setAuth(false);
      console.log(auth);
      toast.error('error', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    console.log('isworking');
  };



  return (
    <>
      <BrowserRouter>

        <ToastContainer />
        <NavbarFluid
          lang={content[langs]}
          setLangs={setLangs}
          auth={auth}
          isAuth={setAuth}
        />

        <Navbar
          lang={content[langs]}
          setLangs={setLangs}
          auth={auth}
          isAuth={setAuth}
        />

        <main>
          <Routes>
            <Route path="/" element={<Private isAuth={auth} auth={useAuth} />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/Envelope" element={<Envelope lang={content[langs]} />} />
              <Route path="/comments" element={<Comments lang={content[langs]} />} />
              <Route path="/bell" element={<Bell lang={content[langs]} />} />
              <Route path="/events" element={<Events lang={content[langs]} />} />
              <Route path="/video" element={<Video lang={content[langs]} />} />
              <Route path="/music" element={<Music lang={content[langs]} />} />
              <Route path="/login" element={<Login auth={useAuth} lang={content[langs]} setLangs={setLangs} />} />
             
              <Route path="/" element={<Home/>}>

                <Route path="/cloud" element={<Cloud/>}></Route>

              </Route>
            </Route>



            <Route path="*" element={<Error lang={content[langs]} />} />

          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
