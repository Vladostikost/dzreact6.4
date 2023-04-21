import React from 'react'
import { Link } from 'react-router-dom'

const Hexashop = () => {
  return (
    <div className='Hexeshop'>
        <Link to="/"><span className='spanHome'>Home</span> </Link>
        <Link to="/Men"><span className='spanMen'>Men's</span> </Link>
        <Link to="/Women"><span className='spanWomen'>Women's</span> </Link>
        <Link to="/Kid"><span className='spanKid'>Kid's</span> </Link>
        <Link to="/About"><span className='spanAbout'>About Us</span> </Link>
        <Link to="/Contact"><span className='spanContact'>Contact Us</span> </Link>

    </div>
  )
}

export default Hexashop