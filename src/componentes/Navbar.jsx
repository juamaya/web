import React from 'react'
 
import ok from '../images/ok.png'
export const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary  ">
        <div className="container-fluid   ">


          <p className="navbar-brand" href="#">
            <img src={ok} alt="ok" width="50" height="40" />
          </p>
          <h4>WEB__AMAYA</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link fs-4 " href="#">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fs-4"  href="#Jobs">Jobs</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fs-4" href="#Services">Services</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fs-4" href="#About us">About</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fs-4" href="#Contact">Contact</a>
              </li>
             
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

