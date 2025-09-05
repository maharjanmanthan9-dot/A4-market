import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Counter from './books/Counter'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Register from './pages/Register'

const Myrouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Layout />} >
                <Route index element={<Homepage />} />
                <Route path='/about' element={<About/>} />
                <Route path='/products' element={<Products />}/>
                
                <Route path='/productdetails/:products_id' element={<ProductDetails/>}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='/register' element={<Register />} />

                </Route>

                <Route path='/book' element={<Counter />}/>

               
            </Routes>
        </BrowserRouter>
    )
}

export default Myrouter
