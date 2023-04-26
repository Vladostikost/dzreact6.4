import React from 'react'
import { Link } from 'react-router-dom'

const Hexashop = () => {
  return (
    <div className='Hexeshop'>
      <text className='Hexashop'/>
      <h1>HEXASHOP</h1>
        <p>ONLINE SHOPPING</p>
        <img className='imglog' src="https://previews.123rf.com/images/arbuzu/arbuzu1610/arbuzu161000022/67481667-letter-h-logo-icon-design-template-elements.jpg" alt="" />
        <Link to="/"><span className='spanHome'>Home</span> </Link>
        <Link to="/Men"><span className='spanMen'>Men's</span> </Link>
        <Link to="/Women"><span className='spanWomen'>Women's</span> </Link>
        <Link to="/Kid"><span className='spanKid'>Kid's</span> </Link>
        <Link to="/About"><span className='spanAbout'>About Us</span> </Link>
        <Link to="/Contact"><span className='spanContact'>Contact Us</span> </Link>
        <Link to="/Faq"> <span className='Faq'>Faq</span> </Link>

    </div>
  )
}

export default Hexashop