import React from 'react';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ lang, setLangs, auth, isAuth }) => {
   return (
      <>

         {/* <ToastContainer /> */}
         {/* <!-- Navbar --> */}
         <nav className="navbar navbar-expand navbar-light bg-light">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">
               {/* <!-- Toggle button --> */}

               {/* <!-- Collapsible wrapper --> */}
               <div className="d-xl-flex  d-block flex-grow-1" id="navbarSupportedContent">
                  {/* <!-- Navbar brand --> */}
                  
                  {/* <!-- Left links --> */}
                  {
                     auth ? <>

                        <a className="navbar-brand mt-2 mt-lg-0 ml-0 mx-2 mx-lg-0" href="#">
                           <img className="mx-5"
                              src="https://ok.ru/res/i/p/toolbar/logo_wide_c@2x.png"
                              height="53"
                              alt="OK Logo"
                              loading="lazy"
                           />
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-2 mt-2">
                           <li className="nav-item mx-0 mx-lg-4">
                              <NavLink to="/envelope" className={({ isActive }) => isActive ? "fw-bold  text-primary nav-link" : "nav-link"}>
                                 <i style={{ fontSize: "28px" }} class="fa-solid fa-envelope"></i>

                              </NavLink>
                           </li>
                           <li className="nav-item mx-2 mx-lg-3">
                              <NavLink to="/comments " className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                                 <i style={{ fontSize: "28px" }} class="fa-solid fa-comments"> </i>
                              </NavLink>
                           </li>
                           <li className="nav-item mx-2 mx-lg-3">
                              <NavLink to="/bell" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                                 <i style={{ fontSize: "22px" }} class="fa-solid fa-bell"></i>
                              </NavLink>
                           </li>
                           <li className="nav-item mx-2 mx-lg-3">
                              <NavLink to="/events" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                                 <i style={{ fontSize: "28px" }} class="fa-solid fa-thumbs-up"></i>
                              </NavLink>
                           </li>
                           <li className="nav-item mx-2 mx-lg-3">
                              <NavLink to="/video" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                                 <i style={{ fontSize: "28px" }} class="fa-solid fa-video"></i>
                              </NavLink>
                           </li>

                           <li className="nav-item mx-2 mx-lg-3">
                              <NavLink to="/music" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                                 <i style={{ fontSize: "28px" }} class="fa-solid fa-music"> </i>
                              </NavLink>
                           </li>



                        </ul>

                        <div className="d-flex align-items-center">
                           {/* <!-- Icon --> */}



                           {/* <!-- Notifications --> */}
                           <div className="input-group mx-2 mx-lg-0">
                              <input type="search" id="form1" className="form-control" />
                              <button type="button" className="btn btn-primary">
                                 <i className="fas fa-search"></i>
                              </button>
                           </div>
                           {/* <!-- Avatar --> */}
                           <div className="dropdown px-3">
                              <a
                                 className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                 href="#"
                                 id="navbarDropdownMenuAvatar"
                                 role="button"
                                 data-mdb-toggle="dropdown"
                                 aria-expanded="false"
                              >
                                 <img
                                    src="https://i.mycdn.me/i?r=AzExTCcIQuhnRIX9gBwt8KAM1jzSSwtriLlRooLjaVYDYKm_svJxxA0QvLDn9nFKims&fn=sqr_50"
                                    className="rounded-circle"
                                    height="30"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                 />
                              </a>
                              <ul
                                 className="dropdown-menu dropdown-menu-end"
                                 aria-labelledby="navbarDropdownMenuAvatar"
                              >
                                 <li>
                                    <a className="dropdown-item" href="https://ok.ru/profile/586514121869?utm_campaign=web_share">{lang.profile}</a>
                                 </li>
                                 <li>
                                    <a className="dropdown-item" href="https://ok.ru/settings">{lang.settings}</a>
                                 </li>
                                 <li >
                                    <a onClick={() => {
                                       return (
                                          toast.info('log out', {
                                             position: "top-right",
                                             autoClose: 1000,
                                             hideProgressBar: false,
                                             closeOnClick: true,
                                             pauseOnHover: true,
                                             draggable: true,
                                             progress: undefined,
                                          }),
                                          isAuth(false)
                                       )
                                    }} className="dropdown-item" href="#">{lang.Logout}</a>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </>

                        :


                        " "

                  }


               </div>

            </div>
         </nav>
      </>
   );
};

export default Navbar;