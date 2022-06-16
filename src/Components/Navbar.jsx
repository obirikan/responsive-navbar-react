import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [click,setClick]=useState(false)

const handle=()=>setClick(!click)
const closemobile=()=>setClick(false)
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
         <Link to='/' className='navbar-logo'>
            Oberry<i className='fab fa-typo3'></i>
         </Link>
         <div className='menu-icon'>
             <i className={click?'fa-solid fa-bars':'fa-solid fa-xmark'} onClick={handle}></i>
         </div>
         <ul className={click?'nav-menu active':'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closemobile}>
                    home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closemobile}>
                    services
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closemobile}>
                    products
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-links-mobile" onClick={closemobile}>
                    sign up
                </Link>
            </li>
         </ul>
      </div>
    </nav>
  )
}

export default Navbar