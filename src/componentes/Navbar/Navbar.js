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
        
  <ul className="navbar-nav justify-content-end w-100">
          {categories.map(categories => <NavLink key={categories.id} to={`/category/${categories.id}`}
           className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{categories.description}</NavLink>)}
           </ul>
        
        </div>
    </nav>

    //   <nav className="NavBar" >
    //   <Link to='/'>
    //       <h3>Ecommerce</h3>
    //   </Link>
    //   <div className="Categories">
    //     { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
    //       className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
    //     >{cat.description}</NavLink>)}
    //   </div>
    // </nav>

 


  )
}



//  <ul className="navbar-nav justify-content-end w-100">
//   <li className="nav-item">
//     <a className="nav-link" href="html/nosotras.html">Nosotras</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="html/productos.html">Productos</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="html/diseños.html">Diseños</a>
//   </li>
// </ul>  