import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Cart = () => {
    const [cartItem, setCartItem] = useState([])

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('cartItems'))
    setCartItem(data)
    })

    const deleteItem=(item_id)=>{
        let data = JSON.parse(localStorage.getItem('cartItems'))
        let newcart = data.filter((item)=> item.id != item_id)
        localStorage.setItem('cartItems',JSON.stringify(newcart))
        setCartItem(newcart)
         Swal.fire({
                title: "Done!",
                icon: "success",
                text: 'Item deleted',
                draggable: true
              });
    }
    
    
  return (
    <>
        <div class="container"> 
            {
                cartItem && cartItem.length >= 1?(
                    <>
            <h2 class="text-center text-primary">Cart Items and Summary</h2>
            <hr/>
           
            <div class="d-md-flex justify-content-evenly p-2">
                <div class="col-md-7">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                cartItem.map((item,i)=>(
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.price} <span className='bg-secondary  badge'>({item.discount}% discount)</span></td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <img src={item.image} alt={item.title} width={50} />
                                        </td>
                                        <td><i className='bi bi-trash text-danger fs-4 p-2' onClick={()=>deleteItem(item.id)}></i></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <div class="cart-summary p-3 shadow rounded-3">
                        <h3>Cart Summary</h3>
                        <hr/>
                        <p class="my-1 fw-bold">Total units: <span class="text-primary fw-bold float-end"> 
                            {
                                cartItem.reduceRight((acc,item)=>{
                                    return acc + item.quantity
                                },0)
                            }
                            
                             units</span></p>
                         <p class="my-1 fw-bold">Total Price (without discount): <span class="text-primary fw-bold float-end"> $
                            {
                                 cartItem.reduceRight((acc,item)=>{
                                    return acc + (item.quantity * item.price)
                                },0)
                            }
                            </span></p>
                          
                           <hr/>
                           <p>Grand Total: <span class="text-danger fw-bold float-end">$
                            {
                                 cartItem.reduceRight((acc,item)=>{
                                    const discountedPrice =item.price * (1-(item.discount || 0)/100)
                                    return acc+ discountedPrice*item.quantity
                                },0).toFixed(2)
                                
                            }</span></p>
                           <a href="#" class="btn btn-primary w-100"> Checkout</a>
                    </div>
                </div>
            </div>
         </>
         ):(
            <div className="d-md-flex align-items-center justify-content-center" id='empty'>
                
                <p className='display-5 fw-bold text-light col-md-5'>Your cart is empty</p>
                <img src="images/men.webp" className='col-md-2' width={150} alt="" />
            </div>
         )
            }
      </div>
    </>
  )
}

export default Cart
