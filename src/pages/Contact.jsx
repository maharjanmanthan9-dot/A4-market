
import React from 'react'
import * as Yup from 'Yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Swal from 'sweetalert2'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Confirm register!",
      text: "You won't be able to revert this!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Done"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/'
      }
    })
  }
  return (
    <>
      <Formik initialValues={{ fname: '', lname: '', email: '', pwd: '', phn: '', add: '' }}
        validationSchema={Yup.object({
          fname: Yup.string()
            .required('First Name is mandatory.')
            .min(3, 'First Name must be atleast 3 character long.')
            .matches(/^[a-zA-Z\ ]+$/, 'First Name must be alphabets only '),

          lname: Yup.string()
            .required('Last Name is mandatory.')
            .min(3, 'Last Name must be atleast 3 character long.')
            .matches(/^[a-zA-Z\ ]+$/, 'Last Name must be alphabets only '),

          email: Yup.string()
            .required('Email is mandatory')
            .email('Invalid email'),

          pwd: Yup.string()
            .required('Password is mandatory')
            .min(8, 'Password should be alleast 8 character long')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/, 'a,A,1,@,# is mandatory'),


          phn: Yup.string()
            .required('Phone number is mandatory')
            .length(10, 'Invalid Length')
            .matches(/^[0-9\ ]+$/, 'It must contains number only'),

          add: Yup.string()
            .required('Address is required')

        })}
      >
        <div className="d-md-flex " id='contact'>
          <div className="me-5">
            <h2 className='px-5 fs-1 text-primary fw-bold'>Contact Us</h2>
            <p className='text-secondary px-5 fw-semibold'>Email, call or compplete the form to learn how <br />
              Snappy can slove your messaging problem.</p>
            <p className='my-3 text-secondary px-5 fw-semibold'>info@company.com</p>
            <p className='text-secondary px-5 fw-semibold'>321-123-231</p>
            <a href="" className='text-secondary px-5 fw-semibold fs-5'>Customer Support</a>
            <div className="d-md-flex justify-content-evenly py-3">
              <div className="col-md-5 me-3 p-3 my-2 border border-2 border-primary rounded-5" id='box'>
                <h6>Customer Support</h6>
                <small className='text-secondary fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis quam ex rerum ea sequi quibusdam enim ducimus, nemo nobis!</small>
              </div>
              <div className="col-md-5 me-3 p-3 my-2 border border-2 border-primary rounded-5" id='box'>
                <h6>Feedback and Suggestions</h6>
                <small className='text-secondary fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque dicta exercitationem eos ipsa ex. Vel cum doloribus fugiat ex, dolores dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias dicta error ipsa quasi, voluptatum quae. Voluptatem facilis eos asperiores?</small>
              </div>
            </div>

          </div>
          <div className="col-md-5 me-3 p-4 border border-2 border-secondary rounded-5" id='details'>
            <Form action="" onSubmit={handleSubmit} method='post'>
              <h2 className="text-primary fw-bold">Get Touch in with Us</h2>
              <p className='text-secondary fw-semibold'>You can reach us anytime</p>
              <hr />
              <div className="d-flex justify-content-evenly">
                <div className="form-floating mb-3  col-md-6 me-2">
                  <Field type="text" className="form-control" placeholder="" id='fname' name='fname' required/>
                  <label htmlFor="fname">First Name</label>
                  <ErrorMessage name='fname'>
                    {
                      msg => <small className='text-danger'>{msg}</small>
                    }
                  </ErrorMessage>

                </div>
                <div className="form-floating mb-3  col-md-6">
                  <Field type="text" className="form-control" placeholder="" id='lname' name='lname' required/>
                  <label htmlFor="lname">Last Name</label>
                  <ErrorMessage name='lname'>
                    {
                      msg => <small className='text-danger'>{msg}</small>
                    }
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-floating mb-3">
                <Field type="email" className="form-control" placeholder="" id='email' name='email' required/>
                <label htmlFor="">Email</label>
                <ErrorMessage name='email'>
                  {
                    msg => <small className='text-danger'>{msg}</small>
                  }
                </ErrorMessage>
              </div>

              <div className="form-floating mb-3">
                <Field type="password" className="form-control" placeholder="" id='pwd' name='pwd' required/>
                <label htmlFor="pwd">Password</label>
                <ErrorMessage name='pwd'>
                  {
                    msg => <small className='text-danger'>{msg}</small>
                  }
                </ErrorMessage>
              </div>
              
                <div className="form-floating mb-3 me-2">
                  <Field type="number" className="form-control" placeholder="" id='phn' name='phn' required/>
                  <label htmlFor="phn">Phone Number</label>
                  <ErrorMessage name='phn'>
                    {
                      msg => <small className='text-danger'>{msg}</small>
                    }
                  </ErrorMessage>

                </div>

                <div className="form-floating mb-3">
                  <Field type="text" className="form-control" placeholder="" id='add' name='add' />
                  <label htmlFor="add">Address</label>
                  <ErrorMessage name='add'>
                    {
                      msg => <small className='text-danger'>{msg}</small>
                    }
                  </ErrorMessage>
                </div>
         

              <button className='btn btn-primary w-100 py-2 fw-bold fs-5 rounded-5' >Submit</button>

            </Form>
          </div>
        </div>
      </Formik >
      <div className="d-md-flex p-5 align-items-center mt-4 justify-content-center" id='location'>
        <div className="col-md-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.553789281443!2d85.31146563894092!3d27.677835604797405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2sPulchowk%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1749091752856!5m2!1sen!2snp"
            style={{ borderRadius: '5', width: '100%', height: '500px' }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="text p-5">
          <p className='fs-1 fw-semibold text-primary'>Our Location <br /><span className='fs-1 fw-bold text-light'>Connecting Near and Far</span></p>
          <p className='fw-semibold fs-4 text-primary'>Headquaters</p>
          <small className='fs-6 text-secondary'>Kathmandu,Nepal</small>
          <br />
          <small className='fs-6 text-secondary'>Lalitpur,Nepal</small>
          <br />
          <small className='fs-6 text-secondary'>Banepa,Nepal</small>
          <br />
          <small className='fs-6 text-secondary'>Bhaktapur,Nepal</small>
        </div>
      </div>

      <div className="d-md-flex justify-content-evenly mt-5 align-items-center" id='box'>
        <div className="question col-md-5 p-5">
          <p className='px-2 fs-3 fw-bold text-primary'>FAQ</p>
          <h3 className='px-2 fs-1'>Do you have any questions for us</h3>
          <div className="text px-2">
            <small className=''>If There are question you want to ask. We will answer all your question.</small></div>

          <div className="d-md-flex justify-content-evenly mt-3">
            <div class="form-floating" style={{ borderRadius: '27px', width: '60%' }}>

              <input type="email" class="contact form-control mb-4" placeholder="Email" id="name"
                onkeyup="yourName()" required />
              <span id="fnameMsg"></span>
              <label for="" class="text-secondary"><i className='bi bi-envelope-fill px-2'></i>Email</label>
            </div>
            <button className='btn btn-primary p-2 fw-bold' style={{ height: '60px', width: '110px', borderRadius: '27px' }}>Submit</button>
          </div>
        </div>
        <div className="acc col-md-7 p-3">
          <div class="accordion " id="accordionExample">
            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What makes A4 market different from others?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How secure we are?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Is it easy than others?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact
