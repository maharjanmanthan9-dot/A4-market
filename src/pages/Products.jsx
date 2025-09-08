import React, { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';

import Card from '../components/Card';
import axios from 'axios';
import Data from '../../public/data.json'

const Products = () => {


    const [products, setProducts] = useState([])

        useEffect(
        () => {
            // axios.get('/data.json')
            //     .then(res => setProducts(res.data.products))
            //     .catch(err => console.log('Axios is not working.'))
            setProducts(Data.products)
        }, []
        )
    return (
        <>

            <div className="container my-5" id='products'>
        
                    <div className="d-md-flex justify-content-center flex-wrap">
                        {
                            products.map((item) => (
                                <Card data={item} />
                            ))
                        }

                    </div>
                </div>
            
        </>
    )
}

export default Products
