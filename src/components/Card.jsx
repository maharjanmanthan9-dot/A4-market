import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card shadow border-dark rounded-3 my-3 overflow-hidden position-relative m-auto">
                <div className="image">
                <a href={`/productdetails/${props.data.id}`}>
                <img src={props.data.thumbnail} className="card-img-top" alt={props.data.thumbnail}></img>
                </a>
                </div>
                <small className='position-absolute badge fs-6' style={{top: '15px', right: '-5px', background:'#0077ff'}}>
                    {/* {
                            props.data.tags.length >1 ? props.data.tags[1] : props.data.tags
                    } */}
                            </small>

                <div className="card-body p-2 border-top">
                    <small className="text-secondary ">{props.data.category}</small>
                    <h5 className="card-title" title={props.data.title} style={{height: '15px'}}>{props.data.title.slice(0,18)} 
                        {/* {
                            props.data.title.length>17?'...' :' '
                        } */}
                        </h5>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p className="card-text fw-bold my-0" style={{color: '#ff0022'}}>${props.data.price.marketvalue }</p>
                        <a href={`/productdetails/${props.data.id}`} className="px-2 btn fw-bold " id='view' style={{color: '#bd5b00'}}> View More <i className="bi bi-arrow-right"></i></a>

                    </div>
                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 1sec ago</small></p> */}
                </div>
            </div>
        </>
    )
}

export default Card
