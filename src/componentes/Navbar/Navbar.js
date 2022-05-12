import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'



export const Navbar = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (


    <nav className="navbar navbar-expand-lg navbar-light sticky-top pt-0 pb-0 ">
      <div className="container-fluid">
        <Link to='/'>
          <div className="navbar-brand">
            <img src="../img/logo/Q_FB.png" className="logo " alt="Q_FB" />
          </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <ul className="navbar-nav justify-content-end w-100">
            {categories.map(categories => <NavLink key={categories.id} to={`/category/${categories.id}`}
              className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{categories.description}</NavLink>)}
          </ul>
        </div>
      </div>
    </nav>

    



  )
}


