import React from 'react'

const About = () => {
  return (
    <>
              <div class=" d-lg-flex  justify-content-evenly align-items-center flex-wrap p-4" id='about'>
            <div class="col-lg-2  mx-2 me-5" id="first">
                <img src="./images/machine.jpg" alt="" width="100%" height="100%" />
                <div class="text">
                    <p>Up to 20% Discount</p>
                    <h3>Essential Tools</h3>
                    <div class="blogtext">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="table-secondary">BLOG CATEGORIES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="fw-light table-primary">Vestibulum consequat</th>

                                </tr>
                                <tr>
                                    <th scope="row" class="fw-light table-primary">Vestibulum consequat</th>

                                </tr>
                                <tr>
                                    <th scope="row" class="fw-light table-primary">Vestibulum consequat</th>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div class="col-lg-3 " id="second">
                <h2>ABOUT US</h2>
                <h5 class="text-secondary">About us <br />Our Company</h5>
                <br />
                <p class="fw-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolores quod eius iusto? Adipisci, autem.</p>
                
                <p class="text-secondary fw-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione voluptatum saepe, labore, recusandae consectetur minima quas voluptatem architecto beatae maxime officiis qui sit veritatis.</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum.</p>
            </div>
            <div class="col-lg-3" id="third">
                <h3 class="text-secondary"> Our Team</h3>
                <img src="/images/house.jpg" alt="" width="100%"/>
                <p class="fw-bold text-justify ms-5">Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestiae saepe dolore odit? Dolor architecto placeat voluptatem animi repudiandae fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nam.</p>
            </div>
            <div class="col-lg-3" id="fourth">
                <h3 class="text-secondary">Testimontals</h3>
                <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil odio fuga dolore eum, nisi veritatis mollitia dolorem voluptatem similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corporis.</p>
                <p class="fw-semibold">Lorem ipsum dolor sit amet.</p>
                <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero eos consequuntur facere ipsam laudantium soluta autem minus enim nesciunt.</p>
            </div>
        </div>
    </>
  )
}

export default About
