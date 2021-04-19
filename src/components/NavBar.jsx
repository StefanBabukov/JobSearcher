import React, {useState} from 'react';
 
const NavBar = (props)=>{
    return(
        <nav class='navbar'>
            <a href='/'>Home</a>
            <a href='/paycalc'>Pay Calculator</a>
            <a href='/jobinfo'>Job Information</a>
            <a href='/aboutus'>About us</a>
        </nav>
    )
}
export default NavBar;