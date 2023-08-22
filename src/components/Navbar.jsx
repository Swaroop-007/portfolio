import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className='Container'>
      <div className='Navbar' style={{color:"#4560c1",textDecoration:"underline "}}>
      <Link  to="main" smooth={true}  duration={300} >
            Swaroop Pandurangi
        </Link>
      </div>
      <div className='NavbarMenu'>
      
        <button className='menu'>
          <Link  to="about" smooth={true}  duration={500} >
            About
          </Link>
        </button>
      
        <button className='menu'>
          <Link  to="skills" smooth={true}  duration={500} >
            Skills
          </Link>
        </button>
       
      
        <button className='menu'>
            <Link  to="projects" smooth={true}  duration={500} >
              Projects
            </Link>
        </button>
       
        <button className='menu'>
            <Link  to="contact" smooth={true}  duration={500} >
              Contact
            </Link>
        </button>
        
      </div>
    </div>
  )
}

export default Navbar