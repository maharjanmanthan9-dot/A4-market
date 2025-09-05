import React, { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';

import Card from '../components/Card';
import axios from 'axios';

const Products = () => {


    const [products, setProducts] = useState([])

        useEffect(
        () => {
            axios.get('https://dummyjson.com/products')
                .then(res => setProducts(res.data.products))
                .catch(err => console.log('Axios is not working.'))
        }, []
        )
    return (
        <>

            <div className="container my-5" id='productpage'>
        
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
