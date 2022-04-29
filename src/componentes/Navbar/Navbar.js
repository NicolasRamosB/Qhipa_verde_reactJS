import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'

// import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export const Navbar = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (

    // <nav class="navbar navbar-expand-lg navbar-light sticky-top pt-0 pb-0 ">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="index.html"><img src="../img/logo/Q_FB.png" class="logo" alt="Q_FB" /></a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse Categories" id="navbarNavDropdown">
    //     <ul class="navbar-nav justify-content-end w-100">
    //       {categories.map(categories => <NavLink key={categories.id} to={`/category/${categories.id}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{categories.descripcion}</NavLink>)}
    //     </ul>
    //     </div>
    //   </div>
    // </nav>

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

    <Navbar collapseOnSelect expand="lg" variant="dark" className='bgtNav'>
            <Container fluid>
                <Link to='/'>
                    <img src={'../images/afklogo1.png'} className="Logo-app" alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {categories.map(categories => <NavLink key={categories.id} to={`/category/${categories.id}`} className={({isActive}) => isActive ? 'activeCategory' : 'optionCategory'} >{categories.descripcion}</NavLink>)}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>


  )
}



//  <ul class="navbar-nav justify-content-end w-100">
//   <li class="nav-item">
//     <a class="nav-link" href="html/nosotras.html">Nosotras</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="html/productos.html">Productos</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="html/diseños.html">Diseños</a>
//   </li>
// </ul>  