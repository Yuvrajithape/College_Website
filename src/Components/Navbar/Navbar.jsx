import React from 'react';
import './Navbar.css';
import {useState , useEffect} from 'react'
import Logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

function Navbar(){
    const [Sticky , setSticky] = useState(false);
    console.log(Sticky)
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        window.scrollY > 100 ? setSticky(true) : setSticky(false) ;
      })
    }, []);
    
    const[value , setvalue] = useState(false);
    const toggelChange = ()=>{
        value ? setvalue(false): setvalue(true);
    }

    return (
      <div className={`${value ? '' : 'hide-bar'}`}> 
           <nav className = {`container ${Sticky ? 'dark-nav' : '' }`}>
             <img src = {Logo} alt="logo" className = 'logo'/>
             <ul>
            <li><Link to = 'hero' smooth = {true} offset = {-260} durution = {500}> Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} durution={500}> Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} durution={500}> About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} durution={500}> Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} durution={500}> Testimonials</Link></li>
            <li> <button className='btn'><Link to='contact' smooth={true} offset={-260} durution={500}> Contact us</Link></button></li> 
             </ul>
             <img src = {menu_icon} className = 'menu_icon' alt = 'menu' onClick = {toggelChange}/>
           </nav>
        </div>


    )
}
export default Navbar;