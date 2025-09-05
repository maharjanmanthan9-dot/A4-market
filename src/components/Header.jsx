import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location= useLocation()
  return (
    <>
      <header className='mb-5'>

        <nav className='navbar navbar-expand-lg p-0 justify-content-between'>
          <div className='container-fluid' id='navbar'>
            <a className='navbar-brand' href='/' ><img src="/images/market3.png" alt=""/></a>
            <button className='navbar-toggler ms-auto' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
              
              <ul className='navbar-nav m-auto mb-lg-0' >
                <li className='nav-item' id='head'>
                  <a className={`${location.pathname == '/' ? 'active' : '' } nav-link fs-4 fw-bold me-3`} aria-current='page' href='/' >Home</a>
                </li>
                <li className='nav-item' id='head'>
                  <a className={`${location.pathname == '/about' ? 'active' : '' } nav-link fs-4 fw-bold me-3`}href='/about' >About</a>
                </li>

                <li className='nav-item' id='head'>
                  <a className={`${location.pathname == '/products' ? 'active' : '' } nav-link fs-4 me-3 fw-bold`} href='/products'>Products</a>
                </li>
                <li className='nav-item' id='head'>
                  <a className={`${location.pathname == '/cart' ? 'active' : '' } nav-link fs-4 fw-bold me-3`} href='/cart'>Cart</a>
                </li>

                <li className='nav-item' id='head'>
                  <a className={`${location.pathname == '/contact' ? 'active' : '' } nav-link fs-4 fw-bold`}href='/contact' >Contact</a>
                </li>
              </ul>

              <ul className='navbar-nav  mb-lg-0'>
                <li className='nav-item '>
                  <a className='nav-link fw-semi-bold text-dark  text-decoration-none fs-4' href='#' ><button className='p-2 rounded-5 btn btn-dark fw-bold'>Login</button></a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link fw-semi-bold text-dark text-decoration-none fs-4' href='/register' ><button className='p-2 rounded-5 btn btn-light fw-bold'>Register</button></a>
                </li>
              </ul>



            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
