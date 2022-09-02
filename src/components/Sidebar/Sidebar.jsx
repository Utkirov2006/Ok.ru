import React from 'react'
import { NavLink } from 'react-router-dom'

import './sidebar.css'

export default function Sidebar() {

  return (
    <>
      <div className="sidebar">
        <img className="sidebar-img" src="https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10CkqBly_mdl7h1Zshr_-sUBrPxX2S37Fs8AGKkZYO9ANvY&fn=legacy_14" alt="" />



        <NavLink to="/" className={({ isActive }) => isActive ? "menu_active" : "menu"}><i class="fa-solid fa-user"></i> <span>Marsh Mello</span></NavLink>

        <NavLink to="cloud" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-house"></i> <span>Home</span></NavLink>


        <NavLink to="/sketch" className={({ isActive }) => isActive ? "menu_active" : "menu"}><i class="fa-solid fa-user-group"></i> <span>Friends</span></NavLink>


        <NavLink to="/experiments" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-video"></i>  <span>Video</span></NavLink>


        <NavLink to="/security" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-image"></i> <span> Photos</span></NavLink>


        <NavLink to="/ownership" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-user-group"></i><span> Groups</span></NavLink>


        <NavLink to="/test" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-gamepad"></i> <span>Games </span></NavLink>


        <NavLink to="/colors" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-gift"></i>  <span>Gifts</span></NavLink>


        <NavLink to="/colors" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-bookmark"></i>  <span>Bookmarks</span></NavLink>

        <NavLink to="/colors" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
          <i class="fa-solid fa-bag-shopping"></i>  <span>Buy oks</span></NavLink>

        <NavLink to="/colors" className={({ isActive }) => isActive ? "menu_active" : "menu"}>
        <i class="fa-solid fa-credit-card"></i>  <span>Payments</span></NavLink>



       

      </div>


    </>
  )
}
