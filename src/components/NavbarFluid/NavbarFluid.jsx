import React from 'react';
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const NavbarFluid = ({ lang, setLangs, auth, isAuth }) => {
      return (
            <>
                  {/* <!-- Navbar --> */}
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/* <!-- Container wrapper --> */}
                        <div class="container-fluid">
                              {/* <!-- Toggle button --> */}
                              <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                              >
                                    <i class="fas fa-bars"></i>
                              </button>

                              {/* <!-- Collapsible wrapper --> */}
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    {/* <!-- Navbar brand --> */}
                                    {/* <!-- Left links --> */}
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li class="nav-item">
                                                <a class="nav-link" href="https://mail.ru/">Mail.ru</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="https://accounts.google.com/">{lang.Email}</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="https://cloud.google.com/">{lang.Cloud}</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="https://ok.ru/">{lang.Odnoklassniki}</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="https://vk.com/">Vk</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="https://news.google.com/topstories?hl=ru&gl=RU&ceid=RU:ru">{lang.News}</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">{lang.Search}</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">{lang.Dating}</a>
                                          </li>

                                          <div className="dropdown">
                                                <a
                                                      className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                                      href="#"
                                                      id="all"
                                                      role="button"
                                                      data-mdb-toggle="dropdown"
                                                      aria-expanded="false"
                                                >
                                                      <a class="nav-link" href="#">{lang.AllProjects}</a>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="all">
                                                      <li>
                                                            <a className="dropdown-item" href="#">
                                                                  <i className="fab fa-facebook text-primary"> Facebook</i>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a className="dropdown-item" href="#">
                                                                  <i className="fab fa-reddit text-warning"> Reddit</i>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a className="dropdown-item" href="#">
                                                                  <i className="fab fa-twitter text-primary"> Twitter</i>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a className="dropdown-item" href="#">
                                                                  <i className="fab fa-instagram text-danger"> Instagram</i>
                                                            </a>
                                                      </li>





                                                </ul>
                                          </div>
                                    </ul>
                                    <div className="d-flex align-items-center">
                                          {/* <!-- Icon --> */}

                                          <select style={{ width: "57%", padding: "0rem 2.25rem 0.375rem 0.75rem" }} className="form-select mx-2" onChange={(e) => setLangs(e.target.value)}>
                                                <option>en</option>
                                                <option>uz</option>
                                                <option>ru</option>
                                          </select>
                                          <h6 className="m-2"><a href="https://ok.ru/help">{lang.Help}</a></h6>
                                          {/* <!-- Notifications --> */}


                                    </div>
                                    {/* <!-- Left links --> */}
                              </div>
                              {/* <!-- Collapsible wrapper --> */}

                        </div>
                        {/* <!-- Container wrapper --> */}
                  </nav>
                  {/* <!-- Navbar --> */}
            </>
      );
};

export default NavbarFluid;