import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="d-md-flex align-items-center px-5" id='contact'>
                <div className="">
                    <h2>Contact Us</h2>
                    <p className='text-secondary'>Email, call or compplete the form to learn how <br />
                        Snappy can slove your messaging problem.</p>
                    <p className='my-3 text-secondary'>info@company.com</p>
                    <p className='text-secondary'>321-123-231</p>
                    <a href="" className='text-secondary'>Customer Support</a>
                    <div className="d-md-flex p-3">
                        <div className="col-md-4 shadow me-3 p-3 my-2">
                            <h6>Customer Support</h6>
                            <small className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis quam ex rerum ea sequi quibusdam enim ducimus, nemo nobis!</small>
                        </div>
                        <div className="col-md-4 shadow me-3 p-3 my-2">
                            <h6>Feedback and Suggestions</h6>
                            <small className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque dicta exercitationem eos ipsa ex. Vel cum doloribus fugiat ex, dolores dolorem?</small>
                        </div>
                        <div className="col-md-3 shadow p-3 my-2" >
                            <h6>Media Inquiries</h6>
                            <small className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus odio ad dolorem, nobis assumenda repellat!</small>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 rounded-5 p-4" id='details'>
                    <h3>Get in Touch</h3>
                    <small>You can reach us anytime</small>
                    <div className="d-md-flex">
                        <div class="form-floating col-md-6 mt-3 me-2">
                            <input type="text" class="contact form-control" placeholder="First Name" id="name"
                                onkeyup="yourName()" required />
                            <span id="fnameMsg"></span>
                            <label for="" class="text-secondary">First Name</label>
                        </div>
                        <div class="form-floating col-md-6 mt-3">
                            <input type="text" class="contact form-control mb-4" placeholder="Last Name" id="name"
                                onkeyup="yourName()" required />
                            <span id="fnameMsg"></span>
                            <label for="" class="text-secondary">Last Name</label>
                        </div>
                    </div>
                       <div class="form-floating">
                    
                        <input type="email" class="contact form-control mb-4" placeholder="Email" id="name"
                            onkeyup="yourName()" required />
                        <span id="fnameMsg"></span>
                        <label for="" class="text-secondary"><i className='bi bi-envelope-fill px-2'></i>Email</label>
                    </div>
                     <div class="form-floating">
                    
                        <input type="number" class="contact form-control mb-4" placeholder="Phone Number" id="name"
                            onkeyup="yourName()" required />
                        <span id="fnameMsg"></span>
                        <label for="" class="text-secondary"><i className='bi bi-telephone-plus-fill px-2'></i>Phone Number</label>
                    </div>
                    <div class="form-floating">
                    
                        <textarea type="number" class="contact2 form-control mb-4" placeholder="Message" rows="10" id="name"
                            onkeyup="yourName()" required />
                        <span id="fnameMsg"></span>
                        <label for="" class="text-secondary">Message</label>
                    </div>
                    <button type="submit" class="button w-100 p-2 btn btn-primary fw-bold" onclick="sendMsg()">Submit</button>
                    
                </div>
            </div>

            <div className="d-md-flex p-5 align-items-center mt-4 justify-content-center" id='location'>
                <div className="col-md-5">
                     <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.553789281443!2d85.31146563894092!3d27.677835604797405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2sPulchowk%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1749091752856!5m2!1sen!2snp"
                     style={{borderRadius:'5', width:'100%', height:'500px'}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="text p-5">
                <p className='fs-3 fw-semibold'>Our Location <br /><span className='fs-1 fw-bold'>Connecting Near and Far</span></p>
                <p className='fw-semibold fs-4'>Headquaters</p>
                <small className='fs-6 '>Kathmandu,Nepal</small>
                <br />
                <small className='fs-6 '>Lalitpur,Nepal</small>
                <br />
                <small className='fs-6 '>Banepa,Nepal</small>
                <br />
                <small className='fs-6 '>Bhaktapur,Nepal</small>
            </div>
            </div>

            <div className="d-md-flex justify-content-evenly mt-5 align-items-center" id='box'>
                <div className="question col-md-5 p-5">
                    <p className='px-2'>FAQ</p>
                    <h3 className='px-2 fs-1'>Do you have any questions for us</h3>
                    <div className="text px-2">
                    <small className=''>If There are question you want to ask. We will answer all your question.</small></div>
                
                <div className="d-md-flex justify-content-evenly mt-3">
                      <div class="form-floating" style={{borderRadius:'27px', width:'60%'}}>
                    
                        <input type="email" class="contact form-control mb-4" placeholder="Email" id="name"
                            onkeyup="yourName()" required />
                        <span id="fnameMsg"></span>
                        <label for="" class="text-secondary"><i className='bi bi-envelope-fill px-2'></i>Email</label>
                    </div>
                    <button className='btn btn-primary p-2 fw-bold' style={{height:'60px', width:'110px', borderRadius:'27px'}}>Submit</button>
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
