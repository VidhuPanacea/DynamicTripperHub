import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Card = ({ img, tittle, pkg }) => {
  const navigate = useNavigate()

  return (
    <Link to= {`/packages/${pkg.destinations}`} state={{ pkg: pkg }} >
      <div className='banner-image' style={{}} >
        <img src={img} alt="" >
          
        </img>
        <p className='banner-text'>
            {pkg.name}
          </p>
      </div>

    </Link>
  )
}

export default Card