import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './home.css'
import { BrowserRouter, Outlet } from 'react-router-dom';


const Home = () => {
      return (
            <div className="home d-flex">



                  <Sidebar />
                  <Outlet />

            </div>
      );
};

export default Home;