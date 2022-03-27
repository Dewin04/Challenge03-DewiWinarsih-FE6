import React from 'react'
import { Nav } from 'react-bootstrap'
import '../../../Pages/Login/login.css'
import iconImg from '../../img/Rectangle 63.png'
import iconHome from '../../img/fi_home.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="full-body">
       <Nav 
          className="col-lg-12 px-0 d-none d-md-block bg-primary sidebar full-body"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky-sm">
              <div className="container" >
                <img className="w-100 p-2" src={iconImg} alt="" />
              </div>
            </div>
        <Nav.Item>
          <Link to="/Dashboard">
            <div className="container d-flex flex-column justify-content-center align-items-center border border-2">
              <img src={iconHome} alt="" />
              <span><small className="text-white">Dashboard</small></span>
            </div>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Car">
            <div className="container d-flex flex-column justify-content-center align-items-center border border-2">
              <img src={iconHome} alt="" />
              <span><small className="text-white">Car</small></span>
            </div>
          </Link>
        </Nav.Item>
        </Nav>
    </div>
  )
}
export default Navbar