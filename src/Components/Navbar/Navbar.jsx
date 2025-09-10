import React from 'react';
import './Navbar.css';
import {useState , useEffect} from 'react'
import Logo from '../../assets/logo.png';

function Navbar(){
    const [Sticky , setSticky] = useState(false);
    console.log(Sticky)
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        window.scrollY > 100 ? setSticky(true) : setSticky(false) ;
      })
    }, []);

    return (
        <>
           <nav className = {`container ${Sticky ? 'dark-nav' : '' }`}>
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