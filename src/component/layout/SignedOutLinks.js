import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return ( 
       <ul className='right'>
           <li ><NavLink to='/signup' className='text-light'>SignUp</NavLink></li>
           <li><NavLink to='/signin' className='text-light'>Login</NavLink></li>
       </ul>
     );
}
 
export default SignedOutLinks;