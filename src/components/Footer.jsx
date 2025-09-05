import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-dark-subtle mt-5 mt-5'>
        <div className="d-lg-flex justify-content-between px-5">
          <ul type='none' className='col-lg-3 py-3'>
            <li className='text-primary fw-bold fs-4 m-auto'>Contact Us</li>
            <li className='fs-5 py-1'><i class="bi bi-geo-fill text-primary fs-4 mx-2"></i><span>Pulchowk, Lalitpur</span></li>
            <li className='fs-5 py-1'><i class="bi bi-envelope-fill text-primary fs-4 mx-2"></i><span>someone@gmail.com</span></li>
            <li className='fs-5 py-1'><i class="bi bi-telephone-plus-fill text-primary fs-4 mx-2"></i> +977-9800000000</li>
            <li className='fs-5 py-1'><i class="bi bi-info-circle-fill text-primary fs-4 mx-2"></i><span>info@company.com</span></li>
          </ul>

          <ul type='none' className='col-lg-3 py-3'>
            <li className='text-primary fw-bold fs-4 m-auto'>Help and Support</li>
            <li className='fs-5 py-1'><a href="" className='text-decoration-none'>Privacy policy</a></li>
            <li className='fs-5 py-1'><a href="" className='text-decoration-none'>Terms and conditions</a></li>
            <li className='fs-5 py-1'><a href="" className='text-decoration-none'>FAOs</a></li>
            <li className='fs-5 py-1'><a href="" className='text-decoration-none'>About Us</a></li>
            <li className='fs-5 py-1'><a href="" className='text-decoration-none'>Contact us</a></li>
          </ul>
          <ul type='none' className=' col-lg-4 py-3'>
            <li><img src="/images/market3.png" alt=""/></li>
            <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veritatis at, sapiente molestias est quaerat fuga sed atque officiis laboriosam!</p>
            <div className="d-flex">
              <i className='bi bi-facebook fs-3 text-primary mx-2'></i>
               <i className='bi bi-instagram fs-3 text-primary mx-2'></i>
                <i className='bi bi-twitter fs-3 text-primary mx-2'></i>
            </div>
          </ul>



        </div>
      </footer>
    </>
  )
}

export default Footer
