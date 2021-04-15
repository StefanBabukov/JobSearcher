import React, {useState} from 'react';
 
const NavBar = (props)=>{
    const [opened, setOpened] = useState(false)
    return(
        <div class='sideNavbar'>
            <a href='/'>Home</a>
            <a href='/paycalc'>Pay Calculator</a>
            <a href='/jobinfo'>Job Information</a>
            <a href='/aboutus'>About us</a>
            
        </div>
    )
}
export default NavBar;