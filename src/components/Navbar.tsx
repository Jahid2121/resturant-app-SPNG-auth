import { useUserStore } from '@/store/useUserStore';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const {user, logoutUser} = useUserStore((state) => ({
    user: state.user, 
    logoutUser: state.logoutUser
  }))
  console.log(user);

  const handleLogout = () => {
    logoutUser()
  }
  if(user) {
    console.log('we have user');
  }
  else {
    console.log('no user found');
  }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      <Link href={"/"}>Home</Link>
      <Link href="/register">Register</Link>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <a onClick={handleLogout} className="btn">Logout</a> :  <a className="btn">Login</a>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;