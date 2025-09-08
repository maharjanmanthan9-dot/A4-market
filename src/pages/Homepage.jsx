import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../../public/data.json'

// Import Swiper styles
import 'swiper/css';

import Slider from '../components/Slider'

// import required modules
import { Autoplay } from 'swiper/modules';
import Card from '../components/Card';
import axios from 'axios';

const Homepage = () => {
  const [products, setProducts] = useState([])
useEffect(()=>{
  // axios.get('/data.json')
  //   .then(res => setProducts(res.data.products))
  //   .catch(err => console.log('Axios is not working.'))
  setProducts(Data.products)
},[])
  
  return (
    <>
      <Slider />
      {/* mini Carsousel */}
      <div className="minicarsouel px-5" id='minicarsousel'>
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper pt-4">
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>
          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>
          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>

          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>

          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>
          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>

          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>

          </SwiperSlide>
          <SwiperSlide className='item'>
            <div className="image">
              <img src="/images/item1.jpeg" alt="" width={'80px'} className=' border border-2 border-secondary ' />
              <p className='text-center fw-bold'>Lorem, ipsum.</p>

            </div>

          </SwiperSlide>

        </Swiper>
      </div>
      {/* End of mini */}
      

      {/* Trending products */}
      <div className="my-5 px-5" id="products">
        <h2>Trending Items</h2>
        <hr />
        <div className="d-flex justify-content-center flex-wrap">
          {
            products.slice(0,4).map((item, m)=>(
              <Card data = {item} key={m} />
              // <img src='/images/fav.png' alt=''/>
                        ))
          }
          
  
        </div>
        <p className='text-end'><a href="/products" className='btn text-white mx-3' id='more' style={{background: '#0077ff'}}>View More Products <i className='bi bi-arrow-right'></i></a></p>
      </div>

      {/* End of Trending products */}

      {/* New Arrivals */}
      <div id="arrivals">
        <div className="d-lg-flex justify-content-evenly align-items-center m-auto p-4">
          <div className="d-flex p-4 justify-content-between align-items-center rounded-5 mb-5" id='card'>
            <div className="arrivalstext col-lg-6  text-light ">
              <small>New Arrivals</small>
              <h3>Smartphone</h3>
              <p>Best Phone In The World</p>
            </div>
            <div className="images">
              <img src="/images/item4.jpg" alt="" />
            </div>
          </div>

          <div className="d-flex p-4 justify-content-between align-items-center rounded-5 mb-5" id='card'>
            <div className="arrivalstext col-lg-6 text-light ">
              <small>New Arrivals</small>
              <h3>Smartphone</h3>
              <p>Best Phone In The World</p>
            </div>
            <div className="images">
              <img src="/images/item4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* End of New Arrivals */}
    </>
  )
}

export default Homepage
