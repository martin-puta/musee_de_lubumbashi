import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';



function Navbar() {
const [isMobile, setIsMobile] = useState(false)
  return (
       <nav className='navbar'>
            <h3 className="logo">Logo</h3>
         <ul className={isMobile? 'nav-link-Mobile': 'nav-link'}
         onClick={()=> setIsMobile(false)}>
           < Link to="/" className='Home'>
                <li>Accueil</li>
             </Link>
             < Link to="/About" className='About'>
                <li>Collections</li>
             </Link>
             < Link to="/Skils" className='skils'>
                <li>Événements</li>
             </Link>
             < Link to="/Contacts" className='contacts'>
                <li>À propos</li>
             </Link>
             < Link to="/Signup" className='signUp'>
                <li>Sign Up</li>
             </Link>
         </ul>
         <button className='Mobile-menu-icon'
         onClick={()=> setIsMobile(!isMobile)}>
              {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>

       </nav>
  )
}

export default Navbar