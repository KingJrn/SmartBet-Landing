import { useState } from 'react'
import Logo from '../assets/images/logo.svg'

function Header() {
  // initializing state  using the use state hooks
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  }
  return (
    <>
      <nav className="navbar py-2 px-5 is_primary_blue" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src={Logo} width="112" height="28" className='is_image' alt="Bulma Logo" />
          </a>

          <a onClick={toggleClass} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {/* display nne on desktop screen */}
        <nav className={`is-0-mobile ${isActive ? 'mobile_nav': ''}`}>
        
          <div className="navbar-start is-size-5 container is-flex is-flex-direction-column">
          <div className='is-size-3 is_X'><span onClick={toggleClass}>X</span></div>
            <a className="navbar-item has-text-white" >
              Whitepaper
            </a>
            <a className="navbar-item has-text-white">
              About us
            </a>
            <a className="navbar-item has-text-white">
              Terms
            </a>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is_warning is-size-5">
                  <strong>Launch App</strong>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* ends  */}
        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-end is-size-5">
            <a className="navbar-item has-text-white" >
              Whitepaper
            </a>
            <a className="navbar-item has-text-white">
              About us
            </a>
            <a className="navbar-item has-text-white">
              Terms
            </a>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is_warning is-size-5">
                  <strong>Launch App</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header