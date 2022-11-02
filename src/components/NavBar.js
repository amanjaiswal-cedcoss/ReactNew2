import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div id="navbar">
        <ul id='leftUl'>
            <li><img style={{height:"47px"}} src="icons8-facebook.svg"/></li>
            <li><img src="icons8-search.svg"/></li>
        </ul>
        <ul id='midUl'>
            <li><img src="icons8-home-page-48.png"/></li>
            <li><img src="icons8-facebook-watch-48.png"/></li>
            <li><img src="icons8-online-store-50.png"/></li>
            <li><img src="icons8-people-30.png"/></li>
            <li><img src="icons8-facebook-gaming.svg"/></li>
        </ul>
        <ul id="rightUl">
            <li><img src="icons8-circled-menu-50.png"/></li>
            <li><img src="icons8-facebook-messenger.svg"/></li>
            <li><img src="icons8-bell-32.png"/></li>
            <li><img style={{height:"40px"}} src="account.jpg"/></li>
        </ul>
    </div>
  )
}

export default NavBar