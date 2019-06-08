import React from 'react'
import logo from '../img/logo.png'
export function Header() {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo}
          width="30" height="30" className="d-inline-block align-top" alt=""/>
        TwitchHights
      </a>
    </nav>
  )
}
