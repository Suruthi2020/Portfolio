import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'
import img from './assests/A.png';
function Navbar() {
    // const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = function () {
      var items = document.querySelector('.toggleButton');
      if (items.style.display === 'flex') {
          items.style.display = 'none';
      } else {
          items.style.display = 'flex';
      }
  }
    return (
      <nav className='navbar'>
        <img id='img' src={img} alt={'error'} width='180px' height='180px' />
        <div className='logoname'>
          <h1 id='fname'>SURUTHI VIJAYAN</h1>
          <div id='line'></div>
          <p id='pname'><i>PORTFOLIO</i></p>
        </div>
        <div id='nav' >
          <button className='hamburger' onClick={toggleNavbar}>☰</button>
          <div className='toggleButton'>
          <Link className='nav' to='/' >Home</Link>
          <Link className='nav' to='/academic'>Academic</Link>
          <Link className='nav' to='/project'>Projects</Link>
          <Link className='nav' to='/contact' >Contact</Link>
          <Link className='nav' to='/technical' >Technicalskills</Link>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar