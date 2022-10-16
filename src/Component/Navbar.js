import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
     <NavLink  exact activeClassName='active_class' to="/">View</NavLink>
    <NavLink   activeClassName='active_class' to="/home">Home</NavLink>
    <NavLink   activeClassName='active_class' to="/about">About</NavLink>
    <NavLink   activeClassName='active_class' to="/services">Services</NavLink>
    <NavLink  activeClassName='active_class' to="/contact">Contact</NavLink>
    </div>
  )
}
export default Navbar;
