import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
const Topbar = () => {
  return (
    <div className="topbar">
    <div className="container">

      <address className="topbar-item">
        <div className="icon">
          <CiLocationOn className='ion-icon' name="location-outline" aria-hidden="true"/>
        </div>

        <span className="span">
          Lakeside Ward No.6, Baidam, Pokhara
        </span>
      </address>

      <div className="separator"></div>

      <div className="topbar-item item-2">
        <div className="icon">
        <IoMdTime/>
        </div>

        <span className="span">Daily : 8.00 am to 12.00 pm</span>
      </div>

      <a href="tel:+977061-451675" className="topbar-item link">
        <div className="icon">
        <IoCallOutline />
        </div>

        <span className="span">061-451675</span>
      </a>

      <div className="separator"></div>

      <a href="mailto:booking@restaurant.com" className="topbar-item link">
        <div className="icon">
          <CiMail />
        </div>

        <span className="span">booking@restaurant.com</span>
      </a>

    </div>
  </div>


  )
}

export default Topbar
