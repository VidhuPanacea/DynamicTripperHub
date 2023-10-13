import React from 'react'
import './Travellers.css'
import Cards from './Card/Cards'

const Travellers = () => {
  return (
    <div className='traveller-main-container'>
            <h1 className='traveller-vacation-tittle'>VACATION FOR ALL</h1>
            <h1 className='traveller-tittle'>Travellers</h1>
            
            <div className='Traveller-container'>
               <Cards/>
               <Cards/>
               <Cards/>
               <Cards/>
            </div>
    </div>
  )
}

export default Travellers