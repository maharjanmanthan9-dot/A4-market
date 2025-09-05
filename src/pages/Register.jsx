import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2'
import * as Yup from 'Yup'


const Register = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
       Swal.fire({
            title: "Confirm register!",
            text: "You won't be able to revert this!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Done"
        }).then((result) => {
            if(result.isConfirmed) {
                window.location.href = '/'
            }
        })
    }
    return (
        <>
        <Formik initialValues={{fname: '',lname:'', email:'', pwd:'',phn:'',add:'' }}
        validationSchema={Yup.object({
            fname:Yup.string()
            .required('First Name is mandatory.')
            .min(3, 'First Name must be atleast 3 character long.')
            .matches(/^[a-zA-Z\ ]+$/,'First Name must be alphabets only '),

            lname:Yup.string()
            .required('Last Name is mandatory.')
            .min(3, 'Last Name must be atleast 3 character long.')
            .matches(/^[a-zA-Z\ ]+$/,'Last Name must be alphabets only '),

            email:Yup.string()
            .required('Email is mandatory')
            .email('Invalid email'),
            
            pwd:Yup.string()
            .required('Password is mandatory')
            .min(8,'Password should be alleast 8 character long')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/,'a,A,1,@,# is mandatory'),
            

            phn:Yup.string()
            .required('Phone number is mandatory')
            .length(10,'Invalid Length')
            .matches(/^[0-9\ ]+$/,'It must contains number only'),

            add:Yup.string()
            .required('Address is required')

        })}
        
        >

            <div className="container my-5" id="register-form">
                <div className="d-md-flex justify-content-evenly align-items-center">
                    <div className="col-md-4">
                        <img src="/images/svg.webp" alt="register" width="100%" />
                    </div>
                    <div className="col-md-6 p-4 shadow">
                        <Form action="" onSubmit={handleSubmit} method='post'>
                            <h2 className="text-center">Create Account for Free!</h2>
                            <hr />
                            <div className="d-flex justify-content-evenly">
                                <div className="form-floating mb-3  col-md-6 me-2">
                                    <Field type="text" className="form-control" placeholder="" id='fname' name='fname' />
                                    <label htmlFor="fname">First Name</label>
                                    <ErrorMessage name='fname'>
                                        {
                                            msg=><small className='text-danger'>{msg}</small>
                                        }
                                    </ErrorMessage>

                                </div>
                                <div className="form-floating mb-3  col-md-6">
                                    <Field type="text" className="form-control" placeholder="" id='lname' name='lname'  />
                                    <label htmlFor="lname">Last Name</label>
                                    <ErrorMessage name='lname'>
                                        {
                                            msg=><small className='text-danger'>{msg}</small>
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <Field type="email" className="form-control" placeholder="" id='email' name='email' />
                                <label htmlFor="">Email</label>
                                <ErrorMessage name='email'>
                                        {
                                            msg=><small className='text-danger'>{msg}</small>
                                        }
                                    </ErrorMessage>
                                </div>

                            <div className="form-floating mb-3">
                                <Field type="password" className="form-control" placeholder="" id='pwd' name='pwd' />
                                <label htmlFor="pwd">Password</label>
                                <ErrorMessage name='pwd'>
                                        {
                                            msg=><small className='text-danger'>{msg}</small>
                                        }
                                    </ErrorMessage>
                                </div>

                                <div className="d-flex">

                            <div className="form-floating mb-3 col-md-6 me-2">
                                <Field type="number" className="form-control" placeholder="" id='phn' name='phn' />
                                <label htmlFor="phn">Phone Number</label>
                                <ErrorMessage name='phn'>
                                        {
                                            msg=><small className='text-danger'>{msg}</small>
                                        }
                                    </ErrorMessage>

                            </div>

                             <div className="form-floating mb-3 col-md-6">
                                <Field type="text" className="form-control" placeholder="" id='add' name='add' />
                                <label htmlFor="add">Address</label>
                                <ErrorMessage name='add'>
                                        {
                                            msg=><small className='text-danger'>{msg}</small>
                                        }
                                    </ErrorMessage>
                                </div>
                                </div>

                            <button className='btn btn-primary w-100' >Register now</button>

                        </Form>
                    </div>
                </div>
            </div>
            </Formik>
        </>
    )
}

export default Register
