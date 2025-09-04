import react from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png';

function Navbar(){
    return (
        <>

           <nav>
             <img src = {Logo} alt="logo"/>
             <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About US</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
               



                
             </ul>
           </nav>
        </>


    )
}
export default Navbar;