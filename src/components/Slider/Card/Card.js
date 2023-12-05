import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Card = ({ photo, tittle, pkg }) => {
  const navigate = useNavigate()

  return (
    <Link to={`/packages/${pkg.path}`} state={{ pkg: pkg }} >
      <div className='banner-image' style={{}} >
        <img src={pkg.photo} alt="" >

        </img>
        <p className='banner-text'>
        <span className='banner-title'>{pkg.title}</span>

          {pkg.name}
        </p>
      </div>

    </Link>
  )
}

export default Card