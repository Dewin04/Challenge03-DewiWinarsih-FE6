import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard'
import Car from '../Pages/Car'
import Navbar from '../assets/components/Navbar/navbar';
// import Footer from '../assets/components/Footer/Footer';
import Login from '../Pages/Login/Login'
import './layout.css'
import imgIcon from '../assets/img/Rectangle 62.png'

const Layout = ({component}) =>{
  return(
    <div className="container-fluid px-0">
      <div className="d-flex flex-row w-100">
        <div className="border border-2 body-menu">
          <Navbar />
        </div>
        <div className="border border-2 w-100">
        <div className="d-flex flex-column">
          <div className="bg-primary border border-2 d-flex flex-row justify-content-between">
            <div className="w-25 border">
              <img className="w-50 p-2" src={imgIcon} alt="" />
            </div>
            <div className="w-75 border">
              <div className="d-flex flex-row justify-content-between">
                <div className="border border-2">
                  <img className="w-100 p-2" src={imgIcon} alt="" />
                </div>
                <div className="border border-2">
                  <img className="w-100 p-2" src={imgIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row full-body">
          <div className="bg-danger ">
            ini nav side bar
          </div>
          <div className="border border-2 w-100">
            {component}
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

const routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={
          <Layout component={<Dashboard />} />
        } />
        <Route path="/Car" element={
          <Layout component={<Car />} />
        } />
        {/* <Route path="about" element={
          <Layout component={<Dashboard />} />
        } /> */}
      </Routes>
    </div>
  )
}
export default routers;
