import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../../public/data.json'

import { useParams } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Rating from '../components/Rating';



const productDetails = () => {
  // const [products, setproducts] = useState({})
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams()
  let pid = params.products_id
  // useEffect(
  //   () => {
  //      axios.get(`/data.json/products/${pid}`)
  //       .then(res => setproducts(res.data))
  //       .catch(err => console.log('Axios is not working.'))

  //   }, []
  // )
  const products = Data.products.find((item)=>item.id== pid)

  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    setQuantity(quantity + 1)
  }
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
    else {

      Swal.fire({
        title: "Info",
        icon: "info",
        text: 'Minimun quantity must be 1',
        draggable: true
      });
    }

  }
  const addtocart = () => {
    // get localstorage data if exist otherwise empty array
    const Cartitems = JSON.parse(localStorage.getItem('cartItems')) || []

    // set object for product information
    const productData = {
      id: products.id,
      title: products.title,
      category: products.category,
      quantity: quantity,
      price: products.price.marketvalue,
      image: products.thumbnail,
      discount: products.discountPercentage,

    }


    // check if the item is already exist or not
    const existingItem = Cartitems.find((item) => item.id === products.id)
    if (!existingItem) {
      Cartitems.push(productData)
      localStorage.setItem('cartItems',JSON.stringify(Cartitems))
      Swal.fire({
        title: "Succes!",
        icon: "success",
        text: 'Item added to cart',
        draggable: true
      }).then((result) => {
            if(result.isConfirmed) {
                window.location.href = '/cart'
            }
        })

    }
    else
   {
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: 'Item already exist',
        draggable: true
      });
    }
  }


return (
  <>
    <nav aria-label="breadcrumb"  className='container'>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/" className='text-secondary fw-semibold text-decoration-none'>Home</a></li>
        <li className="breadcrumb-item"><a href="/products" className='text-secondary fw-semibold text-decoration-none'>products</a></li>
        <li className="breadcrumb-item active text-primary fw-semibold" aria-current="page" >{products.reference}</li>
      </ol>
    </nav>

    <div className="container d-md-flex shadow p-3" id='details'>
      <div className="col-md-4">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 border border-3"
        > 
          {
            products.image && products.image.length > 1 ?
              <SwiperSlide>
                <img src={products.image[0]} />
              </SwiperSlide> :
              <SwiperSlide>
                <img src={products.image} />
              </SwiperSlide>
          }
          {
            products.image && products.image.length > 1 ?
              <SwiperSlide>
                <img src={products.image[1]} />
              </SwiperSlide> : ''
          }


        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper border border-3"
        >
          {
            products.image && products.image.length > 1 ?
              <SwiperSlide>
                <img src={products.image[0]} />
              </SwiperSlide> :
              <SwiperSlide>
                <img src={products.image} />
              </SwiperSlide>
          }
          {
            products.image && products.image.length > 1 ? <SwiperSlide><img src={products.image[1]} /></SwiperSlide> : ''
          }


        </Swiper>
      </div>

      <div className="text col-md-6 ps-5 mt-2">
        <h2>{products.title}</h2>
        {
          products.rating && <Rating rate = {products.rating} />
        }
        <small>{products.description}</small>
        <hr />
        <p className='price'>${products.price.marketvalue}</p>
        <p className='fw-semibold'>Size:<span className='text-secondary'> S/M/L</span></p>
        <p className="fw-semibold">Features:
          <div className="ms-4 text-secondary">
            <li>Made from 100% biodegradable and non-toxic materials. </li>
            <li>Exceptional grip for stability. </li>
            <li>Lightweight for easy transport. </li>
          </div>
        </p>
        <p className="fw-semibold">Stock: <span className='text-secondary'>{products.quantity} units</span></p>
        <p className="fw-semibold mb-0">Quantity:</p>
        <div className="d-flex align-items-center mb-3">
          <button className='btn bg-secondary-subtle rounded-end-0 rounded-start-2' style={{ height: '100%' }} onClick={decrease}> - </button>
          <p className='mt-3 px-4'>{quantity}</p>
          <button className='btn bg-secondary-subtle rounded-end-2 rounded-start-0' style={{ height: '100%' }} onClick={increase}> + </button></div>

        <button className='btn btn-primary'>{products.stock}</button>


        <p className="fw-semibold my-2">Return Policy:<span className='text-secondary'> {products.returnPolicy}</span></p>

        <div className="d-md-flex ">

        <button className='btn p-2 my-2 btn-outline-success  me-3' style={{ background: '' }} onClick={addtocart}>Add to Wishlist</button>
        <button className='btn p-2 my-2 text-light' style={{ background: '#bd5b00' }} onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
    </div>
  </>
)
}

export default productDetails
