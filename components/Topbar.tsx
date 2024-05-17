import React from 'react'

const Topbar = () => {
  return (
    <div className="topbar">
    <div className="container">

      <address className="topbar-item">
        <div className="icon">
          {/* <io name="location-outline" aria-hidden="true"></io/n-icon> */}
        </div>

        <span className="span">
          Lakeside Ward No.6, Baidam, Pokhara
        </span>
      </address>

      <div className="separator"></div>

      <div className="topbar-item item-2">
        <div className="icon">
          {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}
        </div>

        <span className="span">Daily : 8.00 am to 12.00 pm</span>
      </div>

      <a href="tel:+977061-451675" className="topbar-item link">
        <div className="icon">
          {/* <ion-icon name="call-outline" aria-hidden="true"></ion-icon> */}
        </div>

        <span className="span">061-451675</span>
      </a>

      <div className="separator"></div>

      <a href="mailto:booking@restaurant.com" className="topbar-item link">
        <div className="icon">
          {/* <ion-icon name="mail-outline" aria-hidden="true"></ion-icon> */}
        </div>

        <span className="span">booking@restaurant.com</span>
      </a>

    </div>
  </div>


  )
}

export default Topbar
