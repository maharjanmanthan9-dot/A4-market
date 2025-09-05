import React from 'react'

const Slider = () => {
    return (
        <>
            <div classNameName="banner my-5" id="banner">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/banner1.jpg" className="w-100" height={'100%'} alt="banner" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/banner2.jpg" className="w-100" height={'100%'}  alt="banner" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/banner3.jpg" className="w-100" height={'100%'}  alt="banner" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
        </>
    )
}

export default Slider
