import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';

function Navbar(){
    return (
        <>
           <nav className = 'container'>
             <img src = {Logo} alt="logo" className = 'logo'/>
             <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About US</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li> <button className= 'btn'>Contact Us</button></li> 
             </ul>
           </nav>
        </>


    )
}
export default Navbar;