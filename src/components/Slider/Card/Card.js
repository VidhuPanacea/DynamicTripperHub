import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Card = ({ img, tittle, pkg }) => {
  const navigate = useNavigate()
  const navigateToPage = () => {
    alert(1)
    navigate("/detailed")
  }
  return (

    <div className='banner-image' >
      <figure>
        <Link params={{ pkg: pkg }}  to="/detailed" state={{ pkg: pkg }} >
          <img src={img} alt={tittle} />
        </Link>
      </figure>
    </div>


  )
}

export default Card