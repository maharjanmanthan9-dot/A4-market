import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

const Rating = (props) => {
    const rating = props.rate
    let stars = []
    for(let i=1;i<=5;i++){
        if(i <= rating){
            stars.push(<FaStar />)
        } 
        else if ( i <= Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<FaStarHalfAlt/>)
        }
        else{
            stars.push(<FaRegStar />)
        }

    }
  return (
    <>
      <p className='text-warning fs-5'>{stars}</p>
    </>
  )
}

export default Rating
