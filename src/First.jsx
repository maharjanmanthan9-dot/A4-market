import { Link } from 'react-router-dom'

const First = () => {
  return (
    <>
      <h5 className="bg-success text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iste?</h5>
      <Link to={'/'}>Go to home page</Link>
    </>
  )
}

export default First
