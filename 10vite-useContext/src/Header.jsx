import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <h2>Shopping</h2>

        <nav>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/first">First</Link></li>
             <li><Link to="/second">Second</Link></li>
              
        </nav>
    </div>
  )
}

export default Header;