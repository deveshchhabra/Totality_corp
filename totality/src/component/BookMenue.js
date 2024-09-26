import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../constants'


const BookMenue = () => {
  const { id0, id1 } = useParams()
  const res = Data.find(data => data[id0.toLocaleLowerCase()])[
    id0.toLocaleLowerCase()
  ]
  const rt1 = res.find(obj => obj.id == id1)
  
  return (
    <>
        <div className='outeralign'>
    <div  className='card-price'>
    <img
    className='image'
          alt='home'
          src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/37/76/02/delhi-haat-janakpuri.jpg?w=1200&h=1200&s=1'
        />
<h4>{rt1.category}</h4>
<h4>{rt1.title}</h4>


          <h4>{rt1.location + ','+rt1.state}</h4>
          <h4>{rt1.features.near+'-->'+rt1.features.distance}</h4>

          <h4>{rt1.type}</h4>
    </div>
        <div className='card1'>
          <h4>
            {'₹' + rt1.price.toLocaleString()}
            {'/month'}
          </h4>
          <label for='date'>Select Date:</label>
          <input type='date' id='date' name='date' />
          <br />
          <label for='date'>end Date:</label>
          <input type='date' id='date' name='date' />
          <button >Book+</button>
        </div>
      </div>
    </>
  )
}

export default BookMenue
